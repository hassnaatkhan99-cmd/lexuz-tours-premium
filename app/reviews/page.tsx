import type { Metadata } from "next";
import Image from "next/image";
import { Bus, CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { tripPhotos } from "@/data/tripPhotos";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Lexuz Trip Evidence",
  description: "Real Lexuz Tours group, fleet and departure photography with confirmed company facts.",
  alternates: { canonical: canonical("/reviews") }
};

const facts = [
  [CalendarDays, "Operating since 2018"],
  [MapPin, "First departure: Miranjani Top"],
  [ShieldCheck, "SECP and FBR registered"],
  [Bus, "Own branded fleet"]
] as const;

const photos = [tripPhotos.groupMeadowBanner, tripPhotos.groupDepartureSummer, tripPhotos.studentGroupCoaster, tripPhotos.fleetThreeCoastersNight];

export default function ReviewsPage() {
  return (
    <>
      <section className="night-sky py-20 text-white">
        <div className="container-page">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Trip evidence</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">See the people and fleet behind Lexuz</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">These are real Lexuz group and fleet photographs. We do not publish named ratings or testimonials unless their source and permission can be verified.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([Icon, label]) => <div key={label} className="luxury-glass rounded-dsLg p-5 font-black text-forest-950"><Icon className="mb-3 text-brand-accent" />{label}</div>)}
          </div>
        </div>
      </section>
      <section className="cinematic-band py-16">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {photos.map((photo) => <figure key={photo.src} className="overflow-hidden rounded-dsLg border border-white/70 bg-white shadow-ds2"><Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} sizes="(min-width: 1024px) 33vw, 100vw" className="h-80 w-full object-cover" /><figcaption className="p-5 text-sm font-black text-brand-primary">{photo.caption}</figcaption></figure>)}
        </div>
      </section>
    </>
  );
}
