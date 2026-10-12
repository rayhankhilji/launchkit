---
id: twelve-tools
name: "Twelve Tools"
url: https://twelve.tools/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: unknown
captcha: unknown
backlink_required: yes
review_time: "within 72 hours (free); 24 hours (Pro)"
verified: true
last_checked: 2026-10-12
---

# Twelve Tools

Curated list that publishes twelve new tools a day, by the maker of FrogDR. Free gives one dofollow link after a 72 hour review, but needs a link back on the site's homepage or footer.

## Before you start
- `/submit` opens a pricing choice: **Continue, it's free** or **Get featured** (Pro). The form after that step was not reached, so login and fields are unconfirmed.
- Free: 1 dofollow link, review within 72 hours, backlink to Twelve Tools required on the homepage or footer (text link or a badge from `/badge`).
- Pro: $36 one-time ($25.20 with the shown FROGDR code), 3 dofollow links, listed within 24 hours, featured on the homepage regularly, no backlink. Ask before paying.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_medium`, `product.categories`, `assets.logo_square`, `assets.screenshots` ready.

## Field map
Unconfirmed; expected fields:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | short text | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select (Artificial Intelligence, Productivity, Design, Developer Tools, Video, Launching, Marketing, SEO, Social Media, Analytics, ...) | closest match to `product.categories[0]` |
| Logo | image | `assets.logo_square` |
| Screenshot | image | `assets.og_image` or `assets.screenshots[0]` |
| Email | email | `submission.email` |

## Steps
1. If `launch_settings.add_badge_to_site` is true, add a Twelve Tools link or badge (from https://twelve.tools/badge) to the homepage or footer first. If not allowed, ask the user about Pro or skip.
2. Open https://twelve.tools/submit and click **Continue, it's free**.
3. Sign in if asked, fill the fields, submit.
4. Screenshot to `.launchkit/evidence/twelve-tools.png`.
5. `launchkit mark twelve-tools submitted --note "free, review within 72h"`

## Make the listing perform
- Only twelve tools go out per day, so a clear one-line tagline and a clean screenshot matter for getting picked.
- Artificial Intelligence is by far the largest category (1,000+ tools). Use a smaller fitting one if possible.
- Homepage featuring is Pro only.

## Gotchas
- The backlink must be in place before review, or the free submission is likely rejected.

## After submitting
- Check the homepage and the category page within 72 hours.
