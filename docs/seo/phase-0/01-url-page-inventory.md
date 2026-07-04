# Phase 0 URL / Page Inventory

Status: Planning only. Do not use this document as an active redirect map.

Source of truth: `docs/seo/10-master-blueprint-v2-2026-2029.md`

## Current Live Route Inventory

| Current route | Current role | Blueprint status | Notes before Phase 1 |
|---|---|---|---|
| `/` | Homepage / entity anchor | Keep | Add tracked CTAs and stronger links later without changing layout in Phase 0. |
| `/public-trips` | Current tour index | Needs migration plan | Future equivalent is `/tours/`. Do not redirect yet. |
| `/tours/[slug]` | Current tour detail pages | Needs rebuild | Keep route active. Future template must follow Tour Product Page Spec. |
| `/destinations` | Current destination index | Needs expansion | Future structure requires `/destinations/[place]/` pillars. |
| `/price-list` | Price list | Keep for now | Can later be linked from `/tours/` and policies if still useful. |
| `/booking` | Booking form | Preserve | Do not change booking workflow during SEO migration. |
| `/booking-status` | Customer status lookup | Preserve | Keep source-of-truth payment values and statuses. |
| `/reviews` | Reviews page | Rebuild later | Future authority review page should use verified trip context. |
| `/blog` | Current blog index | Conflicts with v2 | Blueprint says no indexable `/blog/` strategy. Needs careful migration/noindex/redirect decision. |
| `/blog/[slug]` | Current informational posts | Conflicts with v2 | Map each post to destination, plan, compare, or prune decision. |
| `/about` | About page | Keep and expand | Future `/about/team/` and person pages required. |
| `/contact` | Contact page | Keep | Preserve contact information and social links. |
| `/corporate-tours` | Segment page | Needs migration plan | Future product URL is `/tours/corporate-retreats/`. |
| `/university-tours` | Segment page | Needs migration plan | Future product URL is `/tours/university-group-tours/`. |
| `/honeymoon-tours` | Segment page | Needs migration plan | Future product URL is `/tours/honeymoon-collection/`. |
| `/custom-tours` | Custom/private tours | Needs mapping | Decide whether it remains support/commercial or folds into `/tours/`. |
| `/terms-and-conditions` | Policy page | Needs consolidation | Future trust hub is `/policies/`. |
| `/privacy-policy` | Policy page | Keep or consolidate | Privacy policy may remain separate if legally preferred. |
| `/cancellation-policy` | Policy page | Needs consolidation | Future trust hub is `/policies/`. |
| `/admin` | Admin dashboard | Preserve | Not part of SEO architecture. |
| `/admin/login` | Admin login | Preserve | Not part of SEO architecture. |
| `/admin/bookings` | Admin bookings | Preserve | Not part of SEO architecture. |
| Root SEO pages from `data/seoLandingPages.ts` | Current commercial landing pages | Needs audit | Do not add new pages in this pattern. Map to future city hubs, destination pillars, segment products, or redirects. |

## Future Blueprint Architecture Registry

| Future path | Page class | Phase | Status |
|---|---|---:|---|
| `/tours/` | Transactional | 1 | Planned |
| `/tours/islamabad/` | Local | 1 | Planned |
| `/tours/lahore/` | Local | 1 | Planned |
| `/tours/[slug]/` | Transactional product | 1 | Existing route, needs rebuild |
| `/destinations/[place]/` | Informational pillar | 4 | Planned |
| `/plan/[topic]/` | Informational utility | 3 | Planned |
| `/compare/[slug]/` | Commercial comparison | 3 | Planned |
| `/status/roads/` | Authority flagship | 2 | Planned |
| `/policies/` | Trust hub | 1 | Planned |
| `/about/team/` | Authority / people | 1 | Planned |
| `/help/` | Support hub | 3 | Planned |

## Inventory Rules

- No current URL should be removed during Phase 0.
- No redirect should be activated during Phase 0.
- Any future URL must belong to exactly one blueprint page class.
- Root-level SEO pages should not be expanded further.
- Blog pages must be mapped before any noindex, redirect, or deletion decision.
