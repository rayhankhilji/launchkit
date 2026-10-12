---
id: tooldirs
name: ToolDirs
url: https://tooldirs.com/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: optional
review_time: within 2 days (free)
verified: true
last_checked: 2026-10-12
---

# ToolDirs

Indie tool directory. Free listings need a dofollow backlink to ToolDirs in your site footer plus their badge. Paid: Basic $9.99 lifetime, Featured $14.99 first month. Paid tiers need no badge.

## Before you start
- Need: `assets.logo_square` (SVG/WebP/PNG/JPG, max 500 KB), up to 4 screenshots under 5 MB each, a description of at least 500 characters.
- Free tier needs the footer backlink and badge. Ask the user first (`launch_settings.add_badge_to_site`). If declined and budget is $0, mark `skipped` with "badge or $9.99 required".

## Field map

Step 1, tool details:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool URL | 100 chars, with AI autofill | `product.url` |
| Tool Name | 100 chars, required | `product.name` |
| Tagline | 160 chars, required | `product.tagline` |
| Description | 500-5000 chars, markdown, required | `product.description_long` (or `description_medium` if 500+ chars) |
| Logo | SVG/WebP/PNG/JPG, max 500 KB, required | `assets.logo_square` |
| Screenshots | up to 4, under 5 MB each | `assets.screenshots` |
| Categories | up to 3, required | closest to `product.categories` |
| Pricing Model | Free / Freemium / Paid, required | map `product.pricing_model` |
| Platforms | required | map `product.platforms` |
| Discount Code | optional | `product.deal_or_promo_code` |
| Founded Year | optional | `company.founded_year` |
| YouTube Demo Video | optional | `links.demo_video` if YouTube |
| GitHub Repository | optional | `product.repo_url` |
| Founder's Twitter | optional | `founder.twitter` |
| Affiliate Program | optional URL | leave blank unless the user has one |

Step 2: submission type (Free / Basic / Featured) and Email (`submission.email`).

## Steps
1. Open https://tooldirs.com/submit. Enter `product.url` and let autofill run, then replace its copy with profile copy.
2. Fill the remaining fields and uploads, continue to step 2.
3. Choose **Free** (if badge approved) and enter the email. Stop at any payment screen for paid tiers.
4. Submit, screenshot to `.launchkit/evidence/tooldirs.png`, `lk mark tooldirs submitted --note "free, review within 2 days"`.

## Make the listing perform
- The long description is indexed for search. Use markdown headings for features and use cases from `product.key_features` and `product.use_cases`.
- Add a discount code if the user has one; deals get a badge on the card.
- Featured ($14.99) gets homepage placement. Only with user approval.

## Gotchas
- Descriptions under 500 characters are rejected.
- Logo over 500 KB fails silently on some browsers; compress first.
- Free review needs the backlink live before review, or it waits.

## After submitting
- Check email for approval within 2 days, then save the listing URL with `--listing-url`.
