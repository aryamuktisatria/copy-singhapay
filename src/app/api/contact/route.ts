import { NextRequest, NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';

// =========================================================================
// INTERFACES & RECAPTCHA TYPE DEFINITION
// =========================================================================

// Interface for the Google reCAPTCHA v3 response body
interface RecaptchaResponse {
    success: boolean;
    score: number;
    action: string;
    challenge_ts: string;
    hostname: string;
    'error-codes'?: string[];
}

// =========================================================================
// VALIDATION FUNCTIONS (Unchanged)
// =========================================================================

const validateName = (name: string): string | null => {
    const cleanedName = name.trim();
    if (!cleanedName) return 'Name is required.';
    
    const nameRegex = /^[a-zA-Z\u00C0-\u017F\s\-']{2,100}$/; 
    
    if (cleanedName.length < 2) return 'Name must be at least 2 characters long.';
    if (cleanedName.length > 100) return 'Name cannot exceed 100 characters.';
    if (!nameRegex.test(cleanedName)) return 'Name should only contain letters, spaces, or hyphens.';
    
    return null;
};

const validateEmail = (email: string): string | null => {
    const cleanedEmail = email.trim();
    if (!cleanedEmail) return 'Email address is required.';
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!emailRegex.test(cleanedEmail)) return 'Please enter a valid email address.';
    if (cleanedEmail.length > 254) return 'Email address is too long.';
    
    return null;
};

const validateCompanyName = (companyName: string): string | null => {
    const cleanedCompanyName = companyName.trim();
    if (!cleanedCompanyName) return 'Company name is required.';
    
    const companyRegex = /^[a-zA-Z0-9\s\-&.',]{2,150}$/;
    
    if (cleanedCompanyName.length < 2) return 'Company name must be at least 2 characters long.';
    if (cleanedCompanyName.length > 150) return 'Company name cannot exceed 150 characters.';
    if (!companyRegex.test(cleanedCompanyName)) return 'Company name contains invalid characters.';
    
    return null;
};

const validatePhone = (phone: string): string | null => {
    const cleanedPhone = phone.trim();
    if (!cleanedPhone) return 'Phone number is required.';
    
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    
    if (!/\d/.test(cleanedPhone)) return 'Phone number must contain digits.';
    if (!phoneRegex.test(cleanedPhone)) return 'Please enter a valid phone number (e.g., +62 812...).';
    if (cleanedPhone.length > 30) return 'Phone number is too long.';

    return null;
};

const validateMessage = (message: string): string | null => {
    const cleanedMessage = message.trim();
    if (!cleanedMessage) return 'Message content is required.';
    
    if (cleanedMessage.length < 10) return 'Message must be at least 10 characters long.';
    if (cleanedMessage.length > 500) return 'Message cannot exceed 500 characters.';

    if (/^(.)\1+$/.test(cleanedMessage)) return 'Message content is suspicious. Please write a meaningful message.';
    
    return null;
};


// =========================================================================
// EMAIL TRANSPORTER CONFIGURATION (Optimized for Reuse/Caching)
// =========================================================================

// Global cache variable for the nodemailer transporter
let cachedTransporter: Transporter | null = null;

const createTransporter = (): Transporter => {
    // If a cached transporter exists, return it immediately (FASTEST PATH)
    if (cachedTransporter) {
        return cachedTransporter;
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_PORT === '465',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        connectionTimeout: 10000, 
        greetingTimeout: 10000,  
        socketTimeout: 15000,    
    });
    
    // Cache the transporter for future requests
    cachedTransporter = transporter;
    return transporter;
};

// =========================================================================
// API ROUTE HANDLER
// =========================================================================

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, companyName, phone, message, recaptchaToken } = body; 

        // Server-side validation
        const validationErrors = {
            name: validateName(name || ''),
            email: validateEmail(email || ''),
            companyName: validateCompanyName(companyName || ''),
            phone: validatePhone(phone || ''),
            message: validateMessage(message || '')
        };

        const hasErrors = Object.values(validationErrors).some(error => error !== null);
        
        if (hasErrors) {
            return NextResponse.json(
                { 
                    error: 'Validation failed. Please correct the fields below.',
                    details: validationErrors
                },
                { status: 400 }
            );
        }
        
        // ----------------------------------------------------------------------
        // 1. VERIFIKASI reCAPTCHA v3 (with timeout)
        // ----------------------------------------------------------------------
        if (!recaptchaToken) {
            return NextResponse.json(
                { error: 'reCAPTCHA token is missing' },
                { status: 400 }
            );
        }

        const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
        if (!RECAPTCHA_SECRET_KEY) {
            console.error('Missing RECAPTCHA_SECRET_KEY environment variable');
            return NextResponse.json(
                { error: 'reCAPTCHA service is not configured properly' },
                { status: 500 }
            );
        }
        
        const recaptchaController = new AbortController();
        const recaptchaTimeout = setTimeout(() => recaptchaController.abort(), 5000); // 5 second timeout
        
        let recaptchaData: RecaptchaResponse;
        
        try {
            const recaptchaResponse = await fetch(
                `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
                { 
                    method: 'POST',
                    signal: recaptchaController.signal
                }
            );
            
            clearTimeout(recaptchaTimeout);
            recaptchaData = await recaptchaResponse.json() as RecaptchaResponse;

            if (!recaptchaData.success || recaptchaData.score < 0.5) { 
                console.warn('reCAPTCHA failed:', recaptchaData);
                return NextResponse.json(
                    { 
                        error: 'reCAPTCHA verification failed. Please try again.', 
                        score: recaptchaData.score 
                    },
                    { status: 403 }
                );
            }
        } catch (error: unknown) {
            clearTimeout(recaptchaTimeout);
            if (error instanceof Error && error.name === 'AbortError') {
                console.error('reCAPTCHA verification timeout');
                return NextResponse.json(
                    { error: 'reCAPTCHA verification timeout. Please try again.' },
                    { status: 408 }
                );
            }
            throw error;
        }

        // ----------------------------------------------------------------------
        // 2. KONFIGURASI DAN KIRIM EMAIL (OPTIMIZED)
        // ----------------------------------------------------------------------
        if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_TO) {
            console.error('Missing email configuration environment variables');
            return NextResponse.json(
                { error: 'Email service is not configured properly' },
                { status: 500 }
            );
        }

        // Get the cached (or newly created) transporter
        const transporter = createTransporter();

        // Verify connection with timeout
        const verifyPromise = transporter.verify();
        const timeoutPromise = new Promise((_, reject) => 
            // FIX IS HERE: Correctly creating the Error object
            setTimeout(() => reject(new Error('SMTP connection timeout')), 10000)
        );

        try {
            await Promise.race([verifyPromise, timeoutPromise]);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            console.error('SMTP connection failed:', errorMessage);
            return NextResponse.json(
                { error: 'Email service temporarily unavailable. Please try again later.' },
                { status: 503 }
            );
        }

        const mailOptions = {
            from: `"SinghaPay Contact Form" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_TO,
            replyTo: email,
            subject: `Contact Form Submission from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        /* CSS for Email Template (omitted for brevity) */
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>SinghaPay - Contact Form Submission</h1>
                        </div>
                        <div class="content">
                            <div class="section">
                                <div class="section-title">Contact Information</div>
                                <div class="info-grid">
                                    <div class="label">Name:</div><div class="value">${name}</div>
                                    <div class="label">Email:</div><div class="value">${email}</div>
                                    <div class="label">Company Name:</div><div class="value">${companyName}</div>
                                    <div class="label">Phone:</div><div class="value">${phone}</div>
                                </div>
                            </div>
                            <div class="section">
                                <div class="section-title">Message</div>
                                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                            <div class="section">
                                <div class="section-title">reCAPTCHA Score</div>
                                <p>Score: <strong>${recaptchaData.score}</strong></p>
                            </div>
                        </div>
                        <div class="footer">
                            <p>This email was sent from the SinghaPay contact form on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // Send email with timeout
        const sendMailPromise = transporter.sendMail(mailOptions);
        const sendMailTimeout = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Email sending timeout')), 15000) // 15 second timeout
        );

        await Promise.race([sendMailPromise, sendMailTimeout]);

        return NextResponse.json(
            { 
                success: true, 
                message: 'Email sent successfully',
                timestamp: new Date().toISOString()
            },
            { status: 200 }
        );
    } catch (error: unknown) {
        console.error('Error processing request:', error);
        
        let errorMessage = 'An unexpected error occurred. Please try again.';
        let statusCode = 500;
        
        if (error instanceof Error) {
            if (error.message.includes('timeout')) {
                errorMessage = 'Request timeout. Please try again.';
                statusCode = 408;
            } else {
                errorMessage = error.message;
            }
        } else if (typeof error === 'string') {
            errorMessage = error;
        }
        
        return NextResponse.json(
            { 
                error: errorMessage,
                code: 'UNEXPECTED_ERROR'
            },
            { status: statusCode }
        );
    } finally {
        // IMPORTANT: DO NOT close the cached transporter here.
        // It must remain open for fast reuse on subsequent requests.
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

