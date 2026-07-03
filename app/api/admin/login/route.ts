import { NextResponse } from "next/server";
import { adminCookieName } from "@/lib/adminAuth";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = formData.get("password");
  const adminPassword = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.ADMIN_SESSION_SECRET;

  if (!adminPassword || !sessionSecret) {
    return NextResponse.json({ error: "Admin login is not configured." }, { status: 500 });
  }

  if (password !== adminPassword) {
    return NextResponse.json({ error: "Invalid password." }, { status: 401 });
  }

  const response = NextResponse.redirect(new URL("/admin", request.url));
  response.cookies.set(adminCookieName, sessionSecret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8
  });
  return response;
}
