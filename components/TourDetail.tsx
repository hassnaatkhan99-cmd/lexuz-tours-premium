import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle2, Clock, MapPin, XCircle } from "lucide-react";
import { lahorePrice, money, Tour } from "@/data/tours";
import { absoluteUrl } from "@/lib/seo";
import { detailedOverview, expandedFaqs, expandedItinerary, travelInformation, whyChooseTour } from "@/lib/tourContent";
import { ButtonLink, WhatsAppButton } from "./Button";
import { FAQ } from "./FAQ";
import { SectionHeading } from "./SectionHeading";

export function TourDetail({ tour }: { tour: Tour }) {
  const price = tour.prices[0];
  const overview = detailedOverview(tour);
  const itinerary = expandedItinerary(tour);
  const whyChoose = whyChooseTour(tour);
  const travelInfo = travelInformation(tour);
  const faqs = expandedFaqs(tour);
  const tourSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${tour.title} Tour`,
    description: tour.overview,
    image: tour.heroImage,
    touristType: tour.prices.map((tier) => tier.label),
    offers: tour.prices.map((tier) => ({
      "@type": "Offer",
      priceCurrency: "PKR",
      price: tier.islamabadPrice,
      availability: "https://schema.org/InStock"
    }))
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Public Trips", item: absoluteUrl("/public-trips") },
      { "@type": "ListItem", position: 3, name: tour.title, item: absoluteUrl(`/tours/${tour.slug}`) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative min-h-[540px] overflow-hidden text-white">
        <Image src={tour.heroImage} alt={`${tour.title} hero`} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/65 to-black/20" />
        <div className="container-page relative z-10 flex min-h-[540px] items-center py-16">
          <div className="max-w-3xl">
            <p className="script text-4xl text-saffron-400">Escape • Explore • Enjoy</p>
            <h1 className="mt-3 text-5xl font-black uppercase leading-none md:text-7xl">{tour.title}</h1>
            <div className="mt-5 flex flex-wrap gap-4 text-white/90">
              <p className="flex items-center gap-2"><MapPin size={20} />{tour.region}</p>
              <p className="flex items-center gap-2"><CalendarDays size={20} />{tour.duration}</p>
              <p className="flex items-center gap-2"><Clock size={20} />{tour.departure}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={`/booking?tour=${tour.slug}`}>Book Now</ButtonLink>
              <WhatsAppButton tourName={tour.title} />
            </div>
          </div>
        </div>
      </section>
      <section className="container-page grid gap-8 py-14 lg:grid-cols-[1fr_360px]">
        <div>
          <SectionHeading eyebrow="Overview" title="Detailed Tour Overview" copy={overview[0]} />
          <div className="mb-10 grid gap-4 rounded-lg border border-forest-900/10 bg-white p-6 text-sm leading-7 text-neutral-700 shadow-soft">
            {overview.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <SectionHeading eyebrow="Highlights" title="Tour Highlights" />
          <div className="grid gap-3 md:grid-cols-2">{tour.highlights.map((item) => <p key={item} className="rounded-md bg-forest-50 p-4 font-bold text-forest-900">{item}</p>)}</div>
          <div className="mt-12">
            <SectionHeading eyebrow="Why This Tour" title={`Why Choose ${tour.title}`} />
            <div className="grid gap-3 md:grid-cols-2">{whyChoose.map((item) => <p key={item} className="rounded-md border border-forest-900/10 bg-white p-4 text-sm font-bold text-forest-900 shadow-soft">{item}</p>)}</div>
          </div>
          <div className="mt-12"><SectionHeading eyebrow="Trip Plan" title="Trip Plan" copy={tour.tripPlan} /></div>
          <div className="mt-8">
            <SectionHeading eyebrow={tour.category === "one-day" ? "Journey Information" : "Itinerary"} title={tour.category === "one-day" ? "Journey & Return Information" : "Day By Day Itinerary"} />
            <div className="grid gap-3">
              {itinerary.map((item, index) => <div key={item} className="rounded-lg border border-forest-900/10 bg-white p-5 shadow-soft"><strong className="text-forest-800">{tour.category === "one-day" ? `Journey Part ${index + 1}` : `Day ${index + 1}`}</strong><p className="mt-2 text-sm leading-7 text-neutral-700">{item}</p></div>)}
            </div>
          </div>
          <div className="mt-12">
            <SectionHeading eyebrow="Travel Information" title="Weather, Roads, Packing & Fitness" />
            <div className="grid gap-4 md:grid-cols-2">
              {travelInfo.map((item) => <div key={item.label} className="rounded-lg border border-forest-900/10 bg-white p-5 shadow-soft"><h3 className="font-black text-forest-900">{item.label}</h3><p className="mt-2 text-sm leading-6 text-neutral-700">{item.text}</p></div>)}
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div><h2 className="mb-4 font-black uppercase text-forest-900">Included Services</h2>{tour.included.map((item) => <p key={item} className="mb-3 flex gap-2 text-sm"><CheckCircle2 className="text-forest-700" size={18} />{item}</p>)}</div>
            <div><h2 className="mb-4 font-black uppercase text-red-700">Excluded Services</h2>{tour.excluded.map((item) => <p key={item} className="mb-3 flex gap-2 text-sm"><XCircle className="text-red-600" size={18} />{item}</p>)}</div>
          </div>
          <div className="mt-12">
            <SectionHeading eyebrow="Gallery" title="Tour Gallery" />
            <div className="grid gap-4 md:grid-cols-3">{tour.gallery.map((image) => <Image key={image} src={image} alt={`${tour.title} scenery`} width={520} height={360} className="h-56 w-full rounded-lg object-cover shadow-soft" />)}</div>
            {tour.itineraryImage ? (
              <div className="mt-8 rounded-lg border border-forest-900/10 bg-white p-4 shadow-soft">
                <h3 className="mb-4 font-black uppercase text-forest-900">Official One-Day Trip Poster</h3>
                <Image src={tour.itineraryImage} alt={`${tour.title} itinerary poster`} width={1024} height={1536} className="mx-auto max-h-[920px] w-full rounded-md object-contain" />
              </div>
            ) : null}
          </div>
          <div className="mt-12"><SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" /><FAQ items={faqs} /></div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium">
            <h2 className="text-xl font-black">Pricing</h2>
            {tour.prices.map((tier) => (
              <div key={tier.label} className="mt-4 rounded-md bg-forest-50 p-4">
                <p className="font-black">{tier.label}</p>
                <p className="mt-2 text-sm">From Islamabad / Rawalpindi</p>
                <p className="text-2xl font-black text-forest-800">{money(tier.islamabadPrice)}</p>
                {lahorePrice(tour, tier) ? <><p className="mt-3 text-sm">From Lahore</p><p className="text-2xl font-black text-forest-800">{money(lahorePrice(tour, tier) as number)}</p></> : <p className="mt-3 text-sm font-bold text-neutral-500">Lahore pricing not available</p>}
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
            <h2 className="font-black">Departure Information</h2>
            <p className="mt-3 text-sm text-neutral-600">Scheduled departure</p>
            <p className="text-lg font-black text-forest-900">{tour.departure}</p>
            <p className="mt-4 text-sm text-neutral-600">Duration</p>
            <p className="font-black text-forest-900">{tour.duration}</p>
          </div>
          <div className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
            <h2 className="font-black">Pickup Information</h2>
            {tour.pickup.map((item) => <p key={item} className="mt-3 text-sm">{item}</p>)}
          </div>
          <div className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
            <h2 className="font-black">Important Notes</h2>
            {tour.notes.map((item) => <p key={item} className="mt-3 text-sm leading-6 text-neutral-700">{item}</p>)}
          </div>
        </aside>
      </section>
      <div className="sticky bottom-0 z-40 bg-forest-900 p-3 text-white">
        <div className="container-page flex flex-wrap items-center justify-between gap-3"><strong>{tour.title} · {money(price.islamabadPrice)}</strong><div className="flex gap-2"><Link href={`/booking?tour=${tour.slug}`} className="rounded-md bg-saffron-400 px-4 py-2 text-sm font-black text-forest-900">Book Now</Link><WhatsAppButton tourName={tour.title} /></div></div>
      </div>
    </>
  );
}
