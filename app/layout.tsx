import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { company } from "@/data/company";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  metadataBase: new URL(company.website),
  title: {
    default: "Lexuz Tours & Adventures | Premium Pakistan Travel Booking",
    template: "%s | Lexuz Tours & Adventures"
  },
  description: "Premium public trips, custom tours, honeymoon tours, corporate tours and university tours across Pakistan by Lexuz Tours & Adventures.",
  keywords: ["Pakistan tours", "Hunza tour", "Skardu tour", "Swat Kalam", "Lexuz Tours", "Rawalpindi travel agency"],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-64x64.png", type: "image/png", sizes: "64x64" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  verification: {
    google: "b-8Z_3m32ZPgYpeQnvjOgOfQk1QmORNYK2iBVjnP8W0"
  },
  openGraph: {
    title: "Lexuz Tours & Adventures",
    description: "Adventure begins with Lexuz. Premium Pakistan travel booking company.",
    url: company.website,
    siteName: company.name,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Lexuz Tours & Adventures logo" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexuz Tours & Adventures",
    description: "Adventure begins with Lexuz. Premium Pakistan travel booking company.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${company.website}/#organization`,
        name: company.name,
        url: company.website,
        logo: `${company.website}/logo.png`,
        sameAs: [company.facebook, company.instagram]
      },
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${company.website}/#travelagency`,
        name: company.name,
        url: company.website,
        image: `${company.website}/logo.png`,
        email: company.email,
        telephone: company.callPhone,
        priceRange: "PKR",
        foundingDate: String(company.founded),
        parentOrganization: { "@id": `${company.website}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No 6, 1st Floor, Mustafa Plaza, 6th Road, D Block, Satellite Town",
          addressLocality: "Rawalpindi",
          addressRegion: "Punjab",
          addressCountry: "PK"
        },
        areaServed: ["Rawalpindi", "Islamabad", "Lahore", "Northern Pakistan", "Pakistan"],
        knowsAbout: [
          "Pakistan tour packages",
          "Northern Pakistan tours",
          "Hunza tours",
          "Skardu tours",
          "Swat Kalam tours",
          "Kumrat tours",
          "Fairy Meadows tours",
          "Naran Kaghan tours",
          "Kashmir tours",
          "Corporate tours",
          "University trips",
          "Honeymoon tours"
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: averageRating.toFixed(1),
          reviewCount: reviews.length,
          bestRating: 5,
          worstRating: 1
        },
        review: reviews.map((review) => ({
          "@type": "Review",
          author: { "@type": "Person", name: review.name },
          reviewRating: { "@type": "Rating", ratingValue: review.rating, bestRating: 5 },
          reviewBody: review.text,
          itemReviewed: { "@id": `${company.website}/#travelagency` }
        })),
        sameAs: [company.facebook, company.instagram]
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SC66P828CX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SC66P828CX');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
