---
id: hackernoon
name: "Hackernoon"
url: https://app.hackernoon.com/new
category: Launch Platform
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "3-5 business days (human editors)"
verified: true
last_checked: 2026-10-12
---

# Hackernoon

Tech publishing platform with human editors. A published story ranks well in search and gets syndicated. It wants a real story (how you built it, what you learned), not an ad. Free to publish.

## Before you start
- Login: account at https://hackernoon.com/signup, then write at https://app.hackernoon.com/new.
- Needs: a 800-2,000 word story drafted from `copy.launch_post_story` plus a feature image (`assets.og_image` or a screenshot without a big logo).
- The founder's bio must state their role and link to the product site. Per Hackernoon's rules, a founder writing about their own product with that disclosure isn't treated as paid promotion.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Title | sentence case, no links | a specific, non-hype headline about the story, not the product name alone |
| Body | editor | the story: lead with the gist, short paragraphs, links to sources |
| Feature image | image | `assets.og_image`; avoid logo-only images |
| Tags | up to 8 | from `product.tags` plus broad topics (startups, saas, ai, programming) |
| Meta description | 120-160 chars | `product.description_short` adapted |
| Canonical link ("first seen at") | URL | only if the story was first posted on the user's own domain (not Medium/dev.to) |
| Vested interest disclosure | story settings | tick it and name the product |
| Author bio | profile | `founder.bio_short` with role and `product.url` |

## Steps
1. Draft the story with `lk draft hackernoon -` (title, body, tags, meta, image choice). Mark `drafted`.
2. Only if `allow_social_posting` is true and the user approved the draft: open /new, choose **Blank Draft**, paste, open **Story Settings**, fill tags, image, meta and disclosure, tick the rights confirmation, click **Submit Story for Review**.
3. They email "You Just Submitted a Story to HackerNoon". `launchkit mark hackernoon submitted --note "editor review 3-5 business days"`.

## Make the listing perform
- Write for developers and founders: build details, numbers from the profile, mistakes. Search the site first and pick an angle not already covered.
- Link rules: max 1 link to the product site per 500 words, at least 2-3 links to other reputable sources per product link, link related Hackernoon articles. No UTM links, no affiliate Amazon links.
- Mention at least one alternative fairly. One-sided product pitches get rejected.
- Importing an existing post (Import via URL/RSS) is allowed; set the canonical to the user's own blog.

## Gotchas
- Changing or adding promotional links after publication can get the account banned.
- Plagiarism checks run on every story. Don't reuse text from the product site word for word.
- Press releases are a separate paid product. Don't submit one here.

## After submitting
- If no reply in 4-5 business days, use the contact form ("My Story is Not Reviewed"). If editors send feedback, revise and resubmit.
