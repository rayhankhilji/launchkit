---
id: tekpon
name: Tekpon
url: https://tekpon.com/get-listed/
category: Software Review Site
mode: form
pricing: Paid ($249 one-time, no free listing)
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Tekpon

SaaS marketplace and review site with category rankings. Tekpon no longer offers free listings. Their FAQ says every listing is a one-time paid process at $249.

## Before you start
- With `launch_settings.budget_usd` below 249: mark `skipped` with "paid only ($249)". Do not create an account.
- If the user approved the spend, they need an account (email/password or LinkedIn) and must pay themselves. Stop at checkout and mark `needs_human` with "approved paid listing, payment needed: $249".
- Higher tiers (Premium, Gold, Platinum seller) are sold through a sales call. Skip.

## Field map

Profile sections listed on the public get-listed page (form itself is behind login, exact field order unconfirmed):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Category | radio list (AI Agents, CRM, Project Management, BI, Security, many more) | closest match to `product.categories[0]` |
| Product name, website | text, URL | `product.name`, `product.url` |
| Short description | max 300 words | `product.description_medium` |
| Best for | short text | `product.target_audience` |
| Recommended for | company sizes | map `product.target_audience` to their size options |
| Pricing | plans | `product.pricing_details`, `product.free_trial` |
| Features | list | `product.key_features` |
| Integrations | list | only real integrations from the profile |
| FAQs | Q and A | `copy.faq` |
| Contact info | email | `submission.email` |
| Logo / screenshots | images | `assets.logo_square`, `assets.screenshots` |

## Steps
1. Search https://tekpon.com/ for `product.name`. If a profile exists, the user can claim it from the profile page.
2. Check the budget rule above. If skipping, run `lk mark tekpon skipped --note "paid only ($249)"` and stop.
3. If approved: open https://tekpon.com/get-listed/, sign up, choose the category, click **Save & Continue** through the sections using the mapping.
4. Stop at payment, screenshot to `.launchkit/evidence/tekpon.png`, mark `needs_human` with the payment note.

## Make the listing perform
- Rankings in Tekpon category pages weigh profile completeness and reviews. Fill FAQs, pricing and features fully.
- "Best for" and "Recommended for" drive filter matches. Be specific about team size.
- Reviews must come from real customers the user invites. Never write or request reviews as the agent.

## Gotchas
- Old blog posts still mention free listings. The live FAQ says no.
- The fee is one-time, not a subscription, but upsell calls are common.

## After submitting
- After payment and approval, find the profile via site search and save it with `--listing-url`.
