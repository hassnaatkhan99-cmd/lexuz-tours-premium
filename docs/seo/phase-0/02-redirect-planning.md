# Phase 0 Redirect Planning

Status: Planning only. No redirects are active from this file.

## Redirect Principles

- No redirect ships without a crawlable source URL and approved destination URL.
- No redirect ships without checking whether the source has search impressions, backlinks, bookings, or direct traffic.
- No redirect should point to a less relevant page just to reduce page count.
- Preserve booking, admin, Supabase, payment, and policy URLs until replacements are live and verified.

## Proposed Future Redirect Candidates

| Current URL | Possible future URL | Redirect type | Status | Notes |
|---|---|---:|---|---|
| `/public-trips` | `/tours/` | 301 | Draft only | Activate only after `/tours/` is live and equivalent/better. |
| `/corporate-tours` | `/tours/corporate-retreats/` | 301 | Draft only | Requires future segment product page. |
| `/university-tours` | `/tours/university-group-tours/` | 301 | Draft only | Requires future segment product page. |
| `/honeymoon-tours` | `/tours/honeymoon-collection/` | 301 | Draft only | Requires future segment product page. |
| `/terms-and-conditions` | `/policies/` | 301 or keep | Draft only | Legal/privacy needs may justify keeping some policy URLs. |
| `/cancellation-policy` | `/policies/` | 301 or keep | Draft only | Only after `/policies/` has cancellation/refund section. |
| `/blog` | TBD | 301/noindex | Draft only | Blueprint says no `/blog/`; map posts first. |
| `/blog/best-time-to-visit-hunza-valley` | `/destinations/hunza/` | 301 | Draft only | Best-time intent should live inside destination pillar. |
| `/blog/complete-skardu-travel-guide` | `/destinations/skardu/` | 301 | Draft only | Destination guide intent. |
| `/blog/hunza-vs-skardu` | `/compare/hunza-vs-skardu/` | 301 | Draft only | Comparison intent. |
| `/hunza-tour-packages` | `/tours/hunza-valley-5-day/` or `/destinations/hunza/` | TBD | Draft only | Decide after keyword/cannibalization review. |
| `/skardu-tour-packages` | `/tours/skardu-7-day/` or `/destinations/skardu/` | TBD | Draft only | Current product data uses 6-day Skardu; blueprint lists 7-day product. Requires product decision. |

## Redirect Activation Checklist

- Destination page is live.
- Destination page is indexable.
- Canonical points to itself.
- Sitemap includes destination.
- Source and destination intent match.
- Existing internal links are updated.
- No booking/admin/API route is affected.
- `npm run lint` and `npm run build` pass.
- Crawl verifies 200 destination and 301 source.

## Explicitly Not Activated In Phase 0

- Next.js `redirects()` configuration.
- Middleware redirects.
- Vercel redirect rules.
- Canonical changes.
- Sitemap removals.
- Robots/noindex rules.
