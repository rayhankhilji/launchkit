---
id: dev-tools-dir
name: "Dev Tools Dir"
url: https://devtoolsdir.com/projects/submit
category: Dev / Open Source
mode: form
pricing: Free/Paid
login: github           # Google, GitHub, or email + password
captcha: unknown
backlink_required: yes  # free plan only
review_time: "free: listed within up to 30 days; premium: earlier launch dates"
verified: true
last_checked: 2026-10-12
---

# Dev Tools Dir

An indie directory of developer tools, APIs, SDKs and infrastructure, built on the DirEasy template. Launches go
live at 08:00 UTC on a scheduled day. Mostly an SEO backlink play: low direct traffic, a dofollow link on every plan.

## Before you start
- Free plan conditions (from /pricing): add the Dev Tools Dir badge to your site and verify the backlink, and
  your site's Domain Rating must be at least 10 when you submit. If `launch_settings.add_badge_to_site` is "no",
  or the DR is likely under 10 (new domain), the free path won't work.
- Paid: Premium $9.90 per launch (skip the free queue, 10 slots daily), Premium Plus $12.90 (early-user price,
  normally $25: homepage spotlight, featured border, 14 days promoted). With budget 0, use free or skip.
- Login: sign in at https://devtoolsdir.com/sign-in with Google, GitHub or email. The form itself is behind login,
  so the field list below is unconfirmed.

## Field map (unconfirmed, verify on the form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Project name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_long` |
| Category | select (e.g. AI, Analytics, Automation Platforms, Cloud Computing, Collaboration...) | closest to `product.categories[0]` |
| Logo / image | image | `assets.logo_square`, then `assets.screenshots[0]` |
| Pricing | select | map `product.pricing_model` |
| Plan | Free / Premium / Premium Plus | Free unless budget allows |

## Steps
1. Ask the user about the badge (free plan needs it). If yes, add the badge HTML from the submit flow to the site footer.
2. Sign in with GitHub, open https://devtoolsdir.com/projects/submit.
3. Fill fields, choose the Free plan, pick the earliest free launch date, run the backlink verification.
4. Submit and screenshot to `.launchkit/evidence/dev-tools-dir.png`.
5. `launchkit mark dev-tools-dir submitted --note "free queue, up to 30 days, badge required"`

## Make the listing perform
- On launch day (08:00 UTC) the listing competes for upvotes on the homepage; share the link once with your audience.
- Upsells to skip: Premium/Premium Plus, the "Outbid" homepage auction, "DR Booster" ($50, 10 network backlinks),
  "Submit to 20+ directories". None are needed.

## Gotchas
- Removing the badge later can drop the free listing; keep it while listed.

## After submitting
- Find the project page from your dashboard after launch; `launchkit mark dev-tools-dir live --listing-url <url>`.
