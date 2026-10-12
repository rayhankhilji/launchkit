---
id: console-dev
name: "Console.dev"
url: https://console.dev/selection-criteria
category: Dev / Open Source
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "editorial, no reply guaranteed"
verified: true
last_checked: 2026-10-12
---

# Console.dev

A free weekly devtools newsletter (30k+ subscribers, every Thursday) by David Mytton. Each issue reviews 2-3 tools
with "What we like / What we don't like" and lists a few beta releases. No sponsored reviews. Submission is by
email to hello@console.dev, there's no form.

## Before you start
- Fit (from the selection criteria): the primary user is a developer, there's a self-service signup (no sales
  call), it fits the dev workflow, it has good docs, it's actively maintained. Non-dev products: mark `skipped`.
- Betas: only listed if pre-1.0 semver or clearly labelled "beta"/"preview" on the site. GA products go to reviews.
- Pitching is email from the user's account: draft only, send only with explicit approval.

## Field map (email to hello@console.dev)

| Item | Fill with |
|---|---|
| Subject | "Tool suggestion: `product.name` - `product.tagline_short`" |
| What it does | `product.description_short`, technical and plain |
| Why devs care | 2-3 points mapped to their criteria: CLI/API, docs link (`links.docs`), platforms (`product.platforms`), dark mode, speed |
| Try it | self-serve signup link or install command; `product.repo_url` if open source |
| Beta? | say so if `product.status` is beta, with where the beta label appears |
| Signature | `founder.name`, `founder.role` |

## Steps
1. Read https://console.dev/selection-criteria and check the product against each question.
2. Draft the email (under 150 words) and `lk draft console-dev -`. Mark `drafted`.
3. With approval, the user sends it to hello@console.dev.
4. `launchkit mark console-dev submitted --note "emailed hello@console.dev"`

## Make the listing perform
- Reviews include an honest "what we don't like". Mention one real limitation yourself; it reads as credible.
- Power-user signals they look for: API and/or CLI, keyboard shortcuts, dark mode, accessibility, multi-platform.
- Make sure signup works without talking to anyone, and docs are public. Those are explicit criteria.

## Gotchas
- Sponsorship (text ads) is separate from reviews and doesn't buy a review.

## After submitting
- Watch https://console.dev/tools or the Thursday issue. If reviewed, mark `live` with the tool page URL.
