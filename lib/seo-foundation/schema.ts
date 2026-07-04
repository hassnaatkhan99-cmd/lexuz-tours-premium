import { company } from "@/data/company";
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
    url: company.website,
    logo: `${company.website}/logo.png`,
    sameAs: [company.facebook, company.instagram]
  };
}

export function buildTravelAgencySchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["TravelAgency", "LocalBusiness"],
    "@id": `${company.website}/#travelagency`,
    name: company.name,
    url: company.website,
    image: `${company.website}/logo.png`,
    email: company.email,
    telephone: company.callPhone,
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
