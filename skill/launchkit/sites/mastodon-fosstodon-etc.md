---
id: mastodon-fosstodon-etc
name: "Mastodon (fosstodon etc.)"
url: https://fosstodon.org/
category: Community
mode: post
pricing: Free
login: email            # account on a specific server; fosstodon.org is invite-only
captcha: none
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Mastodon (fosstodon etc.)

Federated Twitter alternative with a strong open source and Linux crowd. Fosstodon (about 62k accounts) is the main FOSS
server, but it's **invite-only** (registrations closed, contact the admins for an invite) and its rules say
"DO NOT post commercial promotions, or advertise". Use the user's existing Mastodon account on any server; posts federate everywhere.

## Before you start
- Decide fit: good for open source, self-hostable or privacy-respecting products. A closed-source paid SaaS gets little
  here and a pure ad breaks fosstodon's rules. If `product.open_source` is false, frame it as a maker update, or skip.
- Account: the user's own. If they don't have one, open servers right now include mastodon.social (open signup) and
  hachyderm.io (tech, approval required). Don't create one unless `allow_account_creation` is true and the user agrees.
- Fosstodon limits (instance API): 500 characters per post, links count as 23 chars, up to 4 attachments (images 16 MB,
  video ~99 MB), polls up to 4 options. Other servers may differ; check the counter.

## Field map

| Field | Limit / format | Fill with |
|---|---|---|
| Post text | 500 chars (fosstodon) | Plain first-person: what `product.name` does, that it's open source (license), what you'd like feedback on, `product.repo_url` or `product.url` |
| Hashtags | CamelCase | 3-5 tags, Mastodon search only works through tags: `#OpenSource`, `#FOSS`, `#SelfHosted`, `#Rust`/stack from `product.tags`, `#BuildInPublic` |
| Media | 4 files | 1-2 screenshots with alt text (expected by the community; posts without it get fewer boosts) |
| Content warning | optional | Not needed for a product post |
| Visibility | Public | Public (not Unlisted) so it appears in hashtag timelines |

## Steps
1. Open the user's server (fosstodon.org or theirs). If not logged in, stop and ask them to sign in.
2. Read the server's rules at `<server>/about`. Draft following skill/human-writing, save with `launchkit draft mastodon-fosstodon-etc -`
   and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: paste into the compose box, add media + alt text,
   set Public, click **Publish**.
4. `launchkit mark mastodon-fosstodon-etc submitted --listing-url <post url>`.

## Make the listing perform
- Hashtags are the discovery mechanism (there is no algorithmic feed). CamelCase them for screen readers.
- Boosts from people who tried it matter; ask for feedback, never for boosts.
- Announce in the project's own words: version, license, what's new. Releases and "I built this because" posts do well.
- A follow-up post a week later with what changed from feedback gets a second round of boosts.

## Gotchas
- Fosstodon: no commercial promotion and no posting from automated tools without someone monitoring the account. Accounts get suspended for ads.
- Tracking links and UTM parameters are frowned on; post clean URLs.

## After submitting
- Reply to replies from the user's account. Optionally add the project link to the profile's verified links (rel="me").
