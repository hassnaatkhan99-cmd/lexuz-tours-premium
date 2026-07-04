import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialContactLinks } from "@/components/SocialContactLinks";
import { company } from "@/data/company";

export const metadata: Metadata = { title: "Contact", description: "Contact Lexuz Tours & Adventures in Rawalpindi." };

export default function ContactPage() {
  return (
    <section className="container-page py-14">
      <SectionHeading eyebrow="Contact" title="Visit, Call Or Message Lexuz" />
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="rounded-lg bg-forest-900 p-7 text-white shadow-premium">
          <a href={company.callHref} className="flex gap-3 hover:text-saffron-200" aria-label="Call Lexuz Tours"><Phone className="text-saffron-300" />{company.callPhone}</a>
          <p className="mt-4 flex gap-3"><Mail className="text-saffron-300" />{company.email}</p>
          <p className="mt-4 flex gap-3"><MapPin className="shrink-0 text-saffron-300" />{company.address}</p>
          <div className="mt-6">
            <SocialContactLinks variant="contact" showLabels />
          </div>
          <div className="mt-8 flex flex-wrap gap-3"><WhatsAppButton /><ButtonLink href={company.maps} variant="outline">Open Map</ButtonLink></div>
        </div>
        <form className="grid gap-4 rounded-lg bg-white p-6 shadow-soft">
          <input className="rounded-md border border-neutral-200 px-4 py-3" placeholder="Full name" />
          <input className="rounded-md border border-neutral-200 px-4 py-3" placeholder="Phone number" />
          <input className="rounded-md border border-neutral-200 px-4 py-3" placeholder="Email address" />
          <textarea className="min-h-32 rounded-md border border-neutral-200 px-4 py-3" placeholder="Your travel plan" />
          <button className="rounded-md bg-saffron-400 px-5 py-3 font-black text-forest-900">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
}
