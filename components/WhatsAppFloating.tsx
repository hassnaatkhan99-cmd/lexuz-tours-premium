import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { whatsappUrl } from "@/data/company";

export function WhatsAppFloating() {
  return (
    <Link href={whatsappUrl("Hello Lexuz Tours,\nI want to book a tour.\nPlease guide me.")} target="_blank" className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#12a84f] px-5 py-3 text-sm font-black text-white shadow-premium">
      <MessageCircle size={20} />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
