import { FileText } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { PageBreadcrumbs, PromiseList } from "./TrustSections";
import { DesignIcon } from "@/components/ui";
import { buildBreadcrumbJsonLd, buildOrganizationSchema, type BreadcrumbItem } from "@/lib/seo-foundation";

export function PolicyPage({ title, items, description, path = "#" }: { title: string; items: string[]; description?: string; path?: string }) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    { name: title, path }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbJsonLd(breadcrumbItems)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema()) }} />
      <section className="night-sky text-white">
        <div className="container-page py-10 md:py-14">
          <PageBreadcrumbs items={breadcrumbItems} tone="dark" />
          <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Policy</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
          {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">{description}</p> : null}
        </div>
      </section>
      <section className="cinematic-band py-14">
        <div className="container-page rounded-[24px] border border-white/70 bg-white/88 p-6 shadow-[0_24px_70px_rgba(20,32,27,.12)] backdrop-blur md:p-8">
          <SectionHeading eyebrow="Plain language terms" title={title} />
          <div className="mt-2 flex gap-3 rounded-dsMd bg-brand-secondary p-4 text-sm leading-6 text-brand-primary">
            <DesignIcon icon={FileText} tone="primary" />
            These terms are written in simple language so customers can understand key booking, payment and travel rules before reserving a trip.
          </div>
          <div className="mt-6">
            <PromiseList items={items} icon="file" />
          </div>
        </div>
      </section>
    </>
  );
}
