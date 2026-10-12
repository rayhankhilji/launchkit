---
id: prweb-ein-presswire
name: "PRWeb / EIN Presswire"
url: https://www.einpresswire.com/
category: Press / Media
mode: manual
pricing: Paid
login: email
captcha: unknown
backlink_required: no
review_time: "EIN: first release up to 2 business days for account check, then about 2 hours; PRWeb: 24-48 hours"
verified: true
last_checked: 2026-10-12
---

# PRWeb / EIN Presswire

Paid press release distribution. Your release gets syndicated to news sites, Google News and databases. It rarely produces real coverage alone, but it creates an indexed announcement and backlinks. A business decision for the user, not something to run automatically.

## Before you start
- Prices seen 2026-10-12:
  - EIN Presswire (https://www.einpresswire.com/pricing): Basic $149 for 1 release, Pro+ $499 for 5 (+1 free, limited-time), Corporate $999 for 15. Credits last 365 days.
  - PRWeb (https://www.prweb.com/pricing/): Basic $120, Standard $245 (adds 1,200+ site syndication via PR Newswire), Advanced $360, Premium $480 per release.
- Only proceed if `launch_settings.budget_usd` covers it and the user says yes. Otherwise mark `skipped` ("paid PR distribution").
- Needed artifact: a finished press release (headline, dateline, 300-600 words, a founder quote the user approves, boilerplate "About" paragraph, media contact), plus `assets.logo_square` and 1-2 images.

## Field map
Release fields (submission editor is behind login, not confirmed):

| Part | Fill with |
|---|---|
| Headline | the news in plain words, under 100 chars |
| Summary | `product.description_short` |
| Body | written from `product.description_long`, `product.key_features`, launch date `product.launch_date`. Founder quote only if the user writes or approves it |
| About / boilerplate | `company.legal_name`, `company.city`, `company.country`, `product.url` |
| Media contact | `founder.name`, `founder.email` |
| Category / industry | closest to `product.categories[0]` |
| Images | `assets.logo_square`, `assets.og_image` |

## Steps
1. Mark `needs_human` with "paid distribution: EIN from $149, PRWeb from $120".
2. If the user approves, draft the release, run `launchkit lint-copy`, save with `launchkit draft prweb-ein-presswire -`.
3. The user creates the account, pays and submits. Mark `submitted` only after they confirm.

## Make the listing perform
- EIN's editorial guidelines: proper press release format, no hype or unattributed opinion, at most 1 link per 100 words. Releases that break these get sent back.
- Real news only (launch, funding, partnership, milestone). A generic "we exist" release gets no pickup.
- EIN's first release triggers a one-time account check of up to 2 business days. Submit at least 3 business days before the launch date. Reviews happen during business hours.
- Use the release URL as a backlink source and link it from the user's press page.

## Gotchas
- "AP News", "TV station sites" and similar pickups are automated syndication pages, not editorial coverage. Set expectations with the user.
- Don't buy multi-release bundles for a single launch.

## After submitting
- EIN emails a distribution report about 2 hours after release; PRWeb provides a report in the dashboard. Save the report link in the mark note.
