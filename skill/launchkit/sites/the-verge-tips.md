---
id: the-verge-tips
name: "The Verge (tips)"
url: https://www.theverge.com/contact
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "no reply unless interested"
verified: true
last_checked: 2026-10-12
---

# The Verge (tips)

Large consumer tech publication (now part of Penske Media). Covers gadgets, big tech, AI, policy, apps and reviews. Small startup launches rarely make it, but consumer products with something unusual or a review-worthy device can. Pitches go through the contact form option "I want to pitch a story" or by email to tips@theverge.com.

## Before you start
- Fit check: a consumer product (`product.platforms` includes iOS, Android, Mac, hardware) or a story with public interest. B2B SaaS without a consumer angle: mark `skipped` ("not a fit").
- The tips page (https://www.theverge.com/cs/998233/tip-the-verge) is for editorial tips and investigations; product pitches belong in the "pitch a story" form.
- No login needed for the form.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Why are you contacting us today? | select | "I want to pitch a story" (the options also include "I have an editorial tip", which is for leaks and investigations) |
| Summarize your tip in one sentence* | one sentence | headline-style: what launched, who it's for, the surprise. Based on `product.tagline` |
| Explain your tip in detail* | textarea | `copy.press_pitch` (under 150 words) with `product.url`, `links.demo_video`, `links.press_kit`; offer review access if relevant |
| Keep me anonymous | checkbox | leave unchecked |
| First and last name* | text | `founder.name` |
| Email address* | email | `founder.email` |

Field labels above are from the default tip form; the pitch option may show slightly different labels (unconfirmed).

## Steps
1. Open https://www.theverge.com/contact.
2. Select "I want to pitch a story" in the dropdown. Fill the fields as above.
3. `lk draft the-verge-tips -` and mark `drafted`. Submit only if `pitch` mode is on and the user approved.
4. Click **Submit**, screenshot to `.launchkit/evidence/the-verge-tips.png`, `lk mark the-verge-tips submitted --note "contact form pitch"`.

## Make the listing perform
- Lead with what a reader can see or try: a demo video, a review unit, a free account for the reporter.
- Pitch a specific reporter in parallel if their beat fits; emails and Signal handles are on their author pages via the staff list.
- Hardware and app launches do better with a firm embargo date and early access.

## Gotchas
- Don't use the tip line for marketing; it's monitored for investigations and gets ignored for ads.
- Submitting agrees to their community guidelines; nothing else to accept.

## After submitting
- No auto-reply. If interested, a reporter emails `founder.email`.
