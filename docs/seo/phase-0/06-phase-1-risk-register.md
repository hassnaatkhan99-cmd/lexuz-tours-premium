# Phase 0 Risk Register Before Phase 1

Status: Planning only.

## High-Risk Areas

| Risk | Why it matters | Mitigation before implementation |
|---|---|---|
| URL migration mistakes | Lost rankings, broken links, broken ads, customer confusion. | Build approved redirect map before changing routes. |
| Booking flow regression | Revenue-critical path. | Keep booking/Supabase/admin changes out of SEO template work unless required. |
| Static price mismatch | Blueprint wants exact live pricing/departures. Current pages use static tour data. | Design a departure data model before replacing product template pricing. |
| Schema mismatch | Product/review/offer schema must match visible content. | Add schema helpers first; wire only after data source is reliable. |
| FAQ duplication | Repeated answers can weaken page quality. | Complete FAQ deduplication before `/help/` launch. |
| Generic content | Blueprint rejects generic listicles and AI-style travel copy. | Require real Lexuz field notes, photos, and owner review for new pages. |
| Status freshness failure | Road status pages can become trust liabilities if stale. | Do not launch `/status/` until an update owner and cadence exist. |
| Internal cannibalization | Old SEO pages may compete with new hubs/pillars. | Map every current SEO/blog URL before publishing replacements. |
| Core Web Vitals regression | Large hero images/status widgets can slow mobile pages. | Enforce image sizing and lazy loading at template level. |
| Over-scoped release | Too many changes increase chance of public breakage. | Use small milestone branches and one page class per release. |

## Phase 1 Must Not Include

- Removing current public pages.
- Activating redirects.
- Reworking booking/admin/Supabase.
- Publishing destination pillar pages without evidence.
- Publishing road status without update ownership.
- Changing pricing/departure rules.
- Large visual redesign.

## Phase 1 Safe Scope

- Build new route templates behind inactive/planned architecture.
- Add breadcrumb/schema/event utilities.
- Add city hub and tour product data model drafts.
- Update internal links only after destination routes exist.
- Prepare redirects for approval, but do not activate until verified.
