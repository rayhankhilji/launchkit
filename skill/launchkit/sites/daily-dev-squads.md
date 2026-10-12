---
id: daily-dev-squads
name: "daily.dev Squads"
url: https://daily.dev/squads/discover
category: Dev / Open Source
mode: post
pricing: Free
login: github           # daily.dev supports GitHub and Google sign-in
captcha: none
backlink_required: no
review_time: "instant in your own Squad; admin approval in others"
verified: true
last_checked: 2026-10-12
---

# daily.dev Squads

daily.dev is a developer news feed (browser new-tab extension and web app). Squads are its communities, listed in
a public directory by category: Languages, Web, Mobile, DevOps & Cloud, AI, Games, DevTools, Career, Open Source,
DevRel, Fun. Posting into active Squads (or running your own) gets a launch in front of devs on their new-tab page.

## Before you start
- Account: sign up at https://app.daily.dev with GitHub (preferred) or Google.
- Two options: (a) share the launch post into 1-3 relevant public Squads you join, (b) create a public Squad for the
  product. Public Squads go live without manual review; you must pick a category at creation.
- Source content: a launch blog post or DEV post works better than a bare homepage link.

## Field map

| Field | Format | Fill with |
|---|---|---|
| Post type | "What's on your mind?" / "Share a link" / "Poll" | "Share a link" to the launch post or `product.url` |
| Title | text | plain headline, e.g. "I built `product.name` to <job>" |
| Commentary / description | Markdown | 2-4 sentences from `copy.launch_post_story`: what, why, one technical detail, ask for feedback |
| (New Squad) Name + handle | text | `product.name` |
| (New Squad) Image | image | `assets.logo_square` |
| (New Squad) Description | text | `product.description_short` |
| (New Squad) Category | select | DevTools for dev tools, Open Source if `product.open_source`, else closest |

## Steps
1. Browse https://daily.dev/squads/discover/devtools (and /open-source, /ai, /web as relevant). Pick Squads with
   recent posts and read each Squad's rules (shown on the Squad page and next to the composer).
2. Draft one post per Squad, adapted to its topic; `lk draft daily-dev-squads -`; mark `drafted`.
3. After approval (and `allow_social_posting`): join the Squad, open the composer, "Share a link", paste the
   drafted title and commentary, **Post**. In most Squads, member posts wait for admin approval.
4. `launchkit mark daily-dev-squads submitted --listing-url <post url>`

## Make the listing perform
- Squad rules often forbid pure promotion. Frame it as a build story with a question for feedback.
- Share the post from the main daily.dev feed into Squads (Share icon) if the article is already indexed there.
- Your own public Squad earns a "Public Squad" badge and stats; "Featured" is editor's choice for active Squads.
- Paid "Boost" exists for posts; skip at budget 0.

## Gotchas
- Posting the same link into many Squads at once looks like spam; keep it to 2-3.
- Verified Company Squads are a paid business offering (business.daily.dev).

## After submitting
- Check the Squad page for approval and comments; post analytics are in the Squad's analytics view.
