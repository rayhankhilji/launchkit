---
id: dododirectory
name: "DodoDirectory"
url: https://dododirectory.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "within 2 weeks (free)"
verified: true
last_checked: 2026-10-12
---

# DodoDirectory

Business and SaaS directory selling dofollow backlinks and AI-written review pages. About 1,000 listings. Free listing is fine if the user accepts a permanent badge; it's a backlink play more than a traffic source.

## Before you start
- Free plan requires their badge on the user's site **permanently**. Removing it means instant delisting. Confirm with the user (`launch_settings.add_badge_to_site`).
- No crypto, adult, gambling or illegal products. Skip those.
- Have `assets.logo_square`, one screenshot, and `product.description_medium` ready. Free pages are about 3,000 characters.

## Field map

The submit flow has 3 steps: **Submission Type**, **Details**, **Publish**. Step 1 is confirmed; steps 2 and 3 were not visible without starting a submission.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Plan (step 1) | Free / Premium $9.99 / Review Article $49.99 | **Free Listing** |
| Website URL | URL | `product.url` |
| Name | text | `product.name` |
| Tagline | short text | `product.tagline` |
| Description | up to ~3,000 chars on free | `product.description_long` |
| Categories / tags | multi-select | closest to `product.categories` from: Artificial Intelligence, SaaS, Productivity, Marketing, Startups, SEO, Automation, Developer Tools, Analytics, AI Agents, Content Creation, Social Media, E-commerce, Fintech, Education, Design, No Code, Chrome Extensions, iOS, Video, Sales, Customer Support, Developer APIs, Remote Work, Others |
| Logo / image | image | `assets.logo_square`, `assets.screenshots[0]` |
| Email | email | `submission.email` |

## Steps
1. Search the homepage for `product.name`. If listed, mark `live` and stop.
2. Open https://dododirectory.com/submit, click **Select Free Listing**.
3. Sign in or create an account if asked (`submission.preferred_login`).
4. Fill **Details**, then on **Publish** copy the badge code for the user.
5. Submit, screenshot to `.launchkit/evidence/dododirectory.png`, `launchkit mark dododirectory submitted --note "free, review up to 2 weeks, badge required"`.

## Make the listing perform
- Tags show as chips on cards and drive the tag pages. Pick 3 that match how buyers search (e.g. "SaaS", "Analytics", "AI Agents"), not vague ones like "Others".
- Free pages don't get the AI-written SEO description, so the description you write is the whole page. Use the long version with concrete features and who it's for.
- Listings sort by newest by default, so traffic is front-loaded in the first days after approval.

## Gotchas
- Premium ($9.99) and Review Article ($49.99) are one-time upsells; Press Coverage ($299) is a third-party press release. Skip with budget 0.
- No customer support on the free plan.

## After submitting
- Listings live at `https://dododirectory.com/item/<slug>`. Can be edited from the dashboard later.
- Remind the user: keep the badge on the site or the listing disappears.
