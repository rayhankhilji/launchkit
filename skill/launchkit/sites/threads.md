---
id: threads
name: "Threads"
url: https://www.threads.com/
category: Community
mode: post
pricing: Free
login: unknown         # Instagram account or standalone Threads profile
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Threads

Meta's text feed. threads.net now redirects to threads.com. Reach comes from the algorithmic For You feed and topic tags, so a new account can get views without followers. Decent for consumer apps, creator tools and indie hacker stories; the tech crowd is smaller than on X.

## Before you start
- Login uses Instagram (or a standalone Threads profile). Use the founder's account, not a fresh brand account, if the user agrees: personal accounts get more replies.
- Limits below are from Meta's public product info, not re-confirmed on 2026-10-12 because the composer is behind login: 500 characters per post, one link per post shown as a preview card, several images or a video per post, one topic tag per post.
- Prepare `assets.demo_gif` or a short screen recording; video posts outperform links.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post text | 500 chars | first-person hook + what `product.name` does, from `copy.launch_post_story` |
| Topic tag | one per post | closest community topic, e.g. "Indie Hackers", "Build in Public", or `product.categories[0]` |
| Media | images / video | `assets.demo_gif` or `assets.screenshots[0..2]` |
| Link | one URL | `product.url` with `?utm_source=threads`, ideally in a reply to your own post |
| Thread continuation | "Add to thread" | 2-4 follow-up posts: how it works, who it's for, ask for feedback |

## Steps
1. Open https://www.threads.com and sign in.
2. Click **What's new?** (or the + / compose button). Write post 1, add media and a topic tag.
3. Use **Add to thread** for follow-ups; put the link in the last one.
4. Lint, then save with `launchkit draft threads -`. Mark `drafted`.
5. Only with `allow_social_posting` true and user approval: click **Post**, then `launchkit mark threads submitted --listing-url <post url>`.

## Make the listing perform
- The first line has to stop the scroll: a result, a number from the profile, or a question you genuinely want answered.
- Topic tags are the main distribution lever for small accounts. Pick the one most people in your niche follow.
- Reply to every comment in the first hour. Threads ranks conversations.

## Gotchas
- Posts that look like ads (all links, no story) get little reach.
- Hashtag style "#" works but only the first tag becomes the topic; don't stack them.

## After submitting
- Check views and replies in the Insights panel after a day. Repost a short clip version a few days later if it did well.
