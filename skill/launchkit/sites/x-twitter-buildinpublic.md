---
id: x-twitter-buildinpublic
name: "X / Twitter (#buildinpublic)"
url: https://x.com/compose/post
category: Community
mode: post
pricing: Free
login: x
captcha: unknown        # Arkose challenges appear on some new or flagged logins
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# X / Twitter (#buildinpublic)

The main home of the indie maker crowd. A launch thread with a short demo video from the founder's personal account,
tagged #buildinpublic and shared into a relevant X Community, is the standard launch-day move. Reach depends almost
entirely on the founder's existing followers and replies in the first hour.

## Before you start
- Needs: `links.demo_video` or `assets.demo_gif` (native upload beats a YouTube link), 1-3 `assets.screenshots`, `product.url`.
- Login: the founder's own X account (`founder.twitter`), not the company account, unless the user says otherwise.
- Limits (help.x.com): 280 characters per post on free accounts, up to 4,000 for X Premium. Up to 4 media items per post.
- X Communities: the account must be public to join; posts are public but only members can reply. Each community has its own rules shown on join.

## Field map

| Field | Limit / format | Fill with |
|---|---|---|
| Post 1 (hook) | 280 chars | One sentence on what `product.name` does from `product.tagline`, plus who it's for. Attach the demo video. No link here |
| Posts 2-4 | 280 chars each | The why (from `copy.launch_post_story`), 2-3 concrete `product.key_features` with screenshots, one honest limitation |
| Last post | 280 chars | `product.url` (+ `product.deal_or_promo_code` if any) and a specific feedback question |
| Hashtags | 1-2 total | `#buildinpublic` plus at most one niche tag from `product.tags`. Put them at the end of post 1 or the last post |
| Audience | dropdown in composer | "Everyone", or a joined Community (Build in Public, Indie Hackers, SaaS, or one matching `product.categories[0]`) |

## Steps
1. Open https://x.com/compose/post. If redirected to login, stop and ask the user to log in themselves.
2. Search Communities (Explore > Communities) for "build in public" and the product niche; note names and rules for the draft.
3. Write the thread following skill/human-writing. Save with `launchkit draft x-twitter-buildinpublic -` including the
   thread, media list, target community and best time. `launchkit mark x-twitter-buildinpublic drafted`.
4. Only if `allow_social_posting` is true and the user approved this draft: compose post 1, attach media, press **+** to add
   each next post, choose the audience, click **Post all**. Copy the URL of post 1.
5. `launchkit mark x-twitter-buildinpublic submitted --listing-url <url>`.

## Make the listing perform
- Put the link in the last post or a reply, not post 1. Link posts get less reach; the video post carries the thread.
- Native video under 60 seconds that shows the product working within 3 seconds, captions burned in (most people watch muted).
- Post on a weekday between 8 and 11am US Eastern, or match the founder's audience time zone. Pin the thread to the profile for launch week.
- Reply to every reply in the first hour. Quote-post milestones later in the week (first users, first fix from feedback).
- Tag tools you built with only when it's true (e.g. "built on @supabase"); they sometimes repost.

## Gotchas
- Don't tag a pile of big accounts or post the same text into many communities; X limits reach for spammy behavior.
- More than 2 hashtags looks like spam to this crowd.
- Scheduled posts can't target a Community from every client; post live if you're using one.

## After submitting
- Mark the post URL. Remind the user to reply to people for the next few hours; the agent only replies if asked.
