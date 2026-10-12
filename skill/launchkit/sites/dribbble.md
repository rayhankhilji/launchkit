---
id: dribbble
name: "Dribbble"
url: https://dribbble.com/uploads/new
category: Community
mode: post
pricing: Free
login: email            # email, Google or Apple at dribbble.com/session/new
captcha: unknown
backlink_required: no
review_time: "human review; usually live right away, email only if rejected"
verified: true
last_checked: 2026-10-12
---

# Dribbble

Design portfolio network. A "shot" of your product's UI can bring designers, some product-minded traffic and a dofollow-free
profile link, but Dribbble bans outright product ads. Post it as design work: the interface, the process, the decisions.

## Before you start
- Fit check: only worth it if the product has polished UI. If the screenshots are plain, mark `skipped` ("not a fit").
- Account: new sign-ups are **Limited accounts**; their shots stay private (visible only on the profile) until Dribbble
  approves a free Designer account via the "Limited Account" tag > Learn More > Apply, or the user gets an invite from a designer.
  Ask whether the user (or their designer) already has a Designer account.
- Files (help center): images png/jpg/gif up to 10 MB, video mov/mp4 up to 20 MB, min 1600 px wide recommended, any ratio.
  Use clean full-res `assets.screenshots`, no device frames with watermarks.

## Field map (uploader at /uploads/new)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First media block | image/GIF/video | Strongest UI screenshot or a short screen recording (`assets.demo_gif` if under 20 MB, no sound) |
| More blocks (Image, Text, Video, Gallery) | blocks | 2-4 more screens, plus a Text block on the design problem and decisions |
| Title | 15-20+ chars, no caps | Descriptive: "<product.name> - <type of screen> for <audience>", e.g. "Invoice dashboard for freelancers" |
| Tags | free text | 5-10 relevant tags from `product.tags` + "saas", "dashboard", "web app", "product design". No stuffing |
| Description | text, basic formatting | 2-3 sentences on the design work from `product.description_short`. No contact details, no "sign up now" |
| Thumbnail | crop/select | The cleanest screen |
| Final Touches | modal after Continue | Confirm thumbnail, tags; "Low profile" off |

## Steps
1. Open https://dribbble.com/uploads/new. If sent to /session/new, stop and ask the user to log in.
2. Draft title, tags, description and the shot list; save with `launchkit draft dribbble -` and mark `drafted`.
3. Only if `allow_social_posting` is true and the user approved: drag in the first image, add blocks with the pink **+**,
   click **Continue**, set thumbnail, title, tags, then **Publish now**.
4. `launchkit mark dribbble submitted --listing-url <shot url>`. If the account is Limited, note "private until Designer account approved".

## Make the listing perform
- Shots land in feed categories by tags: use Product Design, Web Design or Mobile terms. Wrong or stuffed tags put it in no category.
- Dribbble search ranks shots likely to get engagement: show process (before/after, flows), not a marketing banner.
- Post 3-4 separate shots over a couple of weeks rather than one dump; each can reach Popular/New & Noteworthy.
- Weekday mornings US time get the most early likes, which drive Popular.

## Gotchas
- Removed on sight: ads, "download/buy" text, contact details in the shot, affiliate links, 100% AI images, promotional videos.
- Product teams sharing their own work is allowed as long as the creative work is the point, not the promo.
- Disclose AI assistance in the description if any was used.

## After submitting
- Add `product.url` to the Dribbble profile website field (contact details belong on the profile, not in shots).
