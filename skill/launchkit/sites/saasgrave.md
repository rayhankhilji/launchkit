---
id: saasgrave
name: "SaaSGrave"
url: https://saasgrave.org/
category: Startup Database
mode: manual
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "instant"
verified: true
last_checked: 2026-10-12
---

# SaaSGrave

SaaSGrave is a graveyard and marketplace for shut-down, stalled or zero-revenue SaaS: founders post the story of what went wrong, and buyers can pick up the code, domain and users. Its sister site SaaSGrave Launches (https://ls.saasgrave.org) runs free weekly launches for live products. Only use the graveyard if the user's product is dead or for sale; for a live product, use the Launches site.

## Before you start
- Decide with the user which path fits: (a) post-mortem / for-sale listing on saasgrave.org, or (b) weekly launch on ls.saasgrave.org. Never list a live product as dead.
- Graveyard listing needs: `product.name`, `product.url`, `assets.logo_square`, `assets.screenshots`, real numbers (users, revenue, time spent) from the user, and an honest "what went wrong" story. The site writes an AI summary from it.
- Sign-in is required to post (login methods not confirmed; check the sign-in page). Respect `submission.allow_account_creation`.

## Field map
The post form is behind sign-in, so field order is unconfirmed. Their homepage and pricing page describe these inputs:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| URL | URL | `product.url` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Story / what went wrong | long text | write with the user from facts they give; start from `product.description_long` |
| Metrics (users, revenue) | numbers | only figures the user confirms; optional revenue verification |
| Open for sale | toggle | only if the user wants to sell |
| Asking price / assets included | text | ask the user |

## Steps
1. Ask the user which path (graveyard or launch). For a live product go to https://ls.saasgrave.org, sign in, and submit the launch for the next week.
2. For the graveyard: open https://saasgrave.org/, click **Post your startup** (or **Bury your SaaS**), sign in.
3. Fill the fields above. Keep numbers exactly as the user stated.
4. Leave paid placements unticked unless the user approved spend within `launch_settings.budget_usd`.
5. Publish. Listings go live immediately with no card required. Screenshot to `.launchkit/evidence/saasgrave.png`.
6. `launchkit mark saasgrave live --listing-url <listing url>`

## Make the listing perform
- Buyers filter on real numbers. Listings with verified revenue, user counts and a clear asset list (code, domain, users, social accounts) get contacted; vague ones don't.
- Write the post-mortem candidly: specific mistakes and lessons get shared in their newsletter and on X.
- On Launches, featured launches show first, then free launches sort by upvotes for the week. Launch early in the week and share the link to get upvotes.

## Gotchas
- Pricing seen 2026-10-12: listing free; selling costs 3% only when it sells (homepage also mentions a $9 sale unlock). Paid placements: Featured Launch $9/week, Sidebar $19/month, Sponsored Row $29/month, Newsletter $49/month, Directory Blast $99 one-time. All optional.
- The graveyard is public and indexed. Confirm the user is fine with the product being publicly labeled dead.

## After submitting
- Listing gets a dofollow backlink. Reply to buyer messages from the dashboard if it is for sale.
