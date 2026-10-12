---
id: mac-app-store-notarized-distribution
name: "Mac App Store / notarized distribution"
url: https://developer.apple.com/macos/distribution/
category: App Store / Marketplace
mode: manual
pricing: Paid
login: email
captcha: none
backlink_required: no
review_time: "notarization minutes; App Review usually 1-2 days"
verified: true
last_checked: 2026-10-12
---

# Mac App Store / notarized distribution

Two ways to ship a Mac app: list it on the Mac App Store, or sign it with a Developer ID certificate and have Apple notarize it so Gatekeeper lets users open a download from the user's own site. Both need the Apple Developer Program. Only relevant for native Mac apps.

## Before you start
- Apple Developer Program, $99 per year (same membership as iOS). Only the Account Holder can create a Developer ID certificate.
- A Mac app built with the latest Xcode, hardened runtime on, entitlements declared.
- For the Mac App Store: App Sandbox is mandatory, plus everything in the `apple-app-store` guide (metadata, privacy label, screenshots). Mac screenshots are 16:10: 1280x800, 1440x900, 2560x1600 or 2880x1800.
- For direct download: a DMG, ZIP or PKG and a page on `product.url` to host it.

## Field map (Mac App Store listing)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name / Subtitle | 30 / 30 chars | `product.name` / `product.tagline_short` |
| Category | dropdown, must match the Xcode category | closest to `product.categories[0]` |
| Promotional text | 170 chars | launch message |
| Description | 4000 chars | `product.description_long` |
| Keywords | 100 bytes | `product.tags`, comma separated |
| Support / Marketing / Privacy URL | URL | `links.docs`, `product.url`, privacy page |
| Screenshots | 1-10, 16:10 | `assets.screenshots` taken on a Mac |

## Steps
1. Manual. Don't enrol, pay, sign or upload for the user.
2. In the wrap-up, if `product.platforms` includes macOS, explain the choice:
   - Mac App Store: discovery and payments handled, but sandbox limits and 15-30% commission.
   - Developer ID + notarization: no store listing, full control, user runs `xcrun notarytool submit` then `xcrun stapler staple` (altool is no longer accepted).
3. Offer to draft listing text. For direct download, suggest a Homebrew cask and Setapp as follow-ups.
4. `launchkit mark mac-app-store-notarized-distribution needs_human --note "needs Mac build + $99/yr program"`

## Make the listing perform
- Mac App Store search weights name, subtitle and keywords the same way iOS does; fill all three without repeats.
- Apple's Mac editors run their own stories and collections. Nominate the app for featuring in App Store Connect ahead of launch.
- iPad apps on Apple silicon Macs are listed automatically; if the iPad version is poor on Mac, turn that off so it doesn't collect bad reviews.
- For notarized apps, the "listing" is the user's download page: link a signed, stapled DMG and show the Gatekeeper-friendly install steps.

## Gotchas
- Unsigned or un-notarized downloads show a scary "cannot be opened" dialog on current macOS. That kills conversion from any directory listing pointing at the download.
- Sandbox rules block many utilities (system-wide hotkeys, accessibility APIs, kernel extensions). Check fit before promising a store listing.

## After submitting
- Notarization results come back in minutes; check the log on failure. Store builds follow the normal App Store Connect review flow.
