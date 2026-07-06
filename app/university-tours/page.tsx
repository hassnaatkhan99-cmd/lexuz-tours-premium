import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { tripPhotos } from "@/data/tripPhotos";

export const metadata: Metadata = {
  title: "University Tours",
  description: "Organized university and student trips by Lexuz.",
  openGraph: {
    title: "Lexuz University Tours",
    description: "Student group trips with transport, hotels, coordination and custom routes.",
    images: [tripPhotos.studentGroupCoaster.src]
  },
  twitter: {
    card: "summary_large_image",
    images: [tripPhotos.studentGroupCoaster.src]
  }
};

export default function UniversityToursPage() {
  return <><section className="container-page py-14"><SectionHeading eyebrow="Student Travel" title="University Tours" copy="Group-friendly travel plans for students with transport, hotels, coordination, safety and custom routes." /><div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center"><div className="grid gap-4 md:grid-cols-3 lg:grid-cols-1">{["Department trips", "Society trips", "Graduation tours"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-soft"><h2 className="font-black">{item}</h2><p className="mt-2 text-sm text-neutral-600">Designed for groups, class representatives and university societies.</p></div>)}</div><figure className="overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds3"><Image src={tripPhotos.studentGroupCoaster.src} alt={tripPhotos.studentGroupCoaster.alt} width={tripPhotos.studentGroupCoaster.width} height={tripPhotos.studentGroupCoaster.height} className="h-[360px] w-full object-cover" /><figcaption className="px-5 py-4 text-sm font-black text-brand-primary">{tripPhotos.studentGroupCoaster.caption}</figcaption></figure></div></section><CTASection title="Plan A University Trip" /></>;
}
