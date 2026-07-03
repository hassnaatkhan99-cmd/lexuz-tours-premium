import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/company";

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "dark" | "outline" }) {
  const styles = {
    primary: "bg-saffron-400 text-forest-900 hover:bg-saffron-300",
    dark: "bg-forest-800 text-white hover:bg-forest-700",
    outline: "border border-white/50 bg-white/10 text-white hover:bg-white hover:text-forest-900"
  };
  return (
    <Link href={href} className={`focus-ring inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-black shadow-soft ${styles[variant]}`}>
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}

export function WhatsAppButton({ tourName }: { tourName?: string }) {
  const message = tourName ? `Hello Lexuz Tours,\nI want to book the ${tourName} Tour.\nPlease guide me.` : "Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.";
  return (
    <Link href={whatsappUrl(message)} target="_blank" className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-[#12a84f] px-5 py-3 text-sm font-black text-white shadow-soft hover:bg-[#0d8b40]">
      <MessageCircle size={18} />
      Book On WhatsApp
    </Link>
  );
}
