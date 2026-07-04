import Image from "next/image";
import Link from "next/link";
import { Award, CalendarDays, CheckCircle2, ChevronRight, Clock, Compass, Hotel, Info, MapPin, Mountain, ShieldCheck, Star, Users, XCircle } from "lucide-react";
import { reviews } from "@/data/reviews";
import { lahorePrice, money, Tour, tours } from "@/data/tours";
import { absoluteUrl } from "@/lib/seo";
import { buildBreadcrumbJsonLd, buildFaqSchema } from "@/lib/seo-foundation";
import { detailedOverview, expandedFaqs, expandedItinerary, travelInformation, whyChooseTour } from "@/lib/tourContent";
import { FAQ } from "./FAQ";
import { SectionHeading } from "./SectionHeading";
import { StickyTourActions, TourProductActions } from "./TourProductActions";
import { TourCard } from "./TourCard";

function cityAvailability(tour: Tour) {
  return tour.category === "one-day" ? "Islamabad / Rawalpindi" : "Islamabad / Rawalpindi & Lahore";
}

function difficulty(tour: Tour) {
  if (tour.category === "one-day") return "Easy";
  if (tour.slug.includes("fairy") || tour.slug.includes("katora")) return "Moderate adventure";
  if (tour.durationDays >= 5) return "Moderate road journey";
  return "Easy to moderate";
}

function needsJeepDisclosure(tour: Tour) {
  const text = [...tour.excluded, ...tour.notes, tour.title].join(" ").toLowerCase();
  return text.includes("jeep") || ["fairy-meadows", "shogran-siri-paye", "sharaan-forest-waterfall", "swat-kalam-mahodand", "kumrat-valley", "kumrat-jahaz-banda-katora-lake"].includes(tour.slug);
}

function relatedTours(tour: Tour) {
  return tours.filter((item) => item.slug !== tour.slug && (item.category === tour.category || item.durationDays === tour.durationDays)).slice(0, 3);
}

function matchingReviews(tour: Tour) {
  const title = tour.title.toLowerCase();
  const firstWord = title.split(" ")[0];
  return reviews.filter((review) => {
    const reviewTour = review.tour.toLowerCase();
    return reviewTour.includes(firstWord) || title.includes(reviewTour.split(" ")[0]);
  }).slice(0, 3);
}

function destinationLinkLabel(tour: Tour) {
  if (tour.slug.includes("hunza")) return "Hunza travel guidance";
  if (tour.slug.includes("skardu")) return "Skardu travel guidance";
  if (tour.slug.includes("naran") || tour.slug.includes("shogran")) return "Naran Kaghan travel guidance";
  if (tour.slug.includes("swat")) return "Swat Kalam travel guidance";
  if (tour.slug.includes("kumrat") || tour.slug.includes("katora")) return "Kumrat travel guidance";
  if (tour.slug.includes("fairy")) return "Fairy Meadows travel guidance";
  if (tour.slug.includes("kashmir") || tour.slug.includes("ganga")) return "Kashmir travel guidance";
  return "Destination travel guidance";
}

function priceText(tour: Tour) {
  const price = tour.prices[0];
  return price ? money(price.islamabadPrice) : "Price on request";
}

export function TourDetail({ tour, initialCity = "islamabad" }: { tour: Tour; initialCity?: "islamabad" | "lahore" }) {
  const overview = detailedOverview(tour);
  const itinerary = expandedItinerary(tour);
  const whyChoose = whyChooseTour(tour);
  const travelInfo = travelInformation(tour);
  const faqs = expandedFaqs(tour).slice(0, 6);
  const related = relatedTours(tour);
  const featuredReviews = matchingReviews(tour);
  const hasLahore = tour.category !== "one-day";
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Public Trips", path: "/public-trips" },
    { name: tour.title, path: `/tours/${tour.slug}` }
  ];
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${tour.title} Tour`,
    description: tour.overview,
    image: absoluteUrl(tour.heroImage),
    provider: { "@id": "https://www.lexuztours.com/#organization" },
    touristType: ["Families", "Couples", "Friends", "Solo joiners"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: itinerary.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tour.category === "one-day" ? `Journey Part ${index + 1}` : `Day ${index + 1}`,
        description: item
      }))
    }
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${tour.title} Tour`,
    description: tour.overview,
    image: absoluteUrl(tour.heroImage),
    brand: { "@id": "https://www.lexuztours.com/#organization" },
    offers: tour.prices.flatMap((tier) => {
      const offers = [{
        "@type": "Offer",
        priceCurrency: "PKR",
        price: tier.islamabadPrice,
        availability: "https://schema.org/InStock",
        url: absoluteUrl(`/tours/${tour.slug}#from-islamabad`),
        category: `${tier.label} from Islamabad / Rawalpindi`
      }];
      const lhr = lahorePrice(tour, tier);
      if (lhr) {
        offers.push({
          "@type": "Offer",
          priceCurrency: "PKR",
          price: lhr,
          availability: "https://schema.org/InStock",
          url: absoluteUrl(`/tours/${tour.slug}#from-lahore`),
          category: `${tier.label} from Lahore`
        });
      }
      return offers;
    })
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div className="absolute inset-0">
          <Image src={tour.heroImage} alt={`${tour.title} tour with Lexuz Tours`} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/75 to-forest-950/20" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#fbfcf8] to-transparent" />
        </div>
        <div className="container-page relative z-10 py-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-white/75">
            {breadcrumbItems.map((item, index) => (
              <span key={item.path} className="inline-flex items-center gap-2">
                {index > 0 ? <ChevronRight size={14} /> : null}
                {index === breadcrumbItems.length - 1 ? <span>{item.name}</span> : <Link href={item.path} className="hover:text-saffron-300">{item.name}</Link>}
              </span>
            ))}
          </nav>

          <div className="grid gap-8 lg:grid-cols-[1fr_390px] lg:items-end">
            <div className="max-w-4xl">
              <p className="script text-4xl text-saffron-400">Escape • Explore • Enjoy</p>
              <h1 className="mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
                {tour.title} Tour — {tour.duration} {hasLahore ? "from Islamabad & Lahore" : "from Islamabad"}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg">{tour.overview}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  [CalendarDays, tour.duration, "Duration"],
                  [Clock, tour.departure || "To be confirmed", "Departure"],
                  [MapPin, cityAvailability(tour), "Departure cities"],
                  [Mountain, difficulty(tour), "Adventure level"]
                ].map(([Icon, value, label]) => (
                  <div key={String(label)} className="rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <Icon className="text-saffron-300" size={22} />
                    <p className="mt-3 text-xs font-black uppercase tracking-wide text-white/60">{String(label)}</p>
                    <p className="mt-1 text-sm font-black text-white">{String(value)}</p>
                  </div>
                ))}
              </div>
            </div>
            <TourProductActions tour={tour} sourceSlot="hero" initialCity={initialCity} />
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_360px]">
        <main className="min-w-0">
          <section className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-premium md:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              {[
                ["Trusted operator", "Rawalpindi office, branded fleet and visible support."],
                ["Transparent exclusions", "Jeep charges and personal expenses are clearly separated."],
                ["Booking workflow", "Reference ID, payment proof and status tracking after submission."]
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-forest-900/10 bg-forest-50 p-5">
                  <ShieldCheck className="text-forest-800" size={24} />
                  <h2 className="mt-3 font-black text-forest-950">{title}</h2>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">{copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12" id="overview">
            <SectionHeading eyebrow="Tour overview" title={`What to expect on ${tour.title}`} copy={overview[0]} />
            <div className="grid gap-4 text-base leading-8 text-neutral-700">
              {overview.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          <section className="mt-12">
            <SectionHeading eyebrow="Signature moments" title="Trip highlights" />
            <div className="grid gap-3 md:grid-cols-2">
              {tour.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-forest-900/10 bg-white p-4 shadow-soft">
                  <CheckCircle2 className="shrink-0 text-forest-800" size={20} />
                  <span className="font-bold text-forest-950">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12" id="departures">
            <SectionHeading eyebrow="Departures & pricing" title="Choose your departure city" copy="One canonical tour page serves both Islamabad and Lahore context. Final seats, room details and exact reporting instructions are confirmed by the Lexuz team." />
            <div className="grid gap-5 md:grid-cols-2">
              <div id="from-islamabad" className="scroll-mt-28 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-forest-700">Departures from Islamabad</p>
                <h2 className="mt-2 text-2xl font-black text-forest-950">Islamabad / Rawalpindi</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-600">Current schedule: <strong>{tour.departure || "To be confirmed"}</strong></p>
                {tour.prices.map((tier) => (
                  <div key={tier.label} className="mt-4 rounded-xl bg-forest-50 p-4">
                    <p className="text-sm font-black text-forest-950">{tier.label}</p>
                    <p className="mt-1 text-2xl font-black text-forest-800">{money(tier.islamabadPrice)}</p>
                    <p className="text-xs text-neutral-500">{tier.unit}</p>
                  </div>
                ))}
                <p className="mt-4 text-xs leading-5 text-neutral-500">Pickup points: Islamabad / Rawalpindi. Exact point and timing are confirmed before departure.</p>
              </div>

              <div id="from-lahore" className="scroll-mt-28 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-forest-700">Departures from Lahore</p>
                <h2 className="mt-2 text-2xl font-black text-forest-950">Lahore</h2>
                {hasLahore ? (
                  <>
                    <p className="mt-3 text-sm leading-6 text-neutral-600">Lahore departures follow the same tour product with additional road travel. Current schedule: <strong>{tour.departure || "To be confirmed"}</strong></p>
                    {tour.prices.map((tier) => {
                      const price = lahorePrice(tour, tier);
                      return (
                        <div key={tier.label} className="mt-4 rounded-xl bg-forest-50 p-4">
                          <p className="text-sm font-black text-forest-950">{tier.label}</p>
                          <p className="mt-1 text-2xl font-black text-forest-800">{price ? money(price) : "Price on request"}</p>
                          <p className="text-xs text-neutral-500">{tier.unit}</p>
                        </div>
                      );
                    })}
                    <p className="mt-4 text-xs leading-5 text-neutral-500">Pickup and overnight travel details are confirmed by the team before departure.</p>
                  </>
                ) : (
                  <p className="mt-3 rounded-xl bg-neutral-50 p-4 text-sm font-bold text-neutral-600">Lahore departure is not available for this one-day trip.</p>
                )}
              </div>
            </div>
          </section>

          <section className="mt-12" id="itinerary">
            <SectionHeading eyebrow={tour.category === "one-day" ? "Journey plan" : "Day-by-day itinerary"} title={tour.category === "one-day" ? "How the day flows" : "Detailed travel plan"} />
            <div className="space-y-3">
              {itinerary.map((item, index) => (
                <details key={item} open={index === 0} className="group rounded-2xl border border-forest-900/10 bg-white p-5 shadow-soft">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span>
                      <span className="text-xs font-black uppercase tracking-wide text-forest-700">{tour.category === "one-day" ? `Journey Part ${index + 1}` : `Day ${index + 1}`}</span>
                      <span className="mt-1 block text-lg font-black text-forest-950">{tour.category === "one-day" ? "Journey and sightseeing" : index === 0 ? "Departure and first travel leg" : index === itinerary.length - 1 ? "Return journey" : "Sightseeing and overnight stay"}</span>
                    </span>
                    <span className="rounded-full bg-forest-50 px-3 py-1 text-xs font-black text-forest-800 group-open:bg-saffron-300/40">View</span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-neutral-700">{item}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-black text-forest-800">
                    {tour.category !== "one-day" ? <span className="rounded-full bg-forest-50 px-3 py-1">Meals: Breakfast + Dinner</span> : <span className="rounded-full bg-forest-50 px-3 py-1">Dinner included</span>}
                    {tour.category !== "one-day" ? <span className="rounded-full bg-forest-50 px-3 py-1">Overnight: category confirmed on booking</span> : null}
                    {needsJeepDisclosure(tour) ? <a href="#jeep-charges" className="rounded-full bg-saffron-300/40 px-3 py-1 hover:bg-saffron-300">Jeep note</a> : null}
                  </div>
                </details>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-forest-900/10 bg-forest-50 p-4 text-sm leading-6 text-forest-900">
              Sequence may adjust for weather, traffic, road access or safety conditions. The Lexuz team prioritizes safe decisions over a rigid checklist.
            </div>
          </section>

          <section className="mt-12 grid gap-6 lg:grid-cols-2" id="included">
            <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-forest-950">Included services</h2>
              <div className="mt-5 grid gap-3">
                {tour.included.map((item) => <p key={item} className="flex gap-3 text-sm font-bold text-neutral-700"><CheckCircle2 className="shrink-0 text-forest-700" size={18} />{item}</p>)}
              </div>
            </div>
            <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-forest-950">Not included</h2>
              <div className="mt-5 grid gap-3">
                {tour.excluded.map((item) => <p key={item} className="flex gap-3 text-sm font-bold text-neutral-700"><XCircle className="shrink-0 text-red-600" size={18} />{item}</p>)}
              </div>
            </div>
          </section>

          {needsJeepDisclosure(tour) ? (
            <section id="jeep-charges" className="mt-6 scroll-mt-28 rounded-2xl border border-saffron-500/40 bg-saffron-100/70 p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <Info className="mt-1 shrink-0 text-forest-900" size={24} />
                <div>
                  <h2 className="text-2xl font-black text-forest-950">Jeep charges disclosure</h2>
                  <p className="mt-3 text-sm leading-7 text-forest-900">
                    Jeep charges are not included in the package price. Where local access requires a jeep, payment is handled locally with jeep operators and may be shared between passengers depending on the route and vehicle arrangement.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-forest-900">
                    For {tour.title}, local access can depend on road, weather and seasonal conditions. Lexuz keeps this separate so the package remains transparent and customers know exactly what is included before booking.
                  </p>
                </div>
              </div>
            </section>
          ) : null}

          <section className="mt-12">
            <SectionHeading eyebrow="Travel notes" title="Route, packing and suitability" />
            <div className="grid gap-4 md:grid-cols-2">
              {travelInfo.map((item) => (
                <div key={item.label} className="rounded-2xl border border-forest-900/10 bg-white p-5 shadow-soft">
                  <h3 className="font-black text-forest-950">{item.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-700">{item.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-12" id="reviews">
            <SectionHeading eyebrow="Reviews" title="Traveler feedback" copy={featuredReviews.length ? "A few customer notes connected with this route or travel style." : "Tour-specific review matching is being improved. Public customer feedback is available on the reviews page."} />
            {featuredReviews.length ? (
              <div className="grid gap-4 md:grid-cols-3">
                {featuredReviews.map((review) => (
                  <article key={`${review.name}-${review.tour}`} className="rounded-2xl border border-forest-900/10 bg-white p-5 shadow-soft">
                    <div className="flex text-saffron-500" aria-label={`${review.rating} star review`}>
                      {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill={index < review.rating ? "currentColor" : "none"} />)}
                    </div>
                    <p className="mt-4 text-sm leading-6 text-neutral-700">&ldquo;{review.text}&rdquo;</p>
                    <p className="mt-4 text-sm font-black text-forest-950">{review.name}</p>
                    <p className="text-xs font-bold text-neutral-500">{review.city} · {review.badge}</p>
                  </article>
                ))}
              </div>
            ) : null}
            <Link href="/reviews" className="mt-5 inline-flex font-black text-forest-800 hover:text-forest-950">Read all reviews</Link>
          </section>

          <section className="mt-12">
            <SectionHeading eyebrow="Gallery" title="Tour gallery" />
            <div className="grid gap-4 md:grid-cols-3">
              {tour.gallery.slice(0, 6).map((image) => <Image key={image} src={image} alt={`${tour.title} scenery with Lexuz Tours`} width={520} height={360} className="h-56 w-full rounded-2xl object-cover shadow-soft" />)}
            </div>
            {tour.itineraryImage ? (
              <div className="mt-6 rounded-2xl border border-forest-900/10 bg-white p-4 shadow-soft">
                <h3 className="mb-4 font-black uppercase text-forest-950">Official one-day trip poster</h3>
                <Image src={tour.itineraryImage} alt={`${tour.title} official itinerary poster`} width={1024} height={1536} className="mx-auto max-h-[860px] w-full rounded-xl object-contain" />
              </div>
            ) : null}
          </section>

          <section className="mt-12" id="faqs">
            <SectionHeading eyebrow="Questions" title="Frequently asked questions" />
            <FAQ items={faqs} />
          </section>

          <section className="mt-12 rounded-3xl bg-forest-950 p-6 text-white shadow-premium md:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.18em] text-saffron-300">Ready to reserve?</p>
                <h2 className="mt-2 text-3xl font-black">Book {tour.title} with Lexuz</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">Submit the booking form or message the team on WhatsApp. Your booking starts as Pending Verification until payment proof and details are reviewed.</p>
              </div>
              <TourProductActions tour={tour} sourceSlot="footer" initialCity={initialCity} />
            </div>
          </section>
        </main>

        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-premium">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-forest-700">Tour summary</p>
            <h2 className="mt-2 text-2xl font-black text-forest-950">{tour.title}</h2>
            <div className="mt-5 grid gap-3 text-sm">
              {[
                [Compass, "Region", tour.region],
                [CalendarDays, "Duration", tour.duration],
                [Clock, "Departure", tour.departure || "To be confirmed"],
                [Users, "Best for", tour.category === "one-day" ? "Friends, families, students" : "Families, couples, groups"],
                [Hotel, "Hotels", tour.category === "one-day" ? "Not applicable" : "Category confirmed on booking"]
              ].map(([Icon, label, value]) => (
                <div key={String(label)} className="flex items-start gap-3 rounded-xl bg-forest-50 p-3">
                  <Icon className="mt-0.5 shrink-0 text-forest-800" size={18} />
                  <p><span className="block text-xs font-black uppercase text-neutral-500">{String(label)}</span><span className="font-bold text-forest-950">{String(value)}</span></p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
            <h2 className="font-black text-forest-950">Why choose this tour?</h2>
            <div className="mt-4 grid gap-3">
              {whyChoose.slice(0, 5).map((item) => <p key={item} className="flex gap-2 text-sm leading-6 text-neutral-700"><Award className="mt-0.5 shrink-0 text-saffron-500" size={16} />{item}</p>)}
            </div>
          </div>

          <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
            <h2 className="font-black text-forest-950">Related tours</h2>
            <div className="mt-4 grid gap-4">
              {related.map((item) => <TourCard key={item.slug} tour={item} />)}
            </div>
          </div>

          <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft">
            <h2 className="font-black text-forest-950">Related destination links</h2>
            <div className="mt-4 grid gap-3 text-sm font-bold">
              <Link href="/destinations" className="rounded-xl bg-forest-50 p-3 text-forest-900 hover:bg-saffron-300/30">{destinationLinkLabel(tour)}</Link>
              <Link href="/blog/road-trip-guide-northern-areas" className="rounded-xl bg-forest-50 p-3 text-forest-900 hover:bg-saffron-300/30">Northern areas road trip tips</Link>
              <Link href="/blog/family-tours-in-pakistan" className="rounded-xl bg-forest-50 p-3 text-forest-900 hover:bg-saffron-300/30">Family tour planning guidance</Link>
            </div>
          </div>
        </aside>
      </section>

      <StickyTourActions tour={tour} />
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>
  );
}
