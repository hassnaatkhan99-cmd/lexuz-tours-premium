import { company } from "@/data/company";

export function absoluteUrl(path = "") {
  return `${company.website}${path.startsWith("/") ? path : `/${path}`}`;
}

export function canonical(path = "") {
  return absoluteUrl(path);
}

export function words(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}
