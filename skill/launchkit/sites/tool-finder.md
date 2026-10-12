---
id: tool-finder
name: Tool Finder
url: https://toolfinder.com/submit
category: Software Review Site
mode: form
pricing: Paid ($29 one-time)
login: none
captcha: unknown
backlink_required: no
review_time: about 72 hours
verified: true
last_checked: 2026-10-12
---

# Tool Finder

Productivity and work tool directory run by Keep Productive (large YouTube channel and newsletter). It moved from toolfinder.co to toolfinder.com. There is no free tier: a listing is $29 one-time, or Vendor Pro is $79 per year with one homepage week.

## Before you start
- With `launch_settings.budget_usd` below 29: mark `skipped` with "paid only ($29)".
- If the user approved the spend, the agent fills the form and stops at payment; the user pays.
- Need: a rounded app-icon style logo (PNG/JPG/WebP, max 500 KB), a 32-char summary, the platforms list.
- Money-back guarantee if they cannot list the product. Human review in about 72 hours.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Company | optional | `company.legal_name` |
| Your email address | required | `submission.email` |
| Tool name (also sets URL slug) | 22 chars, required | `product.name` |
| Quick summary | 32 chars, required | `product.tagline_short` cut to 32 chars |
| Website URL | required | `product.url` |
| Logo | PNG/JPG/WebP, 500 KB max, optional | `assets.logo_square` (compress if larger) |
| Platforms | Web, iOS, Android, Chrome Extension, Linux, Windows, Mac | map `product.platforms` |
| Best for | Individual, Small Business, Mid Market, Enterprise | map `product.target_audience` |
| Categories | up to 3 (AI Tools, CRM Software, Calendar Apps, Daily Planners, Developers, Document Management, eCommerce and more) | closest matches to `product.categories` |
| Terms checkbox | required | tick |
| Plan | Tool Listing $29 / Vendor Pro $79/yr | Tool Listing if approved |

## Steps
1. Search https://toolfinder.com/ for `product.name`. If listed, mark `live`.
2. Apply the budget rule. If skipping: `lk mark tool-finder skipped --note "paid only ($29)"`.
3. If approved: open https://toolfinder.com/submit, fill fields top to bottom, tick terms.
4. Continue to checkout and stop. Screenshot to `.launchkit/evidence/tool-finder.png`, mark `needs_human` with "approved paid listing, payment needed: $29".

## Make the listing perform
- Audience is productivity-minded individuals and small teams. Choose "Best for" and categories for that buyer.
- The 32-char summary is the card text. Say what it does ("Calendar that books meetings"), not a slogan.
- Vendor Pro's homepage week is the only placement boost. Only suggest it if the user wants paid reach.

## Gotchas
- Tool name is capped at 22 characters and becomes the slug, so drop suffixes like "AI" or ".app" if needed.
- Old toolfinder.co links redirect; use the .com submit URL.

## After submitting
- After review (about 72 hours) find the tool page via site search and save it with `--listing-url`.
