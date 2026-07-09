import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { company, whatsappUrl } from "@/data/company";

const mobileLinks = [
  { label: "Call Lexuz Tours", href: company.callHref, text: "Call", icon: Phone, external: false },
  { label: "WhatsApp Lexuz Tours", href: company.whatsappHref, text: "WhatsApp", icon: MessageCircle, external: true },
  { label: "Follow Lexuz Tours on Instagram", href: company.instagram, text: "Instagram", icon: Instagram, external: true },
  { label: "Follow Lexuz Tours on Facebook", href: company.facebook, text: "Facebook", icon: Facebook, external: true }
] as const;

export function WhatsAppFloating() {
  return (
    <>
      <Link href={whatsappUrl("Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.")} target="_blank" rel="noopener noreferrer" className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-[#12a84f] px-5 py-3 text-sm font-black text-white shadow-premium sm:flex">
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </Link>
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-4 overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-premium sm:hidden">
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
