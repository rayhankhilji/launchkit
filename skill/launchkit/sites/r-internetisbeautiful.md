---
id: r-internetisbeautiful
name: "r/InternetIsBeautiful"
url: https://www.reddit.com/r/InternetIsBeautiful/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "instant, but AutoModerator removes many posts and mods review each one"
verified: true
last_checked: "2026-10-12"
---

# r/InternetIsBeautiful

About 16.6M members and link posts only. A front-page hit can send six figures of visits, but the rules exclude most
startups. Check every rule below against the product before drafting; if any fails, mark it skipped.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Fit check. The site must be ALL of these, otherwise `launchkit mark r-internetisbeautiful skipped --note "not a fit for IIB rules"`:
  - usable in the browser without any signup, email, Google login or webcam (no waitlists either)
  - not a store, not a paid service, not freemium where key features need payment
  - not a browser extension, app or download; not a web game, quiz or puzzle
  - not an article, video, image or gallery; not an aggregator or directory
  - not AI-driven (AutoMod removes AI-related sites; rewording and reposting gets a permanent ban)
  - not a business tool (launch tools, job boards, SEO tools)
  - not something that exists many times already (timers, note apps)
- The user's account must follow 90/10: most of their recent Reddit activity has to be unrelated to their own sites.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Link |
| Title | 300 chars (Reddit limit) | plain description of what the site does, e.g. `A map that shows how far you can travel by train in 5 hours from any European city`. No product name hype, no "I made" |
| Body | markdown editor | not available, link posts only |
| Flair | picker | none expected (no flair seen on recent posts) |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |
| URL | URL | `product.url` with no tracking params or shorteners |

## Steps
1. Run the fit check above. Most SaaS products fail it; say so to the user.
2. Open https://www.reddit.com/r/InternetIsBeautiful/submit. Choose the Link tab. Paste `product.url`.
3. Write a descriptive title (what you can do on the site). Avoid the product name unless it is self-explanatory.
4. Save the draft: `launchkit draft r-internetisbeautiful -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-internetisbeautiful drafted`.
5. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/InternetIsBeautiful/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
6. `launchkit mark r-internetisbeautiful submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-internetisbeautiful.png`.

## Make the listing perform
- What wins: single-purpose, visual, instantly understandable sites (recent top posts: a live zoo of crawlers visiting
  a site, a zoomable pixel animation, a slider that drains the oceans on a 3D globe).
- The title does all the work. Say what happens when you click, not what the product is.
- Make sure the site survives a traffic spike ("Hug of Death" is a removal reason). Test hosting/CDN first.
- Post when US East Coast wakes up (12:00-14:00 UTC) on a weekday.

## Gotchas
- Posting from an account whose history is all self-promotion breaks the 90/10 rule and gets the post removed.
- Don't repost after a removal; ask the user to message the mods instead.

## After submitting
- Check https://www.reddit.com/r/InternetIsBeautiful/new logged out. If it is missing, it was removed; record the
  note and do not retry.
