import Link from "next/link";
import { Compass, Home, MapPin, MessageCircle } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/public-trips", label: "Public Trips", icon: Compass },
  { href: "/destinations", label: "Destinations", icon: MapPin },
  { href: "/contact", label: "Contact", icon: MessageCircle }
];

export default function NotFound() {
  return (
    <section className="cinematic-band py-20">
      <div className="container-page">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-white/70 bg-white/90 p-8 text-center shadow-ds3 backdrop-blur md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-primary">404 · Route not found</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-lexuzNeutral-100 md:text-6xl">This path is not on the itinerary</h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-lexuzNeutral-60">The page may have moved or the address may be incomplete. Choose a trusted route below to continue exploring with Lexuz Tours.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {links.map(({ href, label, icon: Icon }) => (
              <Link key={href} href={href} className="focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd border border-lexuzNeutral-line bg-white px-5 py-4 font-black text-brand-primary shadow-ds1 transition hover:-translate-y-0.5 hover:bg-brand-secondary hover:shadow-ds2">
                <Icon size={18} aria-hidden="true" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
