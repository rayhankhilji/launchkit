---
id: mobbin-apps
name: "Mobbin (apps)"
url: https://mobbin.com/
category: Design Gallery
mode: form
pricing: Free
login: unknown
captcha: recaptcha
backlink_required: no
review_time: "n/a, editorial picks only"
verified: false
last_checked: 2026-10-12
---

# Mobbin (apps)

**No public submission route.** Mobbin is a paid library of screens and flows from shipped iOS, Android and web apps, curated by its own team (new content weekly). The site, its `index.md` and the help center have no submit or "suggest an app" form. Treat it as editorial-only: listing here isn't something the agent can do.

## Before you start
- Only relevant for a mature, polished app with real users. Early-stage products won't be picked.
- The only contact route is the help center form at https://help.mobbin.com/en/contact-us (Name, Email, Subject, "How can we help?", optional attachment, reCAPTCHA). It's for support, so a suggestion sent there is a pitch, not a submission.

## Field map

| Field (help center contact form) | Limit / format | Fill with |
|---|---|---|
| Name | text, required | `founder.name` |
| Email | email, required | `submission.email` |
| Subject | text, required | "App suggestion: `product.name`" |
| How can we help? | textarea, required | 3 sentences: what the app is (`product.description_short`), platforms (`product.platforms`), store or web link (`product.url`) |
| Attachment | optional file | skip |

## Steps
1. Search https://mobbin.com/ for `product.name`. If the app is already in the library, mark `live` with that URL and stop.
2. Otherwise mark `skipped` with the note "editorial only, no submission form".
3. If the user wants to try anyway, draft the contact-form message above with `lk draft mobbin-apps -` and mark `needs_human`. The form has reCAPTCHA, so the user sends it.

## Make the listing perform
- Mobbin picks apps that show clear, reusable patterns (onboarding, paywalls, checkout, settings). If pitching, name the flows that are worth studying in the app.
- Being on public app stores with screenshots helps; Mobbin documents shipped products, not concepts.

## Gotchas
- Don't create a Mobbin account for this; accounts are for browsing (free tier is limited, paid plans give full access).
- Sponsored placements on other galleries link to Mobbin; those are Mobbin's ads, not a listing path.

## After submitting
- Nothing to track. Re-check the library search occasionally if the user pitched it.
