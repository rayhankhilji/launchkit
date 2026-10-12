---
id: turbo0
name: "Turbo0"
url: https://turbo0.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "within 2 weeks (free); immediate (paid)"
verified: true
last_checked: 2026-10-12
---

# Turbo0

Directory focused on content creation tools: video, audio, images, writing, website building, productivity and growth. Free listings need a backlink to Turbo0 and are reviewed within two weeks. The site is open source (GitHub Justin3go/turbo0.com).

## Before you start
- An account is required (public `submit.md` says so); the login method was not visible without signing in. Create an account only if `submission.allow_account_creation` is true.
- Free: listed forever, up to 3 dofollow links, backlink to Turbo0 required, review within 2 weeks, no featured placement.
- Paid (sale prices): Basic $29.90 (listed immediately, 3 custom dofollow links in the introduction, backlink optional), Pro $99.90 (5 links, featured border), Review Blog $199. Ask before paying.
- If the product is not a content creation tool, the listing may be rejected. Check `product.categories` first.

## Field map
`submit.md` lists the fields; no character limits are published.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Official website | URL | `product.url` |
| Short description | text | `product.tagline` |
| Categories | select | closest match to `product.categories` among video, audio, image, writing, website creation, productivity, growth |
| Tags | select (level: beginner / advanced / professional; pricing: free / freemium / paid; platform: web / windows / ai) | map `product.pricing_model` and `product.platforms` |
| Introduction | long text, Markdown links allowed | `product.description_long`; add `links.docs` or `links.pricing_page` as the extra links |
| Logo / image | image | `assets.logo_square`, `assets.og_image` |
| Plan | Free / Basic / Pro | Free unless approved |

## Steps
1. Open https://turbo0.com/submit and sign in.
2. Fill product info, website, categories and tags.
3. Paste the introduction. Keep links to the product's own pages.
4. Choose **Free**. Add the Turbo0 backlink to the site only if `launch_settings.add_badge_to_site` is true.
5. Submit. Screenshot to `.launchkit/evidence/turbo0.png`.
6. `launchkit mark turbo0 submitted --note "free, review within 2 weeks"`

## Make the listing perform
- The introduction supports links, so use all three free links on useful pages (home, pricing, docs).
- Pick the content creation category that matches what users make with the tool.
- Tag the right user level; visitors filter by beginner, advanced and professional.

## Gotchas
- No free featured placement. The featured border is Pro only.
- Remove the backlink and the free listing can be dropped.

## After submitting
- Check the dashboard within two weeks. Confirm the introduction links are dofollow once live.
