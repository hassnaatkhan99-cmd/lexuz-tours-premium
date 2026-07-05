import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight, FileText, MapPin, ShieldCheck, UserRound } from "lucide-react";
import { DesignCard, DesignCardText, DesignCardTitle, DesignIcon } from "@/components/ui";
import type { BreadcrumbItem } from "@/lib/seo-foundation/breadcrumbs";

export function PageBreadcrumbs({ items, tone = "light" }: { items: BreadcrumbItem[]; tone?: "light" | "dark" }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-2 text-sm font-bold ${tone === "dark" ? "text-white/75" : "text-lexuzNeutral-60"}`}>
      {items.map((item, index) => (
        <span key={item.path} className="inline-flex items-center gap-2">
          {index > 0 ? <ChevronRight size={14} aria-hidden="true" /> : null}
          {index === items.length - 1 ? (
            <span>{item.name}</span>
          ) : (
            <Link href={item.path} className={tone === "dark" ? "hover:text-brand-accent" : "hover:text-brand-primary"}>{item.name}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function FounderPhotoPlaceholder({ name }: { name: string }) {
  return (
    <div className="grid aspect-[4/5] min-h-[360px] place-items-center rounded-dsLg border border-lexuzNeutral-line bg-brand-secondary p-8 text-center shadow-ds2">
      <div>
        <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-white text-brand-primary shadow-ds1">
          <UserRound size={42} strokeWidth={1.5} aria-hidden="true" />
        </div>
        <p className="mt-5 text-xl font-black text-brand-primary">{name}</p>
        <p className="mt-2 text-sm font-bold text-lexuzNeutral-60">Founder photo placeholder</p>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-lexuzNeutral-60">Information will be updated when the final founder photo is provided.</p>
      </div>
    </div>
  );
}

export function FounderSection({ founder }: { founder: { name: string; position: string; photo: string | null; biography: string; vision: string; message: string } }) {
  return (
    <section className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      {founder.photo ? (
        <Image src={founder.photo} alt={`${founder.name}, ${founder.position}`} width={720} height={900} className="aspect-[4/5] rounded-dsLg object-cover shadow-ds3" />
      ) : (
        <FounderPhotoPlaceholder name={founder.name} />
      )}
      <div className="rounded-dsLg border border-lexuzNeutral-line bg-white p-6 shadow-ds2 md:p-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-primary">Founder</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-lexuzNeutral-100 md:text-4xl">{founder.name}</h2>
        <p className="mt-2 text-sm font-black text-brand-accent">{founder.position}</p>
        <div className="mt-6 grid gap-5 text-base leading-8 text-lexuzNeutral-70">
          <p>{founder.biography}</p>
          <div className="rounded-dsMd bg-brand-secondary p-5">
            <h3 className="font-black text-brand-primary">Vision</h3>
            <p className="mt-2">{founder.vision}</p>
          </div>
          <div className="rounded-dsMd border border-brand-accent/35 bg-[#fbf6e8] p-5">
            <h3 className="font-black text-brand-primary">Message to travellers</h3>
            <p className="mt-2">{founder.message}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustFactGrid({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <DesignCard key={item.title} variant="interactive">
          <DesignIcon icon={ShieldCheck} tone="primary" />
          <DesignCardTitle className="mt-4">{item.title}</DesignCardTitle>
          <DesignCardText className="mt-2">{item.text}</DesignCardText>
        </DesignCard>
      ))}
    </div>
  );
}

export function PromiseList({ items, icon = "check" }: { items: string[]; icon?: "check" | "file" | "map" }) {
  const Icon = icon === "file" ? FileText : icon === "map" ? MapPin : CheckCircle2;
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <p key={item} className="flex gap-3 rounded-dsMd border border-lexuzNeutral-line bg-white p-4 text-sm font-bold leading-6 text-lexuzNeutral-70 shadow-ds1">
          <Icon className="mt-0.5 shrink-0 text-brand-primary" size={18} aria-hidden="true" />
          {item}
        </p>
      ))}
    </div>
  );
}
