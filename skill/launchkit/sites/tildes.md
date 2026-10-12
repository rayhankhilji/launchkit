---
id: tildes
name: "Tildes"
url: https://tildes.net/
category: Community
mode: post
pricing: Free
login: unknown         # username + password; registration needs an invite code
captcha: unknown
backlink_required: no
review_time: instant (topics can be moved, retagged or removed by admins)
verified: true
last_checked: 2026-10-12
---

# Tildes

Small, non-profit, text-first discussion site with long thoughtful comments. Registration is invite-only ("Registration is currently invite-only. You must have a valid invite code", seen on tildes.net/register 2026-10-12). Readers like technical depth and dislike marketing. Worth it only if the founder already has an account or can get an invite from a member, and the product has a real story.

## Before you start
- No invite, no post. Ask the user if they have a Tildes account. If not, mark `skipped` with "invite-only".
- Code of Conduct on self-promotion: sharing your own project is fine in moderation, but it shouldn't be the main reason you post. "Tildes is a community, not a free advertising platform."
- Pick the group: ~tech for tech products, ~comp for programming and dev tools, ~creative for things people make, ~games for games. Groups are created by the admin only.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Group | navigate to it first | ~comp, ~tech, ~creative or ~games based on `product.categories` |
| Title | text | plain description, e.g. "I built a local-first notes app, looking for feedback on sync design" |
| Link | URL, optional | `product.url` or `product.repo_url` (link topic) |
| Text | Markdown, optional | 150-400 words: why you built it, technical choices, honest limits, a specific question. Becomes the first comment if a link is set |
| Tags | comma separated, letters/numbers/spaces only, hierarchical with "." | e.g. "software, open source, ask.feedback" |

## Steps
1. Sign in at https://tildes.net/login with the user's account.
2. Open the chosen group, click **Post a new topic** in the sidebar.
3. Fill Title, Link (optional), Text and Tags from the field map.
4. Save with `launchkit draft tildes -`, mark `drafted`.
5. Only with `allow_social_posting` true and user approval: click **Post topic**, then `launchkit mark tildes submitted --listing-url <topic url>`.

## Make the listing perform
- Text topics that explain the "why" and the technical tradeoffs get long replies here. A bare link with no text gets ignored.
- Tags like "ask.feedback" help people who filter by tag find the topic.
- Activity is lower than Reddit; one good thread with 20 thoughtful comments is a win.

## Gotchas
- Don't use multiple accounts or ask friends to vote. The CoC bans it.
- Tags can't contain dashes or special characters ("open source", not "open-source").

## After submitting
- Reply to every comment in depth. Admins may move the topic to a better group; that's normal.
