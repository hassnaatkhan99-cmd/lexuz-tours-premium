# Lexuz Tours SEO Content System — READ ME FIRST

## What's in this package

| File | Contents |
|---|---|
| 01-master-strategy-topical-map.md | Site architecture, topical clusters, E-E-A-T plan, 12-month roadmap |
| 02-keyword-research.md | Part 1 — 68 keyword entries across 7 intent groups, with slugs & internal links |
| 03-content-inventory-100-articles.md | Part 2 — all 100 articles fully specified (title, keyword, slug, links) + batching plan |
| 04-article-template-and-page-metadata-spec.md | Parts 3 + 8 — the mandatory article structure and per-page metadata schema |
| 05-sample-articles.md | Two complete production-ready articles (Hunza from Islamabad; Sharaan Forest with jeep-charges block) |
| 06-landing-comparison-supporting-pages.md | Parts 4, 5, 6 — 11 landing pages, 7 comparison pages, 8 supporting pages, all specified |
| 07-faq-clusters-200.md | Part 7 — 210 unique FAQs in 15 clusters with schema and reuse rules |

## How the remaining 98 articles get produced

Each article is written against file 04's template, at the quality bar of file 05's samples, in batches of 5–10 per session, following the batching order in file 03. Batch 1 (Islamabad money pages) first — these convert.

## Non-negotiable company rules (baked into every file)

1. No invented prices — articles link to live package pages instead.
2. No invented departure dates or hotel names — placeholders `[LEXUZ POLICY: ...]` mark anything that must come from the company's real policies (payments, cancellation, child pricing, faculty seats, holds).
3. Jeep-charges disclosure block appears verbatim on: Sharaan Forest, Fairy Meadows, Siri Paye/Shogran, Mahodand, Ratti Gali, Saif-ul-Malook, Kumrat interior, Deosai content.

## Import notes for Codex / Next.js (content only — no code included, per brief)

- Every article carries a YAML front-matter block (seo_title, meta_description, url_slug, h1, schema types, OG fields) that maps 1:1 to Next.js metadata and JSON-LD components.
- URL architecture: /tours/ (commercial), /destinations/ (pillars), /blog/ (articles), /compare/, /guides/, /faqs/ — keep these path prefixes exactly; internal links in all files assume them.
- Schema per page type is specified in file 04, section B.
- FAQ blocks are structured Q/A pairs ready for FAQPage JSON-LD.
- Images: WebP, hero 16:9 (1200×630 for OG), descriptive alt text as specced; original tour photography strongly preferred over stock.

## Before publishing anything

- Fill every `[LEXUZ POLICY]` placeholder from real company policy documents.
- Verify current facts that change: Babusar/Deosai opening dates, KKH works status (Dasu section), visa/permit rules for foreigners (especially AJK), drone regulations. These are flagged in-article for annual/quarterly refresh.
