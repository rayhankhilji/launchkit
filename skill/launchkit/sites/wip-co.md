---
id: wip-co
name: "WIP.co"
url: https://wip.co/settings/projects/new
category: Launch Platform
mode: form
pricing: Paid
login: email
captcha: unknown
backlink_required: no
review_time: "instant once a member"
verified: true
last_checked: 2026-10-12
---

# WIP.co

Paid community of makers who log daily todos and ship updates. Projects get public pages under `/projects`, browsable by topic. It is not a directory: value comes from posting progress, not from a one-time listing.

## Before you start
- Membership required: $29/month or $199/year. The join form asks for email, username and password, then goes to checkout. Get user approval before joining; the user pays.
- Pro features (unlimited and private projects, API/MCP, streak freezes) come with membership.
- Have `product.name`, `product.url`, `product.tagline`, `product.description_short`, `assets.logo_square`, `founder.twitter` ready.

## Field map
Join form (`https://wip.co/join`):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Email | email | `submission.email` |
| Username | text | `founder.twitter` handle without @, or ask |
| Password | text | per `submission.password_policy` |
| Plan | monthly / yearly | user's choice, then checkout |

Add project (`/settings/projects/new`, members only, exact fields unconfirmed):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` |
| Hashtag / handle | short slug | lowercased `product.name` without spaces |
| Pitch | short text | `product.tagline` |
| Description | text | `product.description_short` |
| Website | URL | `product.url` |
| Icon | image | `assets.logo_square` |
| Topics | tags (Developers, Productivity, Artificial Intelligence, Marketing, Open Source, ...) | from `product.categories` |

## Steps
1. Confirm with the user that they want a paid membership. If not, `launchkit mark wip-co skipped --note "paid membership"`.
2. Open https://wip.co/join, fill email, username, password, and let the user finish checkout.
3. Open https://wip.co/settings/projects/new (or **Add your Project** on `/projects`). Fill the fields and upload the icon.
4. Save. Screenshot to `.launchkit/evidence/wip-co.png`.
5. `launchkit mark wip-co submitted --note "member, project page created"`

## Make the listing perform
- Projects with an icon show in the default "Has icon" filter on `/projects`. Always upload one.
- Log todos and completed work tagged with the project hashtag; activity is what puts the project in front of members.
- Post launches in Discussions and keep a streak going; members follow active makers.

## Gotchas
- Without a membership nothing can be posted.
- This is an ongoing habit tool. Tell the user it only pays off if they post regularly.

## After submitting
- The project page lives at `/<project>` on wip.co. Check it shows in the right topics.
