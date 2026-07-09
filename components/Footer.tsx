import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { company } from "@/data/company";
import { seoLandingPages } from "@/data/seoLandingPages";
import { SocialContactLinks } from "./SocialContactLinks";

export function Footer() {
  const exploreLinks = [
    ["Public Trips", "/public-trips"],
    ["Islamabad Departures", "/tours/islamabad"],
    ["Lahore Departures", "/tours/lahore"],
    ["Destinations", "/destinations"],
    ["Price List", "/price-list"],
    ["Reviews", "/reviews"],
    ["Blog", "/blog"]
  ];
  const companyLinks = [
    ["About", "/about"],
    ["Booking Status", "/booking-status"],
    ["Policies", "/policies"],
    ["Contact", "/contact"],
    ["Terms", "/terms-and-conditions"],
    ["Privacy", "/privacy-policy"],
    ["Cancellation", "/cancellation-policy"]
  ];
  return (
    <footer className="night-sky mountain-silhouette text-white">
      <div className="container-page relative z-10 grid gap-10 py-16 md:grid-cols-[1.25fr_0.85fr_0.85fr_1.25fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-lexuz-white-20260627.png" alt="Lexuz Tours & Adventures logo" width={72} height={72} className="h-16 w-16 rounded-full bg-white object-contain ring-1 ring-white/20" />
            <div><strong className="text-xl font-black uppercase leading-none">Lexuz Tours</strong><p className="text-sm font-bold text-white/75">& Adventures</p></div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">{company.mission}</p>
          <div className="luxury-glass mt-5 flex items-center gap-2 rounded-dsMd p-3 text-sm text-forest-950">
            <ShieldCheck size={18} className="text-brand-accent" />
            Transparent pricing, real support and published policies.
          </div>
          <div className="mt-5" aria-label="Lexuz Tours social links">
            <SocialContactLinks variant="footer" />
          </div>
        </div>
        <div>
          <h2 className="font-black text-brand-accent">Explore</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            {exploreLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-black text-brand-accent">Company</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/75">
            {companyLinks.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="font-black text-brand-accent">Contact</h2>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            <a href={company.callHref} className="flex gap-2 hover:text-white"><Phone size={18} className="text-brand-accent" />{company.callPhone}</a>
            <a href={`mailto:${company.email}`} className="flex gap-2 hover:text-white"><Mail size={18} className="text-brand-accent" />{company.email}</a>
            <p className="flex gap-2 leading-6"><MapPin size={18} className="mt-0.5 shrink-0 text-brand-accent" />{company.address}</p>
            <Link href={company.maps} target="_blank" rel="noopener noreferrer" className="mt-2 w-fit rounded-dsMd bg-white px-4 py-2 font-black text-brand-primary shadow-ds1 hover:bg-brand-secondary">Open Google Maps</Link>
          </div>
        </div>
      </div>
      <div className="container-page relative z-10 border-t border-white/10 py-5">
        <div className="flex flex-col gap-3 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Lexuz Tours & Adventures. All rights reserved.</p>
          <div className="flex flex-wrap gap-3">
            {seoLandingPages.slice(0, 4).map((page) => <Link key={page.slug} href={`/${page.slug}`} className="hover:text-white">{page.h1}</Link>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
