---
id: r-entrepreneurridealong
name: "r/EntrepreneurRideAlong"
url: https://www.reddit.com/r/EntrepreneurRideAlong/submit
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

# r/EntrepreneurRideAlong

About 734k members. "Follow real founders in real time": text-only progress posts with numbers. The top posts are
case studies with revenue in the title ("I built a boring directory that's making $10k per month"). A plain launch
announcement does poorly here; a progress story with real figures does well.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Real numbers from the profile only (users, revenue, time spent). If the profile has none, write about the process
  and decisions instead. Never invent metrics.
- `copy.launch_post_story` is the best starting point.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | a plain statement of where you are, e.g. `Month 3 of building <product.name>: what worked and what did not` |
| Body | markdown editor | progress post: what you are building, how you got here, what you tried, numbers if real, what is next; link once near the end |
| Flair | picker | `Ride Along Story` (other options seen: Seeking Advice, Idea Validation, Resources & Tools, Collaboration Requests, Other) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Text posts only. Links, images and video are disabled; polls are allowed.

## Steps
1. Open https://www.reddit.com/r/EntrepreneurRideAlong/submit. Log in if asked (user does this).
2. Text tab only. Title in sentence case, no hype, no emoji.
3. Body (300-600 words, short paragraphs): the starting point, what you built and why, 2-3 decisions or mistakes,
   current status, what you will try next. Put `product.url` once, near the end.
4. Flair: `Ride Along Story`. Use `Idea Validation` instead if the product is pre-launch.
5. Save the draft: `launchkit draft r-entrepreneurridealong -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-entrepreneurridealong drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/EntrepreneurRideAlong/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-entrepreneurridealong submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-entrepreneurridealong.png`.

## Make the listing perform
- Specific beats polished: costs, channels you tried, conversion you saw. Founders here upvote transparency.
- A title with a concrete outcome or number (only if true) is what gets clicked.
- Weekday mornings US time. Answer questions about tactics in detail; that is where follow-up traffic comes from.
- One post per milestone. Follow-up posts ("month 6 update") work well if the first one landed.

## Gotchas
- Rules are short (be respectful, follow Reddit rules, good intent), but mods still remove posts that read like ads.
- Don't paste the r/SideProject version; this audience wants the business side, not the tech.

## After submitting
- Confirm it shows in https://www.reddit.com/r/EntrepreneurRideAlong/new while logged out.
