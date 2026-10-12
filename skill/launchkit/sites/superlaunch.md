---
id: superlaunch
name: "SuperLaunch"
url: https://superlaunch.io/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: "listed within a few hours after review (free queue); 24 hours with Launch Plus"
verified: true
last_checked: 2026-10-12
---

# SuperLaunch

Launch site for AI products where real people ("SuperReviewers") test and review launches. Free gives a permanent listing and a dofollow link with no badge. Launch Plus adds reviews and promotion.

## Before you start
- Account needed: sign in with Google or email and password, or create an account. Create one only if `submission.allow_account_creation` is true.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `product.key_features`, `assets.logo_square`, `assets.screenshots`, `links.demo_video` ready. Give reviewers a working signup or demo; note any `product.free_trial` or `product.deal_or_promo_code`.
- Plans: Free $0 (permanent listing, dofollow link, social media shoutout, review queue). Launch Plus $49 one-time (launch within 24 hours, 5 to 10 SuperReviewer reviews within 10 days, founder story in the Behind The Launch newsletter, 7-day spotlight, Discord access, tested badge). Ask before paying.

## Field map
The form is behind sign-in; exact fields and order are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (AI product categories) | closest match to `product.categories[0]` |
| Key features | text | `product.key_features` |
| Pricing | select | map `product.pricing_model` |
| Logo | image | `assets.logo_square` |
| Screenshots / video | images, URL | `assets.screenshots`, `links.demo_video` |
| Plan | Free / Launch Plus | Free unless approved |

## Steps
1. Open https://superlaunch.io/submit. On "Sign in to launch your product", click **Continue with Google** or enter email and password.
2. Fill the fields and upload images.
3. Choose **Free**. Submit.
4. Screenshot to `.launchkit/evidence/superlaunch.png`.
5. `launchkit mark superlaunch submitted --note "free queue"`

## Make the listing perform
- Reviews are the main signal here. Make the product easy to try: a free tier, trial or test account, and say so in the description.
- AI products fit best; frame the tagline around the task the AI does.
- Free listings get a social shoutout; repost it from `links.twitter`.

## Gotchas
- SuperReviewer reviews only come with Launch Plus. Free listings are not reviewed by testers.
- Visibility windows (7, 15, 30 days) are offered at checkout. Skip unless approved.

## After submitting
- Check the dashboard and the All Products page for the listing.
