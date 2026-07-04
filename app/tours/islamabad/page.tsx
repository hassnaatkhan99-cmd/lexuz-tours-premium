import type { Metadata } from "next";
import { CityHubPage } from "@/components/CityHubPage";
import { cityHubs } from "@/data/cityHubs";
import { canonical } from "@/lib/seo";

const hub = cityHubs.islamabad;

export const metadata: Metadata = {
  title: hub.title,
  description: hub.description,
  alternates: {
    canonical: canonical(hub.path)
  },
  openGraph: {
    title: hub.title,
    description: hub.description,
    url: canonical(hub.path),
    images: [{ url: hub.heroImage, width: 1200, height: 630, alt: hub.heroAlt }]
  },
  twitter: {
    card: "summary_large_image",
    title: hub.title,
    description: hub.description,
    images: [hub.heroImage]
  }
};

export default function IslamabadToursPage() {
  return <CityHubPage hub={hub} />;
}
