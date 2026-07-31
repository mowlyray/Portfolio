export const MAX_LENGTHS = {
  name: 100,
  email: 200,
  subject: 150,
  message: 5000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ValidationResult =
  | { valid: true; data: ContactPayload }
  | { valid: false; message: string };

export function isHoneypotTriggered(payload: Record<string, unknown>) {
  const company = payload?.company;
  return typeof company === "string" && company.trim().length > 0;
}

export function validateContactPayload(payload: unknown): ValidationResult {
  const { name, email, subject, message } = (payload ?? {}) as Record<
    string,
    unknown
  >;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !subject.trim() ||
    !message.trim()
  ) {
    return { valid: false, message: "All fields are required." };
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    subject.length > MAX_LENGTHS.subject ||
    message.length > MAX_LENGTHS.message
  ) {
    return { valid: false, message: "One or more fields are too long." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return {
      valid: false,
      message: "Please provide a valid email address.",
    };
  }

  return { valid: true, data: { name, email, subject, message } };
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
