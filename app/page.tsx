import Image from "next/image";
import Link from "next/link";
import { Building2, Bus, Headphones, Heart, MapPinned, ReceiptText, ShieldCheck } from "lucide-react";
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
import { multiDayTours, oneDayTours } from "@/data/tours";

export default function Home() {
  const trustFacts = [
    ["Rawalpindi Office", "Mustafa Plaza, 6th Road"],
    ["Own Fleet Photos", "Real Lexuz vehicles shown"],
    ["Published Pricing", "Islamabad and Lahore prices"],
    ["Direct Support", "WhatsApp booking guidance"]
  ];
  const whyChooseCards = [
    [Building2, "Rawalpindi Office", "Visit or contact the team through the listed Rawalpindi office and official phone numbers."],
    [Bus, "Branded Transport", "Lexuz fleet photos are used on the website so customers can see the vehicles behind the service."],
    [ReceiptText, "Transparent Pricing", "Public prices, Lahore supplements and jeep-charge exclusions are shown before booking."],
    [Headphones, "Direct Support", "Customers can call or message Lexuz on WhatsApp for booking and pickup guidance."]
  ];

  return (
    <>
      <section className="hero-premium min-h-[620px] text-white">
        <div className="container-page flex min-h-[620px] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-accent">Northern Pakistan tours</p>
            <h1 className="mt-4 text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Tours from Islamabad & Lahore with Lexuz</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Fixed weekly departures, transparent public pricing and WhatsApp support for families, couples, students, companies and private groups.</p>
            <div className="mt-8 flex flex-wrap gap-3"><WhatsAppButton /><ButtonLink href="/public-trips" variant="outline">Explore Tours</ButtonLink></div>
          </div>
        </div>
      </section>
      <section className="container-page -mt-12 grid gap-4 rounded-dsLg border border-lexuzNeutral-line bg-white p-4 shadow-ds3 md:grid-cols-4">
        {trustFacts.map(([a, b]) => <div key={a} className="rounded-dsMd bg-lexuzNeutral-canvas p-4 text-center"><p className="text-lg font-black text-brand-primary">{a}</p><p className="mt-1 text-sm text-lexuzNeutral-60">{b}</p></div>)}
      </section>
      <section className="container-page py-16"><SectionHeading eyebrow="Fixed Weekly Departures" title="Northern Pakistan signature tours" copy="Compare official Lexuz public tour products with duration, departure schedule and starting price in one place." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{multiDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>
      <section className="bg-white py-16"><div className="container-page"><SectionHeading eyebrow="One Day Trips" title="Quick escapes from Islamabad" copy="Sunday day trips designed for travelers who want mountain air without a multi-day plan." /><div className="grid gap-6 md:grid-cols-3">{oneDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="bg-brand-secondary py-16"><div className="container-page"><SectionHeading eyebrow="Destinations" title="Popular destination styles" /><div className="grid gap-6 md:grid-cols-3">{multiDayTours.slice(0, 3).map((tour) => <DestinationCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Why Choose Lexuz" title="Built for trust, comfort and clear planning" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{whyChooseCards.map(([Icon, title, copy]) => <div key={String(title)} className="rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds1 transition hover:-translate-y-1 hover:shadow-ds2"><Icon className="text-brand-primary" size={30} aria-hidden="true" /><h3 className="mt-4 font-black text-lexuzNeutral-100">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{String(copy)}</p></div>)}</div></section>
      <section className="bg-white py-16"><div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div><SectionHeading eyebrow="Our Fleet" title="Comfortable branded vehicles" copy="Fleet visibility is one of Lexuz's strongest trust signals: customers can see the vehicles behind the service before they book." /><div className="grid gap-4 md:grid-cols-2"><Image src="/images/fleet-founder-buses.jpeg" alt="Lexuz branded buses with tour lead" width={700} height={450} className="h-72 w-full rounded-dsLg object-cover shadow-ds2" /><Image src="/images/bus-yard-front.jpeg" alt="Lexuz branded bus front view" width={700} height={450} className="h-72 w-full rounded-dsLg object-cover shadow-ds2" /></div></div><Image src="/images/office-real.jpeg" alt="Lexuz Tours office in Rawalpindi" width={700} height={700} className="h-full max-h-[590px] w-full rounded-dsLg object-cover shadow-ds3" /></div></section>
      <section className="container-page -mt-6 grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-4">{["Executive Tourist Coasters", "Private Family Transport", "Corporate Transport", "Group Transport"].map((item) => <div key={item} className="rounded-dsLg border border-lexuzNeutral-line bg-white p-5 text-center font-black text-brand-primary shadow-ds1">{item}</div>)}</section>
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">{[["Corporate Tours", "/corporate-tours"], ["University Tours", "/university-tours"], ["Honeymoon Tours", "/honeymoon-tours"], ["Custom Tours", "/custom-tours"]].map(([title, href]) => <Link key={title} href={href} className="focus-ring rounded-dsLg border border-white/10 bg-brand-primary p-6 text-white shadow-ds2 transition hover:-translate-y-1 hover:shadow-ds3"><Heart className="text-brand-accent" /><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-white/75">Custom planning, premium coordination and WhatsApp support.</p></Link>)}</section>
      <section className="bg-brand-secondary py-16"><div className="container-page"><SectionHeading eyebrow="Reviews" title="Traveler trust" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{reviews.slice(0, 4).map((review, index) => <ReviewCard key={review.name} review={review} index={index} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Price List" title="Transparent Pricing Preview" /><PriceList /></section>
      <section className="container-page py-16"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={generalFaqs} /></section>
      <CTASection />
    </>
  );
}
