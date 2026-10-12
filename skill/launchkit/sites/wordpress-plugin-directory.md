---
id: wordpress-plugin-directory
name: "WordPress Plugin Directory"
url: https://wordpress.org/plugins/developers/add/
category: App Store / Marketplace
mode: manual
pricing: Free
login: email           # WordPress.org account
captcha: unknown
backlink_required: no
review_time: "about 5 business days to start review; varies"
verified: true
last_checked: 2026-10-12
---

# WordPress Plugin Directory

The official plugin directory on WordPress.org, searchable from every WordPress dashboard. Worth it if the product has a WordPress plugin (embed widget, SaaS connector, form, SEO). SaaS-backed plugins are allowed.

## Before you start
- Artifact: a zipped plugin with a main PHP file (header `Plugin Name:`) and `readme.txt`. Code must be GPL-compatible (GPLv2 or later recommended), human readable, escape output, sanitize input, and use nonces.
- Rules: no trialware (locked features or expiring), no tracking without consent, no front-end credit links without opt-in, no remote executable code.
- Account: WordPress.org account with 2FA. Free.
- Assets (after approval, in SVN `/assets`): `icon-256x256.png` (and 128x128), `banner-772x250.png` and `banner-1544x500.png`, `screenshot-1.png` etc. (lowercase, under 10 MB).

## Field map (`readme.txt` and upload page)

| Field | Limit / format | Fill with |
|---|---|---|
| Plugin zip | upload | the user's plugin |
| === Plugin Name === | text; sets the slug | `product.name` (avoid trademarks like "WordPress", "WP" at start) |
| Contributors | WordPress.org usernames | ask the user |
| Tags | up to 5 (more are ignored) | `product.tags` |
| Requires at least / Tested up to / Requires PHP | versions | from the plugin |
| Stable tag | version | current release |
| License | GPLv2 or later | GPL text and URI |
| Short description | 150 chars, no markup | `product.description_short` |
| == Description == | Markdown-like | `product.description_long` and features list; disclose the external service and link its terms and privacy |
| == Installation == / == FAQ == | text | setup steps, `copy.faq` |
| == Screenshots == | captions | one line per `assets.screenshots` |

## Steps
1. Manual mode. Don't upload. Suggest only if a WordPress plugin exists.
2. If the user wants help: draft `readme.txt` and check it with the readme validator on WordPress.org.
3. They sign in, open the add page, accept the guidelines checkboxes and upload the zip. They can change the slug once before review starts.
4. They reply to the review email from plugins@wordpress.org. After approval they commit to SVN `trunk`, tag the release and add `/assets`.
5. `launchkit mark wordpress-plugin-directory needs_human --note "plugin uploaded, waiting on review email"`

## Make the listing perform
- Directory search leans on the plugin name, short description and tags. Put the main search phrase ("contact form", "AI chatbot") in the name after the brand.
- Active installs, ratings and support-forum response rate drive ranking. Answer forum threads fast.
- Add banner and icon on day one; listings without them look abandoned.
- Keep "Tested up to" current after each WordPress release or the plugin shows a warning.

## Gotchas
- The slug can't be changed after approval.
- Most rejections are unescaped output, unsanitized input and missing nonces.

## After submitting
- Listing lives at wordpress.org/plugins/<slug>.
