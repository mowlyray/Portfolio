import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import {
  escapeHtml,
  isHoneypotTriggered,
  validateContactPayload,
} from "./validation";

// Simple in-memory rate limit: max 3 submissions per IP per 10 minutes.
// Resets on server restart/redeploy — acceptable for a low-traffic contact form.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const submissionsByIp = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (submissionsByIp.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  timestamps.push(now);
  submissionsByIp.set(ip, timestamps);

  return timestamps.length > RATE_LIMIT_MAX;
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

export async function POST(request: Request) {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(
        "Contact API misconfigured: EMAIL_USER/EMAIL_PASS env vars are missing."
      );

      return NextResponse.json(
        { success: false, message: "Contact form is temporarily unavailable." },
        { status: 500 }
      );
    }

    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot field: real users never fill this in (hidden via CSS in the form).
    if (isHoneypotTriggered(body ?? {})) {
      return NextResponse.json({ success: true, message: "Message sent successfully." });
    }

    const result = validateContactPayload(body);

    if (!result.valid) {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${escapeHtml(subject)}`,
      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${escapeHtml(name)}</p>

        <p><strong>Email:</strong> ${escapeHtml(email)}</p>

        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>

        <p><strong>Message:</strong></p>

        <p>${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}
