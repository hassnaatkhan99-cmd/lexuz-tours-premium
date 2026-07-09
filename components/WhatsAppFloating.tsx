"use client";

import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, whatsappUrl } from "@/data/company";

const mobileLinks = [
  { label: "Call Lexuz Tours", href: company.callHref, text: "Call", icon: Phone, external: false },
  { label: "WhatsApp Lexuz Tours", href: company.whatsappHref, text: "WhatsApp", icon: MessageCircle, external: true },
  { label: "Follow Lexuz Tours on Instagram", href: company.instagram, text: "Instagram", icon: Instagram, external: true },
  { label: "Follow Lexuz Tours on Facebook", href: company.facebook, text: "Facebook", icon: Facebook, external: true }
] as const;

export function WhatsAppFloating() {
  const pathname = usePathname();
  const onTourPage = pathname.startsWith("/tours/");
  return (
    <>
      <Link href={whatsappUrl("Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.")} target="_blank" rel="noopener noreferrer" className="premium-shine fixed bottom-6 right-6 z-50 hidden h-12 w-auto max-w-[210px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-[#12a84f] px-5 text-sm font-black text-white shadow-[0_24px_70px_rgba(18,168,79,.32)] transition hover:-translate-y-1 hover:shadow-[0_30px_86px_rgba(18,168,79,.42)] sm:inline-flex">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </Link>
      <div className={`fixed left-1/2 z-50 grid w-[min(calc(100vw-24px),380px)] -translate-x-1/2 grid-cols-4 overflow-hidden rounded-2xl border border-forest-900/10 bg-white/94 shadow-premium backdrop-blur-xl transition-[bottom,transform] duration-300 sm:hidden ${onTourPage ? "bottom-20" : "bottom-3"}`}>
        {mobileLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center justify-center gap-1 border-r border-forest-900/10 px-2 py-3 text-[11px] font-black text-forest-900 last:border-r-0"
            >
              <Icon size={18} className={item.text === "WhatsApp" ? "text-[#12a84f]" : "text-forest-800"} />
              <span>{item.text}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
