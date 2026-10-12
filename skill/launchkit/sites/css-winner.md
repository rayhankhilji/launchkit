---
id: css-winner
name: "CSS Winner"
url: https://www.csswinner.com/submitsite
category: Design Gallery
mode: form
pricing: Paid
login: none            # 3-step form, no account seen before payment
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# CSS Winner

A web design award gallery that scores sites on design, functionality, usability and content and picks Star, Site of the Day and Site of the Month. Each entry also creates a designer or agency profile. Moderate traffic, mostly agencies and designers.

## Before you start
- Paid only: $15 (USD) per submission, refunded if rejected. With `launch_settings.budget_usd` below 15, mark `needs_human` and stop.
- Screenshot: 1100x770 px, JPG only. Crop the hero from `assets.screenshots[0]`.
- The form has three steps: 1 Website Info, 2 Designer Profile, 3 Payment.

## Field map
Step 1, seen live:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Website Screenshot | 1100x770 JPG, required | prepared hero JPG |
| Website Title | 35 chars | `product.name` |
| Website URL | URL (prefilled "http://", replace it) | `product.url` |
| Category | select | Technology, Apps, Internet, Business-Corporate, Products or Services. SaaS -> Technology; mobile app -> Mobile-Tablet-Apps |
| Tags | up to 5 | true ones from: Clean, Minimalist, Responsive, Typography, Animated, Flat, Full Screen, One Page, Parallax, Video, SVG, Colorful, Illustration-style (Artistic) |
| Description | 170 chars | `product.description_short`, trimmed to 170 |
| Designer / Agency Name | 35 chars | `company.legal_name` or `founder.name` (whoever designed it) |
| Designer / Agency URL | URL | `founder.website` or `product.url` |
| Country | select | `company.country` |
| Email | email | `submission.email` |
| Collaborator 1-3 (optional) | name 35 chars + URL | only if the user names collaborators; remove empty blocks |
| Step 2 Designer Profile | unconfirmed | likely `founder.bio_short`, `founder.avatar`, socials |
| Step 3 Payment | $15 | user only |

## Steps
1. Search csswinner.com (Website radio) for `product.name`. If listed, mark `live` and stop.
2. Get approval for $15.
3. Open https://www.csswinner.com/submitsite, fill step 1. Click **Remove** on unused collaborator blocks so their required fields don't block you. Click **Next Step**.
4. Fill the designer profile, then hand payment to the user.
5. Screenshot the confirmation to `.launchkit/evidence/css-winner.png`, then `launchkit mark css-winner submitted --note "paid $15, refunded if rejected"`.

## Make the listing perform
- Scores are shown per category (Design, Functionality, Usability, Content). A site with real content and clear navigation scores better than a pure visual demo.
- The profile page is a backlink to the designer URL. Point it at the company site.
- Pick "Technology" or "Apps" for SaaS; those categories have fewer agency portfolios to compete with.

## Gotchas
- URL fields are prefilled with "http://". Clear them before pasting or you get "http://https://".
- Collaborator blocks are required once shown.

## After submitting
- Check Nominees, then Awards. If it wins, they offer a certificate and badge; adding it is optional.
