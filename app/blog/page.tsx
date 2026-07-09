import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts } from "@/data/blogPosts";
import { canonical } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pakistan Travel Blog",
  description: "Pakistan travel guides, tour planning tips and northern areas destination advice by Lexuz Tours.",
  alternates: { canonical: canonical("/blog") },
  openGraph: {
    title: "Pakistan Travel Blog | Lexuz Tours",
    description: "Travel guides for Hunza, Skardu, Swat, Kashmir, Naran Kaghan and northern Pakistan trips.",
    url: canonical("/blog"),
    images: ["/images/trip/lexuz-group-meadow-banner.webp"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pakistan Travel Blog | Lexuz Tours",
    description: "Practical Pakistan travel guides and tour planning tips by Lexuz Tours.",
    images: ["/images/trip/lexuz-group-meadow-banner.webp"]
  }
};

export default function BlogPage() {
  return <section className="container-page py-14"><SectionHeading eyebrow="Blog" title="Pakistan Travel Guides" copy="Original travel guidance for planning safer, smoother Pakistan tours with Lexuz." /><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{blogPosts.map((post) => <article key={post.slug} className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft"><p className="text-xs font-black uppercase text-forest-700">{post.category}</p><h2 className="mt-3 text-xl font-black">{post.title}</h2><p className="mt-3 text-sm leading-6 text-neutral-600">{post.description}</p><Link href={`/blog/${post.slug}`} className="mt-5 inline-flex font-black text-forest-800">Read Guide →</Link></article>)}</div></section>;
}
