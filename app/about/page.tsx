import type { Metadata } from "next";
import Image from "next/image";
import { Bus, FileCheck2, MessageCircle, Route, ShieldCheck } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { FounderSection, PageBreadcrumbs, PromiseList, TrustFactGrid } from "@/components/TrustSections";
import { DesignCard, DesignCardText, DesignCardTitle, DesignIcon } from "@/components/ui";
import { company } from "@/data/company";
import { companyImages } from "@/data/tours";
import { tripPhotos } from "@/data/tripPhotos";
import { sourceFacts, trustFaqs } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildFaqSchema, buildOrganizationSchema } from "@/lib/seo-foundation";

export const metadata: Metadata = {
  title: "About Lexuz Tours & Adventures",
  description: "Learn the story, founder details, office information, customer promise and travel policies behind Lexuz Tours & Adventures.",
  openGraph: {
    title: "About Lexuz Tours & Adventures",
    description: "Real office, fleet and trip proof from Lexuz Tours & Adventures.",
    images: [tripPhotos.groupDepartureSummer.src]
  },
  twitter: {
    card: "summary_large_image",
    images: [tripPhotos.groupDepartureSummer.src]
  }
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" }
  ];
  const whyChoose = [
    { icon: Route, title: "Started on the road", text: "Lexuz began with a Miranjani Top trip in 2018, planned by a founder who loved travelling northern Pakistan." },
    { icon: Bus, title: "Real Lexuz visuals", text: "The website prioritizes real office, fleet and trip photography over generic destination stock." },
    { icon: FileCheck2, title: "Clear public details", text: "Lexuz keeps office, contact, pricing and policy information visible before customers book." },
    { icon: MessageCircle, title: "Direct contact", text: "Customers can call or WhatsApp Lexuz through the official numbers published across the website." }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(trustFaqs)) }} />

      <section className="bg-brand-primary text-white">
        <div className="container-page py-10 md:py-14">
          <PageBreadcrumbs items={breadcrumbItems} tone="dark" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-accent">About Lexuz Tours</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">A travel company built from a real first departure</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/78">{sourceFacts.companyStory[0]}</p>
            </div>
            <div className="rounded-dsLg border border-white/10 bg-white/8 p-5 shadow-ds3 backdrop-blur">
              <p className="text-sm font-bold leading-7 text-white/80">{company.address}</p>
              <p className="mt-4 text-sm font-black text-brand-accent">Call {company.callPhone}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <TrustFactGrid items={sourceFacts.trustClaims} />
      </section>

      <section className="container-page grid gap-8 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Image src={companyImages.office} alt="Lexuz Tours office in Rawalpindi" width={900} height={700} className="h-full max-h-[620px] w-full rounded-dsLg object-cover shadow-ds3" />
        <div>
          <SectionHeading eyebrow="Company story" title="From hand-printed posters to weekly departures" />
          <div className="grid gap-4 text-base leading-8 text-lexuzNeutral-70">
            {sourceFacts.companyStory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      <section className="container-page pb-16">
        <FounderSection founder={sourceFacts.founder} />
      </section>

      <section className="container-page pb-16">
        <SectionHeading eyebrow="Real photography" title="Office, fleet and trip proof" copy="Real Lexuz photos help customers see the people, vehicles and departures behind the service before they book." />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: tripPhotos.groupDepartureSummer.src, alt: tripPhotos.groupDepartureSummer.alt, caption: tripPhotos.groupDepartureSummer.caption, width: tripPhotos.groupDepartureSummer.width, height: tripPhotos.groupDepartureSummer.height },
            { src: tripPhotos.studentGroupCoaster.src, alt: tripPhotos.studentGroupCoaster.alt, caption: tripPhotos.studentGroupCoaster.caption, width: tripPhotos.studentGroupCoaster.width, height: tripPhotos.studentGroupCoaster.height },
            { src: companyImages.office, alt: "Lexuz Tours office in Rawalpindi", caption: "Lexuz Tours office in Rawalpindi", width: 720, height: 520 }
          ].map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds2">
              <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} className="h-64 w-full object-cover" />
              <figcaption className="px-5 py-4 text-sm font-black text-brand-primary">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-brand-secondary py-16" id="why-choose-lexuz">
        <div className="container-page">
          <SectionHeading eyebrow="Why choose Lexuz" title="Trust built from visible proof" copy="Lexuz keeps customer information practical, direct and supported by real office, fleet and trip visuals." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <DesignCard key={item.title} variant="interactive">
                <DesignIcon icon={item.icon} tone="primary" />
                <DesignCardTitle className="mt-4">{item.title}</DesignCardTitle>
                <DesignCardText className="mt-2">{item.text}</DesignCardText>
              </DesignCard>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-8 py-16 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Customer promise" title="Clear information before travellers pay" />
          <PromiseList items={sourceFacts.customerPromise} />
        </div>
        <div>
          <SectionHeading eyebrow="Booking process" title="Simple steps from inquiry to verification" />
          <PromiseList items={sourceFacts.bookingProcess} icon="file" />
        </div>
      </section>

      <section className="container-page grid gap-8 pb-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <figure className="overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds3">
          <Image src={tripPhotos.fleetThreeCoastersNight.src} alt={tripPhotos.fleetThreeCoastersNight.alt} width={tripPhotos.fleetThreeCoastersNight.width} height={tripPhotos.fleetThreeCoastersNight.height} className="h-[360px] w-full object-cover" />
          <figcaption className="px-5 py-4 text-sm font-black text-brand-primary">{tripPhotos.fleetThreeCoastersNight.caption}</figcaption>
        </figure>
        <div>
          <SectionHeading eyebrow="Our fleet" title="Visible transport before departure" copy="Fleet photography is shown separately from destination imagery so customers can distinguish real Lexuz assets from scenic travel photos." />
          <PromiseList items={["Branded coasters are used as a visible trust signal for group travel.", "Transport coordination is handled before departure and during route movement.", "Customers can review booking, pickup and payment details with the team before final confirmation."]} />
        </div>
      </section>

      <section className="container-page pb-16">
        <div className="grid gap-4 rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds2 md:grid-cols-3 md:p-8">
          {sourceFacts.team.map((member) => (
            <div key={member.name} className="rounded-dsMd bg-lexuzNeutral-canvas p-5">
              <ShieldCheck className="text-brand-primary" size={22} aria-hidden="true" />
              <h2 className="mt-3 font-black text-lexuzNeutral-100">{member.name}</h2>
              <p className="mt-1 text-sm font-bold text-brand-primary">{member.role}</p>
              <p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{member.status}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
