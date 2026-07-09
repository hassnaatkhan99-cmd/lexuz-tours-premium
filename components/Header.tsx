"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { company, whatsappUrl } from "@/data/company";
import { DesignIcon } from "@/components/ui/icon";
import { DesignLinkButton } from "@/components/ui/button";

const tourLinks = [
  ["Public Trips", "/public-trips"],
  ["Islamabad Departures", "/tours/islamabad"],
  ["Lahore Departures", "/tours/lahore"],
  ["Corporate", "/corporate-tours"],
  ["University", "/university-tours"],
  ["Honeymoon", "/honeymoon-tours"],
  ["Custom Tours", "/custom-tours"]
] as const;

const nav = [
  ["Destinations", "/destinations"],
  ["Price List", "/price-list"],
  ["Reviews", "/reviews"],
  ["Contact", "/contact"]
];

const mobileNav = [
  ["Home", "/"],
  ...tourLinks,
  ...nav
];

const contactActions = [
  {
    label: "Call Lexuz Tours",
    href: company.callHref,
    icon: Phone,
    tone: "primary",
    className: "text-brand-primary hover:bg-brand-secondary"
  },
  {
    label: "WhatsApp Lexuz Tours",
    href: company.whatsappHref,
    icon: MessageCircle,
    tone: "whatsapp",
    className: "text-brand-whatsapp hover:bg-brand-whatsapp/10"
  }
] as const;

function IconAction({ action, mobile = false }: { action: (typeof contactActions)[number]; mobile?: boolean }) {
  const external = action.href.startsWith("http");

  return (
    <a
      href={action.href}
      aria-label={action.label}
      title={action.label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`focus-ring group grid shrink-0 place-items-center rounded-full border border-lexuzNeutral-line bg-white shadow-ds1 transition duration-150 ease-out hover:-translate-y-0.5 hover:shadow-ds2 ${mobile ? "h-10 w-10" : "h-11 w-11"} ${action.className}`}
    >
      <DesignIcon icon={action.icon} size={mobile ? "sm" : "md"} tone={action.tone} className="transition-transform duration-150 group-hover:scale-105 group-hover:[&>svg]:stroke-[1.8]" />
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const bookMessage = "Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 py-3">
      <div className={`mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 rounded-[26px] border border-white/65 bg-white/74 px-4 shadow-[0_26px_86px_rgba(7,31,8,.17)] backdrop-blur-[30px] transition-all duration-500 supports-[backdrop-filter]:bg-white/66 sm:px-6 xl:px-8 ${scrolled ? "h-[62px] rounded-[22px] shadow-[0_20px_64px_rgba(7,31,8,.18)]" : "h-[74px]"}`}>
        <Link href="/" className="focus-ring group flex min-w-0 shrink-0 items-center gap-3 rounded-2xl py-1 pl-1 pr-3 transition hover:bg-white/55" aria-label="Lexuz Tours home">
          <Image src="/logo-lexuz-white-20260627.png" alt="Lexuz Tours & Adventures logo" width={64} height={64} className={`rounded-full bg-white object-contain ring-1 ring-lexuzNeutral-line transition-all duration-300 group-hover:scale-[1.03] ${scrolled ? "h-11 w-11" : "h-12 w-12 sm:h-[52px] sm:w-[52px]"}`} priority />
          <div className="leading-[1.02]">
            <strong className="block whitespace-nowrap text-[14px] font-black uppercase tracking-[.02em] text-brand-primary sm:text-[15px]">Lexuz Tours</strong>
            <span className="block whitespace-nowrap text-[10px] font-black uppercase tracking-[.08em] text-lexuzNeutral-60 sm:text-[11px]">& Adventures</span>
          </div>
        </Link>

        <nav aria-label="Primary navigation" className="hidden flex-1 items-center justify-center gap-1.5 text-[13px] font-semibold text-lexuzNeutral-70 lg:flex xl:gap-2.5 xl:text-sm">
          <div className="group relative">
            <Link
              href="/public-trips"
              className={`focus-ring relative inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 transition duration-200 hover:bg-white/70 hover:text-brand-primary after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-center after:bg-brand-accent after:transition-transform group-hover:after:scale-x-100 ${pathname.startsWith("/tours") || pathname === "/public-trips" ? "bg-white/70 text-brand-primary after:scale-x-100" : "after:scale-x-0"}`}
              aria-haspopup="true"
            >
              Tours
              <DesignIcon icon={ChevronDown} size="sm" tone="muted" className="transition group-hover:rotate-180 group-hover:text-brand-primary" />
            </Link>
            <div className="luxury-glass invisible absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 translate-y-2 rounded-[22px] p-2 opacity-0 shadow-ds3 transition duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              {tourLinks.map(([label, href]) => (
                <Link key={href} href={href} className={`focus-ring block rounded-dsMd px-3 py-2.5 text-sm transition hover:bg-white/70 hover:text-brand-primary ${pathname === href ? "bg-white/70 text-brand-primary" : "text-lexuzNeutral-70"}`}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`focus-ring relative whitespace-nowrap rounded-full px-2.5 py-2 transition duration-200 hover:bg-white/70 hover:text-brand-primary after:absolute after:inset-x-3 after:bottom-1.5 after:h-px after:origin-center after:bg-brand-accent after:transition-transform hover:after:scale-x-100 xl:px-3 ${pathname === href ? "bg-white/70 text-brand-primary after:scale-x-100" : "after:scale-x-0"}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex" aria-label="Contact links">
          <a href={company.callHref} className="focus-ring hidden items-center gap-2 rounded-full border border-lexuzNeutral-line bg-white px-3 py-2 text-sm font-bold text-brand-primary shadow-ds1 transition hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-ds2 xl:inline-flex" aria-label="Call Lexuz Tours">
            <DesignIcon icon={Phone} size="sm" tone="primary" />
            {company.callPhone}
          </a>
          <DesignLinkButton
            href={whatsappUrl(bookMessage)}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="sm"
            className="premium-shine ml-1 min-h-0 rounded-xl px-5 py-3 shadow-ds1 hover:-translate-y-0.5"
          >
            <DesignIcon icon={MessageCircle} size="sm" className="text-white" />
            <span className="hidden xl:inline">Book on WhatsApp</span>
            <span className="xl:hidden">Book</span>
          </DesignLinkButton>
        </div>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <IconAction action={contactActions[0]} mobile />
          <IconAction action={contactActions[1]} mobile />
          <button
            className="focus-ring group relative grid h-10 w-10 place-items-center rounded-full border border-white/70 bg-white/85 text-brand-primary shadow-ds1 backdrop-blur transition hover:bg-brand-secondary"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">{open ? "Close navigation menu" : "Open navigation menu"}</span>
            <span aria-hidden="true" className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="mx-3 mt-2 rounded-[24px] border border-white/60 bg-white/90 px-4 py-4 text-sm font-semibold shadow-[0_24px_54px_rgba(7,31,8,.12)] backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-[1280px] gap-1">
            {mobileNav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="focus-ring rounded-dsMd px-3 py-3 text-lexuzNeutral-70 transition hover:bg-brand-secondary hover:text-brand-primary">{label}</Link>)}
            <div className="mt-3 rounded-dsLg border border-lexuzNeutral-line bg-lexuzNeutral-5 p-3">
              <p className="px-1 pb-3 text-xs font-black uppercase tracking-[.12em] text-lexuzNeutral-60">Contact Lexuz</p>
              <div className="flex items-center gap-2">
                <IconAction action={contactActions[0]} />
                <DesignLinkButton
                  href={whatsappUrl(bookMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="whatsapp"
                  size="sm"
                  className="ml-auto rounded-xl px-4 py-3"
                >
                  <DesignIcon icon={MessageCircle} size="sm" className="text-white" />
                  Book
                </DesignLinkButton>
              </div>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
