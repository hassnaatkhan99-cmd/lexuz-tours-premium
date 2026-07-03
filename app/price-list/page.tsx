import type { Metadata } from "next";
import { PriceList } from "@/components/PriceList";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = { title: "Price List", description: "Official Lexuz Tours price list for Islamabad and Lahore departures." };

export default function PriceListPage() {
  return <section className="container-page py-14"><SectionHeading eyebrow="Official Prices" title="Lexuz Tours Price List" copy="Compare Islamabad / Rawalpindi and Lahore pricing for all eligible tours." /><PriceList /></section>;
}
