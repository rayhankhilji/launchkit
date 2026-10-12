---
id: hacker-news-show-hn
name: "Hacker News (Show HN)"
url: https://news.ycombinator.com/submit
category: Launch Platform
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant (appears on /shownew)
verified: true
last_checked: 2026-10-12
---

# Hacker News (Show HN)

Show HN is for something you made that people can try right now. A good one brings thousands of technical visitors and blunt feedback. HN's rules now say **don't post generated or AI-edited text and don't automate posting**, so the agent prepares notes only. The user writes and posts it themselves.

## Before you start
- Read https://news.ycombinator.com/showhn.html and /newsguidelines.html.
- Eligible: something people can run or hold. **Not** eligible: landing pages, sign-up pages, waitlists, fundraisers, blog posts, newsletters, minor version updates. If `product.status` is pre-launch or there's no way to try it without a waitlist, mark `skipped` ("not ready for Show HN").
- It must be non-trivial and the user's own work, and the user must be around to answer comments.
- Login: an HN account (username + password at /login). New accounts work, but a few genuine comments first helps.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| title | 80 chars, must start with `Show HN:` | outline from `copy.show_hn_title`; format `Show HN: <Name> - <what it does in plain words>` |
| url | URL | `product.url`, or `product.repo_url` for open source. Link straight to something usable, not a marketing page |
| text | plain text | leave empty when there's a url; the story goes in a first comment instead |

## Steps
1. Write talking points for the user (not finished prose) with `lk draft hacker-news-show-hn -`: suggested title, the link, and bullets for the first comment from `copy.show_hn_body` (who they are, why they built it, how it works technically, what's rough, what feedback they want).
2. Mark `drafted`. Do not post, even if `allow_social_posting` is true: HN asks for human-written text and no automated posting.
3. Tell the user: submit at /submit, then immediately add the first comment in their own words.
4. Once they share the item URL: `launchkit mark hacker-news-show-hn submitted --listing-url <item url>`.

## Make the listing perform
- Title: no caps, no exclamation marks, no superlatives, no site name repeated. "Show HN: Acme - turn Figma frames into React components" beats "Show HN: Acme, the best Figma to code tool".
- Remove barriers: no signup to try it, a live demo, or a one-line install. HN says you'll get more feedback that way.
- The first comment matters most. Technical detail, honest limits, and a specific question get upvotes. Marketing language gets flagged.
- Every Show HN appears on /shownew; it reaches /show after a small points threshold. Posting on a weekday morning US time is the common advice (not an HN rule).
- Never ask anyone to upvote or comment, and don't share a direct "please upvote" link. HN detects voting rings and penalises the post.

## Gotchas
- Don't delete and repost if it sinks. HN only allows one shot per project; a major overhaul can be posted again later.
- Append [video] or [pdf] to the title if the link is one.

## After submitting
- The user should reply to every substantive comment for the first few hours, calmly and without arguing.
