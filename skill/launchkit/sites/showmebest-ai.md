---
id: showmebest-ai
name: "ShowMeBest.ai"
url: https://showmebest.ai/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: unknown          # free form is visible logged out; a Login button sits in the header
captcha: unknown
backlink_required: yes  # free pack requires a partner link / badge in your footer
review_time: "72 hours to 4 weeks (free), 24 hours (paid)"
verified: true
last_checked: 2026-10-12
---

# ShowMeBest.ai

AI tools directory built on ShipFast, available in 10 languages, claiming 10K+ listed tools. Free listing exists but
needs a backlink; paid tiers skip the queue and add dofollow links.

## Before you start
- Tiers on /submit: **Free** $0 (dofollow backlink, review 72 hours to 4 weeks, requires their badge or partner link in
  your footer), **Basic** $9.99 one-time (listed forever, 1 dofollow link, no queue), **Pro** $49.99 (featured 6 months,
  5+ dofollow links). At budget 0 use Free.
- The badge is required for Free. Check `launch_settings.add_badge_to_site`: if "ask" or false, mark `needs_human`
  ("needs ShowMeBest badge in footer") and give the user the snippet below.
- Badge snippet (white theme): `<a href="https://showmebest.ai" target="_blank"><img src="https://showmebest.ai/badge/feature-badge-white.webp" alt="Featured on ShowMeBestAI" width="220" height="60"></a>`. A dark version is selectable on the page.

## Field map (free form at /submit/free-submit)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website Name | text | `product.name` |
| Website Url | URL | `product.url` |
| Your Email | email | `submission.email` |

The free form has only these three fields. The site generates the tool page itself ("Magic AI Tool Submission").

## Steps
1. Search https://showmebest.ai/ for `product.name`. If listed, mark `live` and stop.
2. Make sure the badge is live in the footer of `product.url` (or the user approved adding it).
3. Open https://showmebest.ai/submit, keep the **Listing** tab (not Guest Post), click **Submit Now** under FREE.
4. On /submit/free-submit fill the three fields and click **Submit**. If it asks you to log in, use `submission.preferred_login`.
5. Screenshot to `.launchkit/evidence/showmebest-ai.png`, then `launchkit mark showmebest-ai submitted --note "free, review 72h-4w"`.

## Make the listing perform
- Because the page is auto-generated from your site, your homepage title, meta description and og image
  (`assets.og_image`) become the listing. Fix those first.
- Their FAQ says clear use cases, real UI screenshots and problem-focused copy help. Make sure the homepage shows them.
- Pro ($49.99) is the only way to get featured placement; skip at budget 0.

## Gotchas
- Removing the badge later can get a free listing dropped.

## After submitting
- Check search for `product.name` after 3 days, then weekly up to 4 weeks.
