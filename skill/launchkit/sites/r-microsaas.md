---
id: r-microsaas
name: "r/microsaas"
url: https://www.reddit.com/r/microsaas/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: "2026-10-12"
---

# r/microsaas

220k solo and tiny-team SaaS builders. Officially self-promotion is not allowed, but the pinned mod post says it is tolerated when the post is a real lesson or data with one promotional line, or when the product is 100% free. Good fit for small SaaS products if the post teaches something.

## Before you start
- Rule 2: if you share the product you must include the backstory, tech stack, revenue (if comfortable) or a specific lesson learned. "Your product is not considered valuable content."
- No post flair here (users can't set it).
- No "DM me" requests in posts or comments (Rule 6).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text / Images & Video / Link | Text |
| Title | 300 chars | the lesson or experiment, e.g. "I dropped the credit card requirement on my 14-day trial to see how it affects onboarding" |
| Body | Markdown | the lesson first (what you tried, what happened, numbers only from the profile), then stack and how the product fits, `product.url` once near the end |
| Flair | not available | none |

## Steps
1. Open https://www.reddit.com/r/microsaas/ and read the pinned "Addressing Self-Promotion in this sub".
2. Pick one real lesson from `copy.launch_post_story` (pricing, onboarding, a channel that worked or failed, a stack choice). Build the post around it.
3. `launchkit draft r-microsaas -` with title and body. `launchkit mark r-microsaas drafted`.
4. Only with posting allowed and user approval: Create Post, Text, fill in, Post. Screenshot to `.launchkit/evidence/r-microsaas.png`, `launchkit mark r-microsaas submitted --listing-url <url>`.

## Make the listing perform
- Titles framed as an experiment or a number check get read ("I checked 54 SaaS benchmarks against original reports"). "I built X" titles get skipped.
- Share the stack (framework, hosting, payments). Builders here love it and it makes the post useful on its own.
- If the product has a genuinely free tool, a "made a free tool for X, here's why and how it works" post is explicitly allowed.
- The community decides what stays. Reply to every comment in the first hours.

## Gotchas
- "Build in public" updates with no insight and repeated link drops are removed (Rule 2).
- Accounts whose history is all promotion get muted for a few days, then may be banned.

## After submitting
- Check the post is visible logged out. If muted, the mod says to message them and talk it through.
