---
id: macstories
name: "MacStories"
url: https://www.macstories.net/about/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless they review it"
verified: true
last_checked: 2026-10-12
---

# MacStories

Independent Apple site run by Federico Viticci and John Voorhees, known for long, detailed app reviews, iPad and iOS productivity, and Shortcuts automation. Also runs the AppStories podcast and Club MacStories newsletters. Only for Apple-platform apps.

## Before you start
- Gate: `product.platforms` includes iOS, iPadOS, macOS, watchOS or visionOS. Otherwise mark `skipped` ("not a fit").
- There is no contact form. The About page lists team email addresses. Main ones:
  - Federico Viticci, Editor-in-Chief: viticci@macstories.net
  - John Voorhees, Managing Editor: voorhees@macstories.net
- Prepare a TestFlight link or promo codes, `links.press_kit`, and 3-5 hosted `assets.screenshots`.

## Field map

| Email part | Limit / format | Fill with |
|---|---|---|
| To | one editor | John Voorhees for most app pitches; Federico for iPad, automation or Shortcuts-heavy apps |
| Subject | under 80 chars | app name + what is new, e.g. "Acme 2.0 for iPad: Shortcuts actions and Stage Manager support" |
| Body | under 200 words | what the app does, the Apple-specific features (Shortcuts actions, widgets, App Intents, Apple Pencil, Stage Manager, menu bar, keyboard shortcuts), price from `product.pricing_details`, App Store link, TestFlight or promo code, `links.press_kit`, `founder.name` |

## Steps
1. Open https://www.macstories.net/about/ and confirm the addresses are current.
2. Draft the email, `launchkit draft macstories -`, mark `drafted`.
3. Send only with explicit approval. Mark `submitted` after the user confirms.

## Make the listing perform
- Pitch 1-2 weeks before release with a TestFlight build. Their reviews come out on launch day when they have time with the app.
- List every Shortcuts action and automation hook. This audience cares more about that than about design claims.
- Native apps that use new OS features at launch (each September) get the most attention. Mention which OS version you target.
- Short and factual. Long marketing pitches don't fit a site that writes 3,000-word reviews on its own terms.

## Gotchas
- One email per release. Don't email both editors the same pitch.
- Club MacStories is a paid membership for readers, not a promotion channel.
- Sponsorship slots exist for the site and podcasts; they are paid. Skip unless budget allows.

## After submitting
- Watch macstories.net and the AppStories podcast around launch day. If reviewed, quote it on the App Store page and site.
