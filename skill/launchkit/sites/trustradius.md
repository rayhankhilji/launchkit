---
id: trustradius
name: TrustRadius
url: https://solutions.trustradius.com/claim-your-profile/
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# TrustRadius

Major B2B software review site used by enterprise buyers. Vendors get a free profile (features, integrations, pricing, security info, videos, a CTA to your site). Paid plans add review campaigns, intent data and premium profile features through sales.

## Before you start
- B2B products only. Consumer apps do not fit.
- Vendor access is through a vendor login: https://www.trustradius.com/login?types=vendor&nexturl=%2Fvendoradmin (Cloudflare check on load). Use a work email on the `product.url` domain.
- Only proceed with account creation if `submission.allow_account_creation` is true.
- Never write, request, or incentivize reviews. Profile work only.

## Field map

Vendor sign-up and the profile editor are behind login (exact fields unconfirmed). The public claim page lists these free profile sections:

| Section | Fill with |
|---|---|
| Work email / name | `submission.email`, `founder.name` |
| Company | `company.legal_name`, `product.url` |
| Product name and category | `product.name`, closest category to `product.categories[0]` |
| Overview | `product.description_medium` |
| Features | `product.key_features` |
| Integrations | only real ones from the profile |
| Pricing | `product.pricing_details`, `product.free_trial` |
| Security info | only facts the user confirmed; leave blank otherwise |
| Videos and demos | `links.demo_video` |
| Screenshots | `assets.screenshots` |
| CTA link | `product.url` or `links.pricing_page` |

## Steps
1. Search https://www.trustradius.com/ for `product.name`. If a product page exists, use **Claim Your Profile** from https://solutions.trustradius.com/claim-your-profile/.
2. The claim button leads to the vendor login above. Create the vendor account and verify the email.
3. In vendor admin, claim the existing product or add a new product, then fill the sections with the mapping above.
4. Save, screenshot to `.launchkit/evidence/trustradius.png`, `lk mark trustradius submitted --note "vendor profile, pending verification"`.
5. If ownership verification needs a call or document, mark `needs_human`.

## Make the listing perform
- TrustRadius only shows a product prominently once it has reviews. The user should invite real customers through TrustRadius' own vendor tools. The agent must not do it for them.
- Fill pricing and security sections. Enterprise buyers filter on them.
- Add a demo video and a CTA. They are included in the free profile.

## Gotchas
- Sales follow-up is common after claiming. The free profile does not require a paid plan.
- Cloudflare challenges block scripted access. Use the normal browser.

## After submitting
- Check vendor admin for verification status, then save the public product URL with `--listing-url`.
