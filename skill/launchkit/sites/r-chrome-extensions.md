---
id: r-chrome-extensions
name: "r/chrome_extensions"
url: https://www.reddit.com/r/chrome_extensions/submit
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

# r/chrome_extensions

About 51k members: extension developers and users. Sharing your own extension is normal here; recent posts use the
`Self Promotion` flair, and progress posts (`Sharing Journey/Experience/Progress Updates`) are the most common and get
the most upvotes ("My first Chrome extension just passed 2,000 weekly users").

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Fit: only if the product is or has a Chrome extension (`product.platforms` includes Chrome or browser extension).
  Otherwise `launchkit mark r-chrome-extensions skipped --note "not an extension"`.
- The Chrome Web Store link (put it in `product.url` or the post body) and a screenshot or short demo.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Text |
| Title | 300 chars (Reddit limit) | what the extension does, e.g. `I built an extension that mutes autoplay video on every site` |
| Body | markdown editor | what it does, why you built it, permissions it needs and why (users here ask), a feedback question; Web Store link at the end |
| Flair | picker | `Self Promotion` for a plain launch, or `Sharing Journey/Experience/Progress Updates` for a story with numbers |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |

All post types are allowed. A Video post with a 20-40 second demo plus text works well.

## Steps
1. Open https://www.reddit.com/r/chrome_extensions/submit. Text or Images & Video tab.
2. Write the title and body. Explain permissions honestly; users are wary of data access.
3. Pick the flair as above.
4. Save the draft: `launchkit draft r-chrome-extensions -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-chrome-extensions drafted`.
5. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/chrome_extensions/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
6. `launchkit mark r-chrome-extensions submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-chrome-extensions.png`.

## Make the listing perform
- Progress posts with real user numbers outperform plain launches. If the extension is new, show a short demo.
- Mention it is free, or what is paid, up front.
- Ask developers a specific question (store review time, a feature). The community is mostly builders.

## Gotchas
- Cross-sub spam gets reported to admins under rule 4. Space posts out.

## After submitting
- Check https://www.reddit.com/r/chrome_extensions/new logged out.
