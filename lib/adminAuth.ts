import { cookies } from "next/headers";

export const adminCookieName = "lexuz_admin_session";

export async function isAdminAuthenticated() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) return false;
  const cookieStore = await cookies();
  return cookieStore.get(adminCookieName)?.value === secret;
}
