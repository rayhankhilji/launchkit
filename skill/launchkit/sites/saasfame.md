---
id: saasfame
name: "SaaSFame"
url: https://saasfame.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "free: up to 180 days; paid: immediate"
verified: true
last_checked: 2026-10-12
---

# SaaSFame

A SaaS directory ("SaaS Hall of Fame") claiming DR 71 and about 620k monthly visitors, run by Hyhor (also ToolFame).
The free tier is real but slow: their pricing page shows 874 tools waiting and reviews take up to 180 days.

## Before you start
- Login: email/password, Google or GitHub at https://saasfame.com/auth/login.
- Free: 1 dofollow link, **badge must stay on the site permanently** (they check and unpublish if removed), may be rejected.
- Basic $14.9 one-time (3 dofollow links, no badge, listed immediately), Pro $49.9 (featured). Only with user approval.
- Assets: `assets.logo_square`, `assets.og_image` or a wide screenshot.

## Field map (behind login; this directory template's standard fields, confirm on the page)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Link | URL | `product.url` |
| Description | short, about 160 chars | `product.description_short` |
| Introduction | markdown | `product.description_long` plus `product.key_features` |
| Categories | multi-select | from: AI, NoCode, LowCode, DevTools, API, DevOps, Design, UX, CMS, Payment, Ecommerce, CRM, Sales, Marketing, Email, Analytics, Support, Community, HR, Finance, Education, Health, Legal, Security, QA, Mobile, Project, Frontend, Backend, Database, Productivity, Other |
| Tags | multi-select | free / paid / premium from `product.pricing_model`, plus platforms (android, ios, browser-extension) |
| Icon | square image | `assets.logo_square` |
| Image | wide image | `assets.og_image` or `assets.screenshots[0]` |

## Steps
1. Search the homepage for `product.name`. If listed, mark `live`.
2. If the user approved the badge, add it to the site (shown in the submit flow) and deploy.
3. Open https://saasfame.com/submit, sign in, fill the form, choose **free**.
4. Screenshot to `.launchkit/evidence/saasfame.png`, then
   `launchkit mark saasfame submitted --note "free queue, review up to 180 days"`.

## Make the listing perform
- Category filters are the main browse path. Pick one precise category over "Other" or "Productivity".
- Make the Introduction readable as a standalone page: it is what ranks in Google for "<product> review/alternatives".
- With a 180-day queue, tell the user not to expect this before launch day. It's a long-tail backlink.

## Gotchas
- The free badge must stay forever. If the user may remove it later, skip the free tier.
- Guest post, sponsor and "100+ directories" packages are upsells.

## After submitting
- Listing URL pattern: `https://saasfame.com/item/<slug>`. Re-check monthly; mark `live` when it appears.
