import "server-only";

import { createHmac } from "node:crypto";
import { getSupabaseAdmin, hasSupabaseConfig } from "@/lib/supabase/server";

type RateLimitOptions = {
  namespace: string;
  limit: number;
  windowSeconds: number;
};

type LocalEntry = { count: number; resetAt: number };
const localFallback = new Map<string, LocalEntry>();

function clientAddress(request: Request) {
  const vercelAddress = request.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim();
  if (vercelAddress) return vercelAddress;
  if (process.env.NODE_ENV !== "production") {
    return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  }
  return "unknown";
}

function opaqueKey(request: Request, namespace: string) {
  const secret = process.env.RATE_LIMIT_SECRET || process.env.ADMIN_SESSION_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY || "lexuz-local-rate-limit";
  return createHmac("sha256", secret).update(`${namespace}:${clientAddress(request)}`).digest("hex");
}

function consumeLocal(key: string, limit: number, windowSeconds: number) {
  const now = Date.now();
  const existing = localFallback.get(key);
  const entry = !existing || existing.resetAt <= now ? { count: 0, resetAt: now + windowSeconds * 1000 } : existing;
  entry.count += 1;
  localFallback.set(key, entry);
  return { allowed: entry.count <= limit, remaining: Math.max(0, limit - entry.count), resetAt: entry.resetAt };
}

export async function consumeRateLimit(request: Request, options: RateLimitOptions) {
  const key = opaqueKey(request, options.namespace);

  if (hasSupabaseConfig()) {
    const { data, error } = await getSupabaseAdmin().rpc("consume_rate_limit", {
      p_key: key,
      p_limit: options.limit,
      p_window_seconds: options.windowSeconds
    });

    if (!error && Array.isArray(data) && data[0]) {
      return {
        allowed: Boolean(data[0].allowed),
        remaining: Number(data[0].remaining),
        resetAt: new Date(data[0].reset_at).getTime()
      };
    }

    console.warn("[Security] Database rate limiter unavailable; using instance-local fallback.", { namespace: options.namespace });
  }

  return consumeLocal(key, options.limit, options.windowSeconds);
}

export function rateLimitHeaders(result: { remaining: number; resetAt: number }) {
  return {
    "RateLimit-Remaining": String(result.remaining),
    "RateLimit-Reset": String(Math.ceil(result.resetAt / 1000)),
    "Retry-After": String(Math.max(1, Math.ceil((result.resetAt - Date.now()) / 1000)))
  };
}
