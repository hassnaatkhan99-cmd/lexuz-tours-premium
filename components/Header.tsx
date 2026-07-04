"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppButton } from "./Button";
import { SocialContactLinks } from "./SocialContactLinks";

const nav = [
  ["Home", "/"],
  ["Public Trips", "/public-trips"],
  ["Destinations", "/destinations"],
  ["Price List", "/price-list"],
  ["Corporate", "/corporate-tours"],
  ["University", "/university-tours"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-white/95 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Lexuz Tours home">
          <Image src="/logo-lexuz-white-20260627.png" alt="Lexuz Tours & Adventures logo" width={64} height={64} className="h-14 w-14 rounded-full bg-white object-contain" priority />
          <div className="leading-tight">
            <strong className="block text-lg font-black uppercase text-forest-900">Lexuz Tours</strong>
            <span className="text-xs font-black uppercase text-neutral-700">& Adventures</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-bold lg:flex">
          {nav.map(([label, href]) => <Link key={href} href={href} className="hover:text-forest-700">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <SocialContactLinks />
          <WhatsAppButton />
        </div>
        <div className="hidden lg:block xl:hidden"><WhatsAppButton /></div>
        <button className="focus-ring rounded-md border border-forest-900/10 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open ? (
        <nav className="grid gap-1 border-t border-forest-900/10 bg-white p-4 text-sm font-bold lg:hidden">
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 hover:bg-forest-50">{label}</Link>)}
          <div className="px-3 py-2"><SocialContactLinks /></div>
          <WhatsAppButton />
        </nav>
      ) : null}
    </header>
  );
}
