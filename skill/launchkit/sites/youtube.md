---
id: youtube
name: "YouTube"
url: https://studio.youtube.com/
category: Community
mode: manual
pricing: Free
login: google
captcha: none
backlink_required: no
review_time: minutes to hours (processing plus automated checks)
verified: true
last_checked: 2026-10-12
---

# YouTube

The second biggest search engine. A demo or tutorial video keeps getting found for years via YouTube and Google search, and the link can go on directories that ask for `links.demo_video`. This is `manual`: the user needs a recorded video and their own channel.

## Before you start
- studio.youtube.com redirects to Google sign-in. The user creates the channel under their Google account.
- **Verify the channel** with a phone number (Studio prompts for it). Without it you can't upload videos longer than 15 minutes or add custom thumbnails. One phone number can verify at most 2 channels per year.
- Artifacts: the video (a 1-3 minute demo and/or a 5-10 minute tutorial), a 16:9 thumbnail (JPG/PNG, at least 640 px wide, 1280x720 or larger; 50 MB limit on desktop), and captions.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Title | 100 chars | search phrase + product, e.g. "How to turn Figma into React code (`product.name` demo)" |
| Description | 5,000 chars | first 2 lines: what it does + `product.url?utm_source=youtube`; then `product.description_long`, chapters, `links.docs` |
| Thumbnail | 16:9 image | big readable result text + product UI (needs verified channel) |
| Playlist | select | "`product.name` tutorials" |
| Audience | "Made for kids?" | No |
| Altered or synthetic content | yes/no | yes only if realistic AI-generated footage/voice is used |
| Tags (Show more) | 500 chars total | `product.tags` and `product.competitors_alternatives` names |
| Category | dropdown | Science & Technology (dev/AI), Education (tutorials), or closest |
| Chapters | timestamps in description | 0:00 Intro, then one per feature |
| End screen / Cards | video must be 25s+ | end screen linking a second video or subscribe |
| Visibility | Private / Unlisted / Public / Schedule | Unlisted for directory demo links, Public for search traffic |

## Steps
1. Don't upload. Give the user a brief via `launchkit draft youtube -`: title, description, tags, chapters, thumbnail text and a 5-shot script.
2. Mark `needs_human` with "record and upload YouTube demo; add URL to links.demo_video".
3. When they share the URL, update `links.demo_video` in the profile and `launchkit mark youtube submitted --listing-url <video url>`.

## Make the listing perform
- Title for search, not for branding: people search "how to X" and "X vs Y". A "`product.name` vs `<competitor>`" video can rank quickly in small niches.
- Chapters and an accurate transcript help search and Google "key moments".
- Add the video to the product homepage and docs; embeds count as views and help it rank.
- A matching vertical cut posted as a Short can bring a second wave of views.

## Gotchas
- Unverified channels get auto thumbnails only, which usually look bad. Verify first.
- Music in screen recordings can trigger copyright claims. Use YouTube's Audio Library.

## After submitting
- Check Studio > Content for processing and copyright checks. Reply to comments in the first week.
