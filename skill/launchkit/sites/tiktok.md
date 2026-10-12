---
id: tiktok
name: "TikTok"
url: https://www.tiktok.com/upload
category: Community
mode: manual
pricing: Free
login: unknown         # phone, email, Google, Apple
captcha: unknown
backlink_required: no
review_time: minutes (automated moderation before the video goes public)
verified: true
last_checked: 2026-10-12
---

# TikTok

Short vertical video. Huge for consumer apps, games, education and anything with a visible "before and after". Distribution is by the For You algorithm, so a new account can reach people, but only with native-feeling video. This is a `manual` target: it needs a video the user records, and an account they own.

## Before you start
- https://www.tiktok.com/upload redirects to the login page first. The user needs their own account; don't create one.
- The artifact: a vertical 9:16 video, 1080x1920, 15-60 seconds for a product demo. Screen recording plus the founder's face or voice works best. Captions burned in or added with TikTok's auto captions.
- Limits (from TikTok's public help, not re-confirmed on 2026-10-12): web uploads accept longer videos than the app, and captions allow a few thousand characters. Keep both short anyway.
- Clickable links in bio need a minimum follower count or a Business account. Plan for the link to be "search `product.name`" or in the bio.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Video | MP4/MOV, vertical | user-recorded demo; fallback a screen capture of `links.demo_video` cut to 9:16 |
| Description / caption | text with hashtags | one-line hook + 3-5 hashtags from `product.tags` (e.g. #productivity #studytok) |
| Cover | frame or upload | frame with the clearest on-screen result |
| Location, Mentions | optional | leave blank |
| Who can watch | Everyone | Everyone |
| Allow comments / Duet / Stitch | toggles | all on |
| Disclose post content | toggle | turn on only if the video is a paid promotion for someone else |
| AI-generated content label | toggle | on if any part of the video is AI-generated |

## Steps
1. Don't upload. Write the user a short brief: 3 video ideas with hook line, shot list and caption, saved via `launchkit draft tiktok -`.
2. Suggest the format: hook in the first 2 seconds ("I got tired of X so I built this"), show the product doing the thing, end with where to find it.
3. Mark `needs_human` with "record and post TikTok demo (brief in drafts)" or `skipped` with "manual" if the user says no.

## Make the listing perform
- Post 3-5 videos over two weeks rather than one polished launch video. Each is a new lottery ticket.
- Use trending sounds at low volume under the voiceover. Native-looking phone footage beats polished ads.
- Reply to comments with video replies; they're cheap extra posts.

## Gotchas
- Watermarked reposts from other apps get less reach.
- Promote (paid boost) shows after posting. Skip unless budget allows.

## After submitting
- If the user posts, record the URL with `launchkit mark tiktok submitted --listing-url <video url>`.
