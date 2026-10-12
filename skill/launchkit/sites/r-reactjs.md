---
id: r-reactjs
name: "r/reactjs"
url: https://www.reddit.com/r/reactjs/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (manual mod removal possible)"
verified: true
last_checked: "2026-10-12"
---

# r/reactjs

About 515k members. One active mod (acemarke) removes off-topic and promo posts by hand. Projects are allowed with the **Show /r/reactjs** flair, but only if they're built with React and include source code. Paid products and marketing posts fall under the sub's "avoid commercial activity" rule (it follows the Reactiflux promotion policy).

## Before you start
- The product must be React-based (a library, component kit, dev tool, or app built with React). Otherwise mark `skipped` with "not React".
- Demo videos or live demos must come with source code, ideally a runnable sandbox (CodeSandbox, StackBlitz, CodePen). Have `product.repo_url` ready.
- Personal portfolios go only on Sundays (flair "Portfolio Showoff Sunday").
- Reddit login (Google, Apple, or email/username). The submit form needs a login. Flairs below come from recent posts and may not be the full list.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/reactjs |
| Post type | Text (preferred) or Link | Text, so you can explain the React parts |
| Title | 300 chars | What it does for React devs, e.g. "Typed modal manager where open() returns a Promise". Sentence case, no hype |
| Flair | required in practice | "Show /r/reactjs" for projects, "Resource" for an article or guide, "Portfolio Showoff Sunday" for portfolios (Sunday only) |
| Body | 40,000 chars | Written fresh from `copy.reddit_post`: the problem, the React API design, trade-offs, then `product.repo_url` and a sandbox link at the end |
| Images | inline | Optional GIF from `assets.demo_gif` inside the text body. Image-only posts are off |

## Steps
1. Open https://www.reddit.com/r/reactjs/submit and log in if asked.
2. Pick **Text**, write the title, choose the flair, write the body. Put code in fenced blocks or 4-space indents.
3. `launchkit draft r-reactjs -` with title, flair, body and posting time, then `launchkit mark r-reactjs drafted`.
4. Only if `allow_social_posting` is true and the user approved: click **Post**, then `launchkit mark r-reactjs submitted --listing-url <url>`.

## Make the listing perform
- Show the API. A short code sample of how a developer uses it gets more replies than screenshots.
- Ask a specific question ("Should open() reject on dismiss or resolve with null?"). Posts like that get real discussion.
- Mention version support (React 18/19, server components, Next.js) since that's the first thing commenters ask.
- Weekday mornings US time. Avoid Sundays for non-portfolio posts, the feed fills with portfolios.

## Gotchas
- Removed: raw AI output, career questions, "how do I fix this code" (use the Beginner's Thread), recruiting, lead gen, market research, and posts with no code.
- SaaS pitches with a pricing page and no open code usually get removed as commercial.
- Mods asked for feedback on tighter content rules in a pinned announcement, so re-read the sidebar before posting.

## After submitting
- Reply to comments within the first couple of hours. Edit the post to add a sandbox link if people ask for one.
