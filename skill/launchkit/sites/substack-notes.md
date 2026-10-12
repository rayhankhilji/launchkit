---
id: substack-notes
name: "Substack Notes"
url: https://substack.com/
category: Community
mode: post
pricing: Free
login: email           # magic link or password; also Apple/Google in some regions (unconfirmed)
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Substack Notes

Short-form feed inside Substack, shown on the Home tab to subscribers and the wider Substack network. Readers are writers and newsletter subscribers, so it works for tools for writers, creators, researchers and anything with a story behind it. Weak for dev infra.

## Before you start
- Needs a Substack account. A publication isn't strictly required to post notes, but having one (even empty) gives the founder a profile page and subscribe button. Ask the user before creating a publication.
- Profile: name `founder.name`, bio `founder.bio_short`, photo `founder.avatar`.
- Subscribers are not emailed about notes (Substack help, 2026). Reach comes from restacks and the feed.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Note text | free text, short-form (no hard limit published) | 2-6 short lines adapted from `copy.launch_post_story`: the problem, what you built, a link |
| Link | pasted URL becomes a card | `product.url` with `?utm_source=substack` |
| Images | multiple allowed on web | 1-2 of `assets.screenshots` or `assets.demo_gif` |
| Video | one | `links.demo_video` file if short |
| Who can reply | setting | Everyone |
| Schedule | calendar icon on web | user's chosen time |

## Steps
1. Open https://substack.com and sign in with `submission.email`.
2. Click **Create** > **Note**.
3. Write the note, paste the link, attach an image. Lint with `launchkit lint-copy -`.
4. Save via `launchkit draft substack-notes -` (you can also click **Cancel** > Save as draft in Substack). Mark `drafted`.
5. Only with `allow_social_posting` true and user approval: click **Post** (or schedule), then `launchkit mark substack-notes submitted --listing-url <note url>`.

## Make the listing perform
- Notes that tell a small personal story get restacked; announcements don't. "I spent 3 weekends on this because..." beats a feature list.
- Restack and reply to notes from writers in the same niche for a week before and after. Replies on bigger accounts are the main discovery path.
- If the product has a newsletter, link a post about the launch rather than the homepage. Substack readers click posts more willingly than product pages.

## Gotchas
- Pure link drops with hashtags look out of place. Substack doesn't use hashtags.
- Paid-subscriber-only replies is an option; don't turn it on for a launch note.

## After submitting
- Check the note's restacks and replies in the first day and reply to each.
