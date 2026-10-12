---
id: bluesky
name: "Bluesky"
url: https://bsky.app/
category: Community
mode: post
pricing: Free
login: email            # Bluesky account (handle + password); custom domain handles optional
captcha: unknown        # signup may show a verification step; posting doesn't
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Bluesky

A Twitter-like network with a large developer, open source and indie maker crowd. Reach comes from followers and from
custom feeds (topic feeds picked up by hashtags or keywords), not from one central algorithm, so the right tags matter.

## Before you start
- Limits (from the `app.bsky.feed.post` lexicon): 300 characters (graphemes) per post; up to 4 images (2 MB each,
  alt text supported) or 1 video (MP4, up to 300 MB; account email must be verified to upload video, daily video cap applies).
- Login: the founder's own account. If they use a custom domain handle (e.g. `@founder.com`), that adds trust.
- Needs: `assets.screenshots` (1-4) or `links.demo_video` as an MP4, `product.url`.

## Field map

| Field | Limit / format | Fill with |
|---|---|---|
| Post 1 | 300 chars | What `product.name` does in one line (`product.tagline`) + who it's for + `product.url`. Bluesky does not punish links |
| Media | 4 images or 1 video | Best screenshot or the demo video. Write alt text for every image (the community expects it) |
| Thread posts 2-3 | 300 chars each | Why it exists (`copy.launch_post_story`), one or two `product.key_features`, a specific feedback question |
| Hashtags | inline | 1-3 tags that feed curators watch: `#buildinpublic`, `#indiedev`, `#opensource` (if `product.open_source`), or a stack tag from `product.tags` |
| Language | composer setting | English unless the user's audience differs |

## Steps
1. Open https://bsky.app/. If not logged in, stop and ask the user to sign in.
2. Draft the post or 2-3 post thread following skill/human-writing. Save with `launchkit draft bluesky -` (text, media,
   alt text, hashtags, posting time) and `launchkit mark bluesky drafted`.
3. Only if `allow_social_posting` is true and the user approved: click **New Post**, paste post 1, attach media and alt
   text, use **Add another post** for the thread, click **Post**.
4. Copy the post URL (`bsky.app/profile/<handle>/post/<id>`), `launchkit mark bluesky submitted --listing-url <url>`.

## Make the listing perform
- Links in the first post are fine here, unlike X. Lead with the link card or a screenshot, not both (one embed per post).
- Open source projects do best: mention the license and repo (`product.repo_url`).
- Plain, nerdy, self-deprecating tone. Marketing voice gets ignored and occasionally added to moderation lists.
- Weekday US morning or European afternoon. Reply to everyone who answers; quote-posts drive most spread.
- Use **thread gate** only if needed; leaving replies open helps reach.

## Gotchas
- Don't mass-mention accounts or repost the same promo daily; users block or add you to community moderation lists, which hides you widely.
- AI-generated images without disclosure get called out; use real product screenshots.

## After submitting
- Pin the post to the profile for launch week. Check notifications for replies; the agent replies only if asked.
