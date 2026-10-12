---
id: x-communities-build-in-public
name: "X Communities: Build in Public"
url: https://x.com/i/communities/1493446837214187523
category: Community
mode: post
pricing: Free
login: x
captcha: unknown
backlink_required: no
review_time: instant (moderators can hide or remove posts)
verified: true
last_checked: 2026-10-12
---

# X Communities: Build in Public

The "Build in Public" community on X (description: "Share what you're working on. Get feedback. Help each other move forward."). It's one of the largest maker communities on X; similar ones exist for Indie Hackers and SaaS founders. Posts appear in the community tab, in members' Home timelines and on your profile, but only members can engage fully.

## Before you start
- Needs the founder's public X account (protected accounts can't join). Sign in with `founder.twitter`.
- Join from the community page: **Join** shows the community rules; agree to them. Some communities are "Ask to join" and need moderator approval. Read the rules shown at join time and follow them exactly (they are only visible when logged in).
- Have `assets.demo_gif` or a short video ready.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Audience selector | "Everyone" or a community | Build in Public |
| Post text | 280 chars (longer with X Premium) | progress-style update: what you shipped, one number or lesson from the profile, a question |
| Media | up to 4 images or 1 video/GIF | `assets.demo_gif` or `assets.screenshots[0]` |
| Link | URL | `product.url`, better in a reply than in the main post |
| Also share with followers | checkbox (if shown) | on |

## Steps
1. Open the community URL, click **Join**, read the rules, click **Agree and join** (or **Ask to join**).
2. Click the compose button, choose **Build in Public** as the audience.
3. Write the post, attach media. Put the link in a self-reply.
4. Lint and save with `launchkit draft x-communities-build-in-public -`. Mark `drafted`.
5. Only with `allow_social_posting` true and user approval: post it, then `launchkit mark x-communities-build-in-public submitted --listing-url <post url>`.

## Make the listing perform
- This community rewards progress updates, not launch ads: "Day 30: first paying user, here's what worked" style posts. Make it part of a series.
- Posts with a demo GIF or screen recording get more replies than text-only.
- Spend 15 minutes replying to other members' posts before and after posting. Reciprocity drives most engagement here.
- X tends to suppress reach on posts with external links. Link in the first reply.

## Gotchas
- Moderators remove pure promo and engagement bait ("drop your link below"). Don't post the same thing in several communities at once.
- Community posts are public; don't share private metrics the user didn't approve.

## After submitting
- Reply to every comment the first day. Check whether the post shows in the community's Latest tab.
