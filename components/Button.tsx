import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/company";
import { DesignLinkButton } from "@/components/ui/button";
import { DesignIcon } from "@/components/ui/icon";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "dark" | "outline" }) {
  const designVariant = variant === "outline" ? "outline" : variant === "dark" ? "primary" : "secondary";
  const external = href.startsWith("http");
  return (
    <DesignLinkButton href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} variant={designVariant} size="md" rightIcon={<DesignIcon icon={ArrowRight} size="sm" />} className={`premium-shine magnetic-hover shadow-[0_16px_38px_rgba(20,32,27,.12)] ${variant === "outline" ? "border-white/50 bg-white/10 text-white hover:bg-white hover:text-brand-primary" : ""}`}>
      {children}
    </DesignLinkButton>
  );
}

export function WhatsAppButton({ tourName }: { tourName?: string }) {
  const message = tourName ? `Hello Lexuz Tours,\nI want to book the ${tourName} Tour.\nPlease guide me.` : "Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.";
  return (
    <Link href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer" className="focus-ring premium-shine magnetic-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-brand-whatsapp px-5 py-3 text-sm font-bold text-white shadow-[0_18px_44px_rgba(37,211,102,.24)] transition hover:-translate-y-0.5 hover:brightness-95 hover:shadow-[0_24px_58px_rgba(37,211,102,.32)]">
      <MessageCircle size={18} aria-hidden="true" />
      Book on WhatsApp
    </Link>
  );
}
