---
id: r-producthunters
name: "r/ProductHunters"
url: https://www.reddit.com/r/ProductHunters/submit
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

# r/ProductHunters

62k makers sharing Product Hunt launches. Posts must be about Product Hunt and links must point to producthunt.com. Use it only on the user's Product Hunt launch day, after the PH listing is live.

## Before you start
- The Product Hunt launch must be live (see the `product-hunt` guide; the user schedules that launch). Get the PH product URL.
- Rule 3: no links outside producthunt.com. Rule 4: no unauthorized promotion, referral codes, or upvote/engagement selling.
- No post flair in this sub.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Text / Images & Video / Link | Text (or Link with the PH URL) |
| Title | 300 chars | "Launched <product.name> on Product Hunt today, <what it does>" |
| Body | Markdown | 3-5 sentences from `copy.maker_comment`: why you built it, one honest limitation, one specific question, then the producthunt.com link |
| Flair | not enabled | none |

## Steps
1. On launch day, open https://www.reddit.com/r/ProductHunters/ and scan today's launch posts.
2. Draft the post with the PH link only. Don't include `product.url`.
3. `launchkit draft r-producthunters -` with title, body and "post on PH launch day, morning PT". `launchkit mark r-producthunters drafted`.
4. Only with posting allowed and user approval: post it, screenshot to `.launchkit/evidence/r-producthunters.png`, `launchkit mark r-producthunters submitted --listing-url <url>`.

## Make the listing perform
- Post early on launch day (PH days start at 00:01 PT). Posts that say "4 hours left" come too late to matter.
- Ask for feedback, not upvotes. Product Hunt penalizes upvote requests, and the sub bans upvote trading.
- Post-mortems do well too: "Went viral in Taiwan, flopped on PH with 2 upvotes" got more comments than most launch posts. If the launch underperforms, a lessons post a day later is allowed.
- Comment on a few other launches that day. Makers here reciprocate with real feedback.

## Gotchas
- Any link to the product website or another subreddit gets the post removed.
- Audience is mostly other makers, not end users. Expect feedback, not customers.

## After submitting
- Reply to comments and send useful feedback threads back to the PH discussion.
