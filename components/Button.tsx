import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/company";
import { DesignLinkButton } from "@/components/ui/button";
import { DesignIcon } from "@/components/ui/icon";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "dark" | "outline" }) {
  const designVariant = variant === "outline" ? "outline" : variant === "dark" ? "primary" : "secondary";
  return (
    <DesignLinkButton href={href} variant={designVariant} size="md" rightIcon={<DesignIcon icon={ArrowRight} size="sm" />} className={variant === "outline" ? "border-white/50 bg-white/10 text-white hover:bg-white hover:text-brand-primary" : ""}>
      {children}
    </DesignLinkButton>
  );
}

export function WhatsAppButton({ tourName }: { tourName?: string }) {
  const message = tourName ? `Hello Lexuz Tours,\nI want to book the ${tourName} Tour.\nPlease guide me.` : "Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.";
  return (
    <Link href={whatsappUrl(message)} target="_blank" className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-dsMd bg-brand-whatsapp px-5 py-3 text-sm font-bold text-white shadow-ds1 transition hover:-translate-y-0.5 hover:brightness-95 hover:shadow-ds2">
      <MessageCircle size={18} aria-hidden="true" />
      Book On WhatsApp
    </Link>
  );
}
