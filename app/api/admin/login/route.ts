import { NextResponse } from "next/server";
import { adminCookieName, createAdminSession, isValidAdminPassword } from "@/lib/adminAuth";
import { consumeRateLimit, rateLimitHeaders } from "@/lib/security/rateLimit";

export async function POST(request: Request) {
  const rateLimit = await consumeRateLimit(request, { namespace: "admin-login", limit: 5, windowSeconds: 15 * 60 });
  if (!rateLimit.allowed) {
    return NextResponse.json({ error: "Too many login attempts. Please try again later." }, { status: 429, headers: rateLimitHeaders(rateLimit) });
  }

  const formData = await request.formData();
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!adminPassword || !sessionSecret) {
    return NextResponse.json({ error: "Admin login is not configured." }, { status: 500 });
  }

  if (!isValidAdminPassword(password)) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  const session = createAdminSession();
  const response = NextResponse.redirect(new URL("/admin", request.url));
  response.cookies.set(adminCookieName, session.token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: session.maxAge
  });
  return response;
}
