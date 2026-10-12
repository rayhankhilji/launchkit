---
id: dealroom
name: "Dealroom"
url: https://app.dealroom.co/
category: Startup Database
mode: form
pricing: "Free (unconfirmed) to add or edit a company; paid data subscriptions for investors"
login: "Dealroom account (work email)"
captcha: "Cloudflare Turnstile on app.dealroom.co"
backlink_required: no
review_time: "unknown; Dealroom's data team verifies submitted changes"
verified: false
last_checked: 2026-10-12
---

# Dealroom

Startup and investor intelligence database, strongest in Europe, used by VCs, governments, and ecosystem
reports. dealroom.co was live, but app.dealroom.co returned a Cloudflare Turnstile check during research, so the
add or claim flow was not seen. All field details below are unconfirmed.

## Before you start
- Search Dealroom for the company and domain first. Many startups are auto-created from public data; claim and
  edit rather than add a duplicate.
- The user should log in with a work email on the company domain. That makes the claim easier to verify.
- If Turnstile blocks, mark `needs_human` with note "Cloudflare Turnstile". Do not solve it.

## Field map
Unconfirmed. Public Dealroom company pages show these fields:
| Likely field | Profile key / instruction |
|---|---|
| Company name | `product.name` |
| Website | `product.url` |
| Tagline | `product.tagline_short` |
| Description | `product.description_medium` |
| Logo | `assets.logo_square` |
| HQ location | `company.city`, `company.country` |
| Launch / founded year | `company.founded_year` |
| Industries, sub-industries | Map from `product.categories` |
| Tags / technologies | `product.tags` |
| Revenue model | `company.business_model` (SaaS, marketplace, ecommerce) |
| Employees | `company.team_size` |
| Founders | `founder.name`, `founder.role`, `links.linkedin` |
| Funding rounds | Only from `company.funding_stage` / `company.funding_raised` |
| Socials | `links.linkedin`, `links.twitter` |

## Steps
1. Open https://app.dealroom.co/ and let the user log in or sign up.
2. Search the company. If found, open it and use the claim or edit option.
3. If not found, use the add company option from search results.
4. Fill fields per the map and submit for review.

## Make the listing perform
- Investors filter by industry, location, stage, and revenue model. Fill those precisely; they matter more than prose.
- Add founders with LinkedIn URLs. Dealroom links people across companies and uses them in signals.
- Keep funding and headcount current. Dealroom ecosystem reports pull from these fields.

## Gotchas
- Login wall plus Cloudflare means this often needs the user present.
- Changes go through Dealroom's verification, so they may not appear at once.

## After submitting
- `launchkit mark dealroom submitted --listing-url <url>` once the profile URL is known, else `needs_human`.
