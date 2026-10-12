---
id: toolfame
name: "ToolFame"
url: https://toolfame.com/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: yes
review_time: "up to 180 days (free); immediate (paid)"
verified: true
last_checked: 2026-10-12
---

# ToolFame

Tool directory (run by Hyhor) with many categories, from AI and video to SEO. The free listing gives one dofollow link but needs a permanent badge and can wait up to 180 days, with hundreds already in the queue.

## Before you start
- `/submit` redirects to `/auth/login`: email and password, Google, or GitHub. Create an account only if `submission.allow_account_creation` is true.
- Free: one dofollow link, badge required and checked (listing is unpublished if removed), review up to 180 days, may be rejected.
- Paid one-time: Basic $14.90 (3 dofollow links, no badge, listed immediately), Pro $49.90 (5 links, homepage and category featured). Guest Post $79.90, Sponsor $79.90 per 30 days and Directory Submissions $149 are separate upsells. Ask before paying.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `product.categories`, `product.tags`, `product.pricing_model`, `assets.logo_square`, `assets.screenshots` ready.

## Field map
Behind login; exact fields and order are unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | long text | `product.description_medium` |
| Category | select (AI, Video, Audio, Image, Writing, Productivity, Marketing, SEO, Development, Design, ...) | closest match to `product.categories[0]` |
| Tags | multi | `product.tags` |
| Pricing | select | map `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid |
| Logo | image | `assets.logo_square` |
| Screenshot | image | `assets.screenshots[0]` |
| Plan | Free / Basic / Pro | Free unless approved |

## Steps
1. Open https://toolfame.com/submit and sign in on the login page.
2. Fill the fields and upload images.
3. Choose **Free**. Add the ToolFame badge only if `launch_settings.add_badge_to_site` is true; otherwise ask the user about Basic.
4. Submit. Screenshot to `.launchkit/evidence/toolfame.png`.
5. `launchkit mark toolfame submitted --note "free, review up to 180 days"`

## Make the listing perform
- Featured spots on the homepage and category pages are paid (Pro). Free listings get found through category pages, so pick the most specific category.
- Write the description around what the tool does and the formats it handles; category pages show short descriptions.

## Gotchas
- The free review can take months and the listing can still be rejected. Tell the user so they don't wait on it.
- The badge must stay up permanently.

## After submitting
- Check the dashboard for status. Once live, confirm the badge check passed.
