---
id: uno-directory
name: Uno Directory
url: https://uno.directory/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: optional
review_time: instant after backlink check
verified: true
last_checked: 2026-10-12
---

# Uno Directory

Indie tools and resources directory. Free listings need a visible Uno Directory backlink on your homepage. Paid listing is $10 one-time with no backlink. Both are permanent while guidelines are met.

## Before you start
- Account required: sign in with Google or email at https://uno.directory/auth/signin (email needs verification). Follow `submission.allow_account_creation` and `submission.preferred_login`.
- Free tier needs a homepage backlink or badge to https://uno.directory. Ask the user first (`launch_settings.add_badge_to_site`). If declined and budget is $0, mark `skipped` with "backlink or $10 required".
- Need: a featured image at least 1200x630 (`assets.og_image`), a 600-800 word description.

## Field map

Form is behind login (order unconfirmed). Fields from their public "How to Submit" guide:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | required | `product.name` |
| Website URL | required | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | 600-800 words recommended | `product.description_long` |
| Featured image | min 1200x630 | `assets.og_image` (or a screenshot cropped to 1200x630) |
| Category | required: AI & Machine Learning, Business, Chatbots, Code & Development, Communication, Content Creation, Data & Analytics, E-commerce, Finance, Marketing, Productivity, Project Management, SEO, Security, Text & Writing, Video & Audio and more | closest to `product.categories[0]` |
| Subcategory | dropdown | most specific match |
| Tags | list | `product.tags` |
| Listing type | Free (backlink) / Paid $10 | Free if backlink approved |

## Steps
1. Open https://uno.directory/submit. You will be sent to sign in.
2. Sign in with Google or email; verify email if asked.
3. Back on Submit, use AI autofill if offered, then replace the copy with profile copy and fill the fields.
4. For free: add the backlink to the homepage first, then submit so the check passes. Stop at payment for paid.
5. Screenshot to `.launchkit/evidence/uno-directory.png`, `lk mark uno-directory submitted --note "free, backlink"`.

## Make the listing perform
- Listings get a detailed page with a tracked direct link and analytics. A long, structured description (features, use cases, pricing) ranks better in their search.
- Pick a subcategory. Smaller subcategory pages show you higher.
- Their network sites (EarlyHunt, IndieHunt, MakerHunt and others) are separate paid launches. Skip.

## Gotchas
- The backlink must be on the homepage and visible. Footer of a subpage is not enough.
- Removing the backlink later can unlist a free listing.

## After submitting
- Open the listing from your dashboard, check the image and link, and save it with `--listing-url`.
