---
id: navtools
name: "NavTools"
url: https://navtools.ai/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: turnstile
backlink_required: no
review_time: "30-90 days (free)"
verified: true
last_checked: 2026-10-12
---

# NavTools

An AI tools navigation site with rankings ("Fastest Growing", "Visit Growth", "Most Visited") built from traffic data. Free listing is real but slow (30-90 days). The form can be just three fields; NavTools then writes the listing content itself, or you can add the details yourself.

## Before you start
- No account needed on the form (the Login button is optional). Cloudflare Turnstile runs on the page; if it shows a challenge you can't pass normally, mark `needs_human`.
- Tiers: Basic $0 (30-90 days review), Fast Track $29.9 one-time (48h, 7 days homepage featured), Growth Pro $149 (24h, 15 days homepage + tool pages). At budget 0 choose Basic.
- Choose **Add Details Yourself** so the wording matches the profile, unless the extra fields are slow to fill.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Submission Type | radio: Basic / Fast Track / Growth Pro | Basic ($0) |
| Listing Content | radio: Quick Submit / Add Details Yourself | Add Details Yourself |
| Tool Name * | 2-50 chars | `product.name` |
| Website URL * | URL, max 500 | `product.url` |
| Contact Email * | email, max 254 | `submission.email` |
| Extra detail fields (shown after choosing Add Details Yourself) | not visible signed out; unconfirmed | tagline -> `product.tagline`; description -> `product.description_long`; category -> closest to `product.categories[0]`; pricing -> `product.pricing_model`; logo -> `assets.logo_square` |

## Steps
1. Search navtools.ai for `product.name`. If listed, mark `live` and stop.
2. Open https://navtools.ai/submit. Select **Basic**, then **Add Details Yourself**.
3. Fill Tool Name, Website URL, Contact Email and any detail fields that appear.
4. Click **Submit AI Tool**. Screenshot the confirmation to `.launchkit/evidence/navtools.png`.
5. `launchkit mark navtools submitted --note "basic, 30-90 day review"`

## Make the listing perform
- Rankings use site traffic and visit growth. A listing that goes live after the user's launch can show up in "Fastest Growing" if traffic is still climbing; there's nothing to do on NavTools itself for that.
- If you use Quick Submit, NavTools writes the copy from the website, so make sure the site's hero and meta description are accurate first.

## Gotchas
- Advertise page sells click packages ($100 for 500 clicks). Not part of listing; skip.
- Review is long; don't resubmit if nothing shows after a month.

## After submitting
- Check again after 30 days and after 90 days. Mark `live` when the tool page appears.
