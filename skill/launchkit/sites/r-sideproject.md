---
id: r-sideproject
name: "r/SideProject"
url: https://www.reddit.com/r/SideProject/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant (AutoModerator or mods may remove it later)"
verified: true
last_checked: "2026-10-12"
---

# r/SideProject

About 867k members. The most launch-friendly big sub: sharing your own project is the whole point, and the posts that
reach the top of the month are working demos with a short personal story ("I built an app that tells me when my lifting
form is wrong"). No subreddit rules list is published, only a title format in the submit text.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- `product.name`, `product.tagline`, `product.url`, `copy.reddit_post` or `copy.launch_post_story`.
- A demo video helps: the sub allows video uploads but not image or gallery posts. Use `links.demo_video` or
  `assets.demo_gif` (converted to MP4) if one exists.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | `<product.name> - <product.tagline>` (the format the sub asks for in its submit text) |
| Body | markdown editor | story post adapted from `copy.launch_post_story`, link at the end (Text tab) or empty (Link tab) |
| Flair | picker | none, flair is turned off here |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Post types allowed: Text, Link and Video. Images and galleries are disabled.

## Steps
1. Open https://www.reddit.com/r/SideProject/submit. If you land on a login page, stop and ask the user to log in.
2. Pick the post type. Text post with the link at the end works best for a story; a Video post works if the demo
   shows the product in under a minute.
3. Write the title as `Name - what it does`, e.g. `Ledgerly - send an invoice from a photo of a receipt`.
4. Body (around 150-250 words): why you built it, what it does in one paragraph, one technical or design detail,
   one honest limitation, a specific feedback question, then the link.
5. Save the draft: `launchkit draft r-sideproject -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-sideproject drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/SideProject/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-sideproject submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-sideproject.png`.

## Make the listing perform
- Top posts this month are first-person and show the thing working. Lead with the problem you had, not the feature list.
- Post on a weekday morning US Eastern time (13:00-15:00 UTC) so it collects votes during the US day.
- Ask one concrete question ("would you pay for the batch export?"). Generic "thoughts?" gets ignored.
- Reply to every comment in the first two hours. That is what keeps it on the Hot tab.
- No discount codes, no "sign up for the waitlist" as the main ask.

## Gotchas
- `restrict_posting` is on, so very new or low-karma accounts may be filtered silently. Check the post shows when logged out.
- Don't cross-post the same text to r/SaaS or r/buildinpublic on the same day.

## After submitting
- Check the post is visible in a logged-out window at https://www.reddit.com/r/SideProject/new. If not, it was filtered;
  tell the user rather than reposting.
