import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { company } from "@/data/company";
import { seoLandingPages } from "@/data/seoLandingPages";
import { tours } from "@/data/tours";

const staticRoutes = [
  "",
  "/public-trips",
  "/destinations",
  "/price-list",
  "/reviews",
  "/blog",
  "/about",
  "/contact",
  "/corporate-tours",
  "/university-tours",
  "/honeymoon-tours",
  "/custom-tours",
  "/booking",
  "/booking-status",
  "/policies",
  "/terms-and-conditions",
  "/privacy-policy",
  "/cancellation-policy"
];

function url(path: string) {
  return `${company.website}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...staticRoutes.map((route) => ({
      url: url(route),
      lastModified: now,
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.75
    })),
    ...tours.map((tour) => ({
      url: url(`/tours/${tour.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9
    })),
    ...seoLandingPages.map((page) => ({
      url: url(`/${page.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...blogPosts.map((post) => ({
      url: url(`/blog/${post.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
