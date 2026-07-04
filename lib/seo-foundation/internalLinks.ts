export type InternalLinkTarget = {
  key: string;
  href: string;
  label: string;
  pageClass: "transactional" | "local" | "informational" | "commercial" | "authority" | "trust" | "support";
  preferredAnchors: string[];
};

export const internalLinkRegistry: InternalLinkTarget[] = [
  {
    key: "tours-index",
    href: "/tours/",
    label: "Pakistan tour packages",
    pageClass: "transactional",
    preferredAnchors: ["Pakistan tour packages", "all Lexuz tours", "available tours"]
  },
  {
    key: "islamabad-hub",
    href: "/tours/islamabad/",
    label: "Tours from Islamabad",
    pageClass: "local",
    preferredAnchors: ["tours from Islamabad", "Islamabad departures", "Rawalpindi and Islamabad trips"]
  },
  {
    key: "lahore-hub",
    href: "/tours/lahore/",
    label: "Tours from Lahore",
    pageClass: "local",
    preferredAnchors: ["tours from Lahore", "Lahore departures", "overnight trips from Lahore"]
  },
  {
    key: "road-status",
    href: "/status/roads/",
    label: "Northern Pakistan road status",
    pageClass: "authority",
    preferredAnchors: ["road status", "live road updates", "check road conditions"]
  },
  {
    key: "policies",
    href: "/policies/",
    label: "Booking policies",
    pageClass: "trust",
    preferredAnchors: ["booking policy", "refund policy", "payment and cancellation terms"]
  },
  {
    key: "help",
    href: "/help/",
    label: "Lexuz help center",
    pageClass: "support",
    preferredAnchors: ["help center", "travel FAQs", "booking questions"]
  }
];

export function getInternalLinkTarget(key: string) {
  return internalLinkRegistry.find((target) => target.key === key);
}
