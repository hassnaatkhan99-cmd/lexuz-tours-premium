import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloating } from "@/components/WhatsAppFloating";
import { company } from "@/data/company";

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
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icons/favicon-48x48.png", type: "image/png", sizes: "48x48" }
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  verification: {
    google: "b-8Z_3m32ZPgYpeQnvjOgOfQk1QmORNYK2iBVjnP8W0",
    other: {
      "facebook-domain-verification": "k0srnh62oggwhxncg0zyb75usylqtd",
      "msapplication-config": "/browserconfig.xml"
    }
  },
  openGraph: {
    title: "Lexuz Tours & Adventures",
    description: "Adventure begins with Lexuz. Premium Pakistan travel booking company.",
    url: company.website,
    siteName: company.name,
    images: [{ url: "/brand/lexuz-og-image-1200x630.jpg", width: 1200, height: 630, alt: "Lexuz Tours & Adventures" }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lexuz Tours & Adventures",
    description: "Adventure begins with Lexuz. Premium Pakistan travel booking company.",
    images: ["/brand/lexuz-og-image-1200x630.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${company.website}/#organization`,
        name: company.name,
        legalName: company.legalName,
        url: company.website,
        logo: `${company.website}/brand/lexuz-logo-square.png`,
        image: `${company.website}/brand/lexuz-og-image-1200x630.jpg`,
        email: company.email,
        telephone: company.callPhone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Office No. 6, 1st Floor, Mustafa Plaza, 6th Road, D Block, Satellite Town",
          addressLocality: "Rawalpindi",
          addressRegion: "Punjab",
          addressCountry: "PK"
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: company.callPhone,
          url: company.whatsappHref
        },
        sameAs: [company.facebook, company.instagram]
      },
      {
        "@type": ["TravelAgency", "LocalBusiness"],
        "@id": `${company.website}/#travelagency`,
        name: company.name,
        legalName: company.legalName,
        url: company.website,
        logo: `${company.website}/brand/lexuz-logo-square.png`,
        image: `${company.website}/brand/lexuz-og-image-1200x630.jpg`,
        email: company.email,
        telephone: company.callPhone,
        priceRange: "PKR",
        foundingDate: String(company.founded),
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: company.callPhone,
          url: company.whatsappHref
        },
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
        sameAs: [company.facebook, company.instagram]
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="focus-ring fixed left-4 top-4 z-[100] -translate-y-24 rounded-dsMd bg-brand-primary px-4 py-3 font-black text-white shadow-ds3 transition focus:translate-y-0">
          Skip to main content
        </a>
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
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
