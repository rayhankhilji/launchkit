---
id: trustmrr
name: "TrustMRR"
url: https://trustmrr.com/
category: Startup Database
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: no
review_time: "instant"
verified: true
last_checked: 2026-10-12
---

# TrustMRR

TrustMRR is a database of startups with revenue verified straight from the payment provider, plus a marketplace for buying and selling them (about 200K monthly visitors per the site). Only worth it if the product already has paying customers; the listing shows real revenue numbers.

## Before you start
- The product needs revenue in a supported provider: Stripe, LemonSqueezy, Polar, Paddle, Dodo Payments, RevenueCat, Superwall, App Store or Shopify.
- The user must create a **read-only (restricted) API key** themselves (Stripe: `rk_live_...` with read access). This is `needs_human`. Never ask for or paste a secret key, and never store it in `.launchkit/`.
- Revenue is public unless "Anonymous mode" is on. Confirm with the user which they want.
- Add-ons cost money; ask before ticking any.

## Field map
From the **Add startup** dialog on the homepage:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Payment provider | tabs (Stripe default) | the provider the user bills with |
| 1. API key | restricted read-only key, required | user pastes it themselves |
| 2. X handle | optional | handle from `founder.twitter` or `links.twitter` |
| Anonymous mode | toggle | on only if the user wants revenue shown without the name |
| Add-on: dofollow link | paid ($19) | off unless approved |
| Add-on: AI visibility boost | paid ($79) | off unless approved |
| Add-on: sponsor spot / list for sale | paid / toggle | off unless the user wants to sell |

After the key is connected, the dashboard asks for the startup profile (unconfirmed): name `product.name`, URL `product.url`, description `product.description_short`, category closest to `product.categories[0]`, logo `assets.logo_square`.

## Steps
1. Ask the user if the product has revenue. If not, `launchkit mark trustmrr skipped --note "no revenue to verify"`.
2. Open https://trustmrr.com/ and click **Add startup**.
3. Pick the provider tab. Hand the API key field to the user (mark `needs_human` if unattended).
4. Fill the X handle, leave add-ons off, submit.
5. Complete the profile in the dashboard, screenshot to `.launchkit/evidence/trustmrr.png`.
6. `launchkit mark trustmrr live --listing-url <startup page>`

## Make the listing perform
- Leaderboards and category pages sort by verified revenue and growth, so the listing ranks on numbers, not copy.
- Linking the X handle shows the founder on the page and on their X-shared leaderboards.
- If the user may sell, "List for sale" puts it in the acquisition marketplace that drives most of the traffic.

## Gotchas
- Revocable restricted keys only. If the user later revokes the key, revenue stops updating.
- Ad banners at the top of the page look like listings; ignore them.

## After submitting
- The startup page shows MRR and revenue history immediately after sync. Check the leaderboard position a day later.
