export type PageClass =
  | "home"
  | "transactional"
  | "local"
  | "informational"
  | "commercial"
  | "authority"
  | "trust"
  | "support";

export type ArchitecturePage = {
  pathPattern: string;
  pageClass: PageClass;
  intent: string;
  blueprintSource: string;
  implementationStatus: "existing" | "planned" | "needs-rebuild";
  notes: string;
};

export const futureArchitectureRegistry: ArchitecturePage[] = [
  {
    pathPattern: "/",
    pageClass: "home",
    intent: "TravelAgency entity anchor and primary brand entry point.",
    blueprintSource: "Master Blueprint v2 Part 2",
    implementationStatus: "existing",
    notes: "Keep as entity anchor. Future work should add tracked CTAs and stronger internal links without changing business logic."
  },
  {
    pathPattern: "/tours/",
    pageClass: "transactional",
    intent: "Master tour index with filters and links to all product pages.",
    blueprintSource: "Master Blueprint v2 Part 2 and Part 3.1",
    implementationStatus: "planned",
    notes: "Do not activate until redirect plan from /public-trips is approved."
  },
  {
    pathPattern: "/tours/islamabad/",
    pageClass: "local",
    intent: "City hub for Islamabad / Rawalpindi departures and local search intent.",
    blueprintSource: "City Hub Specification v1 and Master Blueprint v2 Part 3.2",
    implementationStatus: "planned",
    notes: "Only page that should target generic Islamabad-modified tour queries."
  },
  {
    pathPattern: "/tours/lahore/",
    pageClass: "local",
    intent: "City hub for Lahore departures and overnight travel format guidance.",
    blueprintSource: "City Hub Specification v1 and Master Blueprint v2 Part 3.2",
    implementationStatus: "planned",
    notes: "Only page that should target generic Lahore-modified tour queries."
  },
  {
    pathPattern: "/tours/[slug]/",
    pageClass: "transactional",
    intent: "One URL per bookable tour product with city selector and departure data.",
    blueprintSource: "Tour Product Page Specification v1",
    implementationStatus: "needs-rebuild",
    notes: "Current pages exist, but they need the full product template, source tokens, breadcrumbs, and departure data model."
  },
  {
    pathPattern: "/destinations/[place]/",
    pageClass: "informational",
    intent: "Canonical maintained destination pillar for guide, attractions, weather, culture, and related tours.",
    blueprintSource: "Master Blueprint v2 Part 3.3",
    implementationStatus: "planned",
    notes: "Do not publish without real Lexuz images, evidence blocks, internal links, and schema."
  },
  {
    pathPattern: "/plan/[topic]/",
    pageClass: "informational",
    intent: "Canonical planning utility with operator-specific data.",
    blueprintSource: "Master Blueprint v2 Part 3.4",
    implementationStatus: "planned",
    notes: "Publish only when the required operator data is available."
  },
  {
    pathPattern: "/compare/[slug]/",
    pageClass: "commercial",
    intent: "Verdict-led comparison pages that help users choose a tour.",
    blueprintSource: "Master Blueprint v2 Part 3.5",
    implementationStatus: "planned",
    notes: "Each comparison must link to both relevant products and avoid generic listicle structure."
  },
  {
    pathPattern: "/status/roads/",
    pageClass: "authority",
    intent: "Flagship live road and pass status board.",
    blueprintSource: "Master Blueprint v2 Part 3.6",
    implementationStatus: "planned",
    notes: "Requires update ownership and freshness register before launch."
  },
  {
    pathPattern: "/policies/",
    pageClass: "trust",
    intent: "Plain-language booking, payment, cancellation, and refund policy hub.",
    blueprintSource: "Master Blueprint v2 Part 3.6",
    implementationStatus: "planned",
    notes: "Do not remove existing policy pages until redirects and content consolidation are approved."
  },
  {
    pathPattern: "/about/team/",
    pageClass: "authority",
    intent: "Tour lead index with Person schema and field experience proof.",
    blueprintSource: "Master Blueprint v2 Part 3.6",
    implementationStatus: "planned",
    notes: "Needs named team data and real field photos before publishing."
  },
  {
    pathPattern: "/help/",
    pageClass: "support",
    intent: "Deduplicated FAQ support hub with cluster pages.",
    blueprintSource: "Master Blueprint v2 Part 3.7",
    implementationStatus: "planned",
    notes: "Build after FAQ deduplication to avoid duplicate answers across the site."
  }
];

export function getArchitecturePage(pathPattern: string) {
  return futureArchitectureRegistry.find((page) => page.pathPattern === pathPattern);
}
