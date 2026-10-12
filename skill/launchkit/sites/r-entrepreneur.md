---
id: r-entrepreneur
name: "r/Entrepreneur"
url: https://www.reddit.com/r/Entrepreneur/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant (removals and permanent bans after the fact)
verified: true
last_checked: "2026-10-12"
---

# r/Entrepreneur

5.3M members, one of the strictest subs on Reddit. Rule 1 bans promotion, URLs, "DM me" and "check my profile" in normal posts, with permanent bans. The only places a product can appear are the daily stickied weekly threads. Treat this as a feedback and credibility channel, not a traffic source.

## Before you start
- The user's Reddit account must already have comments in r/Entrepreneur (Rule 3: participate before posting). If it doesn't, stop and tell the user.
- The submit page says to message the mods for permission before posting. For anything that touches the product, assume you need that.
- Text posts only. No images, video or link posts.

## Field map

Option A, comment in a weekly thread (the default):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Comment in "Feedback Friday: Rate My Ideas" | Markdown | one paragraph on what `product.name` does and who it is for, `product.url`, one specific question you want feedback on |
| Comment in "Thankful Thursday: Free Resources and Tools" | Markdown | only if there is a real free offer: `product.deal_or_promo_code` or a free tier from `product.pricing_details`, plus `product.url` |

Option B, a value post with no link and no product pitch:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Title | 300 chars | a specific lesson in sentence case, from `copy.launch_post_story` |
| Body | Markdown, no URLs | the story: numbers only if they are in the profile, what went wrong, what you changed |
| Flair | required: Lessons Learned, Best Practices, How Do I?, Starting a Business, Success Story, Business Failures, Recommendations, Hiring and HR, Mindset & Productivity | Lessons Learned for most founder stories |

## Steps
1. Open https://www.reddit.com/r/Entrepreneur/ and find today's stickied weekly thread (Mentor Monday, Talent Tuesday, Thankful Thursday, Feedback Friday, Success Saturday, Sunday Steam).
2. For Option A, draft the comment for Friday's thread. For Option B, draft a text post with no URL and no product name in the title.
3. `launchkit draft r-entrepreneur -` with the target (thread name and day, or the post), text and flair. `launchkit mark r-entrepreneur drafted`.
4. Only if posting is allowed and the user approved: post it, screenshot to `.launchkit/evidence/r-entrepreneur.png`, `launchkit mark r-entrepreneur submitted --listing-url <url>`.

## Make the listing perform
- Feedback Friday gets 40+ comments. Ask one narrow question ("does the pricing page make the free tier clear?") and people answer it.
- Value posts that do well here are specific and a bit vulnerable: pricing mistakes, a big customer pulling you off course, shutting down a company. They pull profile clicks without any link.
- Post Option B on a weekday morning US time. Reply to every comment in the first two hours.

## Gotchas
- No URLs in posts, not even in a signature. No "happy to share the tool if anyone wants it". That is the exact pattern Rule 1 bans.
- Rule 4 removes AI-written posts and can ban. Write it in the founder's voice, short sentences, no listicle format.
- Reposting the same story from another sub counts as unoriginal content.

## After submitting
- Check the post or comment is visible logged out. If removed, don't repost. Tell the user and suggest they message the mods.
