---
id: tiny-startups
name: "Tiny Startups"
url: https://www.tinystartups.com/submit
category: Newsletter
mode: pitch
pricing: Free/Paid
login: google            # Google sign-in seen on the site; email account also offered
captcha: unknown
backlink_required: unknown   # listing records have a badgeRequired flag; not shown on the public form
review_time: "hand-approved; free launches join a weekly Monday-Sunday batch"
verified: true
last_checked: 2026-10-12
---

# Tiny Startups

A hand-curated launch platform and directory for indie makers, plus a free Sunday newsletter (25k+ founders) that picks about five startups from what launched that week. The newsletter has no pitch inbox: the only way in is to launch on the site. Worth doing for any indie or bootstrapped product.

## Before you start
- `product.url` must be live; step 1 reads the name, tagline and logo off your site, so check `assets.logo_square` is the site favicon/logo.
- `founder.twitter` (X handle) is used to put the founder's face on the listing.
- Ask the user before any paid upgrade. Free launch is the default at budget 0.
- If the user has Stripe and wants a "verified revenue" badge, that needs a restricted Stripe key. Never paste keys without the user doing it themselves.

## Field map

The form is a wizard: Your URL, Your startup, Revenue, (Traffic), About you, Upgrades.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your startup's URL | URL, max 500 | `product.url` |
| Name | max 60 chars, a few words only (they reject taglines here) | `product.name` |
| Tagline | 10-200 chars | `product.tagline` |
| Description | min ~40 chars | `product.description_short`, or `description_medium` if it fits |
| Category | single choice | map `product.categories[0]` to one of: AI & ML, Analytics, Design, Developer Tools, DevOps, E-commerce, Education, Finance, Gaming, Health, HR Tech, Marketing, Productivity, Social, Other |
| Pricing | Free / Freemium / Paid | `product.pricing_model` |
| Logo / screenshot | read from site, editable | `assets.logo_square`, `assets.screenshots[0]` |
| Revenue | optional, Stripe connect or skip | skip unless the user connects it themselves |
| Where are you based? | country select | `company.country` |
| How did you hear about us? | choice | "Other" or "Search" |
| Founder on X | handle, max 80 | `founder.twitter` without the @ |
| Upgrades | checkboxes | leave all unchecked |

## Steps
1. Open https://www.tinystartups.com/submit. Paste `product.url` and click **Continue**.
2. Check what it read off the site. Fix the name (product name only) and set the tagline and description from the profile.
3. Pick the category and pricing model per the map. Click **Continue**.
4. Revenue: choose the skip / "submit for free" option unless the user wants to verify revenue.
5. About you: country, how you heard, X handle. Sign in with Google (`submission.preferred_login`) if prompted.
6. Upgrades: leave unchecked and continue on the free route. Screenshot the confirmation to `.launchkit/evidence/tiny-startups.png`.
7. `launchkit mark tiny-startups submitted --note "free launch, weekly batch"`

## Make the listing perform
- Ranking is upvotes only, Monday to Sunday. The top two each week get a permanent Product of the Week badge, and the newsletter picks come from that week's launches.
- Launch early in a week you can share it (Monday batch), and ask your own audience to upvote that week, not before.
- The tagline should say what it does for a founder; the readers are indie makers.
- Connected revenue (shown as "verified") gets a separate leaderboard; worth it only if the numbers are real and the user is comfortable sharing them.

## Gotchas
- Paid upsells (prices seen in GBP): instant listing + do-follow backlink £69, newsletter feature £149, Top Picks 30 days £99, SEO review £99, launch video £99, partner backlinks £199, press release £899. The about page also mentions "Skip the queue" for £29. Skip all at budget 0.
- Free listings get a nofollow link; do-follow is a paid upgrade.
- "Submit a Deal" and "List a Tool" (£69 each) are separate paid products, not the free launch.

## After submitting
- Watch for the approval email, then find the listing at tinystartups.com/startup/<slug>.
- Share the listing link during launch week. Newsletter goes out Sundays.
