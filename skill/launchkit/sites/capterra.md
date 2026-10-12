---
id: capterra
name: "Capterra"
url: https://www.capterra.com/vendors/
category: Software Review Site
mode: form
pricing: Free/Paid
login: email            # business email; vendor portal at app.g2digitalmarkets.com
captcha: unknown        # site sits behind Cloudflare; G2 form behind bot protection
backlink_required: no
review_time: "3-5 business days (G2 research vetting)"
verified: false
last_checked: 2026-10-12
---

# Capterra

Big B2B software marketplace. G2 bought Capterra, GetApp and Software Advice from Gartner in early 2026, and the vendor side is now "G2 Digital Markets". Free listing, paid pay-per-click placement on top.

Checked 2026-10-12: the old URL `/vendors/sign-up` now 404s live. The live vendor page is Cloudflare-blocked for automation, so the flow below comes from the 2026-09 snapshot of https://www.capterra.com/vendors/, where **Get Your Product Listed** links to https://www.g2.com/products/new and **Vendor Login** goes to https://app.g2digitalmarkets.com/login.

## Before you start
- Do the `g2` guide first. One G2 product request now covers Capterra, GetApp and Software Advice. If `g2` is already `submitted` or `live`, this is a check, not a new submission.
- A business email on the product's domain (`submission.email`). Free webmail is usually refused.
- B2B only. Consumer apps and games don't belong here; mark `skipped` with "not B2B".

## Field map
The form is G2's product request form. See `g2.md` for the field map. Extra fields the vendor portal asks for after approval (from public vendor info, unconfirmed):

| Field | Limit / format | Fill with |
|---|---|---|
| Product description | ~1000 chars | `product.description_medium` |
| Features checklist | checkboxes per category | tick only items in `product.key_features` |
| Pricing | starting price + model | `product.pricing_details`, `product.free_trial` |
| Deployment | checkboxes | from `product.platforms` (web -> Cloud/SaaS/Web-based, mac/windows -> desktop, ios/android -> mobile) |
| Target customers / company size | checkboxes | from `product.target_audience` |
| Screenshots / video | images, URL | `assets.screenshots`, `links.demo_video` |

## Steps
1. Open https://www.capterra.com/vendors/. If Cloudflare shows a challenge you can't pass, go straight to https://www.g2.com/products/new.
2. Search capterra.com for `product.name`. If it exists, `launchkit mark capterra live --listing-url <url>` and stop.
3. Click **Get Your Product Listed**. It opens G2's form. Follow `g2.md` steps 3-6.
4. `launchkit mark capterra submitted --note "via G2 product request, covers GetApp + Software Advice"`

## Make the listing perform
- Category placement drives everything. Pick the narrowest category that matches what buyers search, not the broadest.
- Reviews rank free listings. After approval, the user should send their review link to 10+ real customers. Never write reviews.
- Fill pricing with a real starting price. Capterra filters by price and free trial, and blank pricing drops you out of those filters.
- PPC bidding is paid; with `budget_usd` 0, skip it.

## Gotchas
- Old Gartner Digital Markets vendor URLs and `digital-markets.gartner.com` no longer resolve.
- Sales reps call after sign-up. That's normal; the free listing doesn't need a paid plan.

## After submitting
- Vendor portal: https://app.g2digitalmarkets.com/login (log in with the same account once approved).
- Recheck capterra.com search 1-2 weeks after the G2 profile goes live.
