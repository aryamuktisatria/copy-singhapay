import { NextRequest, NextResponse } from "next/server";
import nodemailer, { Transporter } from "nodemailer";

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action?: string;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
}

// ==============================
// Validation helpers
// ==============================
const validateName = (name: string): string | null => {
  const cleaned = name.trim();
  if (!cleaned) return "Name is required.";
  // Allows letters, common diacritics, spaces, hyphens, and apostrophes
  const regex = /^[a-zA-Z\u00C0-\u017F\s\-']{2,100}$/;
  if (!regex.test(cleaned)) return "Name should only contain letters, spaces, hyphens, or apostrophes.";
  return null;
};

const validateEmail = (email: string): string | null => {
  const cleaned = email.trim();
  if (!cleaned) return "Email address is required.";
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!regex.test(cleaned)) return "Please enter a valid email address.";
  return null;
};

const validateCompanyName = (val: string): string | null => {
  const cleaned = val.trim();
  if (!cleaned) return "Company name is required.";
  // **Updated regex:** Now allows forward slash (/) for robustness (e.g., "Acme/Subsidiary")
  const regex = /^[a-zA-Z0-9\s\-&.',/]{2,150}$/; 
  if (!regex.test(cleaned)) return "Company name contains invalid characters.";
  return null;
};

const validatePhone = (phone: string): string | null => {
  const cleaned = phone.trim();
  if (!cleaned) return "Phone number is required.";
  // Allows optional '+' at start, followed by 10+ digits, spaces, hyphens, or parentheses
  const regex = /^\+?[\d\s\-\(\)]{10,}$/;
  if (!regex.test(cleaned)) return "Please enter a valid phone number.";
  return null;
};

const validateMessage = (msg: string): string | null => {
  const cleaned = msg.trim();
  if (!cleaned) return "Message content is required.";
  if (cleaned.length < 10) return "Message must be at least 10 characters long.";
  // Checks for suspicious patterns like 'aaaaaa...'
  if (/^(.)\1{9,}$/.test(cleaned)) return "Message content is suspicious (too repetitive).";
  return null;
};

// ==============================
// Cached Nodemailer transporter
// ==============================
let cachedTransporter: Transporter | null = null;

const createTransporter = (): Transporter => {
  if (cachedTransporter) return cachedTransporter;

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD) {
    throw new Error("Missing SMTP configuration in environment variables");
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: SMTP_PORT === "465",
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  cachedTransporter = transporter;
  return transporter;
};

// ==============================
// Main POST Handler
// ==============================
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, companyName, phone, message, recaptchaToken } = body;

    // --- Validation ---
    const errors = {
      name: validateName(name || ""),
      email: validateEmail(email || ""),
      companyName: validateCompanyName(companyName || ""),
      phone: validatePhone(phone || ""),
      message: validateMessage(message || ""),
    };

    if (Object.values(errors).some((e) => e !== null)) {
      // *** IMPORTANT DEBUGGING STEP ADDED ***
      // This will show you exactly which field failed in your Next.js server console.
      console.log("Validation Failed for Contact Form:", errors);
      // **************************************
      
      return NextResponse.json(
        { error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    // --- reCAPTCHA verification ---
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "reCAPTCHA token missing" },
        { status: 400 }
      );
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      console.error("Missing RECAPTCHA_SECRET_KEY");
      return NextResponse.json(
        { error: "Server reCAPTCHA key missing" },
        { status: 500 }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`;

    let verifyData: RecaptchaResponse;
    try {
      const res = await fetch(verifyUrl, { method: "POST" });
      verifyData = (await res.json()) as RecaptchaResponse;
    } catch (e) {
      console.error("reCAPTCHA verification failed:", e);
      return NextResponse.json(
        { error: "Failed to contact reCAPTCHA server" },
        { status: 502 }
      );
    }

    // Checking both success flag and score threshold
    if (!verifyData.success || (verifyData.score ?? 0) < 0.5) {
      console.warn("reCAPTCHA check failed:", verifyData);
      return NextResponse.json(
        { error: "Failed reCAPTCHA check", score: verifyData.score },
        { status: 403 }
      );
    }

    // --- Send email ---
    const { SMTP_TO, SMTP_USER } = process.env;
    if (!SMTP_TO) {
      console.error("Missing SMTP_TO in env");
      return NextResponse.json(
        { error: "Email destination not configured" },
        { status: 500 }
      );
    }

    const transporter = createTransporter();

    await transporter.sendMail({
      from: `"SinghaPay Contact Form" <${SMTP_USER}>`,
      to: SMTP_TO,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${companyName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
          <p><strong>reCAPTCHA Score:</strong> ${verifyData.score}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (err: unknown) {
    console.error("Error in contact route:", err);
    
    // Ensure err is handled as an Error instance
    if (err instanceof Error) {
      return NextResponse.json(
        { error: err.message },
        { status: 500 }
      );
    }

    // Fallback for unknown errors
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}

// --- Preflight (OPTIONS) handler ---
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
