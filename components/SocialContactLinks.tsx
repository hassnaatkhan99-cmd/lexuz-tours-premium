import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";

type SocialContactLinksProps = {
  variant?: "header" | "footer" | "contact";
  showLabels?: boolean;
};

const links = [
  {
    label: "Call Lexuz Tours",
    href: company.callHref,
    text: "Call",
    icon: Phone,
    external: false
  },
  {
    label: "WhatsApp Lexuz Tours",
    href: company.whatsappHref,
    text: "WhatsApp",
    icon: MessageCircle,
    external: true
  },
  {
    label: "Follow Lexuz Tours on Facebook",
    href: company.facebook,
    text: "Facebook",
    icon: Facebook,
    external: true
  },
  {
    label: "Follow Lexuz Tours on Instagram",
    href: company.instagram,
    text: "Instagram",
    icon: Instagram,
    external: true
  }
] as const;

function stylesFor(text: string, variant: NonNullable<SocialContactLinksProps["variant"]>) {
  const base = variant === "footer" || variant === "contact" ? "border-white/15 bg-white/10 text-white" : "border-lexuzNeutral-line bg-white text-brand-primary";
  if (text === "WhatsApp") return `${base} hover:border-brand-whatsapp hover:bg-brand-whatsapp hover:text-white`;
  if (text === "Facebook") return `${base} hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white`;
  if (text === "Instagram") return `${base} hover:border-transparent hover:bg-[linear-gradient(135deg,#f58529,#dd2a7b,#8134af)] hover:text-white`;
  return `${base} hover:border-brand-primary hover:bg-brand-secondary hover:text-brand-primary`;
}

export function SocialContactLinks({ variant = "header", showLabels = false }: SocialContactLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((item) => {
        const Icon = item.icon;
        const iconStyles = stylesFor(item.text, variant);
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className={`focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-full border px-3 text-sm font-black shadow-ds1 transition hover:-translate-y-0.5 hover:shadow-ds2 ${iconStyles}`}
          >
            <Icon size={17} />
            {showLabels ? <span>{item.text}</span> : <span className="sr-only">{item.text}</span>}
          </a>
        );
      })}
    </div>
  );
}
