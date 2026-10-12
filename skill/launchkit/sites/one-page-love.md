---
id: one-page-love
name: "One Page Love"
url: https://onepagelove.com/submit
category: Design Gallery
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "reviewed daily, email only if accepted"
verified: true
last_checked: 2026-10-12
---

# One Page Love

The main gallery for one-page websites since 2008, claiming 100k+ designers and developers a month. Categories include Landing Page, SaaS, Startup, App, Launching Soon and Digital Product. Free to submit, but strict about the one-page rule.

## Before you start
- Check the rule first: the site's main navigation must only link to sections on the same page. Links to Support, Privacy, Terms, Press, Changelog and even a Blog are allowed. A nav linking to separate About, Pricing or Contact pages is rejected. If the site breaks this, mark `skipped` ("not one-page").
- Sites built from a template are only accepted with big modifications.
- Need `founder.name` (first name), `submission.email`, `product.url`.

## Field map

The form is a short step-by-step flow (each step has a **Continue →** button).

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First name | text | first word of `founder.name` |
| Email address | email | `submission.email` |
| What are you submitting? | choice: Unique Inspiration / Website Template | **Unique Inspiration** (a site you designed or built) |
| Website URL | URL | `product.url` |
| Live Demo URL | URL (template only) | leave empty |
| Confirmation checkbox | required | tick only after you have checked the one-page rule |

## Steps
1. Search onepagelove.com for `product.name`. If listed, mark `live` and stop.
2. Open https://onepagelove.com/submit.
3. Enter First name, click **Continue →**. Enter Email address, click **Continue →**.
4. Choose **Unique Inspiration**, paste `product.url` into Website URL.
5. Tick "I confirm this is a one-page website..." only if the site passes the rule.
6. Click **Submit for review →**. Expect "Submission received. Thanks! We review submissions daily." Screenshot to `.launchkit/evidence/one-page-love.png`.
7. `launchkit mark one-page-love submitted --note "reviewed daily, email if accepted"`

## Make the listing perform
- For a product launch the best-fit categories are **Landing Page**, **SaaS**, **Startup** or **Launching Soon** (for a waitlist page). Pre-launch waitlist pages are a real category here, so a good coming-soon page is worth submitting early.
- Listings are also tagged by style, platform (Webflow, Framer, WordPress), tech (Tailwind, Next.js, GSAP) and sections (Pricing, FAQ, Testimonials, Waitlist). Sites with distinct sections show up on more pages.
- Accepted sites can go into the fortnightly "Love Letter" newsletter.

## Gotchas
- There's a hidden honeypot field; leave it alone.
- Sponsor and template slots are paid and separate from free submissions.

## After submitting
- You only hear back by email if accepted. Ask the user to watch `submission.email`, or re-check the site search after 2 weeks.
