---
id: powerusers-ai
name: "Powerusers AI"
url: https://powerusers.ai/submit-ai-tool/
category: AI Directory
mode: form
pricing: Paid
login: none
captcha: none
backlink_required: no
review_time: "48 hours"
verified: true
last_checked: 2026-10-12
---

# Powerusers AI

AI tools directory plus guides and toolkits for productivity-minded marketers and small business owners. There is no
free listing: the only option is a $69 one-time, done-for-you listing paid through PayPal.

## Before you start
- Paid only ($69 via PayPal). At `launch_settings.budget_usd` below 69, mark `skipped` ("paid only, $69").
- If the user has budget and wants it, mark `needs_human` ("$69 PayPal payment") and let the user pay. Never pay yourself.
- The tool must be live and public. Closed beta or waitlist products are rejected, as are tools named after an AI model
  (e.g. "GPT-something") and look-alike apps.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text, required | `founder.name` |
| Email | email, required | `submission.email` |
| Paypal Email (For submission reference) | email, required | ask the user (the PayPal account that will pay) |
| Tool Name | text, required | `product.name` |
| Tool URL | URL, required | `product.url` exactly, starting with https:// (no shorteners, redirects or affiliate links) |

They write the listing themselves from your site, so there are no description, category or logo fields.

## Steps
1. Open https://powerusers.ai/submit-ai-tool/ and search the directory for `product.name` first. If listed, mark `live` and stop.
2. Only continue if the user approved the $69. Fill the five fields above.
3. Click **Submit**. The site redirects to PayPal to pay $69. Stop here and hand over to the user (`needs_human`).
4. After the user pays, `launchkit mark powerusers-ai submitted --note "paid $69, listing in 48h"`.

## Make the listing perform
- Your homepage is the brief: they "map the relevant capabilities" from it. Make sure the hero line and feature list on
  `product.url` match `product.tagline` and `product.key_features` before paying.
- After it goes live you can request one revision. Send them `product.description_medium` and the top 3 `product.key_features`.
- Homepage featuring is by email to dave[at]powerusers.ai and depends on availability.

## Gotchas
- NSFW tools may be declined (refunded) and never appear on the homepage.
- Rejected submissions get a full refund to PayPal.

## After submitting
- They email when the listing is live with a link and a dark/light banner you can embed. Add the badge only if
  `launch_settings.add_badge_to_site` allows it.
