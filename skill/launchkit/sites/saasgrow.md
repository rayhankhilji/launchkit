---
id: saasgrow
name: "SaaSGrow"
url: https://saasgrow.app/submit
category: Launch Platform
mode: form
pricing: Free/Paid
login: google
captcha: unknown
backlink_required: yes
review_time: "free: reviewed after badge check; Basic: instant"
verified: true
last_checked: 2026-10-12
---

# SaaSGrow

A build-in-public directory: each product gets a profile page, a public timeline of updates and an embeddable changelog
widget. Same owner as LaunchIgniter; free listings also get posted on LaunchIgniter.

## Before you start
- Login: Google, X, GitHub or email.
- Free: profile, timeline, changelog widget and a LaunchIgniter post, but **requires the SaaSGrow badge on the site**,
  and the free plan does not list a dofollow link. Basic $9 one-time adds instant approval, a dofollow link and
  cross-posting to Threads, Bluesky, LinkedIn, Instagram and Facebook. Pro $9/month covers 10 listings. Approval only.
- Assets: `assets.logo_square`, `assets.screenshots`.

## Field map (behind login; inferred from profile pages, confirm on the form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product name | text | `product.name` |
| Website URL | URL | `product.url` |
| Tagline | one line | `product.tagline` |
| Description | text | `product.description_medium` |
| Category | select | closest SaaS category to `product.categories[0]` |
| Logo | image | `assets.logo_square` |
| Screenshots | images | `assets.screenshots` |
| Socials | URLs | `links.twitter`, `links.linkedin` |
| Plan | Free / Basic / Pro | Free unless approved |

## Steps
1. Search https://saasgrow.app/ for `product.name`. If listed, mark `live`.
2. If the user agreed, add the SaaSGrow badge (shown in the submit flow) to the site.
3. Open https://saasgrow.app/submit, sign in with `submission.preferred_login` if it's one of theirs, fill the form.
4. Choose **Free** and run the badge check. Screenshot to `.launchkit/evidence/saasgrow.png`.
5. `launchkit mark saasgrow submitted --note "free, badge check passed"`

## Make the listing perform
- The timeline is the point of this site. After approval, add a first post (launch announcement) and, if the user
  keeps a changelog, one entry per release. Active profiles surface more than empty ones.
- Pair it with LaunchIgniter: the same account and badge style, and the free plan cross-posts there.

## Gotchas
- With no dofollow link on free, the value is the profile and the LaunchIgniter post. If the user refuses the badge, skip.
- Their FAQ mixes $9 and $5 per listing for Basic; trust the price shown at checkout.

## After submitting
- Find the profile link in the SaaSGrow dashboard. Mark `live` once approved and post the first timeline update.
