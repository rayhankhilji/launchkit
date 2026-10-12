---
id: r-nocode
name: "r/nocode"
url: https://www.reddit.com/r/nocode/submit
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

# r/nocode

142k people building software without (much) code: Bubble, Webflow, Lovable, automation tools. Product launches go in the permanently pinned **Product Launch Post** (850+ comments). Value-first posts about your own tool are allowed in the main feed with the **Promoted** flair and a clear disclosure.

## Before you start
- Fit check: the product helps non-developers build, automate or ship, or it was built with no-code tools and the story is useful to this crowd.
- Rule 1: always disclose your connection to a tool you post or comment about.
- Rule 2: if you represent a company, set a user flair in the sub showing which company.

## Field map

Launch announcement (default): a comment in the pinned "Product Launch Post".

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Comment in Product Launch Post | Markdown | `product.name`, `product.tagline`, who it is for, what is free, `product.url`, "I'm the maker" |

Value post in the main feed:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text / Images & Video / Link | Text |
| Title | 300 chars | the useful question or lesson, e.g. "How do you test no-code workflows without firing live webhooks?" |
| Body | Markdown | the problem, how you solved it (the product is one part of it), disclosure, `product.url` |
| Flair | Promoted, Self-Promotion, Question, Discussion, Success Story | **Promoted** for any post about your own product (Rule 1) |
| User flair | sub user flair | company name from `product.name` |

## Steps
1. Open https://www.reddit.com/r/nocode/ and click the pinned **Product Launch Post**. Set your user flair to the company name.
2. Draft the launch comment. Optionally draft one value post with Promoted flair from `copy.launch_post_story`.
3. `launchkit draft r-nocode -` with both drafts and the target for each. `launchkit mark r-nocode drafted`.
4. Only with posting allowed and user approval: post, screenshot to `.launchkit/evidence/r-nocode.png`, `launchkit mark r-nocode submitted --listing-url <url>`.

## Make the listing perform
- The launch thread is sorted by new for most visitors. Post the comment on launch day and keep it short with one clear link.
- Main-feed posts that do well are practical problems builders hit (state between automation runs, testing workflows, client data permissions). Answer the problem fully, mention the tool once.
- "Four months from launch to exit" style stories with real detail get traction under Promoted.

## Gotchas
- Launch announcements outside the pinned post are removed (Rule 3).
- Undisclosed affiliate links get the whole post removed (Rule 5).

## After submitting
- Reply to questions in the launch thread. Keep disclosing in each reply.
