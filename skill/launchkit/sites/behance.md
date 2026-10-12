---
id: behance
name: "Behance"
url: https://www.behance.net/
category: Community
mode: post
pricing: Free
login: email            # Adobe ID (email, Google, Apple, Facebook)
captcha: unknown
backlink_required: no
review_time: instant (curators pick features later)
verified: true
last_checked: 2026-10-12
---

# Behance

Adobe's creative portfolio network. Useful for a product design case study: designers and hirers browse it, and projects
rank in Google image search. Not a place for plain product promotion; it's judged as design work.

## Before you start
- Fit check: needs real design work to show (UI screens, brand, flows). If the product has no design story, mark `skipped`.
- Account: Adobe ID, free. Behance Pro is a paid upsell; skip it.
- Assets: 4-10 high-res images (`assets.screenshots`, `assets.logo_wide`, flow diagrams), a cover image at least
  808x632 px (shown at 202x158), optional video (`links.demo_video` as embed).

## Field map (Share Your Work > Project)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Content blocks (Image, Text, Photo grid, Video, Embed) | canvas | Case study order: hero shot, problem (text), 3-6 key screens with one-line captions, outcome |
| Cover image | crop, min 808x632 | Clean hero screen or logo on a solid background |
| Project title | text, required | "<product.name> - product design case study" or "<product.name> web app UI" |
| Creative fields | up to 3, required | UI/UX, Web Design, Interaction Design (pick Branding if the logo work is the focus) |
| Project tags | optional, up to 10 | From `product.tags` + "SaaS", "dashboard", "web app" |
| Tools used | optional | Figma, etc. only if the user confirms |
| Description (Co-owners, Credits, and More) | text | 2-3 sentences from `product.description_medium`; link `product.url` here |
| Co-owners / credits | optional | Designer or co-founder if they want credit |
| Copyright & license | dropdown | All rights reserved (default) |

## Steps
1. Open https://www.behance.net/. If not signed in, stop and ask the user to log in with their Adobe ID.
2. Draft the case study text, captions, title, fields and tags. Save with `launchkit draft behance -` and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: click **Share Your Work** > **Project**, add blocks,
   click **Continue**, set cover, title, creative fields and tags, then **Publish**. Projects don't auto-save; click Save often.
4. `launchkit mark behance submitted --listing-url <project url>`.

## Make the listing perform
- Curated "Best of Behance" and creative field galleries pick projects that tell a story: problem, process, result.
  Show wireframes or iterations, not just final screens.
- The cover image decides clicks in every grid. Big, simple, high contrast, no small text.
- Choose creative fields carefully; they decide which galleries show the project.

## Gotchas
- No auto-save in the editor. Large uploads can time out; upload images one block at a time.
- Don't put pricing or calls to action in the images. It reads as an ad.

## After submitting
- Add the project link to the user's portfolio and Peerlist/LinkedIn. Reply to comments from the user's account if asked.
