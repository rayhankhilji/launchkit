---
id: r-buildinpublic
name: "r/buildinpublic"
url: https://www.reddit.com/r/buildinpublic/submit
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

# r/buildinpublic

About 123k makers sharing progress, wins and lessons. Promotion is allowed with context: rule 3 says share progress,
lessons and feedback requests rather than pure promotion. Top posts this month are milestone stories ("I made a free
version of an expensive app and I now have over 2000 users") and short demo videos.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- A milestone or lesson to report (launch, first users, a number). Only real figures from the profile.
- Optional: `links.demo_video` or `assets.demo_gif`; images, galleries and video are all allowed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | milestone or lesson in plain words, e.g. `Launched <product.name> after 4 months of nights and weekends. Here is what I would do differently` |
| Body | markdown editor | progress post from `copy.launch_post_story`: what you built, the milestone, what you learned, what is next, a feedback question; link at the end |
| Flair | picker | none, flair is disabled |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |


## Steps
1. Open https://www.reddit.com/r/buildinpublic/submit. Text tab, or Images & Video if you have a short demo (add the story in the body).
2. Title states the milestone or lesson.
3. Body 150-300 words, first person, with one honest struggle.
4. If you mention paid tools or affiliate links, say so (rule 7).
5. Save the draft: `launchkit draft r-buildinpublic -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-buildinpublic drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/buildinpublic/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-buildinpublic submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-buildinpublic.png`.

## Make the listing perform
- Milestones with numbers and short screen recordings get the most upvotes here.
- Post regular updates (weekly or per milestone). Repeat readers follow builders here.
- Reply to everyone; this community is small enough that early comments decide reach.

## Gotchas
- Link-only posts count as spam. Don't post the same text you used on r/SideProject the same day.

## After submitting
- Check https://www.reddit.com/r/buildinpublic/new logged out.
