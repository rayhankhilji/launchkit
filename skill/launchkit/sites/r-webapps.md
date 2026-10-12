---
id: r-webapps
name: "r/webapps"
url: https://www.reddit.com/r/webapps/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant"
verified: true
last_checked: "2026-10-12"
---

# r/webapps

About 18k members. A small, lightly moderated sub for sharing web apps and services. The only rule is "Web Apps Only": no iOS or native apps. Self-shared projects are the norm here, so it's a safe low-traffic post for any browser-based product.

## Before you start
- The product must run in a browser. Native-only apps: mark `skipped` with "web apps only".
- Have `product.url` and one screenshot or GIF (`assets.demo_gif` or `assets.screenshots[0]`).
- Reddit login (Google, Apple, or email/username). The form needs a login. It accepts text, link, image and video posts, and has no flair.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/WebApps |
| Post type | Text, Link, Image or Video | Text with one inline image (gives room to explain). A Link post to `product.url` also works |
| Title | 300 chars | What it does in plain words, e.g. "A video editor that runs entirely in your browser, no upload or account" |
| Flair | none | Not enabled |
| Body | 40,000 chars | 3 short paragraphs: the problem, what the app does (`product.key_features` top 2-3), whether it's free or what it costs, then `product.url` |

## Steps
1. Open https://www.reddit.com/r/webapps/submit and log in if asked.
2. Choose **Text**, add the title, paste the image inline, write the body with the link at the end.
3. `launchkit draft r-webapps -` with title and body, then `launchkit mark r-webapps drafted`.
4. Only if `allow_social_posting` is true and the user approved: post, then `launchkit mark r-webapps submitted --listing-url <url>`.

## Make the listing perform
- Most posts here get 1-2 upvotes. What does better: no sign-up needed, a clear free tier, and the main benefit in the title ("no account", "runs locally").
- Say in the body what kind of feedback you want.
- Low stakes, so it's a fine first post to test the copy before bigger subs. Still write it fresh, not a copy of another sub's post.

## Gotchas
- Mobile app concepts and native apps get removed.
- Avoid posting the same app again within a few weeks. With so few posts, repeats are obvious.

## After submitting
- Reply to comments. Traffic is small, so don't wait around for votes.
