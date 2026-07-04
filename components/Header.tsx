"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState } from "react";
import { company, whatsappUrl } from "@/data/company";

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

const contactActions = [
  {
    label: "Call Lexuz Tours",
    href: company.callHref,
    icon: Phone,
    className: "text-forest-800 hover:bg-forest-50 hover:text-forest-900"
  },
  {
    label: "WhatsApp Lexuz Tours",
    href: company.whatsappHref,
    icon: MessageCircle,
    className: "text-[#25D366] hover:bg-[#25D366]/10"
  },
  {
    label: "Follow Lexuz Tours on Instagram",
    href: company.instagram,
    icon: Instagram,
    className: "bg-[linear-gradient(135deg,#f58529,#dd2a7b,#8134af)] text-white hover:brightness-105"
  },
  {
    label: "Follow Lexuz Tours on Facebook",
    href: company.facebook,
    icon: Facebook,
    className: "text-[#1877F2] hover:bg-[#1877F2]/10"
  }
] as const;

function IconAction({ action, mobile = false }: { action: (typeof contactActions)[number]; mobile?: boolean }) {
  const Icon = action.icon;
  const external = action.href.startsWith("http");

  return (
    <a
      href={action.href}
      aria-label={action.label}
      title={action.label}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`focus-ring group grid h-11 w-11 shrink-0 place-items-center rounded-full border border-forest-900/10 bg-white shadow-[0_8px_24px_rgba(7,31,8,.08)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(7,31,8,.12)] ${action.className} ${mobile ? "h-10 w-10" : ""}`}
    >
      <Icon size={mobile ? 18 : 19} className="transition-transform group-hover:scale-105" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const bookMessage = "Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.";

  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-white/90 shadow-[0_8px_30px_rgba(7,31,8,.04)] backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] w-full max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 xl:px-8">
        <Link href="/" className="group flex min-w-0 shrink-0 items-center gap-2.5" aria-label="Lexuz Tours home">
          <Image src="/logo-lexuz-white-20260627.png" alt="Lexuz Tours & Adventures logo" width={56} height={56} className="h-12 w-12 rounded-full bg-white object-contain ring-1 ring-forest-900/10 transition-transform group-hover:scale-[1.03]" priority />
          <div className="leading-[1.02]">
            <strong className="block whitespace-nowrap text-[15px] font-black uppercase tracking-[.02em] text-forest-950 sm:text-base">Lexuz Tours</strong>
            <span className="block whitespace-nowrap text-[11px] font-black uppercase tracking-[.08em] text-neutral-600">& Adventures</span>
          </div>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-3 text-[13px] font-medium text-neutral-700 lg:flex xl:gap-5 xl:text-sm">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative whitespace-nowrap rounded-full px-2 py-2 hover:text-forest-900 after:absolute after:inset-x-2 after:bottom-1 after:h-px after:origin-center after:scale-x-0 after:bg-saffron-400 after:transition-transform hover:after:scale-x-100 xl:px-2.5"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {contactActions.map((action) => <IconAction key={action.label} action={action} />)}
          <a
            href={whatsappUrl(bookMessage)}
            target="_blank"
            rel="noreferrer"
            className="focus-ring ml-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-forest-900 px-5 py-3 text-sm font-black text-white shadow-[0_10px_28px_rgba(7,31,8,.16)] hover:-translate-y-0.5 hover:bg-forest-800"
          >
            <MessageCircle size={18} className="text-[#25D366]" />
            <span className="hidden xl:inline">Book on WhatsApp</span>
            <span className="xl:hidden">Book</span>
          </a>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <IconAction action={contactActions[0]} mobile />
          <IconAction action={contactActions[1]} mobile />
          <button className="focus-ring grid h-10 w-10 place-items-center rounded-full border border-forest-900/10 bg-white text-forest-950 shadow-[0_8px_24px_rgba(7,31,8,.08)]" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-forest-900/10 bg-white px-4 py-4 text-sm font-medium shadow-[0_20px_40px_rgba(7,31,8,.08)] lg:hidden">
          <div className="mx-auto grid max-w-[1280px] gap-1">
            {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-neutral-700 hover:bg-forest-50 hover:text-forest-950">{label}</Link>)}
            <div className="mt-3 flex items-center gap-2 border-t border-forest-900/10 pt-4">
              {contactActions.slice(2).map((action) => <IconAction key={action.label} action={action} />)}
              <a
                href={whatsappUrl(bookMessage)}
                target="_blank"
                rel="noreferrer"
                className="focus-ring ml-auto inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-forest-900 px-4 py-3 text-sm font-black text-white shadow-[0_10px_28px_rgba(7,31,8,.16)]"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Book
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
