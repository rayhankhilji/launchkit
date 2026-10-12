---
id: startup-buffer
name: Startup Buffer
url: https://startupbuffer.com/site/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Startup Buffer

Public startup directory (online since 2015) organized by market, location, tags and related products. Free submission goes into a review queue. Paid packages buy faster review and homepage time.

## Before you start
- No account needed. A private edit link is emailed to the business email.
- Need: `product.tagline` as one sentence, `product.description_medium` (at least 3-4 sentences), one image (`assets.logo_square` or a screenshot).
- Paid packages (launch pricing): Publish $19.95 priority review, Power $49 (2 weeks homepage, 1 newsletter, 1 social), Vanta $299 (3 months homepage). Skip all of them when `budget_usd` is 0.

## Field map

The form has 3 steps.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| **1 Basic Info** Startup Name | required | `product.name` |
| Website URL | URL, required | `product.url` |
| Business Email | email, required | `submission.email` |
| **2 Your Story** Short pitch | one clear sentence, required | `product.tagline` |
| Full description | at least 3-4 sentences, required | `product.description_medium` |
| **3 Details** Country | dropdown, optional | `company.country` |
| City | dropdown filled after country, optional | `company.city` |
| Primary Category | dropdown, optional | map `product.categories[0]` to: AI, Analytics, Automation, Collaboration, Communication, Creator Tools, Customer Support, Data, Design, Developer Tools, E-commerce, Education, Finance, Gaming, Health, HR & Recruiting, Infrastructure, Legal, Marketing, Marketplace, Media, Productivity, Sales, Security, Travel, Web3 |
| Tags | text, optional | 3-5 items from `product.tags`, comma separated |
| YouTube Video URL | optional | `links.demo_video` if it is a YouTube link |
| LinkedIn / Twitter/X / Facebook | URLs, optional | `links.linkedin`, `links.twitter`, leave Facebook blank unless known |
| Image | JPEG/PNG/GIF/WebP | `assets.logo_square` |

## Steps
1. Search https://startupbuffer.com/ for `product.name`. If listed, mark `live`.
2. Open https://startupbuffer.com/site/submit. A Cloudflare check may run first.
3. Fill step 1, click **CONTINUE**. Fill step 2, continue. Fill step 3 and upload the image.
4. Submit. Decline any promotion package offered after submit.
5. Screenshot the confirmation to `.launchkit/evidence/startup-buffer.png`, then `lk mark startup-buffer submitted --note "free queue"`.

## Make the listing perform
- Pages are grouped by market and location, so always set Country, City and Primary Category. Those pages are how visitors find listings.
- Tags create related-product links. Use the words buyers search, not internal feature names.
- The short pitch shows on cards. Plain "X for Y" sentences read best.

## Gotchas
- The City dropdown loads only after a country is selected.
- Description is judged on substance. One-line descriptions are likely sent back.
- Keep the emailed private edit link. It is the only way to edit without an account.

## After submitting
- Use the edit link from email to check status. Once approved, save the listing URL with `--listing-url`.
