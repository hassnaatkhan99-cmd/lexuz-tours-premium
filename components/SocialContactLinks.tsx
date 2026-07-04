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

function stylesFor(variant: NonNullable<SocialContactLinksProps["variant"]>) {
  if (variant === "footer") {
    return "border-white/15 bg-white/10 text-white hover:border-saffron-300 hover:bg-saffron-300 hover:text-forest-950";
  }

  if (variant === "contact") {
    return "border-white/20 bg-white/10 text-white hover:border-saffron-300 hover:bg-saffron-300 hover:text-forest-950";
  }

  return "border-forest-900/10 bg-forest-50 text-forest-800 hover:border-saffron-300 hover:bg-saffron-300 hover:text-forest-950";
}

export function SocialContactLinks({ variant = "header", showLabels = false }: SocialContactLinksProps) {
  const iconStyles = stylesFor(variant);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.label}
            href={item.href}
            aria-label={item.label}
            title={item.label}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className={`focus-ring inline-flex h-10 items-center justify-center gap-2 rounded-full border px-3 text-sm font-black transition ${iconStyles}`}
          >
            <Icon size={17} />
            {showLabels ? <span>{item.text}</span> : <span className="sr-only">{item.text}</span>}
          </a>
        );
      })}
    </div>
  );
}

