---
id: saasgenius
name: "SaaSGenius"
url: https://www.saasgenius.com/get-listed/
category: Software Review Site
mode: form
pricing: Paid
login: none
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# SaaSGenius

A SaaS review and comparison blog. There's no free listing: the "Get Listed" page offers paid packages only and asks you to email them. Skip unless the user has budget and wants it.

## Before you start
- No form, no account. Listing is by email to contact@saasgenius.com.
- All packages on `/get-listed/` are paid (product listing, featured listing, review articles). If `launch_settings.budget_usd` is 0, mark `skipped` with note "paid only".
- If the user approves spending, it becomes a `pitch`: draft the email and let the user send it or send from `submission.email` if allowed.

## Field map (email)

| Field | Limit / format | Fill with |
|---|---|---|
| To | email | contact@saasgenius.com |
| From | email | `submission.email` |
| Subject | text | "Listing request: " + `product.name` |
| Body: product | text | `product.name`, `product.url`, `product.tagline` |
| Body: description | 2-3 sentences | `product.description_short` |
| Body: category | text | `product.categories[0]` |
| Body: pricing | text | `product.pricing_model`, `product.pricing_details` |
| Body: ask | text | ask for current package prices; don't commit to one |

## Steps
1. Open https://www.saasgenius.com/get-listed/ and confirm it's still paid-only. If a free option has appeared, follow it instead and note it.
2. If budget is 0: `launchkit mark saasgenius skipped --note "paid only"` and stop.
3. Otherwise draft the email from the map, show it to the user, and send only with approval.
4. `launchkit mark saasgenius submitted --note "emailed for pricing"`.

## Make the listing perform
- The site's traffic comes from "best X software" and comparison articles. A paid placement inside an existing comparison article for the user's category is worth more than a standalone listing page.

## Gotchas
- The email address on the page is Cloudflare-obfuscated; it decodes to contact@saasgenius.com.

## After submitting
- Wait for their reply with prices and bring it to the user to decide.
