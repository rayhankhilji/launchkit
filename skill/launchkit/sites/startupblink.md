---
id: startupblink
name: "StartupBlink"
url: https://www.startupblink.com/
category: Startup Database
mode: form
pricing: Free
login: email
captcha: turnstile
backlink_required: no
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# StartupBlink

StartupBlink publishes a global startup ecosystem map and the yearly Global Startup Ecosystem Index, used by governments and ecosystem builders. Startups appear on the map by location. The self-service "add your startup" page could not be confirmed on 2026-10-12: the old `/add-startup` route returns 404 and the rest of the site sits behind a Cloudflare check.

## Before you start
- Their map only counts startups as "innovative, scalable tech companies". Service providers, agencies and local businesses are excluded, so skip if the product is a consultancy.
- Login: the site has an email sign-in at https://www.startupblink.com/login. Account creation only if `submission.allow_account_creation` is true.
- Location matters: have `company.city` and `company.country`.

## Field map
Unconfirmed. Public startup cards on the map show these fields, so expect the add form to ask for them:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text | `product.name` |
| Website | URL | `product.url` |
| City / country | location search | `company.city`, `company.country` |
| Short description | short text | `product.description_short` |
| Industry | select | closest to `product.categories[0]` (their industries include Software & Data, Fintech, Health, Ecommerce & Retail, Marketing & Sales, Edtech) |
| Logo | image | `assets.logo_square` |
| Founded | year | `company.founded_year` |
| Contact email | email | `submission.email` |

## Steps
1. Open https://www.startupblink.com/. If a Cloudflare "verify you are human" check appears, stop and mark `needs_human` (don't solve it).
2. Sign in, then look for **Add your startup** on the map or in the account menu.
3. If no add option exists, mark `needs_human` with "StartupBlink add flow not found; ask via the site's contact form".
4. If it exists, fill fields from the map, submit, screenshot to `.launchkit/evidence/startupblink.png`.
5. `launchkit mark startupblink submitted`

## Make the listing perform
- The map is browsed by city. An exact city (not just country) puts the startup in the local ecosystem view that city officials and local press look at.
- Their index weights startup counts per city, so local accelerators and city programs sometimes push founders to add themselves. Mention the listing to any local program the user is in.

## Gotchas
- Heavy Cloudflare protection; automated browsers often get "Attention Required". Do not retry in a loop.
- Most of the site is now reports and paid ecosystem consulting. Don't fill "request a demo" or report-purchase forms.

## After submitting
- Search the map for `product.name` after a few weeks.
