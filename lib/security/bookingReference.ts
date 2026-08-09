import { randomBytes } from "node:crypto";

export function createBookingReference() {
  return `LX-${randomBytes(12).toString("base64url").toUpperCase()}`;
}

export function isBookingReference(value: string) {
  return /^LX-[A-Z0-9_-]{16}$/i.test(value);
}
