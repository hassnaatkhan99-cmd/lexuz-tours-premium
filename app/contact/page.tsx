import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialContactLinks } from "@/components/SocialContactLinks";
import { PageBreadcrumbs, PromiseList } from "@/components/TrustSections";
import { company } from "@/data/company";
import { sourceFacts } from "@/data/trust";
import { DesignInput, DesignTextarea, FieldGroup, FieldLabel } from "@/components/ui";
import { buildBreadcrumbJsonLd, buildOrganizationSchema } from "@/lib/seo-foundation";

export const metadata: Metadata = { title: "Contact", description: "Contact Lexuz Tours & Adventures in Rawalpindi." };

export default function ContactPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
      <section className="container-page py-16">
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
          <form className="grid gap-4 rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds1">
            <FieldGroup><FieldLabel htmlFor="contact-name">Full name</FieldLabel><DesignInput id="contact-name" placeholder="Full name" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="contact-phone">Phone number</FieldLabel><DesignInput id="contact-phone" placeholder="Phone number" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="contact-email">Email address</FieldLabel><DesignInput id="contact-email" type="email" placeholder="Email address" /></FieldGroup>
            <FieldGroup><FieldLabel htmlFor="contact-plan">Your travel plan</FieldLabel><DesignTextarea id="contact-plan" placeholder="Tell us destination, dates and number of travelers" /></FieldGroup>
            <button className="focus-ring rounded-dsMd bg-brand-primary px-5 py-3 font-black text-white shadow-ds1 hover:bg-brand-primaryHover">Send Inquiry</button>
          </form>
        </div>
        <section className="mt-10 rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds2 md:p-8">
          <SectionHeading eyebrow="Contact & complaints" title="Need help after booking?" copy="Use the official Lexuz contact channels below for booking questions, complaints, payment follow-up or travel support." />
          <PromiseList items={sourceFacts.contactComplaints} icon="map" />
        </section>
      </section>
    </>
  );
}
