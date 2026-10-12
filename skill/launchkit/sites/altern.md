---
id: altern
name: "Altern"
url: https://altern.ai/maker/submit/start
category: AI Directory
mode: form
pricing: Free/Paid
login: github
captcha: none
backlink_required: no
review_time: "a few days"
verified: true
last_checked: 2026-10-12
---

# Altern

Curated AI directory (tools, models, APIs, libraries) with category and "genus" pages, alternatives lists, task guides and a live leaderboard. Free to submit, human-reviewed, and picky: "the best tool in each category, not every tool".

## Before you start
- Login: GitHub or Google only (https://altern.ai/signin). First sign-in creates the account.
- Choose **Full** submission, not Easy. Easy is name + website only; Full adds categories, genera, screenshots, structured data and alternatives, which is what makes the listing show up.
- Have `assets.logo_square`, 2-3 `assets.screenshots`, and `product.competitors_alternatives`.

## Field map

The maker form is behind login, so field names are unconfirmed. From the submit page and FAQ:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Website | URL | `product.url` |
| Description | text | `product.description_short` (card) and `product.description_medium` (page) |
| Categories | multi-select | most specific of their categories (3D, Academia, Ad Generator, AI Agents, API Tools, ...) for `product.categories` |
| Genus | select | narrower type within the category |
| Screenshots | images | `assets.screenshots` best first |
| Structured data (pricing, platforms, open source) | fields | `product.pricing_model`, `product.platforms`, `product.open_source`, `product.repo_url` |
| Alternatives | tool picker | each entry in `product.competitors_alternatives` that exists on Altern |
| Plan | Free / Base 29 USD / Featured 49 USD | Free |

## Steps
1. Search Altern for `product.name`. If listed, sign in and claim/edit via the Maker area instead.
2. Open https://altern.ai/maker/submit/start, sign in with GitHub (or Google per `submission.preferred_login`).
3. Pick **Full submission**, fill every field, add alternatives, choose the **Free** plan, submit.
4. Screenshot to `.launchkit/evidence/altern.png`. `launchkit mark altern submitted --note "human review, few days"`

## Make the listing perform
- Alternatives are the main traffic source: being listed as an alternative to a well-known tool puts the product on that tool's alternatives page. Add every honest competitor.
- Use "Suggest an alternative" on competitors' pages after approval if the link didn't appear.
- The leaderboard ranks by popularity. Ask the user to share the Altern page at launch so early saves and visits count.
- Paid plans (Oct 2026): Base 29 USD, Featured 49 USD (featured badge, priority placement in category and list pages, inclusion in the next community newsletter). Paid plans don't affect approval.

## Gotchas
- Every listing gets the same quality bar; a thin Easy submission is more likely to be rejected.
- Submitting the landing page `altern.ai/submit` is just the info page; the form is at `/maker/submit/start`.

## After submitting
- Check status in the Maker area. Once live, keep the listing updated there and mark `live` with the URL.
