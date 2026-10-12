---
id: postmake
name: "Postmake"
url: https://postmake.io/submit
category: Launch Platform
mode: form
pricing: Paid
login: none
captcha: unknown
backlink_required: optional
review_time: "a couple of business days"
verified: true
last_checked: 2026-10-12
---

# Postmake

Hand-curated directory of tools and resources for building and growing online businesses (DR 45, newsletter of about
1,700). Listings are permanent and manually reviewed. Submission is a **paid** listing; the only free route is the badge.

## Before you start
- Paid tiers on /submit: Standard $79, Premium $119, Promoted $199 (newsletter feature, "What's new" placement, a month of
  promotion). Rejected submissions are refunded. With budget 0 this is not a self-serve submission.
- Free route: add a Postmake badge to the product site (https://postmake.io/badges). Their page says they'll feature
  products that show it once it's live. Ask the user; this is optional and slow.
- Only good-fit tools get in: business, marketing, productivity, no-code and developer tools.

## Field map (shown after choosing a paid tier; unconfirmed)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description | one line | `product.tagline` |
| Category | select | closest match to `product.categories[0]` |
| Pricing | select | `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Contact email | email | `submission.email` |
| Payment | Stripe checkout | human only |

## Steps
1. Search https://postmake.io/ for `product.name`. If listed, mark `live`.
2. If budget is 0: offer the badge route. If the user agrees, add the badge, then
   `launchkit mark postmake needs_human --note "badge added; Postmake lists badged tools at their discretion"`.
3. If the user approved a paid tier: open https://postmake.io/submit, pick the tier, fill the form, stop at payment and
   mark `needs_human` with "Postmake form filled, pay $<tier> to submit". Never enter card details.
4. Otherwise `launchkit mark postmake skipped --note "paid only ($79+)"`.

## Make the listing perform
- Postmake is browsed by category. A tight category fit matters more than the copy length.
- Premium and Promoted include the newsletter feature. That's the only part with real reach; Standard is a permanent
  listing and backlink.

## Gotchas
- The assignment listed this as Free/Paid. In practice it's paid, with a discretionary badge route.

## After submitting
- Find the listing by searching postmake.io for `product.name`. Approval comes by email within a couple of business days.
