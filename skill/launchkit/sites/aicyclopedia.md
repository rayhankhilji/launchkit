---
id: aicyclopedia
name: "AIcyclopedia"
url: https://aicyclopedia.com/submit-your-ai-tool/
category: AI Directory
mode: form
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# AIcyclopedia

**Submission page is currently blocked (403 Forbidden) and the site looks inactive.** The WordPress homepage still loads, but its newest article is from September 2025. Treat as parked: try once, then skip.

## Before you start
- The submit URL returned 403 in a real browser and through a proxy on 2026-10-12. An archived copy from June 2026 shows the form below.
- If the page loads for you, the form needs a logo and a featured image upload.

## Field map

From the June 2026 archive (unconfirmed live):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool Name | text | `product.name` |
| Tag Line | text | `product.tagline` |
| Pricing Model | FREE / FREEMIUM / PAID | map `product.pricing_model` |
| Official Website Link | URL | `product.url` |
| Facebook Link | URL | leave blank unless the profile has one |
| Email | email | `submission.email` |
| X Link | URL | `links.twitter` |
| Instagram Link | URL | blank unless known |
| Discord Link | URL | `links.discord` |
| Introduction Youtube Video Link | URL | `links.demo_video` (YouTube only) |
| Tool Description | textarea | `product.description_medium` |
| Tool Logo | image upload | `assets.logo_square` |
| Featured Image | image upload | `assets.og_image` or `assets.screenshots[0]` |

## Steps
1. Open https://aicyclopedia.com/submit-your-ai-tool/. If you get 403 Forbidden: `launchkit mark aicyclopedia skipped --note "submit page 403, site inactive since 2025-09"`.
2. If it loads, fill the fields above and click **Send**. A reCAPTCHA challenge means `needs_human`.
3. Screenshot to `.launchkit/evidence/aicyclopedia.png` and `launchkit mark aicyclopedia submitted`.

## Make the listing perform
- Low value while the site isn't publishing. Don't spend more than one attempt here.
- If it revives, the featured image and YouTube link are what make a tool card stand out on their "AI Tools" grid.

## Gotchas
- Previous directory lists show pricing as Free/Paid; no paid tier was visible in the archived form.

## After submitting
- Nothing to check unless the submission went through.
