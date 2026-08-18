import { company } from "@/data/company";
import { sourceFacts } from "@/data/trust";
import { absoluteUrl } from "@/lib/seo";

export type FaqSchemaItem = {
  question: string;
  answer: string;
};

export type OrganizationSchemaOptions = {
  includeAggregateRating?: boolean;
};

export function buildOrganizationSchema(_options: OrganizationSchemaOptions = {}) {
  return {
    "@context": "https://schema.org",
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
    founder: {
      "@type": "Person",
      name: sourceFacts.team[0].name,
      jobTitle: sourceFacts.team[0].role
    },
    employee: sourceFacts.team.slice(1).map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role
    })),
    sameAs: [company.facebook, company.instagram]
  };
}

export function buildTravelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${company.website}/#travelagency`,
    name: company.name,
    legalName: company.legalName,
    url: company.website,
    logo: `${company.website}/brand/lexuz-logo-square.png`,
    image: `${company.website}/brand/lexuz-og-image-1200x630.jpg`,
    email: company.email,
    telephone: company.callPhone,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: company.callPhone,
      url: company.whatsappHref
    },
    priceRange: "PKR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office No 6, 1st Floor, Mustafa Plaza, 6th Road, D Block, Satellite Town",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK"
    },
    sameAs: [company.facebook, company.instagram]
  };
}

export function buildFaqSchema(items: FaqSchemaItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function buildWebPageSchema({ path, name, description }: { path: string; name: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path)
  };
}
