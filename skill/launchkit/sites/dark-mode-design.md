---
id: dark-mode-design
name: "Dark Mode Design"
url: https://www.darkmodedesign.com/
category: Design Gallery
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: unknown (curator replies only if featured)
verified: true
last_checked: 2026-10-12
---

# Dark Mode Design

A small hand-picked showcase of dark mode websites, curated by Cai Cardenas and shared on Threads, Instagram, Bluesky and X. Only relevant if the user's site is dark by default (or has a strong dark theme).

## Before you start
- Fit check: the homepage must be dark. A light site with a dark toggle rarely gets in. If not dark, mark `skipped` ("not a fit").
- There is no form. "Submit a site" is a mailto link: `hello@darkmodedesign.com` with subject "Site Submission".
- Sending email from the user's account needs explicit approval (docs/05). Default: draft it.

## Field map
Email fields:

| Field | Limit / format | Fill with |
|---|---|---|
| To | email | hello@darkmodedesign.com |
| Subject | text | Site Submission |
| Body line 1 | plain text | `product.name` and `product.url` |
| Body line 2 | one sentence | what the site is (`product.tagline`) and one dark-mode design detail |
| Body line 3 | optional | `founder.name`, `links.twitter` for credit |
| Attachment | optional | none in the first email; link instead |

## Steps
1. Search the homepage grid for `product.name`. If listed, mark `live`.
2. Write the email above, max 60 words, plain text.
3. Save with `lk draft dark-mode-design -` and mark `drafted`.
4. Only if the user approved sending: send from `submission.email`, then `launchkit mark dark-mode-design submitted --note "emailed curator"`.

## Make the listing perform
- Mention what makes the dark theme good, e.g. contrast, a single accent colour, or how images are handled. That's what the curator picks on.
- Include the X or Instagram handle so they can tag the user when they post it.

## Gotchas
- No confirmation is sent. No reply usually means not selected.

## After submitting
- Watch the homepage and the curator's social accounts for a couple of weeks.
