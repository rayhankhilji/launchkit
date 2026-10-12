---
id: example-directory
name: Example Directory
url: https://example.com/submit
category: AI Directory
mode: form
pricing: Free
login: none            # none | email | google | github | x | unknown
captcha: unknown       # none | recaptcha | hcaptcha | turnstile | unknown
backlink_required: unknown   # yes | no | optional | unknown
review_time: unknown   # e.g. "instant", "1-3 days", "2-4 weeks"
verified: false        # true once someone has looked at the live form (put the date in last_checked)
last_checked: ""
---

# Example Directory

One or two sentences: what this site is, who reads it, and why it's worth (or not worth) the time.

## Before you start
- Which profile fields and assets must exist (e.g. `assets.logo_square` 256x256 PNG, `links.demo_video`).
- Account needs: what kind of login is needed and where the sign-up is.
- Anything to decide with the user first (launch date, paid upgrade, badge).

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` with `?ref=example` only if the form doesn't track refs itself |
| Tagline | 60 chars | `product.tagline` |
| Description | 160 chars | `product.description_short` |
| Category | dropdown | closest match to `product.categories[0]`, otherwise "Productivity" |
| Pricing | select | map `product.pricing_model`: free -> Free, freemium -> Freemium, paid -> Paid |
| Logo | PNG/JPG | `assets.logo_square` |
| Email | email | `submission.email` |

## Steps
1. Open the URL. If you're redirected to a login page, sign in with `submission.preferred_login`.
2. ...
3. Click **Submit**. Expect "Thanks, we'll review it" (or similar). Screenshot it to `.launchkit/evidence/<id>.png`.
4. `launchkit mark <id> submitted --note "<review time>"`

## Make the listing perform
- Site-specific tips: which category gets the most traffic, best day to launch, whether the first comment matters,
  what makes a listing get featured, which keywords people search on this site.

## Gotchas
- Paid upsells to skip, fields that reject long text, upload size limits, known bugs.

## After submitting
- Where to find the listing, how to check if it went live, whether to reply to comments or upvote the badge, etc.
