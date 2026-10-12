---
id: r-iosapps
name: "r/iosapps"
url: https://www.reddit.com/r/iosapps/submit
category: Reddit
mode: post
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: instant (mods remove posts that miss the format)
verified: true
last_checked: "2026-10-12"
---

# r/iosapps

127k iPhone and iPad users looking for apps. Very good for iOS launches, but tightly moderated: developers can only post in the main feed if they pass a Trust or Transparency check. Everyone else promotes in the monthly **App Shelf** megathread. Only relevant if `product.platforms` includes iOS.

## Before you start
- The account needs **10 karma earned in r/iosapps** (comment there first).
- One promotion per developer per 30 days, counted from the last app post even if it was removed (Rule 3).
- Decide the path with the user:
  - **Trust (main feed):** the app has 20+ App Store ratings, or the developer has a GitHub repo with 100+ stars, or a mod-granted developer flair.
  - **Transparency (main feed):** the post includes the founder's real name and contact (company page, portfolio or LinkedIn) **and** a website with a Privacy Policy and Terms of Service, linked in the post.
  - **Otherwise:** a comment in the current "[Megathread] The App Shelf" post.
- Generative-AI or AI-wrapper apps are not allowed (Rule 6). Send those to r/GenAiApps instead and mark this one `skipped`.
- Links must be App Store or TestFlight only. No shorteners, affiliate or referral links.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Post type tab | Images & Video or Link | Images & Video with `assets.screenshots`, or Link to the App Store URL |
| Title | 300 chars | `I built <name> because <reason>` or `<name>: <what it does>`. Prefix `[OS]` if `product.open_source` |
| Body (ABC format, required) | Markdown | **A**nswer: the problem it solves. **B**etter: name 1-2 competitors from `product.competitors_alternatives` and what you do better. **C**ost: Free / Freemium / Subscription with amount / Lifetime with amount, IAPs, App Store link |
| Transparency block (Tier 2 only) | Markdown | `founder.name`, `founder.linkedin` or `founder.website`, links to privacy policy and terms |
| Flair (required, pick the highest that applies) | Vibe Coded > Lifetime > Subscription > Freemium > Free | map `product.pricing_model`; Free only if nothing is paywalled; Vibe Coded if mostly AI-generated code |

## Steps
1. Open https://www.reddit.com/r/iosapps/ and read Rule 1 and the pinned App Shelf megathread for this month.
2. Check karma and the 30-day limit. Pick Trust, Transparency or megathread with the user.
3. Draft the ABC post or megathread comment. Put any promo code inside the body, never "comment for a code".
4. `launchkit draft r-iosapps -` with path, title, body and flair. `launchkit mark r-iosapps drafted`.
5. Only with posting allowed and user approval: post, screenshot to `.launchkit/evidence/r-iosapps.png`, `launchkit mark r-iosapps submitted --listing-url <url>`.

## Make the listing perform
- Lifetime-priced apps with honest "I wanted more from X so I built Y" titles got the most comments (PerfectCalc, 263 comments).
- A short giveaway of lifetime licences, explained in the body, pulls engagement and is allowed.
- Post a screenshot set, not a landing page. Reply to every comment for the first day.

## Gotchas
- Missing flair, missing price amounts or missing ABC structure is an automatic removal, and it still uses up the 30-day slot.
- Verify the account email first. Unverified accounts whose first comment has a link are often auto-removed.
- Non-promo posts can use the new **Discussion** flair (karma rule still applies).

## After submitting
- Disclose "I'm the developer" in every comment you leave about the app.
