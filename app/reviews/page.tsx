import type { Metadata } from "next";
import { Bus, CalendarDays, MapPin, ShieldCheck } from "lucide-react";
import { RealTripGallery } from "@/components/RealTripGallery";
import { realTripGallery } from "@/data/realTripMedia";
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
        <div className="container-page">
          <RealTripGallery photos={realTripGallery} />
        </div>
      </section>
    </>
  );
}
