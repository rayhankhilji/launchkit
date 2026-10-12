---
id: codrops
name: "Codrops"
url: https://tympanus.net/codrops/contact/
category: Dev / Open Source
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "no guaranteed reply"
verified: true
last_checked: 2026-10-12
---

# Codrops

A long-running front-end and creative web design publication (tutorials, case studies, the Webzibition website
gallery, the Creative Hub of demos). It doesn't list products. It features design-led websites, open source demos
and stories behind them. Worth it only if the product's site or code is visually notable.

## Before you start
- Fit: one of these must be true: the website itself is design-led (motion, WebGL, strong typography), there's an
  open source demo/effect worth showing, or there's a case-study story about how the site was built. Otherwise
  mark `skipped` ("not a fit, Codrops covers creative web work, not products").
- Have ready: `product.url`, `product.repo_url` (for demos), 1-2 screenshots or `assets.demo_gif`.

## Field map (contact form)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Email | email | `founder.email` |
| Topic | select: "I would like to contribute", "I want to submit a website", "I want to submit an open-source demo", "Partnerships", "Other" | website gallery -> "I want to submit a website"; code demo -> "open-source demo"; tutorial/case-study idea -> "I would like to contribute" |
| Your message | free text | 3-5 sentences: what's visually or technically interesting, the stack (e.g. GSAP, Three.js, Astro), links to live site and repo |

## Steps
1. Open https://tympanus.net/codrops/contact/ (plain curl gets 403; use the browser).
2. Choose the Topic per the map and write a short, specific message. Draft first: `lk draft codrops -`.
3. With approval, click **Submit** and screenshot to `.launchkit/evidence/codrops.png`.
4. `launchkit mark codrops submitted --note "no reply guaranteed"`

## Make the listing perform
- Talk about craft, not business: the interaction, the animation technique, performance tricks.
- For a case study pitch, offer to write it (they publish contributor articles and "Inside X's portfolio" pieces).
- Open source demos with a clean repo and live preview are the easiest yes for the Creative Hub.

## Gotchas
- The form warns: sending something "doesn't guarantee it'll be featured" and they can't reply to everyone.
- Advertising is a separate page (https://tympanus.net/codrops/advertise/), paid, out of scope at budget 0.

## After submitting
- Nothing to check. If they get back, the user handles the conversation.
