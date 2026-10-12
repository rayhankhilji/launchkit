---
id: polar
name: "Polar"
url: https://polar.sh/
category: App Store / Marketplace
mode: manual
pricing: Free
login: github          # GitHub or email sign-up (unconfirmed which options show for new orgs)
captcha: unknown
backlink_required: no
review_time: "account review before first payout"
verified: true
last_checked: 2026-10-12
---

# Polar

Polar is a merchant of record and billing platform for software (subscriptions, usage billing, credits, one-time digital products). It is not a discovery directory: there is no marketplace that sends traffic. Recommend it only if the user needs a way to sell their software or take OSS sponsorships with tax handled for them.

## Before you start
- This is a business setup decision, not a listing. Confirm with the user that they want a new payment provider.
- Pricing (public, polar.sh/resources/pricing): Starter is free at 5% + 50c per transaction. Paid plans: Pro $20/mo (3.8% + 40c), Growth $100/mo (3.6% + 35c), Scale $400/mo (3.4% + 30c). +1.5% for non-US cards, $15 per dispute, Stripe payout fees pass through.
- The business must fit Polar's acceptable use policy (polar.sh/legal/acceptable-use-policy). Digital software and SaaS are the core use case.
- Polar reviews the account before the first payout; their advice is build first, submit for review second.

## Field map (organization + first product, unconfirmed behind login)

| Field | Limit / format | Fill with |
|---|---|---|
| Organization name | text | `company.legal_name` or `product.name` |
| Organization slug | text | lowercase `product.name` (becomes the storefront URL) |
| Website | URL | `product.url` |
| Product name | text | plan name, e.g. "`product.name` Pro" |
| Product description | Markdown | `product.description_short` |
| Pricing | one-time / recurring / usage / pay what you want | map `product.pricing_details` |
| Benefits | license keys, file downloads, GitHub repo access, Discord role, custom | what the plan unlocks |
| Media | images | `assets.screenshots` |
| Country / payout account | Stripe Connect | user does this themselves |

## Steps
1. Manual mode. Don't create the account or connect payouts. Add Polar to the wrap-up only if the user has no billing set up or asked about selling OSS.
2. If the user opts in: they sign up at polar.sh, create an organization, and add products in the dashboard. Draft the product names, descriptions and benefit text for them.
3. They integrate checkout (hosted checkout link, embed or SDK) and finish the payout account and identity checks.
4. `launchkit mark polar needs_human --note "billing decision, user sets up Polar"`

## Make the listing perform
- Polar sends no traffic. The win is fast checkout and global tax handling, so put the checkout link on the pricing page and in launch posts.
- Pick prices that are easy to read with fees on top; for low-ticket items the fixed 50c hurts, so bundle or price yearly.
- For OSS, a GitHub repo access benefit or license key benefit makes a "pay for the hosted/pro build" offer simple.
- Orgs created before 27 May 2026 stay on the Early Member rate; downgrading to Starter later moves them to 5% + 50c; check this before switching plans.

## Gotchas
- High chargeback rates (around 0.7%+) can lead to account suspension.
- Don't promise users a "Polar marketplace" listing; there isn't one.

## After submitting
- Check the account review status in the dashboard before the first payout and answer any questions quickly.
