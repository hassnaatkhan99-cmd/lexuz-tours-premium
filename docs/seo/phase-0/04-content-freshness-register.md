# Phase 0 Content Freshness Register

Status: Planning only. Dates below are placeholders until owners are assigned.

## Freshness Rules

- Only pages with a real maintenance owner should show "Last verified" copy.
- If a volatile page misses its update cadence, remove freshness claims until verified.
- Road/pass/status content must not be published as static evergreen content.

## Register

| Future page / section | Volatility | Required owner | Cadence | Publish gate |
|---|---|---|---|---|
| `/status/roads/` | High | Operations / tour lead | Weekly in season | Status, source, last verified date, verified by. |
| `/status/babusar/` | High seasonal | Operations / tour lead | Weekly in season | Open/closed status and historical date table. |
| `/status/deosai/` | High seasonal | Operations / tour lead | Weekly in season | Access status and route note. |
| `/status/khunjerab/` | High seasonal | Operations / tour lead | Weekly in season | Border/weather route status. |
| `/status/kkh/` | Medium/high | Operations / driver update | Weekly or after incident | Route note with source. |
| `/plan/jeep-tracks-and-charges/` | Medium seasonal | Operations | Start of season + monthly review | Rate ranges and jeep disclosure reviewed. |
| `/plan/weather-by-month/` | Medium | Content + operations | Annual + seasonal note | Month/destination matrix verified. |
| `/plan/safety/` | Medium/YMYL-adjacent | Senior reviewer | Monthly | Named reviewer and emergency protocol. |
| `/plan/foreign-tourists/` | Medium/YMYL-adjacent | Senior reviewer | Monthly | Permit/visa notes verified. |
| `/policies/` | Policy-dependent | Business owner | On change | Refund/payment/cancellation policy confirmed. |
| `/destinations/[place]/` | Medium | Content + tour lead | Quarterly | Real photos and field notes updated. |
| `/reports/blossom/` | High seasonal | Content + field team | Weekly during season | New dated photos. |
| `/reports/autumn/` | High seasonal | Content + field team | Weekly during season | New dated photos. |

## Phase 1 Requirement

Before publishing a volatile page, add:

- owner
- cadence
- last verified date
- next review date
- source of verification
- visible or hidden freshness note decision
