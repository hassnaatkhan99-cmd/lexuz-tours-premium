import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  CalendarCheck,
  Camera,
  CheckCircle2,
  ClipboardList,
  Headphones,
  Hotel,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  ShieldCheck,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { company, whatsappUrl } from "@/data/company";
import { FAQ } from "./FAQ";
import { SectionHeading } from "./SectionHeading";

type ServiceFeature = {
  title: string;
  text: string;
  icon?: LucideIcon;
};

type ServiceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type ServiceLandingPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  overview: string[];
  heroImage: ServiceImage;
  supportImage?: ServiceImage;
  audienceTitle: string;
  audiences: string[];
  arrangements: string[];
  process: ServiceFeature[];
  whyChoose: ServiceFeature[];
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaCopy: string;
  whatsappMessage: string;
};

const defaultArrangementIcons = [Route, BusIcon, Hotel, BedDouble, Camera, ShieldCheck, Headphones, CalendarCheck];

function BusIcon({ className, size }: { className?: string; size?: number }) {
  return <Users className={className} size={size} aria-hidden="true" />;
}

export function ServiceLandingPage({
  eyebrow,
  title,
  description,
  overview,
  heroImage,
  supportImage,
  audienceTitle,
  audiences,
  arrangements,
  process,
  whyChoose,
  faqs,
  ctaTitle,
  ctaCopy,
  whatsappMessage
}: ServiceLandingPageProps) {
  return (
    <>
      <section className="relative overflow-hidden bg-forest-950 text-white">
        <div className="absolute inset-0">
          <Image src={heroImage.src} alt={heroImage.alt} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/90 via-forest-950/58 to-forest-950/18" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(217,164,65,.28),transparent_24rem),radial-gradient(circle_at_78%_18%,rgba(255,255,255,.16),transparent_22rem)]" />
          <div className="hero-mist" aria-hidden="true" />
        </div>
        <div className="container-page relative z-10 flex min-h-[560px] items-center py-20">
          <div className="max-w-3xl reveal-soft">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-brand-accent backdrop-blur">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-black uppercase leading-[1.02] tracking-tight md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="focus-ring premium-shine magnetic-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-brand-whatsapp px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(37,211,102,.24)]">
                <MessageCircle size={18} aria-hidden="true" />
                Book on WhatsApp
              </Link>
              <Link href={company.callHref} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-brand-primary">
                <Phone size={18} aria-hidden="true" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cinematic-band py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.84fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Overview" title="A complete travel service, not just transport" copy={overview[0]} />
            <div className="grid gap-4 text-base leading-8 text-lexuzNeutral-70">
              {overview.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <figure className="luxury-card overflow-hidden rounded-[30px] border border-white/70 bg-white/88 shadow-[0_28px_80px_rgba(20,32,27,.16)] backdrop-blur">
            <Image src={(supportImage ?? heroImage).src} alt={(supportImage ?? heroImage).alt} width={(supportImage ?? heroImage).width} height={(supportImage ?? heroImage).height} className="h-[390px] w-full object-cover transition duration-500 hover:scale-[1.02]" />
            {(supportImage ?? heroImage).caption ? <figcaption className="px-5 py-4 text-sm font-black text-brand-primary">{(supportImage ?? heroImage).caption}</figcaption> : null}
          </figure>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <SectionHeading eyebrow="Who It Is For" title={audienceTitle} copy="Lexuz plans around the people travelling, the level of comfort required and the purpose of the trip." />
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audiences.map((item) => (
              <div key={item} className="luxury-card rounded-[22px] border border-white/70 bg-white/88 p-5 shadow-ds1 backdrop-blur">
                <CheckCircle2 className="text-brand-primary" size={20} aria-hidden="true" />
                <h2 className="mt-3 text-base font-black text-lexuzNeutral-100">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stone-band py-16">
        <div className="container-page">
          <SectionHeading eyebrow="What We Can Arrange" title="Everything needed for a managed trip" copy="The exact plan depends on your destination, group size and comfort level, but Lexuz can coordinate the core travel elements that make a trip feel organised." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arrangements.map((item, index) => {
              const Icon = defaultArrangementIcons[index % defaultArrangementIcons.length];
              return (
                <div key={item} className="trust-fact rounded-[22px] border border-white/70 p-5 shadow-ds1">
                  <Icon className="text-brand-accent" size={22} aria-hidden="true" />
                  <p className="mt-3 text-sm font-black leading-6 text-brand-primary">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="How It Works" title="Simple planning from first message to departure" />
        <div className="grid gap-4 md:grid-cols-4">
          {process.map((step, index) => {
            const Icon = step.icon ?? ClipboardList;
            return (
              <article key={step.title} className="luxury-card rounded-[24px] border border-white/70 bg-white/88 p-6 shadow-ds1 backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-primary text-sm font-black text-white">{index + 1}</span>
                  {index < process.length - 1 ? <ArrowRight className="hidden text-brand-accent md:block" size={20} aria-hidden="true" /> : null}
                </div>
                <Icon className="mt-5 text-brand-accent" size={24} aria-hidden="true" />
                <h2 className="mt-4 text-lg font-black text-lexuzNeutral-100">{step.title}</h2>
                <p className="mt-2 text-sm leading-6 text-lexuzNeutral-60">{step.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="forest-band py-16 text-white">
        <div className="container-page">
          <SectionHeading eyebrow="Why Choose Lexuz" title="Premium planning with practical ground support" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => {
              const Icon = item.icon ?? ShieldCheck;
              return (
                <article key={item.title} className="luxury-glass rounded-[24px] p-6 text-forest-950">
                  <Icon className="text-brand-accent" size={24} aria-hidden="true" />
                  <h2 className="mt-4 text-lg font-black">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-forest-950/70">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading eyebrow="Questions" title="Useful questions before requesting a quote" />
        <FAQ items={faqs} />
      </section>

      <section className="container-page pb-16">
        <div className="night-sky rounded-[34px] border border-white/10 p-8 text-white shadow-[0_36px_110px_rgba(7,18,15,.32)] md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-accent">Request a quotation</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-5xl">{ctaTitle}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">{ctaCopy}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer" className="focus-ring premium-shine magnetic-hover inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-whatsapp px-5 py-3 text-sm font-black text-white shadow-[0_18px_44px_rgba(37,211,102,.24)]">
                <MessageCircle size={18} aria-hidden="true" />
                Book on WhatsApp
              </Link>
              <Link href={company.callHref} className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-black text-white backdrop-blur hover:bg-white hover:text-brand-primary">
                <Phone size={18} aria-hidden="true" />
                Call Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
