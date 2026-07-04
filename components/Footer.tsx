import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import { seoLandingPages } from "@/data/seoLandingPages";
import { SocialContactLinks } from "./SocialContactLinks";

export function Footer() {
  const links = ["Public Trips", "Destinations", "Price List", "Booking Status", "About", "Reviews", "Blog", "Contact"];
  return (
    <footer className="bg-forest-900 text-white">
      <div className="container-page grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-lexuz-white-20260627.png" alt="Lexuz Tours & Adventures logo" width={72} height={72} className="h-16 w-16 rounded-full bg-white object-contain" />
            <div><strong className="text-xl font-black uppercase">Lexuz Tours</strong><p className="text-sm font-bold">& Adventures</p></div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">{company.mission}</p>
          <div className="mt-5">
            <SocialContactLinks variant="footer" />
          </div>
        </div>
        <div>
          <h2 className="font-black text-saffron-300">Quick Links</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/75">
            {links.map((link) => <Link key={link} href={`/${link.toLowerCase().replaceAll(" ", "-")}`}>{link}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-black text-saffron-300">Top Guides</h2>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {seoLandingPages.slice(0, 6).map((page) => <Link key={page.slug} href={`/${page.slug}`}>{page.h1}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-black text-saffron-300">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            <a href={company.callHref} className="flex gap-2 hover:text-white"><Phone size={18} className="text-saffron-300" />{company.callPhone}</a>
            <p className="flex gap-2"><Mail size={18} className="text-saffron-300" />{company.email}</p>
            <p className="flex gap-2"><MapPin size={18} className="shrink-0 text-saffron-300" />{company.address}</p>
            <Link href={company.maps} target="_blank" className="w-fit rounded-md bg-saffron-400 px-4 py-2 font-black text-forest-900">Open Google Maps</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/55">© 2026 Lexuz Tours & Adventures. All rights reserved.</div>
    </footer>
  );
}
