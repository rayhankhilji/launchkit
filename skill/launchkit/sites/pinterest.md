---
id: pinterest
name: "Pinterest"
url: https://www.pinterest.com/pin-creation-tool/
category: Community
mode: post
pricing: Free
login: google          # also email, Facebook, Apple
captcha: unknown
backlink_required: no
review_time: instant (organic Pins go live on publish)
verified: true
last_checked: 2026-10-12
---

# Pinterest

A visual search engine. People save Pins to boards and click through to the linked site, so a good Pin keeps sending traffic for months. Worth it for consumer, design, food, home, fashion, education and template products. Low value for dev tools and B2B infra.

## Before you start
- The pin creation tool redirects to login. Use `submission.preferred_login`. A free **Business account** (convert in settings) adds analytics and claims the website; personal accounts can still pin.
- Need a vertical image: 2:3, ideally 1000x1500 px, PNG or JPG, under 20 MB. Build it from `assets.screenshots[0]` or `assets.og_image` with a short text overlay. Videos: MP4/MOV, 4 seconds to 15 minutes, 1:1, 2:3, 4:5 or 9:16.
- Decide with the user which board the Pin goes on. Create one named after the use case (e.g. "Invoice templates"), not the product.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Image / video | 2:3 image, 20 MB; video up to 2 GB | vertical crop of `assets.screenshots[0]`, or `assets.demo_gif` exported as MP4 |
| Title | 100 chars, first ~40 show in feed | keyword-led version of `product.tagline` (lead with the search phrase, e.g. "Freelance invoice template") |
| Description | 800 chars, used for search ranking | `product.description_medium` rewritten around 2-3 phrases people search; no hashtag stuffing |
| Link | URL | `product.url` with `?utm_source=pinterest` |
| Board | select / create | board named after `product.use_cases[0]` |
| Tagged topics | pick up to 10 suggested | closest matches to `product.categories` and `product.tags` |
| Alt text (More options) | ~500 chars | plain description of what the image shows |

## Steps
1. Open the URL and sign in. If on a personal account, ask the user whether to convert to Business (free, reversible).
2. Optional but useful: Settings > Claimed accounts > claim `product.url` (needs a meta tag or HTML file on the site, so ask the user).
3. On the pin creation tool, drag in the image or video.
4. Fill Title, Description, Link, Board, Tagged topics and Alt text from the field map.
5. Run `launchkit lint-copy -` on title and description. Save with `launchkit draft pinterest -` and mark `drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved: click **Publish** (or schedule). Copy the Pin URL and `launchkit mark pinterest submitted --listing-url <pin url>`.

## Make the listing perform
- Pinterest is search, not a feed of friends. Titles and descriptions should read like the query: "Weekly meal planner app for families" beats a brand slogan.
- Make 3-5 different Pins for the same URL (different screenshots, different angles) and spread them over a few weeks. Fresh images count as fresh Pins.
- Text overlay on the image matters more than the caption: 5-8 big words saying the outcome.
- Evenings and weekends are traditionally the busiest browsing times. Seasonal content should go up 30-45 days before the season.

## Gotchas
- Images wider than 2:3 get cropped in the feed. Square screenshots look small.
- Link shorteners and affiliate redirects get flagged as spam. Use the plain product URL.
- Ads Manager will offer to promote the Pin. Skip unless `launch_settings.budget_usd` allows it and the user agrees.

## After submitting
- Check the Pin opens and the link resolves. Business accounts see impressions and outbound clicks in Analytics after a day or two.
