---
id: betakit
name: "BetaKit"
url: https://betakit.com/contact-us/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless they pick it up"
verified: true
last_checked: 2026-10-12
---

# BetaKit

Canada's main tech and startup news site (funding, acquisitions, launches, ecosystem). It covers companies of any size across Canada but says it prioritizes companies that have found traction.

## Before you start
- Gate: `company.country` should be Canada (or a clear Canadian founding team). Otherwise mark `skipped` ("Canada-only").
- Their pitch page asks for: the key details of the news, why it matters to the company and to BetaKit's audience, media kit or license-free high-quality photos, and contact info. Make sure `links.press_kit` has a founder photo and product shots.
- Anything sent through the form is on the record and may be published.

## Field map
The "Pitch your story to BetaKit" button opens a Google Form titled "BetaKit Contact".

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your Name | short text, required | `founder.name` |
| Your Email | short text, required | `founder.email` |
| Message | paragraph, required | pitch below |

Message structure (under 200 words): one sentence of news, two on what the product does and for whom, one line of traction (users, revenue or funding from the profile only), why it matters to Canadian tech, then `product.url`, `links.press_kit`, and an embargo request if needed.

## Steps
1. Open https://betakit.com/contact-us/ and read the pitch guidance.
2. Draft the message and `launchkit draft betakit -`; mark `drafted`.
3. With `pitch` mode on and user approval: click **PITCH YOUR STORY TO BETAKIT**, fill the three fields in the Google Form, click **Submit**. Screenshot the confirmation to `.launchkit/evidence/betakit.png`.
4. `launchkit mark betakit submitted --note "google form"`.

## Make the listing perform
- Send it before the announcement. BetaKit says advance notice gives them more time and makes coverage more likely.
- They accept embargoes, but only if BetaKit agrees before you share the details. Write "Can I share this under embargo until <date>?" and hold the details until they say yes.
- Funding rounds, acquisitions and named Canadian customers are the strongest hooks. A plain product launch needs a traction number to compete.
- Name the city (Toronto, Montreal, Vancouver, Waterloo and so on). They organize coverage by region.

## Gotchas
- https://betakit.com/tips/ is a separate form for investigative tips, not company pitches. Don't use it for a launch.
- The newsletter sign-up box on the same page is not the pitch form.

## After submitting
- Check betakit.com search for `product.name` around the announcement date. Reply quickly if a reporter emails, they work to tight deadlines.
