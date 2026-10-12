---
id: findly-tools
name: "Findly.tools"
url: https://findly.tools/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "manual review; not every submission is accepted"
verified: true
last_checked: 2026-10-12
---

# Findly.tools

Curated directory of AI tools, SaaS and startups (claims DR 82). Free listing gives one dofollow link while their badge stays on the user's site. They review manually and don't accept everything.

## Before you start
- Sign in at https://findly.tools/sign-in with email/password, Google or GitHub. Use `submission.preferred_login`.
- Free plan needs the Findly badge on the user's site. They re-check it; failed checks unpublish the listing. Confirm with the user (`launch_settings.add_badge_to_site`).
- Product descriptions can be up to 2,500 characters. Use `product.description_long`, trimmed.

## Field map (form behind login; based on their public submit page, unconfirmed field order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Plan | Free with badge / Premium $29 | Free with badge |
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short | `product.tagline` |
| Description | up to 2,500 chars | `product.description_long` |
| Category / tags | select | closest to `product.categories`, `product.tags` |
| Pricing | select | `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Badge check | URL check | after the badge is live on `product.url` |

## Steps
1. Search https://findly.tools for `product.name`. If listed, mark `live` and stop.
2. Open https://findly.tools/submit, sign in.
3. Choose **Free with badge**, fill the details.
4. Give the user the badge snippet; once it's on the site, run the check.
5. Submit, screenshot to `.launchkit/evidence/findly-tools.png`, `launchkit mark findly-tools submitted --note "free with badge, manual review"`.

## Make the listing perform
- Because review is selective, make the first 2 sentences of the description say exactly what the product does and for whom. Generic or AI-sounding copy is a likely reason for rejection.
- Fill every optional field (screenshots, pricing, tags). Complete listings show better on category pages.
- Pick the narrowest category that fits; their category pages are what rank in search.

## Gotchas
- Premium ($29, four dofollow links, no badge), Product Review ($79) and Directory Submission packs ($59 to $139) are paid. Skip with budget 0; never buy the submission packs (that duplicates what launchkit does).
- Removing the badge later can unpublish the listing.

## After submitting
- Wait for the review email. Contact: contact@findly.tools. Once live, log the URL with `launchkit mark findly-tools live --listing-url <url>`.
