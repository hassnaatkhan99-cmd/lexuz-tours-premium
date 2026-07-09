import Image from "next/image";
import Link from "next/link";
import { CalendarDays, CheckCircle2, MapPin, MessageCircle, Route, ShieldCheck, Sparkles, Star, Users } from "lucide-react";
import { company } from "@/data/company";
import type { CityHub } from "@/data/cityHubs";
import { reviews } from "@/data/reviews";
import { lahorePrice, money, multiDayTours, oneDayTours, tours, type Tour } from "@/data/tours";
import { buildBreadcrumbJsonLd } from "@/lib/seo-foundation/breadcrumbs";
import { buildFaqSchema } from "@/lib/seo-foundation/schema";
import { absoluteUrl } from "@/lib/seo";
import { CityHubCallButton, CityHubMobileBar, CityHubTourCta, CityHubWhatsAppButton } from "@/components/CityHubActions";
import { FAQ } from "@/components/FAQ";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionHeading } from "@/components/SectionHeading";

function cityTourHref(tour: Tour, hub: CityHub) {
  return `/tours/${tour.slug}?from=${hub.code}#from-${hub.code}`;
}

function primaryPrice(tour: Tour, hub: CityHub) {
  const tier = tour.prices[0];
  if (!tier) return "Price on request";
  if (hub.code === "lahore") {
    const price = lahorePrice(tour, tier);
    return price ? `From ${money(price)}` : "Price on request";
  }
  return `From ${money(tier.islamabadPrice)}`;
}

function TourListCard({ tour, hub }: { tour: Tour; hub: CityHub }) {
  const href = cityTourHref(tour, hub);
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-forest-900/10 bg-white shadow-soft transition hover:-translate-y-1 hover:border-forest-800/25 hover:shadow-premium">
      <Link href={href} aria-label={`View ${tour.title} from ${hub.name}`} className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-saffron-300" />
      <div className="relative h-56 overflow-hidden">
        <Image src={tour.heroImage} alt={`${tour.title} tour from ${hub.name}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full bg-saffron-400 px-3 py-1 text-xs font-black uppercase text-forest-950 shadow-soft">
          {tour.departure || "Message for dates"}
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-saffron-200">{tour.duration}</p>
          <h3 className="mt-1 text-2xl font-black">{tour.title}</h3>
        </div>
      </div>
      <div className="space-y-4 p-5">
        <p className="line-clamp-3 text-sm leading-6 text-neutral-700">{tour.overview}</p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-xl border border-forest-900/10 bg-forest-50 p-3">
            <p className="text-xs font-black uppercase text-neutral-500">Departure</p>
            <p className="mt-1 font-black text-forest-950">{tour.departure || "To be confirmed"}</p>
          </div>
          <div className="rounded-xl border border-forest-900/10 bg-saffron-50 p-3">
            <p className="text-xs font-black uppercase text-neutral-500">{hub.name} Price</p>
            <p className="mt-1 font-black text-forest-950">{primaryPrice(tour, hub)}</p>
          </div>
        </div>
        <div className="relative z-20 flex items-center justify-between gap-3">
          <p className="flex items-center gap-2 text-xs font-bold text-neutral-500">
            <MapPin size={14} />
            {tour.region}
          </p>
          <CityHubTourCta href={href} />
        </div>
      </div>
    </article>
  );
}

function StatCard({ icon: Icon, label, value }: { icon: typeof Route; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-forest-900/10 bg-white/95 p-5 shadow-soft backdrop-blur">
      <Icon className="text-saffron-500" size={28} />
      <p className="mt-4 text-2xl font-black text-forest-950">{value}</p>
      <p className="mt-1 text-sm font-bold text-neutral-600">{label}</p>
    </div>
  );
}

function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

function citySchema(hub: CityHub, visibleTours: Tour[]) {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${company.website}/#travelagency-${hub.code}`,
    name: `${company.name} ${hub.name} Departures`,
    url: absoluteUrl(hub.path),
    image: `${company.website}/logo.png`,
    email: company.email,
    telephone: company.callPhone,
    parentOrganization: { "@id": `${company.website}/#organization` },
    areaServed: [{ "@type": "City", name: hub.name }, { "@type": "Country", name: "Pakistan" }],
    makesOffer: visibleTours.slice(0, 8).map((tour) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "TouristTrip",
        name: tour.title,
        url: absoluteUrl(cityTourHref(tour, hub))
      }
    }))
  };
}

function itemListSchema(hub: CityHub, visibleTours: Tour[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Tours from ${hub.name}`,
    itemListElement: visibleTours.map((tour, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tour.title,
      url: absoluteUrl(cityTourHref(tour, hub))
    }))
  };
}

export function CityHubPage({ hub }: { hub: CityHub }) {
  const visibleTours = hub.code === "lahore" ? multiDayTours : tours;
  const cityReviews = reviews.filter((review) => review.city.toLowerCase().includes(hub.code === "islamabad" ? "islamabad" : "lahore"));
  const shownReviews = cityReviews.length >= 2 ? cityReviews : reviews.slice(0, 3);
  const breadcrumb = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Tours", path: "/public-trips" },
    { name: `Tours from ${hub.name}`, path: hub.path }
  ]);

  return (
    <main className="bg-white pb-24 md:pb-0">
      <section className="relative overflow-hidden bg-forest-950 text-white">
        <Image src={hub.heroImage} alt={hub.heroAlt} fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-forest-950/20" />
        <div className="container-page relative py-14 sm:py-20 lg:py-24">
          <nav className="flex flex-wrap items-center gap-2 text-sm font-bold text-white/75" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/public-trips" className="hover:text-white">Tours</Link>
            <span>/</span>
            <span className="text-white">{hub.name}</span>
          </nav>
          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-saffron-300">{hub.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">{hub.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{hub.heroLead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#tours" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-saffron-400 px-5 py-3 text-sm font-black text-forest-950 shadow-soft transition hover:bg-saffron-300">
                Explore Tours
              </Link>
              <CityHubWhatsAppButton hub={hub} sourceSlot="hero" />
              <CityHubCallButton hub={hub} sourceSlot="hero" />
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <StatCard icon={Route} label="Available tour options" value={`${visibleTours.length}`} />
            <StatCard icon={CalendarDays} label="Departure schedule" value={hub.code === "lahore" ? "Multi-day" : "Weekly"} />
            <StatCard icon={ShieldCheck} label="Booking support" value="WhatsApp" />
          </div>
        </div>
      </section>

      <section className="border-b border-forest-900/10 bg-white">
        <div className="container-page flex gap-3 overflow-x-auto py-4 text-sm font-black text-forest-900">
          {["tours", hub.code === "islamabad" ? "day-trips" : "travel-format", "pickup", "why-lexuz", "reviews", "faqs"].map((item) => (
            <Link key={item} href={`#${item}`} className="shrink-0 rounded-full border border-forest-900/10 px-4 py-2 transition hover:border-forest-800/30 hover:bg-forest-50">
              {item.replace("-", " ")}
            </Link>
          ))}
        </div>
      </section>

      <section className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="City Hub" title={`Plan your trip from ${hub.name}`} copy={hub.description} />
            <div className="mt-6 space-y-5 text-base leading-8 text-neutral-700">
              {hub.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-forest-900/10 bg-forest-50 p-6 shadow-soft">
            <h2 className="flex items-center gap-2 text-xl font-black text-forest-950">
              <CalendarDays className="text-saffron-500" />
              Available departures
            </h2>
            <ul className="mt-5 space-y-4">
              {hub.availableDepartures.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-neutral-700">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-forest-700" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section id="tours" className="bg-neutral-50 py-14">
        <div className="container-page">
          <SectionHeading eyebrow="Available Tours" title={`Book tours from ${hub.name}`} copy="Every card links to the official tour product page with the correct city departure section highlighted." />
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleTours.map((tour) => (
              <TourListCard key={tour.slug} tour={tour} hub={hub} />
            ))}
          </div>
        </div>
      </section>

      {hub.code === "islamabad" ? (
        <section id="day-trips" className="container-page py-14">
          <SectionHeading eyebrow="Sunday Escapes" title="One-day trips from Islamabad" copy="These trips are listed for Islamabad / Rawalpindi only and are not duplicated as Lahore departures." />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {oneDayTours.map((tour) => (
              <TourListCard key={tour.slug} tour={tour} hub={hub} />
            ))}
          </div>
        </section>
      ) : (
        <section id="travel-format" className="container-page py-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading eyebrow="Travel Format" title="How Lahore departures work" copy="Lahore travelers join selected multi-day tours with extra road time planned into the journey." />
            <div className="grid gap-4">
              {hub.travelFormat?.map((item) => (
                <div key={item} className="rounded-2xl border border-forest-900/10 bg-white p-5 shadow-soft">
                  <p className="text-sm leading-7 text-neutral-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="weekend" className="bg-forest-950 py-14 text-white">
        <div className="container-page">
          <div className="mb-8">
            <p className="mb-2 text-sm font-black uppercase tracking-wide text-saffron-300">Multi-Day Tours</p>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              {hub.code === "lahore" ? "Lahore weekend and extended tours" : "Weekend and extended tours from Islamabad"}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">Choose from the current multi-day catalog using the official tour price and departure data.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {multiDayTours.slice(0, 8).map((tour) => (
              <Link key={tour.slug} href={cityTourHref(tour, hub)} className="focus-ring group rounded-2xl border border-white/10 bg-white/10 p-5 shadow-soft transition hover:-translate-y-1 hover:bg-white hover:text-forest-950">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-saffron-300 group-hover:text-forest-700">{tour.duration}</p>
                <h3 className="mt-3 text-xl font-black">{tour.title}</h3>
                <p className="mt-3 text-sm leading-6 opacity-80">{tour.departure || "To be confirmed"}</p>
                <p className="mt-4 text-sm font-black">{primaryPrice(tour, hub)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="pickup" className="container-page py-14">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Pickup Information" title={`${hub.name} pickup guidance`} copy="Final pickup information is confirmed by the Lexuz team before departure so travelers receive route-specific instructions." />
          <div className="grid gap-4">
            {hub.pickupPoints.map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl border border-forest-900/10 bg-white p-5 shadow-soft">
                <MapPin className="mt-1 shrink-0 text-saffron-500" />
                <p className="text-sm leading-7 text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-lexuz" className="bg-neutral-50 py-14">
        <div className="container-page">
          <SectionHeading eyebrow="Why Lexuz" title={`Why choose ${hub.name} departures`} copy="A city hub should help travelers understand the practical route difference before they book." />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {hub.whyChoose.map((item) => (
              <div key={item} className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
                <Sparkles className="text-saffron-500" />
                <p className="mt-4 text-sm leading-7 text-neutral-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="container-page py-14">
        <SectionHeading eyebrow="Traveler Feedback" title={`Reviews from ${hub.name} travelers`} copy="Realistic trip feedback focused on transport coordination, communication and route planning." />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {shownReviews.slice(0, 3).map((review, index) => (
            <ReviewCard key={`${review.name}-${review.tour}`} review={review} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-forest-50 py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Related Links" title="Keep planning your route" copy="Move between destinations, public trips and travel guides without duplicating tour pages." />
          <div className="grid gap-4">
            {hub.relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="focus-ring rounded-2xl border border-forest-900/10 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
                <p className="font-black text-forest-950">{link.label}</p>
                <p className="mt-2 text-sm leading-6 text-neutral-600">{link.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="container-page py-14">
        <FAQ items={hub.faqs} />
      </section>

      <section className="container-page pb-16">
        <div className="overflow-hidden rounded-3xl border border-forest-900/10 bg-forest-950 p-8 text-white shadow-premium md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-saffron-300">Ready to compare options?</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Ask Lexuz about tours from {hub.name}</h2>
              <p className="mt-4 max-w-2xl text-white/75">Share your preferred tour, traveler count and departure city. Our team will guide you through availability, pickup planning and the booking process.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CityHubWhatsAppButton hub={hub} sourceSlot="footer_cta" />
              <Link href="/booking" className="focus-ring inline-flex items-center justify-center gap-2 rounded-xl bg-saffron-400 px-5 py-3 text-sm font-black text-forest-950 shadow-soft transition hover:bg-saffron-300">
                <Users size={18} />
                Start Booking
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CityHubMobileBar hub={hub} />
      <JsonLd data={breadcrumb} />
      <JsonLd data={buildFaqSchema(hub.faqs)} />
      <JsonLd data={citySchema(hub, visibleTours)} />
      <JsonLd data={itemListSchema(hub, visibleTours)} />
    </main>
  );
}
