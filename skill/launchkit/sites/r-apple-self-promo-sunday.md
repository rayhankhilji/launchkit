---
id: r-apple-self-promo-sunday
name: "r/apple (Self-promo Sunday)"
url: https://www.reddit.com/r/apple/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant; mods check the developer activity requirement"
verified: true
last_checked: "2026-10-12"
---

# r/apple (Self-promo Sunday)

About 6.5M members. Developers may promote their own app on Sundays (California time) only, as a self-post. There is no
megathread: you post your own text post. Strict activity requirement, and abuse is an instant ban with the app
blacklisted.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Fit: the product must be an app for Apple platforms (`product.platforms` includes iOS, iPadOS, macOS, watchOS,
  visionOS or tvOS) and the user must be its developer. Web SaaS, blogs, websites and YouTube channels are not allowed.
  If it doesn't fit, `launchkit mark r-apple-self-promo-sunday skipped --note "not an Apple app"`.
- Activity check: the user needs at least 5 posts or comments in r/apple in the past month that are unrelated to the
  app, made organically (not a burst right before posting). No more than 10% of their activity can be promotion. If
  the user doesn't meet this, mark `needs_human` with "needs 5+ organic r/apple comments in the last month".
- Not every week: posting promo weekly is listed as abuse. Once per real release is the safe rhythm.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | app name and what it does, e.g. `I made Ledgerly, a Mac menu bar app that turns receipts into expense reports` |
| Body | markdown editor | self-post with real information: what the app does, features from `product.key_features`, price from `product.pricing_details`, platforms, what is new; App Store link at the end. "Simply linking your app is no longer allowed" |
| Flair | picker | pick the platform flair that matches (iPhone, Mac, iPad, iOS, Apple Watch...) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

Text post only for promotion. Direct image or video posts are not allowed; put screenshots on imgur and link them in the body.

## Steps
1. Confirm it is Sunday in California (Pacific time). If not, save the draft and note the next Sunday.
2. Confirm the activity requirement with the user.
3. Open https://www.reddit.com/r/apple/submit. Text tab. Write the title and body as above.
4. Flair: the platform the app runs on.
5. Save the draft: `launchkit draft r-apple-self-promo-sunday -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-apple-self-promo-sunday drafted`.
6. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/apple/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
7. `launchkit mark r-apple-self-promo-sunday submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-apple-self-promo-sunday.png`.

## Make the listing perform
- Post Sunday morning Pacific (16:00-19:00 UTC) so it gets the full US day.
- Include price clearly (free, one-time, subscription) and what makes it different from Apple's built-in apps.
- A launch discount or a few promo codes in the post is common, but codes can't be the point of the post.
- Answer every question; mods look at whether the developer adds to discussion.

## Gotchas
- If the mods ask, the rules say to quote the word "Unicorn" in modmail to prove you read them.
- No surveys, no blogs, no channel promotion, ever.

## After submitting
- Check https://www.reddit.com/r/apple/new logged out on the same Sunday.
