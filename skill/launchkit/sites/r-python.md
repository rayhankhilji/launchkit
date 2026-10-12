---
id: r-python
name: "r/Python"
url: https://www.reddit.com/r/Python/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (comment in monthly Showcase Thread)"
verified: true
last_checked: "2026-10-12"
---

# r/Python

About 1.5 million members. Standalone project posts are now banned ("No showcase posts"). Projects go in the monthly **Showcase Thread** pinned at the top of the sub, or the Sunday "What's everyone working on this week?" daily thread. Only worth doing if the product is written in Python or is a Python library or tool.

## Before you start
- The product must be meaningfully Python (a package, CLI, framework, or app built in Python). If not, mark `skipped` with "not Python".
- Need `product.repo_url` (source link is required for projects) and a short write-up. No Medium links, no paywalled content.
- Reddit account (Google, Apple, or email/username login). Commenting in the thread needs a login. Flair options were read from recent posts. The full picker needs a login, so treat that list as unconfirmed.

## Field map (comment in the Showcase Thread)

| Field | Limit / format | Fill with |
|---|---|---|
| Where | top-level comment | Current "Showcase Thread" (pinned, flair "Showcase", recycles monthly) |
| First line | bold text | `product.name` and one-line `product.tagline` |
| What My Project Does | paragraph | From `product.description_medium`, say how Python is used |
| Target Audience | 1-2 lines | `product.target_audience`, and whether it's production-ready or a toy (`product.status`) |
| Comparison | 2-4 lines | How it differs from `product.competitors_alternatives` |
| Source | link | `product.repo_url` (required), then `product.url` |

If a standalone text post is ever allowed again, it must be a text post (not image or link), use a Showcase flair, and include the same three sections: What My Project Does, Target Audience, Comparison.

## Steps
1. Open https://www.reddit.com/r/Python/ and open the pinned **Showcase Thread** (or the Sunday daily thread on Sundays).
2. Write the comment with the three sections above. Code blocks need 4-space indentation.
3. `launchkit draft r-python -` with the thread URL and comment body, then `launchkit mark r-python drafted`.
4. Only if `allow_social_posting` is true and the user approved: post the comment, then `launchkit mark r-python submitted --listing-url <comment permalink>`.

## Make the listing perform
- Comment early in the month, soon after the thread recycles, so more people scroll past it.
- Lead with the Python angle: which libraries it uses, packaging (`pip install name`), supported Python versions.
- Be honest under Target Audience. Readers here downvote "production-ready" claims on day-old repos.
- Reply to every question in the thread. A useful exchange can lead people to star the repo.

## Gotchas
- Standalone "I built X" posts get removed and pointed at the thread, even with Showcase flair.
- AI wrappers and multi-model API projects are the reason the ban exists. Expect a cold reception for them.
- No URL shorteners, no Medium, no paywalls, English only.

## After submitting
- Check the comment shows in a logged-out window. Note the permalink in launchkit.
