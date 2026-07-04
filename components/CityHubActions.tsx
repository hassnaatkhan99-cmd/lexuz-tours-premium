"use client";

import Link from "next/link";
import { CalendarCheck, MessageCircle, Phone, Route } from "lucide-react";
import { company, whatsappUrl } from "@/data/company";
import type { CityHub } from "@/data/cityHubs";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/seo-foundation/ga4Events";

function whatsappMessage(hub: CityHub, sourceSlot: string) {
  return `Hello Lexuz Tours,\nI am viewing tours from ${hub.name}.\nSource: ${hub.token} · ${sourceSlot}\nPlease guide me about available departures.`;
}

export function CityHubWhatsAppButton({ hub, sourceSlot, className = "" }: { hub: CityHub; sourceSlot: string; className?: string }) {
  return (
    <Link
      href={whatsappUrl(whatsappMessage(hub, sourceSlot))}
      target="_blank"
      onClick={() =>
        trackWhatsAppClick({
          page_path: hub.path,
          departure_city: hub.code,
          source_token: `${hub.token} · ${sourceSlot}`,
          button_position: sourceSlot
        })
      }
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-[#12a84f] px-5 py-3 text-sm font-black text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#0d8b40] ${className}`}
    >
      <MessageCircle size={18} />
      Ask on WhatsApp
    </Link>
  );
}

export function CityHubCallButton({ hub, sourceSlot, className = "" }: { hub: CityHub; sourceSlot: string; className?: string }) {
  return (
    <Link
      href={company.callHref}
      onClick={() =>
        trackPhoneClick({
          page_path: hub.path,
          departure_city: hub.code,
          source_token: `${hub.token} · ${sourceSlot}`,
          button_position: sourceSlot
        })
      }
      className={`focus-ring inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-black text-white shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-forest-950 ${className}`}
    >
      <Phone size={18} />
      Call Lexuz
    </Link>
  );
}

export function CityHubMobileBar({ hub }: { hub: CityHub }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-forest-900/10 bg-white/95 px-3 py-2 shadow-premium backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <Link
          href="#tours"
          className="focus-ring inline-flex items-center justify-center gap-1 rounded-xl border border-forest-900/10 px-3 py-3 text-xs font-black text-forest-900"
        >
          <Route size={16} />
          Tours
        </Link>
        <Link
          href={company.callHref}
          onClick={() => trackPhoneClick({ page_path: hub.path, departure_city: hub.code, source_token: `${hub.token} · mobile_bar`, button_position: "mobile_bar" })}
          className="focus-ring inline-flex items-center justify-center gap-1 rounded-xl border border-forest-900/10 px-3 py-3 text-xs font-black text-forest-900"
        >
          <Phone size={16} />
          Call
        </Link>
        <Link
          href={whatsappUrl(whatsappMessage(hub, "mobile_bar"))}
          target="_blank"
          onClick={() =>
            trackWhatsAppClick({ page_path: hub.path, departure_city: hub.code, source_token: `${hub.token} · mobile_bar`, button_position: "mobile_bar" })
          }
          className="focus-ring inline-flex items-center justify-center gap-1 rounded-xl bg-[#12a84f] px-3 py-3 text-xs font-black text-white"
        >
          <MessageCircle size={16} />
          WhatsApp
        </Link>
      </div>
    </div>
  );
}

export function CityHubTourCta({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-saffron-400 px-4 py-3 text-sm font-black text-forest-950 transition hover:bg-saffron-300"
    >
      View Tour
      <CalendarCheck size={16} />
    </Link>
  );
}
