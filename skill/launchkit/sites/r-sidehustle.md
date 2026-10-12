---
id: r-sidehustle
name: "r/sidehustle"
url: https://www.reddit.com/r/sidehustle/submit
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

# r/sidehustle

About 3.3 million members, mostly people looking for ways to earn extra money (gig apps, reselling, freelancing). Self-promotion is banned outright: "advertising your own side hustle" is listed by name, and the penalty is a permanent ban. It's not a place to announce a product.

## Before you start
- Only consider this sub if the product directly helps people earn on the side (e.g. a tool for resellers or freelancers) and the founder has a real experience worth sharing. Otherwise mark `skipped` with "no self-promo allowed".
- Even then, the post has to be a story or advice post with **no link and no product name**. Tell the user this gives almost no direct traffic.
- Reddit login (Google, Apple, or email/username). The post form needs a login.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Community | picker | r/sidehustle |
| Post type | Text | Text |
| Title | 300 chars | A specific experience, e.g. "What 6 months of flipping thrift furniture taught me about pricing" |
| Flair | picker | "Giving Advice & Tips", "Success Story" or "Sharing Ideas". Other flairs seen: "Seeking Advice", "Looking For Ideas" |
| Body | 40,000 chars | First-person lessons with real numbers from the user. No links, no product name, no "DM me" |

## Steps
1. Ask the user whether they have a genuine side-hustle story related to the product. If not, skip.
2. Open https://www.reddit.com/r/sidehustle/submit, choose **Text**, write the title, pick the flair, write the body.
3. `launchkit draft r-sidehustle -` with title, flair, body, then `launchkit mark r-sidehustle drafted`.
4. Only if `allow_social_posting` is true and the user approved: post, then `launchkit mark r-sidehustle submitted --listing-url <url>`.

## Make the listing perform
- Concrete numbers (hours, costs, earnings) do best. Keep expectations realistic, the mods remove "make $1m in a week" posts.
- If people ask what tool you used, the user can answer in a comment. Don't plan the post around that.
- The pinned weekly "Sidehustle slowchat: wins and fails" thread is a softer place to mention progress.

## Gotchas
- Instant permanent ban for ads, affiliate or referral links, surveys, newsletters, YouTube channels, and "opportunities".
- Immediate ban for crypto, NFTs, digital marketing, drop shipping, casinos, surveys.
- No DMs and no offers of work.

## After submitting
- Reply in comments without linking. If the post is removed, don't repost. Mark `rejected`.
