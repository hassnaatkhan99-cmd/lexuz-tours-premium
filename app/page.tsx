import Image from "next/image";
import Link from "next/link";
import { Bus, Compass, Headphones, Heart, ReceiptText, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { DestinationCard } from "@/components/DestinationCard";
import { FAQ } from "@/components/FAQ";
import { PriceList } from "@/components/PriceList";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TourCard } from "@/components/TourCard";
import { generalFaqs } from "@/data/faqs";
import { reviews } from "@/data/reviews";
import { tripPhotos } from "@/data/tripPhotos";
import { multiDayTours, oneDayTours } from "@/data/tours";

export default function Home() {
  const premiumTrust = [
    [Compass, "Planned routes, not random trips", "Tour pages explain the travel flow, pickup city options, inclusions and practical notes before you reserve."],
    [Bus, "Real Lexuz fleet visibility", "Branded vehicle photography is used where it helps customers understand the transport experience."],
    [ReceiptText, "Clear package boundaries", "Prices, included services and jeep-charge notes are presented separately so expectations stay clear."],
    [Headphones, "Human support before departure", "Call or message Lexuz for booking guidance, pickup clarity and travel coordination."]
  ];
  const whyChooseCards = [
    [ShieldCheck, "Clear booking steps", "Submit your details, upload payment proof and receive team review before final confirmation."],
    [Bus, "Visible transport standards", "Fleet imagery and transport notes help customers understand the travel setup before departure."],
    [ReceiptText, "Published pricing rules", "Islamabad prices, Lahore supplements and package boundaries are shown before booking."],
    [Headphones, "Responsive trip guidance", "The team stays reachable for pickup questions, booking help and travel coordination."]
  ];

  return (
    <>
      <section className="hero-premium min-h-[720px] text-white">
        <div className="hero-mist" aria-hidden="true" />
        <div className="container-page relative z-10 flex min-h-[720px] items-center py-24">
          <div className="max-w-3xl reveal-soft">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-brand-accent backdrop-blur">Escape • Explore • Enjoy</p>
            <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">Adventure Begins With Lexuz</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Premium public tours, private tours, honeymoon trips, university trips and corporate travel across Pakistan with clear planning and direct support.</p>
            <div className="mt-9 flex flex-wrap gap-3"><WhatsAppButton /><ButtonLink href="/public-trips" variant="outline">Explore Tours</ButtonLink><ButtonLink href="/booking" variant="dark">Book Now</ButtonLink></div>
            <div className="mt-10 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.16em] text-white/70">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">Islamabad departures</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">Lahore departures</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur">Private tours</span>
            </div>
          </div>
        </div>
      </section>
      <section className="container-page story-bridge -mt-16 rounded-[30px] border border-white/65 bg-white/78 p-4 shadow-[0_32px_100px_rgba(20,32,27,.18)] backdrop-blur-2xl">
        <div className="grid gap-3 md:grid-cols-4">
          {premiumTrust.map(([Icon, title, copy]) => (
            <article key={String(title)} className="luxury-card rounded-[22px] border border-white/70 bg-white/70 p-5 shadow-ds1">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-primary text-brand-accent shadow-ds1">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h2 className="mt-4 text-base font-black text-brand-primary">{String(title)}</h2>
              <p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{String(copy)}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="container-page py-20"><SectionHeading eyebrow="Fixed Weekly Departures" title="Northern Pakistan signature tours" copy="Compare Lexuz public tour products with duration, departure schedule and starting price in one place." /><div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">{multiDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>
      <section className="cinematic-band py-16"><div className="container-page"><SectionHeading eyebrow="One Day Trips" title="Quick escapes from Islamabad" copy="Sunday day trips designed for travelers who want mountain air without a multi-day plan." /><div className="grid gap-6 md:grid-cols-3">{oneDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="stone-band py-20"><div className="container-page"><SectionHeading eyebrow="Destinations" title="Popular destination styles" /><div className="grid gap-6 md:grid-cols-3">{multiDayTours.slice(0, 3).map((tour) => <DestinationCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Why Choose Lexuz" title="Built for trust, comfort and clear planning" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{whyChooseCards.map(([Icon, title, copy]) => <div key={String(title)} className="luxury-card rounded-dsLg border border-lexuzNeutral-line bg-white/90 p-6 shadow-ds1 backdrop-blur transition hover:-translate-y-1 hover:shadow-ds2"><Icon className="text-brand-primary" size={30} aria-hidden="true" /><h3 className="mt-4 font-black text-lexuzNeutral-100">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{String(copy)}</p></div>)}</div></section>
      <section className="forest-band py-20 text-white"><div className="container-page grid gap-8 lg:grid-cols-[1fr_0.82fr] lg:items-center">
        <figure className="overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds3">
          <Image src={tripPhotos.groupMeadowBanner.src} alt={tripPhotos.groupMeadowBanner.alt} width={tripPhotos.groupMeadowBanner.width} height={tripPhotos.groupMeadowBanner.height} className="h-[360px] w-full object-cover" />
          <figcaption className="px-5 py-4 text-sm font-black text-brand-primary">{tripPhotos.groupMeadowBanner.caption}</figcaption>
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
      <section className="cinematic-band py-16"><div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div><SectionHeading eyebrow="Our Fleet" title="Comfortable branded vehicles" copy="Fleet visibility is one of Lexuz's strongest trust signals: customers can see the vehicles behind the service before they book." /><div className="grid gap-4 md:grid-cols-2"><Image src="/images/fleet-founder-buses.jpeg" alt="Lexuz branded buses with tour lead" width={700} height={450} className="h-72 w-full rounded-[22px] object-cover shadow-ds2" /><Image src="/images/bus-yard-front.jpeg" alt="Lexuz branded bus front view" width={700} height={450} className="h-72 w-full rounded-[22px] object-cover shadow-ds2" /></div></div><Image src="/images/office-real.jpeg" alt="Lexuz Tours office in Rawalpindi" width={700} height={700} className="h-full max-h-[590px] w-full rounded-[26px] object-cover shadow-ds3" /></div></section>
      <section className="container-page -mt-6 grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-4">{["Executive Tourist Coasters", "Private Family Transport", "Corporate Transport", "Group Transport"].map((item) => <div key={item} className="rounded-dsLg border border-lexuzNeutral-line bg-white p-5 text-center font-black text-brand-primary shadow-ds1">{item}</div>)}</section>
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">
        {[
          ["Corporate Tours", "/corporate-tours", "Transport, hotel coordination and group movement planning for office retreats and team trips."],
          ["University Tours", "/university-tours", "Student-friendly coordination with clear pickup plans, practical timing and group communication."],
          ["Honeymoon Tours", "/honeymoon-tours", "Private couple travel planning focused on scenic routes, comfort and relaxed pacing."],
          ["Custom Tours", "/custom-tours", "Flexible family, friends and private group plans shaped around your dates and travel style."]
        ].map(([title, href, copy]) => <Link key={title} href={href} className="focus-ring rounded-dsLg border border-white/10 bg-brand-primary p-6 text-white shadow-ds2 transition hover:-translate-y-1 hover:shadow-ds3"><Heart className="text-brand-accent" /><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/75">{copy}</p></Link>)}
      </section>
      <section className="stone-band py-16"><div className="container-page"><SectionHeading eyebrow="Reviews" title="Traveler trust" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{reviews.slice(0, 4).map((review, index) => <ReviewCard key={review.name} review={review} index={index} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Price List" title="Transparent Pricing Preview" /><PriceList /></section>
      <section className="container-page py-16"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={generalFaqs} /></section>
      <CTASection />
    </>
  );
}
