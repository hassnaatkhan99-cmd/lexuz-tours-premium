export type WhatsAppSourceToken = {
  token: string;
  path: string;
  label: string;
  pageClass: string;
};

export const whatsappSourceTokens: WhatsAppSourceToken[] = [
  { token: "HOME-HERO", path: "/", label: "Homepage hero", pageClass: "home" },
  { token: "TOURS-INDEX", path: "/tours/", label: "Tours index", pageClass: "transactional" },
  { token: "HUB-ISB", path: "/tours/islamabad/", label: "Islamabad city hub", pageClass: "local" },
  { token: "HUB-LHR", path: "/tours/lahore/", label: "Lahore city hub", pageClass: "local" },
  { token: "TOUR-PRODUCT", path: "/tours/[slug]/", label: "Tour product page", pageClass: "transactional" },
  { token: "DEST-PILLAR", path: "/destinations/[place]/", label: "Destination pillar", pageClass: "informational" },
  { token: "PLAN-UTILITY", path: "/plan/[topic]/", label: "Planning utility", pageClass: "informational" },
  { token: "COMPARE", path: "/compare/[slug]/", label: "Comparison page", pageClass: "commercial" },
  { token: "STATUS-ROADS", path: "/status/roads/", label: "Road status board", pageClass: "authority" },
  { token: "HELP", path: "/help/", label: "Help hub", pageClass: "support" }
];

export function getWhatsAppSourceToken(path: string) {
  return whatsappSourceTokens.find((entry) => entry.path === path);
}

export function buildWhatsAppMessage({ intro, token }: { intro: string; token: string }) {
  return `${intro}\n\nSource: ${token}`;
}
