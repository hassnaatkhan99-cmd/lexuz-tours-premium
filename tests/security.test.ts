import { afterEach, describe, expect, it, vi } from "vitest";
import { createAdminSession, isValidAdminPassword, verifyAdminSession } from "@/lib/adminAuth";
import { createBookingReference, isBookingReference } from "@/lib/security/bookingReference";
import { consumeRateLimit } from "@/lib/security/rateLimit";

afterEach(() => vi.unstubAllEnvs());

describe("admin sessions", () => {
  it("signs, verifies, and rejects tampered sessions", () => {
    vi.stubEnv("ADMIN_PASSWORD", "correct horse battery staple");
    vi.stubEnv("ADMIN_SESSION_SECRET", "a-long-independent-session-signing-secret");
    expect(isValidAdminPassword("correct horse battery staple")).toBe(true);
    expect(isValidAdminPassword("wrong")).toBe(false);
    const { token } = createAdminSession();
    expect(verifyAdminSession(token)).toBe(true);
    expect(verifyAdminSession(`${token}x`)).toBe(false);
  });
});

describe("booking references", () => {
  it("creates opaque unique references", () => {
    const references = new Set(Array.from({ length: 100 }, createBookingReference));
    expect(references.size).toBe(100);
    expect([...references].every(isBookingReference)).toBe(true);
  });
});

describe("rate limiting", () => {
  it("rejects requests beyond an instance-local limit", async () => {
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "");
    vi.stubEnv("SUPABASE_SERVICE_ROLE_KEY", "");
    const request = new Request("http://localhost/api/test", { headers: { "x-forwarded-for": "192.0.2.10" } });
    const namespace = `test-${crypto.randomUUID()}`;
    expect((await consumeRateLimit(request, { namespace, limit: 1, windowSeconds: 60 })).allowed).toBe(true);
    expect((await consumeRateLimit(request, { namespace, limit: 1, windowSeconds: 60 })).allowed).toBe(false);
  });
});
