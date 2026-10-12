---
id: firefox-add-ons
name: "Firefox Add-ons"
url: https://addons.mozilla.org/developers/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "automated signing in minutes; human review may follow later"
verified: true
last_checked: 2026-10-12
---

# Firefox Add-ons

Mozilla's add-on store (AMO). Free to publish. Worth doing if the user already has a Chrome extension, since most WebExtensions port with small manifest changes and AMO has far less competition per category.

## Before you start
- A WebExtension ZIP/XPI. If the code is minified, bundled or obfuscated, a source code package plus build instructions is required.
- A Mozilla account (register from the AMO header, email + password, 2FA offered). No developer fee.
- Screenshots at 1280x800 (or any 1.6:1), a 128x128 icon in the package.
- Privacy policy text if any data leaves the device; it is pasted into the listing, not just linked.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Distribution | On this site / On your own | On this site (listed) |
| Platform | Firefox, Firefox for Android | from `product.platforms` and testing |
| File upload | ZIP/XPI | built extension |
| Source code | yes/no + upload | yes if bundled; source ZIP + README build steps |
| Name | text | `product.name` |
| Add-on URL slug | text | lowercase `product.name` |
| Summary | 250 chars | `product.description_short` (shorter is better) |
| Description | long, limited Markdown | `product.description_long` + `product.key_features` |
| Categories | up to 2 per platform | closest to `product.categories`; pick one if one fits |
| Experimental / requires payment | checkboxes | tick "requires payment" if `product.pricing_model` is paid or freemium with core features paywalled |
| Support email / website | email, URL | `submission.email`, `links.docs` or `product.url` |
| License | dropdown | the repo licence if `product.open_source`, else "All rights reserved" |
| Privacy policy | text | user's policy text |
| Notes for reviewers | text | test account, how to trigger the main feature |
| Screenshots | 1280x800 | `assets.screenshots` |

## Steps
1. Manual. Don't create the Mozilla account or upload for the user.
2. In the wrap-up, suggest it whenever the product has a browser extension. Offer to draft the summary, description and reviewer notes.
3. `launchkit mark firefox-add-ons needs_human --note "needs built WebExtension"`

## Make the listing perform
- Summary is shown in search and cards. AMO's own advice is to keep it as short as possible and lead with the benefit.
- Reorder screenshots so they tell the main workflow in order.
- Reply to reviews; ask for a rating only after real use, never prefill stars or gate features.
- The "Recommended" badge is the big visibility win. Nominate by emailing amo-featured@mozilla.org with the listing link and a short reason. Curators want broad international relevance, active maintenance and excellent function.
- Localise the listing; non-English Firefox users are a large share of installs.

## Gotchas
- Listed add-ons can be published after automated checks and pulled later if human review finds problems. Keep the source package exact.
- Remote code and unclear data collection are the usual rejection reasons.

## After submitting
- The listing appears at `addons.mozilla.org/firefox/addon/<slug>/`. Watch the Mozilla account email for review notices.
