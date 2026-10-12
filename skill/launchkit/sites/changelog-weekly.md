---
id: changelog-weekly
name: "Changelog Weekly"
url: https://changelog.com/news/submit
category: Newsletter
mode: pitch
pricing: Free
login: github            # "Sign In via GitHub" or "via Email Address"
captcha: none
backlink_required: no
review_time: "editor picks weekly; email only if published"
verified: true
last_checked: 2026-10-12
---

# Changelog Weekly (Changelog News)

Jerod Santo's Monday developer newsletter and podcast (about 27k newsletter subscribers plus 20-30k podcast listens). It has a public submission form, but its rules say commercial products and services go through sponsorship. Submit only if there's a genuinely newsworthy developer angle, such as an open-source release or a technical write-up.

## Before you start
- Fit check: open source (`product.open_source`, `product.repo_url`), a notable dev tool release, or an interesting engineering post. A closed SaaS pitch will be ignored; mark it `skipped` ("commercial, sponsor only").
- Needs a changelog.com account: GitHub (preferred, `founder.github`) or an email address.
- Have a link to something readable: the repo, a launch blog post or docs (`links.docs`, `links.changelog`).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL * | URL | `product.repo_url` if open source, else the launch post or `product.url` |
| Title * | text | plain descriptive title, e.g. "<name>: <what it does>", sentence case, no hype |
| What's interesting about it? | Markdown | 2-4 sentences from `product.description_medium`: what's new, how it works technically, why devs would care |

## Steps
1. Open https://changelog.com/news/submit. Click **Sign In** and use GitHub (or email if the user prefers).
2. Fill URL, Title and "What's interesting about it?" per the map. Keep the description factual and technical.
3. Submit only if `pitch` mode is enabled and the user approved the text. Otherwise `launchkit draft changelog-weekly -` and mark `drafted`.
4. On submit, screenshot to `.launchkit/evidence/changelog-weekly.png` and `launchkit mark changelog-weekly submitted --note "emailed only if published"`.

## Make the listing perform
- Their rules: no how-tos/tutorials, no commercial products, no reader-hostile sites (heavy popups, paywalls). Make sure the linked page is clean.
- "Convince us why something is newsworthy": lead with the technical detail (language, architecture, benchmark from the profile) rather than benefits.
- Submitting your own work is explicitly allowed. The issue ships Mondays, so submitting by the weekend before helps.

## Gotchas
- Paid route: Changelog News sponsorship is $1,500/week, one brand per week (adam@changelog.com). Skip at budget 0.
- Podcast guest suggestions use a different form (changelog.com/request), not this one.

## After submitting
- They email you only if it's published. Check changelog.com/news the following Monday.
