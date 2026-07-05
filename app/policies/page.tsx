import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, CreditCard, LifeBuoy, MapPinned, ShieldCheck, Undo2 } from "lucide-react";
import { PageBreadcrumbs, PromiseList } from "@/components/TrustSections";
import { DesignCard, DesignCardText, DesignCardTitle, DesignIcon } from "@/components/ui";
import { sourceFacts, trustFaqs } from "@/data/trust";
import { buildBreadcrumbJsonLd, buildFaqSchema, buildOrganizationSchema } from "@/lib/seo-foundation";

export const metadata: Metadata = {
  title: "Policies",
  description: "Plain-language Lexuz Tours policies for booking, payment, cancellation, jeep charges, safety and complaints."
};

export default function PoliciesPage() {
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Policies", path: "/policies" }
  ];
  const policySections = [
    { id: "booking-process", icon: ShieldCheck, title: "Booking Process", items: sourceFacts.bookingProcess },
    { id: "payment-policy", icon: CreditCard, title: "Payment Policy", items: sourceFacts.paymentPolicy },
    { id: "cancellation-refund", icon: Undo2, title: "Cancellation & Refund Policy", items: sourceFacts.cancellationPolicy },
    { id: "jeep-charges", icon: MapPinned, title: "Jeep Charges Policy", items: sourceFacts.jeepPolicy },
    { id: "safety-guidelines", icon: AlertCircle, title: "Safety & Travel Guidelines", items: sourceFacts.safetyGuidelines },
    { id: "contact-complaints", icon: LifeBuoy, title: "Contact & Complaints", items: sourceFacts.contactComplaints }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(trustFaqs)) }} />

      <section className="bg-brand-primary text-white">
        <div className="container-page py-10 md:py-14">
          <PageBreadcrumbs items={breadcrumbItems} tone="dark" />
          <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Trust centre</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Lexuz booking and travel policies</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">Plain-language information for customers before booking. Owner-confirmed information is shown clearly; missing policy details are marked as pending.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {policySections.map((section) => <a key={section.id} href={`#${section.id}`} className="focus-ring rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white hover:bg-white/15">{section.title}</a>)}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-6 py-16 lg:grid-cols-2">
        {policySections.map((section) => (
          <DesignCard key={section.id} id={section.id} className="scroll-mt-28">
            <DesignIcon icon={section.icon} tone="primary" />
            <DesignCardTitle className="mt-4 text-2xl">{section.title}</DesignCardTitle>
            <DesignCardText className="mt-2">Confirmed policy information from the Lexuz source facts document.</DesignCardText>
            <div className="mt-5">
              <PromiseList items={section.items} icon={section.id.includes("contact") ? "map" : "file"} />
            </div>
          </DesignCard>
        ))}
      </section>

      <section className="container-page pb-16">
        <div className="rounded-dsLg border border-lexuzNeutral-line bg-brand-secondary p-6 shadow-ds2 md:p-8">
          <h2 className="text-2xl font-black text-brand-primary">Related policy pages</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/terms-and-conditions" className="focus-ring rounded-dsMd bg-white px-4 py-3 font-black text-brand-primary shadow-ds1 hover:bg-lexuzNeutral-canvas">Terms & Conditions</Link>
            <Link href="/cancellation-policy" className="focus-ring rounded-dsMd bg-white px-4 py-3 font-black text-brand-primary shadow-ds1 hover:bg-lexuzNeutral-canvas">Cancellation Policy</Link>
            <Link href="/privacy-policy" className="focus-ring rounded-dsMd bg-white px-4 py-3 font-black text-brand-primary shadow-ds1 hover:bg-lexuzNeutral-canvas">Privacy Policy</Link>
          </div>
        </div>
      </section>
    </>
  );
}
