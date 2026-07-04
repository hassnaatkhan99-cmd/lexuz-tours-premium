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
import { featuredTours, multiDayTours, oneDayTours } from "@/data/tours";

export default function Home() {
  const trustFacts = [
    ["Rawalpindi Office", "Mustafa Plaza, 6th Road"],
    ["Published Price List", "Islamabad and Lahore pricing"],
    ["Jeep Charges Disclosed", "Shown separately where applicable"],
    ["Direct WhatsApp Support", "0309 9318249"]
  ];
  const whyChooseCards = [
    [Building2, "Rawalpindi Office", "Visit or contact the team through the listed Rawalpindi office and official phone numbers."],
    [Bus, "Branded Transport", "Lexuz fleet photos are used on the website so customers can see the vehicles behind the service."],
    [ReceiptText, "Transparent Pricing", "Public prices, Lahore supplements and jeep-charge exclusions are shown before booking."],
    [Headphones, "Direct Support", "Customers can call or message Lexuz on WhatsApp for booking and pickup guidance."],
    [ShieldCheck, "Clear Policies", "Cancellation and refund rules are published so customers know the terms before paying."],
    [MapPinned, "Route Guidance", "Pickup details, road conditions and final timings are confirmed by the team before departure."]
  ];

  return (
    <>
      <section className="hero-premium min-h-[680px] text-white">
        <div className="container-page flex min-h-[680px] items-center py-20">
          <div className="max-w-3xl">
            <p className="script text-4xl text-saffron-400 sm:text-5xl">Escape • Explore • Enjoy</p>
            <h1 className="mt-4 text-5xl font-black uppercase leading-[.95] sm:text-6xl lg:text-8xl">Adventure Begins With <span className="text-saffron-400">Lexuz</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">Premium public tours, private tours, honeymoon trips, university trips and corporate travel across Pakistan.</p>
            <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/public-trips">Explore Tours</ButtonLink><ButtonLink href="/booking" variant="outline">Book Now</ButtonLink><WhatsAppButton /></div>
          </div>
        </div>
      </section>
      <section className="container-page -mt-14 grid gap-4 rounded-lg bg-white p-5 shadow-premium md:grid-cols-4">
        {trustFacts.map(([a, b]) => <div key={a} className="p-4 text-center"><p className="text-xl font-black text-forest-800">{a}</p><p className="mt-1 text-sm text-neutral-500">{b}</p></div>)}
      </section>
      <section className="container-page py-16"><SectionHeading eyebrow="Featured Tours" title="Premium Public Departures" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{featuredTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>
      <section className="bg-white py-16"><div className="container-page"><SectionHeading eyebrow="One Day Trips" title="Quick Escapes From Islamabad" /><div className="grid gap-6 md:grid-cols-3">{oneDayTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Multi Day Trips" title="Northern Pakistan Signature Tours" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{multiDayTours.slice(0, 6).map((tour) => <TourCard key={tour.slug} tour={tour} />)}</div></section>
      <section className="bg-forest-50 py-16"><div className="container-page"><SectionHeading eyebrow="Destinations" title="Popular Destinations" /><div className="grid gap-6 md:grid-cols-3">{featuredTours.slice(0, 3).map((tour) => <DestinationCard key={tour.slug} tour={tour} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Why Choose Lexuz" title="Built For Trust, Comfort And Clear Planning" /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{whyChooseCards.map(([Icon, title, copy]) => <div key={String(title)} className="rounded-lg bg-white p-6 shadow-soft"><Icon className="text-forest-700" size={34} aria-hidden="true" /><h3 className="mt-4 font-black">{String(title)}</h3><p className="mt-2 text-sm text-neutral-600">{String(copy)}</p></div>)}</div></section>
      <section className="bg-white py-16"><div className="container-page grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div><SectionHeading eyebrow="Our Fleet" title="Comfortable Branded Vehicles" copy="Real Lexuz branded buses and office visuals are used across the website wherever available." /><div className="grid gap-4 md:grid-cols-2"><Image src="/images/fleet-founder-buses.jpeg" alt="Lexuz branded buses with tour lead" width={700} height={450} className="h-72 w-full rounded-lg object-cover shadow-soft" /><Image src="/images/bus-yard-front.jpeg" alt="Lexuz branded bus front view" width={700} height={450} className="h-72 w-full rounded-lg object-cover shadow-soft" /></div></div><Image src="/images/office-real.jpeg" alt="Lexuz Tours office in Rawalpindi" width={700} height={700} className="h-full max-h-[590px] w-full rounded-lg object-cover shadow-premium" /></div></section>
      <section className="container-page -mt-6 grid gap-4 pb-16 md:grid-cols-2 lg:grid-cols-4">{["Executive Tourist Coasters", "Private Family Transport", "Corporate Transport", "Group Transport"].map((item) => <div key={item} className="rounded-lg border border-forest-900/10 bg-white p-5 text-center font-black shadow-soft">{item}</div>)}</section>
      <section className="container-page grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-4">{[["Corporate Tours", "/corporate-tours"], ["University Tours", "/university-tours"], ["Honeymoon Tours", "/honeymoon-tours"], ["Custom Tours", "/custom-tours"]].map(([title, href]) => <Link key={title} href={href} className="rounded-lg bg-forest-900 p-6 text-white shadow-soft hover:-translate-y-1"><Heart className="text-saffron-400" /><h3 className="mt-4 text-2xl font-black">{title}</h3><p className="mt-3 text-sm text-white/75">Custom planning, premium coordination and WhatsApp support.</p></Link>)}</section>
      <section className="bg-forest-50 py-16"><div className="container-page"><SectionHeading eyebrow="Reviews" title="Traveler Trust" /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{reviews.slice(0, 4).map((review, index) => <ReviewCard key={review.name} review={review} index={index} />)}</div></div></section>
      <section className="container-page py-16"><SectionHeading eyebrow="Price List" title="Transparent Pricing Preview" /><PriceList /></section>
      <section className="container-page py-16"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={generalFaqs} /></section>
      <CTASection />
    </>
  );
}
