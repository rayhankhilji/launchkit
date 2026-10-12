---
id: nocode-tech
name: "NoCode.Tech"
url: https://www.nocode.tech/contact
category: No-Code
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# NoCode.Tech

**No longer accepts tool submissions.** The site is live (editorial no-code news, tutorials and a curated tools directory of about 300 tools, run alongside Stacker), but there's no submit page. /submit-a-tool and /advertise return 404, and the tools page has no "add a tool" link. The directory says it only lists tools "which we rate". The only way in is the contact form, as a pitch.

## Before you start
- Treat this as a pitch, not a listing. Only worth it if the product is a no-code or AI app builder, internal tool builder or automation tool.
- Needs `copy.press_pitch` adapted to a short message.

## Field map

Contact form at https://www.nocode.tech/contact:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Email | email | `submission.email` |
| Message | text | 3-4 sentences: what `product.name` does, who builds with it, one concrete use case, `product.url`. Ask if they'd consider it for the tools directory or a review |

## Steps
1. Search the site for `product.name`. If there's a page at nocode.tech/tools/<slug>, mark `live` with that URL.
2. Otherwise draft the message and save it with `lk draft nocode-tech -`. Mark `drafted`.
3. Send through the form only if `pitch` mode is on and the user approved the draft. Then `launchkit mark nocode-tech submitted --note "contact form pitch"`.

## Make the listing perform
- Their tool categories are App builders, Web app builders, Internal tools, Portfolio creators and similar. Say which one the product fits.
- They publish opinion and explainer pieces on news (funding, shutdowns, AI platform shifts). A newsworthy angle has a better chance than a plain "please list us".

## Gotchas
- The homepage rate-limits plain HTTP clients (429). Use the browser.
- Don't send follow-ups more than once.

## After submitting
- No confirmation flow; watch the tools directory and newsletter.
