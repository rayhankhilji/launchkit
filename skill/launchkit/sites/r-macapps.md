---
id: r-macapps
name: "r/macapps"
url: https://www.reddit.com/r/macapps/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant (posts need "rules read" approval first; removals after the fact)
verified: true
last_checked: "2026-10-12"
---

# r/macapps

256k Mac users. Great for Mac app launches, but it has the strictest app-promo process in this list. You must mark the rules as read to get post approval, have local karma, and pass a Trust or Transparency check, or else promote in the monthly **App Pile** megathread. Only relevant if `product.platforms` includes macOS.

## Before you start
- **Rule 9 post approval:** on https://www.reddit.com/r/macapps/ follow the "How to gain Post Approval" steps (mark the rules as read). Skipping this auto-removes posts and starts a 30-day cooldown.
- The account needs **10 karma earned in r/macapps** and a verified email.
- One app post per developer per 30 days, counted even if the post was removed (Rule 3).
- Decide the path with the user:
  - **Trust (main feed):** the app is in the Mac App Store (notarization alone doesn't count), or the repo is 1yr+ old with 100+ stars, or the dev has a mod-granted flair.
  - **Transparency (main feed):** the post shows a real identity with LinkedIn and contact details **and** a website with Privacy Policy and Terms of Service.
  - **Otherwise, or if it's a dictation / speech-to-text app:** a comment in "[Megathread] The App Pile - <Month>".
- Links must be the official source (Mac App Store or the publisher's site). No direct .zip/.dmg links, shorteners, redirects, affiliate links.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Images & Video / Link / Text | Images & Video with `assets.screenshots` or `links.demo_video` |
| Title | 300 chars | `<name>, <what it does>` in plain words. Prefix `[OS]` if `product.open_source` |
| Body (PCP format, required) | Markdown, shorter is better | **Problem:** what it solves. **Comparison:** name 1-2 competitors from `product.competitors_alternatives`, what you do better (and one thing they do better). **Pricing:** amounts for every tier + link to `product.url` |
| Transparency block (Tier 2) | Markdown | `founder.name`, `founder.linkedin`, contact, privacy and terms links |
| Flair (required) | Lifetime > Subscription > Free | pick the highest that applies from `product.pricing_details`; Free only if nothing is limited |

## Steps
1. Open the sub, read all rules (especially 1, 3, 8), do the "rules read" approval step.
2. Check karma and the 30-day limit, pick the path.
3. Draft the PCP post or megathread comment. Include a screenshot or video (required for the megathread's monthly top picks).
4. `launchkit draft r-macapps -` with path, title, body, flair. `launchkit mark r-macapps drafted`.
5. Only with posting allowed and user approval: post, screenshot to `.launchkit/evidence/r-macapps.png`, `launchkit mark r-macapps submitted --listing-url <url>`.

## Make the listing perform
- Lifetime pricing and a free tier get the warmest reception. Widgetscape ("I wanted Rainmeter on my Mac, so we built...") and Wisp got 25-70 upvotes.
- An honest comparison that admits where a competitor is better builds trust with this crowd.
- The megathread's top picks get featured next month, so a good screenshot and clear one-line pitch matter there.

## Gotchas
- The mods say em dashes and other AI-style formatting trigger Reddit auto-removal here. Follow skill/human-writing strictly.
- If removed, don't repost. Edit and ask the mods to restore, or you get a strike.

## After submitting
- Disclose "I'm the developer" in every comment about the app. Answer feature questions.
