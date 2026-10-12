---
id: r-programming
name: "r/programming"
url: https://www.reddit.com/r/programming/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (mods remove off-topic posts within hours)"
verified: true
last_checked: "2026-10-12"
---

# r/programming

About 6.9 million members. It's link-only: no text posts, no flair, no images. Mods remove anything that looks like a product pitch, an "I made this" demo, or anything AI-written. It's only worth it if the founder has a real technical write-up (on their own blog) about a hard problem they solved while building the product.

## Before you start
- You need a published, free-to-read technical article written by the founder (no paywall, no Medium-style blogspam). If there isn't one, mark `skipped` with "needs technical write-up" and tell the user.
- Reddit account, ideally one with some history and comment karma. Login options: Google, Apple, or email/username. The submit page needs a login, so the form details below come from the subreddit settings and rules, not from a logged-in view.
- AI and LLM topics are off-topic unless they're deeply technical (see /r/programming/wiki/ai-policy). A post about using an LLM API will be removed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/programming (pre-filled from the URL) |
| Post type | Link only | Link |
| Title | 300 chars | Plain title of the article, describing the technical subject. Not the product name and tagline |
| URL | URL | The article URL (founder's blog). Never `product.url` or `product.repo_url` on their own |
| Flair | none | The sub has no user-selectable flair |

## Steps
1. Confirm with the user that a technical article exists and that the user wrote it themselves.
2. Open https://www.reddit.com/r/programming/submit and log in with `submission.preferred_login` if asked.
3. Choose **Link**, paste the article URL, write a title that says what the article teaches (e.g. "How we cut cold-start time from 900 ms to 80 ms by snapshotting the V8 heap").
4. Save the draft: `launchkit draft r-programming -` with title, URL and best time, then `launchkit mark r-programming drafted`.
5. Only if `launch_settings.allow_social_posting` is true and the user approved this draft: click **Post**, then `launchkit mark r-programming submitted --listing-url <post url>`.

## Make the listing perform
- Mods' wording: "We don't care what you built, we care how you build it." The article has to be about the technique, with the product as context at most.
- Good formats: performance investigations, debugging stories, data-structure or protocol deep dives, reverse engineering. Recent front-page posts are things like "Searching 48k paintings by color scheme in the browser: sliced Wasserstein embeddings and HNSW from scratch".
- Post on a weekday morning, US Eastern time (roughly 8-10am ET), when the "new" queue gets the most votes.
- Answer technical questions in the comments. Don't drop sign-up links or pricing.

## Gotchas
- Removed on sight: product promotion, GitHub links with a feature list, newsletters and listicles, surveys, beginner content, memes, and LLM-written or LLM-translated text.
- Text and image posts aren't allowed at all, so you can't fall back to `copy.reddit_post`.
- No URL shorteners. Reddit filters them sitewide.

## After submitting
- Check the post in a logged-out window after 10 minutes. If it's gone, it was removed. Don't repost. Mark `rejected` with the reason.
