# Phase 0 Image / Alt-Text Audit

Status: Planning only.

## Goals

- Prioritize real Lexuz trip, fleet, office, and group photos.
- Avoid AI-generated destination imagery for destinations Lexuz sells.
- Give every meaningful image descriptive alt text.
- Keep decorative images empty or background-only where appropriate.
- Protect Core Web Vitals by controlling image dimensions and file sizes.

## Current Asset Categories To Audit

| Category | Current use | Phase 1 action |
|---|---|---|
| Official logo and favicon assets | Header, footer, favicon, metadata | Keep. Verify crisp display after future UI changes. |
| Fleet photos | Home/fleet/trust areas | Keep. Add field captions where useful. |
| Office photos | About/trust areas | Keep. Use for entity trust. |
| Group photos | Home/reviews/about areas | Use sparingly. Avoid repeating as review avatars. |
| Destination images | Tour cards, tour pages, SEO pages | Verify whether each is real Lexuz or generated/stock. |
| One-day trip posters | One-day tour pages | Keep as supporting media, not primary SEO hero if text-heavy. |

## Alt Text Rules

- Tour card image: `[Tour name] scenery with Lexuz Tours`.
- Real group photo: `Lexuz Tours group at [place] during [season/month if known]`.
- Fleet photo: `Lexuz Tours branded vehicle for northern Pakistan trips`.
- Office photo: `Lexuz Tours Rawalpindi office`.
- Decorative background image: use CSS background or empty alt if rendered as an image.

## Performance Rules

- Hero images: priority only for current page LCP image.
- Non-critical images: lazy loading through Next.js Image.
- Avoid oversized PNGs for photographic assets.
- Prefer WebP/AVIF where possible.
- Always set stable dimensions or `fill` with constrained parent sizing.

## Open Items Before Phase 1

- Confirm which destination images are real Lexuz-owned photos.
- Create captions for field-evidence images.
- Replace text-heavy images where they are the only content source.
- Build per-page image checklist before publishing new pillars.
