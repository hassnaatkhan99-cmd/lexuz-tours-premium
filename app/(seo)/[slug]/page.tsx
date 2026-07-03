import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { FAQ } from "@/components/FAQ";
import { SectionHeading } from "@/components/SectionHeading";
import { buildLandingSections, getRelatedTours, getSeoLandingPage, landingFaqs, seoLandingPages } from "@/data/seoLandingPages";
import { money } from "@/data/tours";
import { absoluteUrl, canonical } from "@/lib/seo";

export function generateStaticParams() {
  return seoLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: canonical(`/${page.slug}`) },
    openGraph: {
      title: page.title,
      description: page.description,
      url: canonical(`/${page.slug}`),
      images: [page.image],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image]
    }
  };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);
  if (!page) notFound();

  const relatedTours = getRelatedTours(page);
  const sections = buildLandingSections(page);
  const faqs = landingFaqs(page);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: page.h1, item: absoluteUrl(`/${page.slug}`) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="relative overflow-hidden py-24 text-white">
        <Image src={page.image} alt={page.h1} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/75 to-black/35" />
        <div className="container-page relative z-10 max-w-4xl">
          <p className="script text-4xl text-saffron-400">Escape • Explore • Enjoy</p>
          <h1 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">{page.description}</p>
          <div className="mt-8 flex flex-wrap gap-3"><ButtonLink href="/public-trips">Explore Tours</ButtonLink><WhatsAppButton tourName={page.h1} /></div>
        </div>
      </section>
      <section className="container-page py-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm font-bold text-neutral-500">
          <Link href="/" className="text-forest-800">Home</Link>
          <span className="mx-2">/</span>
          <span>{page.h1}</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="space-y-10">
            {sections.map((section, index) => (
              <section key={section.title} className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
                {index === 0 ? (
                  <SectionHeading eyebrow="Destination Guide" title={section.title} copy={section.paragraphs[0]} />
                ) : (
                  <h2 className="text-3xl font-black text-forest-950">{section.title}</h2>
                )}
                <div className="mt-4 grid gap-4 text-base leading-8 text-neutral-700">
                  {section.paragraphs.slice(index === 0 ? 1 : 0).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <section>
              <h2 className="text-3xl font-black text-forest-950">Tour Highlights</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {["Scenic road travel", "Managed hotel coordination", "Photography viewpoints", "Clear pickup planning", "WhatsApp support", "Transparent inclusions", "Family and group friendly", "Booking status tracking"].map((item) => <p key={item} className="rounded-md border border-forest-900/10 bg-white p-4 font-bold text-forest-900 shadow-soft">{item}</p>)}
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-black text-forest-950">Why Choose Lexuz</h2>
              <p className="mt-4 leading-8 text-neutral-700">Lexuz Tours & Adventures is a Rawalpindi based travel company serving Islamabad, Rawalpindi, Lahore and nationwide travelers. The company is built around trusted public trips, premium transport, visible customer support and practical travel planning. For customers searching for a tour operator in Rawalpindi, travel agency Islamabad or Pakistan tour packages, Lexuz offers a direct booking path with clear prices and real trip support.</p>
            </section>
            <section>
              <h2 className="text-3xl font-black text-forest-950">Frequently Asked Questions</h2>
              <div className="mt-5"><FAQ items={faqs} /></div>
            </section>
          </article>
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium">
              <h2 className="text-xl font-black">Related Tours</h2>
              {relatedTours.map((tour) => tour ? <Link key={tour.slug} href={`/tours/${tour.slug}`} className="focus-ring mt-4 block cursor-pointer rounded-md border border-forest-900/10 bg-forest-50 p-4 transition hover:-translate-y-0.5 hover:border-forest-800/30 hover:bg-white hover:shadow-soft" aria-label={`View details for ${tour.title}`}><strong>{tour.title}</strong><span className="mt-1 block text-sm text-neutral-600">{tour.duration} • From {money(tour.prices[0].islamabadPrice)}</span></Link> : null)}
            </div>
            <div className="rounded-lg border border-forest-900/10 bg-forest-900 p-6 text-white shadow-premium">
              <h2 className="text-2xl font-black">Ready To Book?</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">Send a booking request or talk to Lexuz on WhatsApp for package guidance.</p>
              <div className="mt-5 grid gap-3"><ButtonLink href="/booking">Book Now</ButtonLink><WhatsAppButton tourName={page.h1} /></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
