import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "University Tours", description: "Organized university and student trips by Lexuz." };

export default function UniversityToursPage() {
  return <><section className="container-page py-14"><SectionHeading eyebrow="Student Travel" title="University Tours" copy="Group-friendly travel plans for students with transport, hotels, coordination, safety and custom routes." /><div className="grid gap-4 md:grid-cols-3">{["Department trips", "Society trips", "Graduation tours"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-soft"><h2 className="font-black">{item}</h2><p className="mt-2 text-sm text-neutral-600">Designed for groups, class representatives and university societies.</p></div>)}</div></section><CTASection title="Plan A University Trip" /></>;
}
