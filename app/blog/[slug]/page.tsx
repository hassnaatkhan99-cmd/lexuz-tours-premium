import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, WhatsAppButton } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, buildBlogSections, getBlogPost } from "@/data/blogPosts";
import { absoluteUrl, canonical } from "@/lib/seo";

function blogOgImage(slug: string) {
  if (slug.includes("swat")) return "/images/trip/lexuz-malam-jabba-winter-group.webp";
  if (slug.includes("university")) return "/images/trip/lexuz-student-group-coaster.webp";
  if (slug.includes("corporate")) return "/images/trip/lexuz-fleet-three-coasters-night.webp";
  if (slug.includes("family") || slug.includes("road")) return "/images/trip/lexuz-group-departure-summer.webp";
  return "/images/trip/lexuz-group-meadow-banner.webp";
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const image = blogOgImage(post.slug);
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: canonical(`/blog/${post.slug}`) },
    openGraph: { title: post.title, description: post.description, url: canonical(`/blog/${post.slug}`), images: [image], type: "article" },
    twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [image] }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const sections = buildBlogSections(post);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    publisher: { "@type": "Organization", name: "Lexuz Tours & Adventures" },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <article className="container-page py-14">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm font-bold text-neutral-500">
          <Link href="/" className="text-forest-800">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="text-forest-800">Blog</Link>
          <span className="mx-2">/</span>
          <span>{post.title}</span>
        </nav>
        <SectionHeading eyebrow={post.category} title={post.title} copy={post.description} />
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <div className="space-y-6">
            {sections.map((section) => (
              <section key={section.title} className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-soft">
                <h2 className="text-2xl font-black text-forest-950">{section.title}</h2>
                <div className="mt-4 grid gap-4 leading-8 text-neutral-700">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
            <section className="rounded-lg border border-forest-900/10 bg-forest-50 p-6">
              <h2 className="text-2xl font-black text-forest-950">Plan This Trip With Lexuz</h2>
              <p className="mt-3 leading-7 text-neutral-700">Use the related links below to compare public trips, check official prices or speak with the Lexuz team before booking.</p>
              <div className="mt-5 flex flex-wrap gap-3">{post.relatedLinks.map((link) => <Link key={link.href} href={link.href} className="rounded-md bg-white px-4 py-2 text-sm font-black text-forest-800 shadow-soft">{link.label}</Link>)}</div>
            </section>
          </div>
          <aside className="rounded-lg border border-forest-900/10 bg-white p-6 shadow-premium lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-xl font-black">Need Tour Guidance?</h2>
            <p className="mt-3 text-sm leading-6 text-neutral-600">Lexuz can help you choose the right public trip, private tour, family plan, honeymoon route or corporate travel option.</p>
            <div className="mt-5 grid gap-3"><ButtonLink href="/public-trips">View Tours</ButtonLink><WhatsAppButton tourName={post.title} /></div>
          </aside>
        </div>
      </article>
    </>
  );
}
