---
id: changelog-news
name: "Changelog News"
url: https://changelog.com/news/submit
category: Dev / Open Source
mode: form
pricing: Free
login: github           # GitHub or email sign-in at https://changelog.com/in
captcha: unknown
backlink_required: no
review_time: "no fixed time; email only if published"
verified: true
last_checked: 2026-10-12
---

# Changelog News

The weekly news segment (podcast + newsletter, about 27k subscribers) from Changelog Media. Editors pick a
handful of links from reader submissions. Good for open source releases and genuinely interesting tech, useless
for a plain SaaS pitch: the submit page says commercial products and services should go through paid sponsorship.

## Before you start
- Fit check: submit only if `product.open_source` is true, or there is a real story (a technical write-up,
  a notable release, an unusual approach). If it's a commercial product with nothing newsworthy, mark `skipped`
  ("commercial, Changelog routes these to sponsorship").
- Prefer linking `product.repo_url` or a technical blog post over the marketing homepage.
- Account: sign in via GitHub (preferred) or email at https://changelog.com/in. The profile is used for attribution.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| URL * | URL | `product.repo_url` if open source, else the most technical page (`links.changelog` post, `links.docs`), else `product.url` |
| Title * | text, keep under ~80 chars | Plain headline, e.g. "`product.name` - `product.tagline_short`". No hype, no emoji |
| What's interesting about it? | Markdown, optional but fill it | 2-4 sentences written for devs: what it does, how it works, what is new. Adapt from `product.description_medium` and `product.key_features`. End with the license if open source |

## Steps
1. Open https://changelog.com/in and sign in with GitHub (or email magic link if `submission.preferred_login` is email).
2. Open https://changelog.com/news/submit.
3. Fill URL, Title and "What's interesting about it?" per the field map. Use Markdown for the repo link or install command.
4. Click **Submit**. Screenshot the confirmation to `.launchkit/evidence/changelog-news.png`.
5. `launchkit mark changelog-news submitted --note "editorial pick, notified by email only if published"`

## Make the listing perform
- The page says "Do your best to convince us why something is newsworthy". Lead the description with the one
  thing a developer would find surprising (a technique, a benchmark from the profile, a new release), not features.
- Not accepted: how-tos and tutorials, commercial products, reader-hostile sites (popups, paywalls), podcast
  suggestions. Make sure the linked page loads clean with no modal.
- Timing: the News issue ships weekly (Monday). Submitting late in the week before gives editors time to see it.
- A launch blog post explaining how you built it often lands better than a homepage link.

## Gotchas
- No edit after submit and no status page. Don't resubmit the same URL.
- Paid route: https://changelog.com/sponsor (podcast/newsletter ads, priced on request). Out of scope at budget 0.

## After submitting
- You only hear back if it's published. Check https://changelog.com/news a week later; if listed,
  `launchkit mark changelog-news live --listing-url <episode url>`.
