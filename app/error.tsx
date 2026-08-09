"use client";

import Link from "next/link";
import { Home, MessageCircle, RefreshCw } from "lucide-react";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="cinematic-band py-20" role="alert" aria-live="assertive">
      <div className="container-page">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-white/70 bg-white/90 p-8 text-center shadow-ds3 backdrop-blur md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">Something went wrong</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-lexuzNeutral-100 md:text-5xl">We couldn’t load this page</h1>
          <p className="mx-auto mt-5 max-w-lg leading-7 text-lexuzNeutral-60">Please try again. If the issue continues, return home or contact the Lexuz team for help.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd bg-brand-primary px-5 py-3 font-black text-white shadow-ds1 hover:bg-brand-primaryHover">
              <RefreshCw size={18} aria-hidden="true" />
              Try again
            </button>
            <Link href="/" className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd border border-lexuzNeutral-line bg-white px-5 py-3 font-black text-brand-primary hover:bg-brand-secondary">
              <Home size={18} aria-hidden="true" />
              Home
            </Link>
            <Link href="/contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd border border-lexuzNeutral-line bg-white px-5 py-3 font-black text-brand-primary hover:bg-brand-secondary">
              <MessageCircle size={18} aria-hidden="true" />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
