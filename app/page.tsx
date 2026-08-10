import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Bus, CalendarDays, Compass, Headphones, Heart, MapPin, ReceiptText, ShieldCheck, Sparkles, UserRoundCheck, Users } from "lucide-react";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { DestinationCard } from "@/components/DestinationCard";
import { FAQ } from "@/components/FAQ";
import { PriceList } from "@/components/PriceList";
import { SectionHeading } from "@/components/SectionHeading";
import { TourCard } from "@/components/TourCard";
import { generalFaqs } from "@/data/faqs";
import { realTripMedia } from "@/data/realTripMedia";
import { multiDayTours, oneDayTours } from "@/data/tours";
import { canonical } from "@/lib/seo";
import { buildFaqSchema } from "@/lib/seo-foundation";

export const metadata: Metadata = {
  title: "Pakistan Tours from Islamabad & Lahore | Lexuz Tours",
  description: "Explore Lexuz public trips and private tour planning from Islamabad, Rawalpindi and Lahore to Hunza, Skardu, Swat, Kashmir, Naran, Kumrat and Fairy Meadows.",
  alternates: { canonical: canonical("/") }
};

export default function Home() {
  const faqSchema = buildFaqSchema(generalFaqs);
  const premiumTrust = [
    [Compass, "Planned Itineraries", "Professionally organised routes."],
    [Bus, "Visible Fleet", "Real Lexuz transport imagery."],
    [ReceiptText, "Clear Packages", "Pricing and inclusions upfront."],
    [Headphones, "Direct Support", "Human help before departure."]
  ];
  const operationalFacts = [
    [CalendarDays, "Weekly Departures"],
    [UserRoundCheck, "Professional Tour Guides"],
    [Bus, "Comfortable Transport"],
    [MapPin, "Islamabad & Lahore Departures"],
    [Headphones, "Dedicated Customer Support"]
  ];
  const whyChooseCards = [
    [ShieldCheck, "Clear booking steps", "Submit your details, upload payment proof and receive team review before final confirmation."],
    [Bus, "Visible transport standards", "Fleet imagery and transport notes help customers understand the travel setup before departure."],
    [ReceiptText, "Published pricing rules", "Islamabad prices, Lahore supplements and package boundaries are shown before booking."],
    [Headphones, "Responsive trip guidance", "The team stays reachable for pickup questions, booking help and travel coordination."]
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="hero-premium min-h-[720px] text-white">
        <Image src="/images/hero-lexuz-premium.webp" alt="" fill priority sizes="100vw" className="hero-premium-media" />
        <div className="hero-premium-overlay" aria-hidden="true" />
        <div className="hero-light" aria-hidden="true" />
        <div className="hero-mist" aria-hidden="true" />
        <div className="container-page relative z-10 flex min-h-[720px] items-center py-24">
          <div className="max-w-3xl reveal-soft">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-brand-accent backdrop-blur">Escape • Explore • Enjoy</p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Explore Northern Pakistan With Lexuz</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/88">Premium guided tours from Islamabad and Lahore to Hunza, Skardu, Swat, Kashmir, Naran, Kumrat and Fairy Meadows, planned with clear pricing, real support and comfortable transport.</p>
            <div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton /><ButtonLink href="/public-trips" variant="outline">Explore Tours</ButtonLink><ButtonLink href="/tours/islamabad" variant="dark">Upcoming Departures</ButtonLink></div>
            <div className="mt-10 grid max-w-2xl gap-3 text-xs font-black uppercase tracking-[0.12em] text-white/82 sm:grid-cols-3">
              {[
                [MapPin, "Islamabad Departures", "/tours/islamabad"],
                [MapPin, "Lahore Departures", "/tours/lahore"],
                [Users, "Private Tours", "/custom-tours"]
              ].map(([Icon, label, href]) => (
                <Link key={String(label)} href={String(href)} className="interactive-chip focus-ring inline-flex items-center gap-2 rounded-2xl border border-white/18 bg-white/10 px-4 py-3 backdrop-blur-md transition duration-200">
                  <Icon size={17} className="text-brand-accent" aria-hidden="true" />
                  {String(label)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container-page story-bridge -mt-16 rounded-[30px] border border-white/65 bg-white/78 p-4 shadow-[0_32px_100px_rgba(20,32,27,.18)] backdrop-blur-2xl">
        <div className="grid gap-3 md:grid-cols-4">
          {premiumTrust.map(([Icon, title, copy]) => (
            <article key={String(title)} className="luxury-card rounded-[24px] border border-white/70 bg-white/72 p-6 shadow-ds1">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-primary text-brand-accent shadow-ds1">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-lg font-black text-brand-primary">{String(title)}</h2>
              <p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{String(copy)}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {operationalFacts.map(([Icon, label]) => (
            <div key={String(label)} className="trust-fact rounded-2xl border border-white/70 px-4 py-3 text-sm font-black text-brand-primary shadow-ds1">
              <Icon size={16} className="mr-2 inline text-brand-accent" aria-hidden="true" />
              {String(label)}
            </div>
          ))}
        </div>
      </section>
      <section className="container-page py-20"><SectionHeading eyebrow="Fixed Weekly Departures" title="Northern Pakistan signature tours" copy="Compare Lexuz public tour products with duration, departure schedule and starting price in one place." /><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">{multiDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>
      <section className="cinematic-band py-16"><div className="container-page"><SectionHeading eyebrow="One Day Trips" title="Quick escapes from Islamabad" copy="Sunday day trips designed for travelers who want mountain air without a multi-day plan." /><div className="grid gap-6 md:grid-cols-3">{oneDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="stone-band py-20"><div className="container-page"><SectionHeading eyebrow="Destinations" title="Popular destination styles" /><div className="grid gap-6 md:grid-cols-3">{multiDayTours.slice(0, 3).map((tour) => <DestinationCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Why Choose Lexuz" title="Built for trust, comfort and clear planning" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{whyChooseCards.map(([Icon, title, copy]) => <div key={String(title)} className="luxury-card rounded-dsLg border border-lexuzNeutral-line bg-white/90 p-6 shadow-ds1 backdrop-blur transition hover:-translate-y-1 hover:shadow-ds2"><Icon className="text-brand-primary" size={30} aria-hidden="true" /><h3 className="mt-4 font-black text-lexuzNeutral-100">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{String(copy)}</p></div>)}</div></section>
      <section className="forest-band py-20 text-white"><div className="container-page grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <figure className="overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds3">
          <Image src={realTripMedia.groupForestBanner.src} alt={realTripMedia.groupForestBanner.alt} width={realTripMedia.groupForestBanner.width} height={realTripMedia.groupForestBanner.height} sizes="(min-width: 1024px) 46vw, 100vw" className="h-[360px] w-full object-cover" />
          <figcaption className="px-5 py-4 text-sm font-black text-brand-primary">{realTripMedia.groupForestBanner.caption}</figcaption>
        </figure>
        <div>
          <SectionHeading eyebrow="Real departures" title="Group tours with visible Lexuz coordination" copy="Lexuz keeps real trip and fleet visuals separate from scenic destination photography so customers can see the people and transport behind the travel experience." />
          <div className="grid gap-3">
            {["Public trips for families, students and friends.", "WhatsApp support before booking and during planning.", "Clear inclusions, exclusions and pickup guidance before departure."].map((item, index) => (
              <div key={item} className="luxury-glass rounded-dsMd p-4 text-sm font-bold text-forest-950 shadow-ds1"><Sparkles className="mr-2 inline text-brand-accent" size={16} aria-hidden="true" />{index + 1}. {item}</div>
            ))}
          </div>
        </div>
      </div></section>
      <section className="cinematic-band py-16"><div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div><SectionHeading eyebrow="Our Fleet" title="Comfortable branded vehicles" copy="Fleet visibility is one of Lexuz's strongest trust signals: customers can see the vehicles behind the service before they book." /><div className="grid gap-4 md:grid-cols-2"><Image src={realTripMedia.snowyCoasterGroup.src} alt={realTripMedia.snowyCoasterGroup.alt} width={realTripMedia.snowyCoasterGroup.width} height={realTripMedia.snowyCoasterGroup.height} sizes="(min-width: 1024px) 27vw, (min-width: 768px) 50vw, 100vw" className="h-72 w-full rounded-[22px] object-cover shadow-ds2" /><Image src={realTripMedia.brandedCoasterFront.src} alt={realTripMedia.brandedCoasterFront.alt} width={realTripMedia.brandedCoasterFront.width} height={realTripMedia.brandedCoasterFront.height} sizes="(min-width: 1024px) 27vw, (min-width: 768px) 50vw, 100vw" className="h-72 w-full rounded-[22px] object-cover shadow-ds2" /></div></div><Image src="/images/office-real.jpeg" alt="Lexuz Tours office in Rawalpindi" width={700} height={700} sizes="(min-width: 1024px) 40vw, 100vw" className="h-full max-h-[590px] w-full rounded-[26px] object-cover shadow-ds3" /></div></section>
      <section className="container-page -mt-6 grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-4">{["Executive Tourist Coasters", "Private Family Transport", "Corporate Transport", "Group Transport"].map((item) => <div key={item} className="rounded-dsLg border border-lexuzNeutral-line bg-white p-5 text-center font-black text-brand-primary shadow-ds1">{item}</div>)}</section>
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Corporate Tours", "/corporate-tours", "Transport, hotel coordination and group movement planning for office retreats and team trips."],
          ["University Tours", "/university-tours", "Student-friendly coordination with clear pickup plans, practical timing and group communication."],
          ["Honeymoon Tours", "/honeymoon-tours", "Private couple travel planning focused on scenic routes, comfort and relaxed pacing."],
          ["Custom Tours", "/custom-tours", "Flexible family, friends and private group plans shaped around your dates and travel style."]
        ].map(([title, href, copy]) => <Link key={title} href={href} className="focus-ring rounded-dsLg border border-white/10 bg-brand-primary p-6 text-white shadow-ds2 transition hover:-translate-y-1 hover:shadow-ds3"><Heart className="text-brand-accent" /><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/75">{copy}</p></Link>)}
      </section>
      <section className="stone-band py-16"><div className="container-page grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center"><div><SectionHeading eyebrow="Trip evidence" title="Real people, fleet and departures" copy="Our published trip evidence uses Lexuz’s own group and fleet photography. Named customer testimonials will only return when their provenance and publication permission can be verified." /><ButtonLink href="/reviews" variant="outline">View trip evidence</ButtonLink></div><Image src={realTripMedia.groupMeadowSquare.src} alt={realTripMedia.groupMeadowSquare.alt} width={realTripMedia.groupMeadowSquare.width} height={realTripMedia.groupMeadowSquare.height} sizes="(min-width: 1024px) 50vw, 100vw" className="h-80 w-full rounded-dsLg object-cover shadow-ds2" /></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Price List" title="Transparent Pricing Preview" /><PriceList /></section>
      <section className="container-page py-16"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={generalFaqs} /></section>
      <CTASection />
    </>
  );
}
