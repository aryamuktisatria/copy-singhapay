import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validation functions
const validateName = (name: string): string | null => {
  if (!name.trim()) return 'Name is required';
  if (/[0-9]/.test(name)) return 'Name should not contain numbers';
  if (name.length < 2) return 'Name should be at least 2 characters long';
  return null;
};

const validateEmail = (email: string): string | null => {
  if (!email.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return null;
};

const validateCompanyName = (companyName: string): string | null => {
  if (!companyName.trim()) return 'Company name is required';
  if (companyName.length < 2) return 'Company name should be at least 2 characters long';
  return null;
};

const validatePhone = (phone: string): string | null => {
  if (!phone.trim()) return 'Phone is required';
  const phoneRegex = /^\+?[0-9\s\-\(\)]{10,}$/;
  if (!phoneRegex.test(phone)) return 'Please enter a valid phone number';
  return null;
};

const validateMessage = (message: string): string | null => {
  if (!message.trim()) return 'Message is required';
  if (message.length > 300) return 'Message should not exceed 300 characters';
  return null;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, companyName, phone, message, recaptchaToken } = body; // Menerima recaptchaToken

    // Server-side validation
    const validationErrors = {
      name: validateName(name),
      email: validateEmail(email),
      companyName: validateCompanyName(companyName),
      phone: validatePhone(phone),
      message: validateMessage(message)
    };

    const hasErrors = Object.values(validationErrors).some(error => error !== null);
    
    if (hasErrors) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationErrors
        },
        { status: 400 }
      );
    }
    
    // ----------------------------------------------------------------------
    // 1. VERIFIKASI reCAPTCHA v3
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
    
    const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        { method: 'POST' }
    );
    
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) { // Threshold 0.5
        console.warn('reCAPTCHA failed:', recaptchaData);
        return NextResponse.json(
            { error: 'reCAPTCHA verification failed. Score: ' + recaptchaData.score },
            { status: 403 } // Forbidden
        );
    }

    // ----------------------------------------------------------------------
    // 2. KONFIGURASI DAN KIRIM EMAIL
    // ----------------------------------------------------------------------
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD || !process.env.SMTP_TO) {
      console.error('Missing email configuration environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured properly' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP connection failed:', error);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
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
                body { 
                    font-family: 'Arial', sans-serif; 
                    line-height: 1.6; 
                    color: #333; 
                    margin: 0; 
                    padding: 0; 
                    background-color: #f9f9f9;
                }
                .container { 
                    max-width: 600px; 
                    margin: 0 auto; 
                    background: #ffffff; 
                    border-radius: 12px; 
                    overflow: hidden;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }
                .header { 
                    background: linear-gradient(90deg, #EA5D28 0%, #FA921F 100%); 
                    padding: 30px; 
                    text-align: center; 
                    color: white;
                }
                .header h1 { 
                    margin: 0; 
                    font-size: 24px; 
                    font-weight: bold;
                }
                .content { 
                    padding: 30px;
                }
                .section { 
                    margin-bottom: 25px;
                }
                .section-title { 
                    color: #EA5D28; 
                    font-size: 18px; 
                    font-weight: bold; 
                    margin-bottom: 15px; 
                    border-bottom: 2px solid #f0f0f0; 
                    padding-bottom: 8px;
                }
                .info-grid { 
                    display: grid; 
                    grid-template-columns: 1fr 2fr; 
                    gap: 10px; 
                    margin-bottom: 10px;
                }
                .label { 
                    font-weight: bold; 
                    color: #666;
                }
                .value { 
                    color: #333;
                }
                .message-box { 
                    background: #f8f8f8; 
                    padding: 20px; 
                    border-radius: 8px; 
                    border-left: 4px solid #EA5D28; 
                    margin-top: 10px;
                }
                .footer { 
                    text-align: center; 
                    padding: 20px; 
                    background: #f5f5f5; 
                    color: #999; 
                    font-size: 12px;
                }
                @media (max-width: 600px) {
                    .info-grid { 
                        grid-template-columns: 1fr; 
                        gap: 5px;
                    }
                    .content { 
                        padding: 20px;
                    }
                }
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
                            <div class="label">Name:</div>
                            <div class="value">${name}</div>
                            
                            <div class="label">Email:</div>
                            <div class="value">${email}</div>
                            
                            <div class="label">Company Name:</div>
                            <div class="value">${companyName}</div>
                            
                            <div class="label">Phone:</div>
                            <div class="value">${phone}</div>
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">Message</div>
                        <div class="message-box">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                    </div>
                    
                    <div class="section">
                        <div class="section-title">reCAPTCHA Score</div>
                        <p>Score: <strong>${recaptchaData.score}</strong></p>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This email was sent from the SinghaPay contact form on ${new Date().toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</p>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        code: 'EMAIL_SEND_FAILED'
      },
      { status: 500 }
    );
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