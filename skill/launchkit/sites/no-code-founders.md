---
id: no-code-founders
name: "No Code Founders"
url: https://www.nocodefounders.com/list-your-tool
category: No-Code
mode: form
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# No Code Founders

A tools-and-deals directory plus a weekly newsletter for 39,000+ founders using AI and no-code tools. Listing is **paid only**: $500 one-time for a permanent listing, 30 days of featured placement and a newsletter mention. There is no free tier, so with `budget_usd` 0 skip it.

## Before you start
- Budget check: if `launch_settings.budget_usd` is under 500, mark `skipped` ("paid only, $500"). Otherwise mark `needs_human` and let the user approve the charge.
- A deal or discount (`product.deal_or_promo_code`) helps here; the directory sorts "Has deal first" by default.
- No account is needed; payment is taken by card on submit.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name * | text | `product.name` |
| One-line description * | 120 chars | `product.tagline` |
| Full description * | text | `product.description_medium` |
| Website URL * | URL | `product.url` |
| Logo URL | URL, optional | public URL of `assets.logo_square`, or leave blank (they fetch it from the site) |
| Category * | Builders, Database, Automation, Design, Auth, Payments, Email, Marketing, Analytics, AI, Other | closest match to `product.categories[0]`. AI products -> AI, app builders -> Builders, Zapier-like -> Automation |
| Your name * | text | `founder.name` |
| Email address * | email | `submission.email` |
| Your role * | text | `founder.role` |
| Add a deal | optional | `product.deal_or_promo_code`, written as a concrete offer ("3 months free", "50% off first month") |
| Partner code | optional | leave blank |
| Newsletter feature add-on | $1,500 | never tick without the user's approval |

## Steps
1. Open https://www.nocodefounders.com/list-your-tool.
2. Search the tools directory for `product.name` first. If it's listed, mark `live` and stop.
3. If the budget allows and the user approved: fill the fields above.
4. The button says **Pay $500 and submit**. Stop before clicking it and mark `needs_human` with "NCF form filled, $500 payment needs approval". Payment is the user's step.
5. After the user pays: screenshot the confirmation to `.launchkit/evidence/no-code-founders.png` and `launchkit mark no-code-founders submitted`.

## Make the listing perform
- Add a deal. Deals are the core of the site (Pro members pay to unlock deal codes), and listings with deals sort first.
- Keep the one-liner concrete, the way existing listings read: "Visual automation platform connecting 3000-plus apps".
- Time it so the 30-day featured window covers the main launch week.

## Gotchas
- The newsletter feature ($1,500) and sponsorships ($1,500 a week up to $7,500 a quarter) are upsells on the same page.
- The footer "List your tool" link is the only way in; there's no free submit form.

## After submitting
- Check the tools directory and the next weekly newsletter for the mention.
