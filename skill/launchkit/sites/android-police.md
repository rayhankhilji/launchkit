---
id: android-police
name: "Android Police"
url: https://www.androidpolice.com/contact/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless they cover it"
verified: true
last_checked: 2026-10-12
---

# Android Police

Big Android news and reviews site (Valnet group). It writes about Android apps when they are new, useful or tied to Google platform changes, and runs regular app roundups. Only relevant for products on Android.

## Before you start
- Check `product.platforms` includes Android (phone, tablet, Wear OS, Android TV, Android Auto). Otherwise mark `skipped` ("not a fit").
- Have a Google Play link, `links.press_kit`, and hosted `assets.screenshots`. Pitch by email, so links only, no attachments in the first message.

## Field map
There is no tip form. The contact page lists department emails:

| Contact | Use for | Fill with |
|---|---|---|
| editorial@androidpolice.com | "Topic ideas, feedback, corrections or suggestions". Use this for app and product pitches | subject + body below |
| pr@androidpolice.com | events and media inquiries | only for event invitations or briefings |
| partnerships@androidpolice.com | paid brand deals | skip (paid) |

| Email part | Limit / format | Fill with |
|---|---|---|
| Subject | under 80 chars, sentence case | news hook + `product.name`, e.g. "New Android app turns voice notes into to-do lists" |
| Body | under 150 words | `copy.press_pitch` adapted: what's new, why Android users care, price from `product.pricing_details`, Play Store link, `links.press_kit`, `founder.name`, `founder.email` |

## Steps
1. Open https://www.androidpolice.com/contact/ and confirm the editorial address is still listed.
2. Write the email and save with `launchkit draft android-police -` (include To, Subject, Body). Mark `drafted`.
3. Never send from the user's mailbox without explicit approval. If approved and the agent has mail access, send it and `launchkit mark android-police submitted --note "emailed editorial@"`.

## Make the listing perform
- Lead with an Android-specific angle: Material You theming, home screen widgets, Wear OS tile, Android Auto support, works without Google Play Services, open source on F-Droid (if `product.open_source`).
- Free or freemium apps without heavy ads get a better reception with this audience. Be upfront about ads and in-app purchases.
- Offer a promo code for paid tiers so the writer can test it.
- Find a writer who covered a similar app (search androidpolice.com) and mention that article in one line. Personal relevance beats the generic inbox.

## Gotchas
- The site also lists "Have a News Tip?" in the footer, which links back to the same contact page.
- Award badges and article licensing go through techpartnerships@valnetinc.com and cost money. Not needed.

## After submitting
- No auto-reply. Search androidpolice.com for `product.name` after a week. Don't follow up more than once, and only with new information.
