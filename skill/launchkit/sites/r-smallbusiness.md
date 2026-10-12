---
id: r-smallbusiness
name: "r/smallbusiness"
url: https://www.reddit.com/r/smallbusiness/submit
category: Reddit
mode: post
pricing: Free
login: google
captcha: unknown
backlink_required: no
review_time: "instant (comments can be silently filtered)"
verified: true
last_checked: "2026-10-12"
---

# r/smallbusiness

About 2.5 million small-business owners. It's a question-and-answer sub. Standalone posts must be questions about running a small business. Promotion goes only in the pinned **Promote your business thread** (currently "Promote your business thread for Q4 2026", recycles each quarter). Since June 2026, product mentions are removed from new posts and comments if they look even indirectly promotional.

## Before you start
- Only worth it if the product is for small-business owners (invoicing, booking, local marketing, etc.). Otherwise mark `skipped` with "not a fit".
- The only allowed promo spot is a top-level comment in the promote thread.
- Reddit login (Google, Apple, or email/username). Comments may be silently filtered for new or low-karma accounts. The mods say to check from a logged-out browser.

## Field map (comment in the Promote your business thread)

| Field | Limit / format | Fill with |
|---|---|---|
| Where | top-level comment | Pinned "Promote your business thread for Q<n> <year>" (flair "Self-Promotion") |
| Opening line | 1 sentence | `product.name`: what it does for which kind of business (from `product.tagline` + `product.target_audience`) |
| Details | 2-4 short lines | Who it's for, pricing in one line (`product.pricing_details`), any offer (`product.deal_or_promo_code`) |
| Link | URL | `product.url` |

## Steps
1. Open https://www.reddit.com/r/smallbusiness/ and open the pinned promote thread (don't use the submit page for promo).
2. Write the short comment. Plain text, no emoji.
3. `launchkit draft r-smallbusiness -` with the thread URL and comment, then `launchkit mark r-smallbusiness drafted`.
4. Only if `allow_social_posting` is true and the user approved: post it, open the thread in a logged-out window to check it appears (message the mods if it doesn't), then `launchkit mark r-smallbusiness submitted --listing-url <comment permalink>`.

## Make the listing perform
- Be plain and specific: "Booking page and SMS reminders for solo hair stylists, $12/month, 14-day trial." The thread has hundreds of comments, so the first line is all most people read.
- Post early in the quarter, when the thread is new and gets more views.
- The separate pinned "share your small business experience" thread allows stories and lessons. A real founder story there (no link) can earn profile clicks.

## Gotchas
- Removed from regular posts: business promotion, lead generation, blog links, success stories, how-tos, and market research or "what are your pain points" posts (even for building apps).
- Offers of free work "to build a portfolio" count as promotion.
- The sub doesn't use post flair for regular posts.

## After submitting
- Reply to anyone who asks a question under the comment. Don't post a link again elsewhere in the sub.
