import "server-only";

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const adminCookieName = "lexuz_admin_session";
const SESSION_SECONDS = 60 * 60 * 8;

type SessionPayload = { iat: number; exp: number; nonce: string; version: 1 };

function encode(value: string) {
  return Buffer.from(value).toString("base64url");
}

function signature(payload: string, secret: string) {
  return createHmac("sha256", secret).update(payload).digest("base64url");
}

function equalText(left: string, right: string) {
  const leftBytes = Buffer.from(left);
  const rightBytes = Buffer.from(right);
  return leftBytes.length === rightBytes.length && timingSafeEqual(leftBytes, rightBytes);
}

export function isValidAdminPassword(candidate: unknown) {
  const configured = process.env.ADMIN_PASSWORD;
  return typeof candidate === "string" && Boolean(configured) && equalText(candidate, configured || "");
}

export function createAdminSession() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("Admin session is not configured.");
  const now = Math.floor(Date.now() / 1000);
  const payload: SessionPayload = { iat: now, exp: now + SESSION_SECONDS, nonce: randomBytes(16).toString("hex"), version: 1 };
  const encoded = encode(JSON.stringify(payload));
  return { token: `${encoded}.${signature(encoded, secret)}`, maxAge: SESSION_SECONDS };
}

export function verifyAdminSession(token: string | undefined) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || !token) return false;
  const [encoded, suppliedSignature, extra] = token.split(".");
  if (!encoded || !suppliedSignature || extra || !equalText(suppliedSignature, signature(encoded, secret))) return false;
  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as SessionPayload;
    const now = Math.floor(Date.now() / 1000);
    return payload.version === 1 && Number.isInteger(payload.iat) && Number.isInteger(payload.exp) && payload.iat <= now + 60 && payload.exp > now && payload.exp - payload.iat <= SESSION_SECONDS;
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifyAdminSession(cookieStore.get(adminCookieName)?.value);
}
