---
id: startup-tracker
name: "Startup Tracker"
url: https://startuptracker.io/crowdsourcing/
category: Startup Database
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Startup Tracker

Startup Tracker is a startup discovery database sold to investors and corporates. Founders can add or update their company for free through the "Hello Founder" crowdsourcing page. The site looks lightly maintained (footer copyright 2020), so expect low traffic; it is a quick, free entry.

## Before you start
- No login needed for the first step.
- Have `product.name` (without "Inc", "Ltd" etc.) and `product.url`.

## Field map
Step 1 is public. Later steps load after step 1 and are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Startup name | text, "without Inc, Ltd, etc." | `product.name` |
| Website URL | URL | `product.url` |
| (next steps) description, location, team, contact | unconfirmed | `product.description_short`, `company.city` + `company.country`, `founder.name`, `submission.email` |

## Steps
1. Open https://startuptracker.io/crowdsourcing/.
2. Type `product.name` and `product.url` into the two boxes and continue.
3. Fill any following fields from the map. If a CAPTCHA appears, mark `needs_human`.
4. Submit and screenshot to `.launchkit/evidence/startup-tracker.png`.
5. `launchkit mark startup-tracker submitted`

## Make the listing perform
- Their data comes from web signals (site, social, news). Consistent name and domain across LinkedIn, X and Crunchbase helps them match the company.
- Questions or corrections: hello@startuptracker.io.

## Gotchas
- Legal suffixes in the name are explicitly unwanted.
- The service may be dormant. If the page errors, mark `skipped` with a note instead of retrying.

## After submitting
- No public profile pages are browsable without a paid account, so there may be no listing URL to record.
