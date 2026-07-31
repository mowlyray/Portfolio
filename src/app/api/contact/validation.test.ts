import { describe, expect, it } from "vitest";

import {
  escapeHtml,
  isHoneypotTriggered,
  validateContactPayload,
} from "./validation";

describe("validateContactPayload", () => {
  const validPayload = {
    name: "Test User",
    email: "test@example.com",
    subject: "Hello",
    message: "This is a test message.",
  };

  it("accepts a fully valid payload", () => {
    const result = validateContactPayload(validPayload);

    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data).toEqual(validPayload);
    }
  });

  it("rejects missing/empty fields", () => {
    const result = validateContactPayload({ ...validPayload, name: "" });

    expect(result).toEqual({
      valid: false,
      message: "All fields are required.",
    });
  });

  it("rejects non-string fields", () => {
    const result = validateContactPayload({ ...validPayload, email: 123 });

    expect(result.valid).toBe(false);
  });

  it("rejects an invalid email format", () => {
    const result = validateContactPayload({
      ...validPayload,
      email: "not-an-email",
    });

    expect(result).toEqual({
      valid: false,
      message: "Please provide a valid email address.",
    });
  });

  it("rejects fields that exceed the max length", () => {
    const result = validateContactPayload({
      ...validPayload,
      name: "a".repeat(101),
    });

    expect(result).toEqual({
      valid: false,
      message: "One or more fields are too long.",
    });
  });

  it("rejects a null/undefined payload", () => {
    expect(validateContactPayload(null).valid).toBe(false);
    expect(validateContactPayload(undefined).valid).toBe(false);
  });
});

describe("isHoneypotTriggered", () => {
  it("is false when the honeypot field is empty or absent", () => {
    expect(isHoneypotTriggered({})).toBe(false);
    expect(isHoneypotTriggered({ company: "" })).toBe(false);
    expect(isHoneypotTriggered({ company: "   " })).toBe(false);
  });

  it("is true when the honeypot field is filled in", () => {
    expect(isHoneypotTriggered({ company: "Acme Corp" })).toBe(true);
  });
});

describe("escapeHtml", () => {
  it("escapes HTML-significant characters", () => {
    expect(escapeHtml("<script>alert('xss')</script>")).toBe(
      "&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;"
    );
  });

  it("escapes ampersands and quotes", () => {
    expect(escapeHtml(`Tom & Jerry "quoted"`)).toBe(
      "Tom &amp; Jerry &quot;quoted&quot;"
    );
  });

  it("leaves plain text untouched", () => {
    expect(escapeHtml("Hello world")).toBe("Hello world");
  });
});
