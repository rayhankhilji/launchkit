---
id: maxibestof
name: "Maxibestof"
url: https://maxibestof.one/submit
category: Design Gallery
mode: form
pricing: Free
login: google
captcha: none
backlink_required: no
review_time: "unknown, reviewed by hand"
verified: true
last_checked: 2026-10-12
---

# Maxibestof

A daily feed of website designs, fonts and sections run by Bertrand Bruandet. Selected sites go on the site and into the weekly newsletter. Submitting is free and every entry is reviewed by hand. Good for a well-designed marketing site, not for plain app screens.

## Before you start
- Only submit if the user's site is design-led. Otherwise mark `skipped` ("not a fit").
- Login is required and the only option seen is **Sign in with Google**. Use `submission.preferred_login`; if it isn't Google and account creation isn't allowed, mark `needs_human`.
- Optional: a Maxibestof profile (studio or person) can be linked to the submission. Ask the user once if they want one; skip by default.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website url | URL, placeholder `https://...` | `product.url` |
| Comments (anything else you'd like to add) | free text | 2-3 sentences: `product.tagline`, who designed/built it (`founder.name`, agency if known), stack if notable |
| Profiles (optional) | pick or "Create profile" | leave empty unless the user wants a profile |

## Steps
1. Search the site for `product.name` first. If it's already listed, `launchkit mark maxibestof live --listing-url <url>` and stop.
2. Open https://maxibestof.one/submit. The page says "You need to be logged in to submit a website". Click **Sign in** and continue with Google.
3. Back on the submit page, paste `product.url` into **Website url**.
4. Fill **Comments** as in the field map. Keep it short and factual.
5. Leave **Profiles** empty unless the user asked for one.
6. Click **Submit**. Screenshot the confirmation to `.launchkit/evidence/maxibestof.png`.
7. `launchkit mark maxibestof submitted --note "manual review, newsletter if selected"`

## Make the listing perform
- The site is browsed by section type (hero, feature, pricing, FAQ, footer) and by font. Mention the typefaces used in Comments; font pages are one of its main entry points.
- Credit the designer or studio in Comments. Linked profiles get their own page, which helps the listing get found.
- Submit once. The site says there's no need to submit multiple times.

## Gotchas
- Header buttons for "Go Pro" and sponsor slots are paid and unrelated to listing. Skip them.
- Don't submit staging or password-protected URLs.

## After submitting
- If selected, the site appears in the feed and the weekly newsletter. Check the site search for `product.name` after 2-3 weeks and mark `live` if found.
