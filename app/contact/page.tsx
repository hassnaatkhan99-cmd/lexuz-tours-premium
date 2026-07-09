import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialContactLinks } from "@/components/SocialContactLinks";
import { PageBreadcrumbs, PromiseList } from "@/components/TrustSections";
import { company } from "@/data/company";
import { sourceFacts } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildOrganizationSchema } from "@/lib/seo-foundation";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Lexuz Tours",
  description: "Call, WhatsApp or visit Lexuz Tours & Adventures in Rawalpindi for Pakistan tour bookings, public trips and custom travel planning.",
  alternates: { canonical: canonical("/contact") },
  openGraph: {
    title: "Contact Lexuz Tours & Adventures",
    description: "Speak directly with Lexuz Tours for Pakistan tour bookings, public trips and private travel planning.",
    url: canonical("/contact"),
    images: ["/images/trip/lexuz-fleet-three-coasters-night.webp"]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/trip/lexuz-fleet-three-coasters-night.webp"]
  }
};

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
      <section className="cinematic-band py-16">
        <div className="container-page">
        <PageBreadcrumbs items={breadcrumbItems} />
        <div className="mt-8">
          <SectionHeading eyebrow="Contact" title="Visit, call or message Lexuz" copy="Speak with the team about public departures, private trips, university tours, corporate travel or custom family planning." />
        </div>
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-dsLg bg-brand-primary p-7 text-white shadow-ds3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-accent">Lexuz office</p>
            <h2 className="mt-2 text-2xl font-black">Rawalpindi booking support</h2>
            <a href={company.callHref} className="mt-6 flex gap-3 hover:text-brand-accent" aria-label="Call Lexuz Tours"><Phone className="text-brand-accent" />{company.callPhone}</a>
            <a href={`mailto:${company.email}`} className="mt-4 flex gap-3 hover:text-brand-accent"><Mail className="text-brand-accent" />{company.email}</a>
            <p className="mt-4 flex gap-3 leading-7"><MapPin className="mt-1 shrink-0 text-brand-accent" />{company.address}</p>
            <div className="mt-6">
              <SocialContactLinks variant="contact" showLabels />
            </div>
            <div className="mt-8 flex flex-wrap gap-3"><WhatsAppButton /><ButtonLink href={company.maps} variant="outline">Open Map</ButtonLink></div>
          </div>
          <div className="rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds1 md:p-8">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">Fast booking guidance</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-lexuzNeutral-100">Talk to Lexuz before you book</h2>
            <p className="mt-4 leading-8 text-lexuzNeutral-70">
              For the quickest response, message the Lexuz team on WhatsApp with your destination, preferred date, departure city and number of travelers.
              You can also call directly or email for company, university and private group planning.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a href={company.callHref} className="focus-ring flex items-center gap-3 rounded-dsMd border border-lexuzNeutral-line bg-lexuzNeutral-canvas p-4 font-black text-brand-primary shadow-ds1 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-ds2" aria-label="Call Lexuz Tours">
                <Phone size={20} />
                Call Lexuz
              </a>
              <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-3 rounded-dsMd border border-brand-whatsapp/20 bg-brand-whatsapp p-4 font-black text-white shadow-ds1 transition hover:-translate-y-0.5 hover:brightness-95 hover:shadow-ds2" aria-label="WhatsApp Lexuz Tours">
                <MessageCircle size={20} />
                WhatsApp Lexuz
              </a>
              <a href={`mailto:${company.email}`} className="focus-ring flex items-center gap-3 rounded-dsMd border border-lexuzNeutral-line bg-lexuzNeutral-canvas p-4 font-black text-brand-primary shadow-ds1 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-ds2">
                <Mail size={20} />
                Email Lexuz
              </a>
              <Link href="/booking" className="focus-ring flex items-center gap-3 rounded-dsMd border border-lexuzNeutral-line bg-brand-secondary p-4 font-black text-brand-primary shadow-ds1 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-ds2">
                Book online
              </Link>
            </div>
            <div className="mt-6 rounded-dsMd border border-brand-accent/30 bg-[#fff8e6] p-4 text-sm leading-6 text-lexuzNeutral-70">
              Share your destination, dates, pickup city and traveler count so the team can guide you with the right public trip or private plan.
            </div>
          </div>
        </div>
        <section className="mt-10 rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds2 md:p-8">
          <SectionHeading eyebrow="Contact & complaints" title="Need help after booking?" copy="Use the official Lexuz contact channels below for booking questions, complaints, payment follow-up or travel support." />
          <PromiseList items={sourceFacts.contactComplaints} icon="map" />
        </section>
        </div>
      </section>
    </>
  );
}
