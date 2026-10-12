---
id: instagram
name: "Instagram"
url: https://www.instagram.com/
category: Community
mode: manual
pricing: Free
login: unknown          # Instagram account (username/email, or Facebook login)
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Instagram

Visual social network; the web homepage is a login wall. Launching here means creating content (Reels, carousels) on an
account the founder runs, mostly from the phone app. Not something to automate: mark it as a suggestion for the user.

## Before you start
- It's only worth it for consumer products, design-led tools, or founders who already have an audience there.
  For B2B dev tools it's usually not worth the time.
- Account: a free Professional (Creator or Business) account gives insights and a link field; switch in Settings.
- Artifact needed: a 15-45 second vertical video (9:16, 1080x1920) showing the product in use, or a 5-10 slide
  carousel (1080x1350, 4:5) of screenshots with one point per slide.

## What to prepare for the user

| Item | Format | Source |
|---|---|---|
| Bio link | 1 URL (or several with link-in-bio) | `product.url` |
| Bio text | 150 chars | `product.tagline` |
| Reel / carousel | 9:16 video or 4:5 slides | `links.demo_video`, `assets.screenshots` re-cut vertical |
| Caption | up to 2,200 chars; first line visible | Hook line, 2-3 lines from `product.description_short`, "link in bio" |
| Hashtags | up to ~30 allowed; 3-5 is plenty | Niche tags from `product.tags` |

## Steps
1. Don't log in or post. Write the caption and a shot list/storyboard for the Reel and save it with `launchkit draft instagram -`.
2. `launchkit mark instagram needs_human --note "Instagram: post Reel/carousel from the app; caption in drafts"`.
3. List it in the final report's manual suggestions if the product is consumer or visual.

## Make the listing perform
- Reels get shown to non-followers; plain image posts mostly reach existing followers.
- Show the result in the first 2 seconds, add on-screen captions, and keep it under 30 seconds.
- Links in captions aren't clickable; the bio link and Stories link sticker are the only clickable links.

## Gotchas
- Instagram flags accounts that post from automation tools or follow/unfollow in bulk.

## After submitting
- The user adds the Reel URL to the log; mark `submitted --listing-url <url>` once they confirm.
