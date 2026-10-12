---
id: r-coolgithubprojects
name: "r/coolgithubprojects"
url: https://www.reddit.com/r/coolgithubprojects/submit
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

# r/coolgithubprojects

About 126k developers. Link posts to GitHub repositories only ("Github only: the projects you post all have to be
hosted on Github"). Your own projects are welcome. A language flair is assigned automatically. Reposts are allowed
only after 6+ months and with new features.

## Before you start
- A Reddit account owned by the user, logged in already in the browser. Reddit's login page offers phone, Apple, email one-time link or username/password. Don't create an account for them: a brand-new account posting a link gets filtered almost everywhere.
- Fit: `product.open_source` is true and `product.repo_url` points at a public GitHub repo. Otherwise
  `launchkit mark r-coolgithubprojects skipped --note "not on GitHub"`.
- A good README with a screenshot or GIF at the top; readers judge from the repo page.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | already set by the URL; check it reads the right sub |
| Post type tab | Text / Images & Video / Link / Poll | Link |
| Title | 300 chars (Reddit limit) | the sidebar suggests `[Desc] - [Suggested title]`; in practice top posts read like `EdenText - a fully local, open-source word processor` |
| Body | markdown editor | not available, link posts only |
| Flair | picker | none to pick; the language flair is added automatically |
| Tags | NSFW / Spoiler (and Brand affiliate if shown) | leave NSFW and Spoiler off; turn on Brand affiliate if Reddit offers it |
| URL | URL | `product.repo_url` (the GitHub repo, not the marketing site) |

## Steps
1. Confirm the repo is public and the README is ready.
2. Open https://www.reddit.com/r/coolgithubprojects/submit. Link tab. Paste `product.repo_url`.
3. Title: `<product.name> - <what it does>`, mention "open source", "self-hosted" or "free" if true.
4. Save the draft: `launchkit draft r-coolgithubprojects -` with title, body, flair, the target URL and the best time to post. Then `launchkit mark r-coolgithubprojects drafted`.
5. Only if `launch_settings.allow_social_posting` is true and the user approved this exact draft in this session: open https://www.reddit.com/r/coolgithubprojects/submit, pick the tab, paste title and body, set flair, click **Post**. Copy the post URL.
6. `launchkit mark r-coolgithubprojects submitted --listing-url <post url>`. Screenshot the live post to `.launchkit/evidence/r-coolgithubprojects.png`.

## Make the listing perform
- Self-hosted alternatives to paid tools and "free and open-source X alternative" titles do best here.
- Add a first comment with why you built it and the stack. Reply to issues raised in comments.
- Weekday, 13:00-16:00 UTC.

## Gotchas
- Don't link to the website or a GitLab mirror; GitHub only.

## After submitting
- Check https://www.reddit.com/r/coolgithubprojects/new logged out.
