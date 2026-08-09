import type { MetadataRoute } from "next";
import { cityHubs } from "@/data/cityHubs";
import { company } from "@/data/company";
import { tours } from "@/data/tours";

type SitemapRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const staticRoutes: SitemapRoute[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/public-trips", changeFrequency: "weekly", priority: 0.9 },
  { path: "/destinations", changeFrequency: "monthly", priority: 0.85 },
  { path: "/price-list", changeFrequency: "weekly", priority: 0.8 },
  { path: "/reviews", changeFrequency: "monthly", priority: 0.75 },
  { path: "/about", changeFrequency: "monthly", priority: 0.75 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.75 },
  { path: "/corporate-tours", changeFrequency: "monthly", priority: 0.75 },
  { path: "/university-tours", changeFrequency: "monthly", priority: 0.75 },
  { path: "/honeymoon-tours", changeFrequency: "monthly", priority: 0.75 },
  { path: "/custom-tours", changeFrequency: "monthly", priority: 0.75 },
  { path: "/policies", changeFrequency: "yearly", priority: 0.5 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.45 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.45 },
  { path: "/cancellation-policy", changeFrequency: "yearly", priority: 0.45 }
];

const cityHubRoutes: SitemapRoute[] = Object.values(cityHubs).map((hub) => ({
  path: hub.path,
  changeFrequency: "weekly",
  priority: 0.9
}));

function url(path: string) {
  return `${company.website}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...[...staticRoutes, ...cityHubRoutes].map((route) => ({
      url: url(route.path),
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...tours.map((tour) => ({
      url: url(`/tours/${tour.slug}`),
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
  ];
}
