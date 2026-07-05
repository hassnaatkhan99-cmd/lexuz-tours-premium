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
      <section className="bg-brand-primary text-white">
        <div className="container-page py-10 md:py-14">
          <PageBreadcrumbs items={breadcrumbItems} tone="dark" />
          <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-brand-accent">Policy</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
          {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">{description}</p> : null}
        </div>
      </section>
      <section className="container-page py-14">
        <div className="rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds2 md:p-8">
          <SectionHeading eyebrow="Plain language terms" title={title} />
          <div className="mt-2 flex gap-3 rounded-dsMd bg-brand-secondary p-4 text-sm leading-6 text-brand-primary">
            <DesignIcon icon={FileText} tone="primary" />
            These public policy statements are based on confirmed Lexuz source facts. Missing owner-confirmed information is marked clearly instead of invented.
          </div>
          <div className="mt-6">
            <PromiseList items={items} icon="file" />
          </div>
        </div>
      </section>
    </>
  );
}
