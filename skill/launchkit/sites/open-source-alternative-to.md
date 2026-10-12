---
id: open-source-alternative-to
name: "Open Source Alternative To"
url: https://www.opensourcealternative.to/submit
category: Dev / Open Source
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: no
review_time: "6+ months free, 48 hours paid"
verified: true
last_checked: 2026-10-12
---

# Open Source Alternative To

A directory that pairs open-source, self-hostable projects with the proprietary products they replace. Pages rank for "open source alternative to <product>" searches. Only a fit for open-source, self-hosted products.

## Before you start
- Guidelines on the page: the project must be open source, an alternative to proprietary software, actively maintained, and **self-hosted**. If `product.open_source` is false or there's no self-host option, mark `skipped` with "not a fit".
- Pick the single best-known proprietary product it replaces from `product.competitors_alternatives`. The listing is filed under that product.
- Decide the tier with the user: the free option goes to a waitlist of 6+ months. Faster review costs $29, which needs `launch_settings.budget_usd` >= 29 and user approval.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Email | email | `submission.email` |
| Website of open source alternative | URL | `product.url` |
| Name of open source alternative | text | `product.name` |
| Repository | URL | `product.repo_url` |
| Website of proprietary software | URL | homepage of `product.competitors_alternatives[0]` |
| Name of proprietary software | text | `product.competitors_alternatives[0]` |
| I would like to receive free email updates | checkbox | leave unchecked |
| Submit button | choice | **Submit to waitlist (6+ months)** by default; **Submit for 48 hour review (+$29)** only with approval |

## Steps
1. Search the site for `product.name`. If listed, mark `live` with the URL and stop.
2. Open https://www.opensourcealternative.to/submit and fill the six fields in order.
3. Click **Submit to waitlist (6+ months)**. If the user approved the paid option, click the $29 button and stop at checkout: mark `needs_human` with "OSAT $29 checkout".
4. Screenshot the confirmation to `.launchkit/evidence/open-source-alternative-to.png`.
5. `launchkit mark open-source-alternative-to submitted --note "free waitlist, 6+ months"`

## Make the listing perform
- Choose the proprietary product people actually search for (Notion, Jira, Zapier) rather than a niche rival. Category pages are built around those names.
- There are no description fields, so the listing text comes from your site and repo. Make the repo README open with "Open-source alternative to X" in plain words.
- An active repo (recent commits, releases) matters because "actively maintained" is a review criterion.

## Gotchas
- Self-hosting is a hard requirement. SaaS-only open-core products may be rejected.
- Sponsor page is a paid ad enquiry. Skip.

## After submitting
- Nothing to watch for months on the free tier. Re-check the competitor's alternatives page later.
