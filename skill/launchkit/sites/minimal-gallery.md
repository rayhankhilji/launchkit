---
id: minimal-gallery
name: "Minimal Gallery"
url: https://minimal.gallery/submit/
category: Design Gallery
mode: form
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "1-2 weeks"
verified: true
last_checked: 2026-10-12
---

# Minimal Gallery

A curated gallery of minimal website design, running since 2013. Accepted sites go on the gallery, its social channels and the weekly newsletter. The site warns that most submissions are rejected, so only send clean, restrained designs.

## Before you start
- The user's site needs a minimal, typographic look with lots of whitespace. Busy SaaS pages rarely get in; mark `skipped` ("not a fit") if it isn't minimal.
- Have `product.url`, `product.name`, `founder.name`, `submission.email` ready. Credits (designer, developer) are optional.
- Paid submissions are not accepted, so there's nothing to buy.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Submission type | radio: Website / Template / Tool (Domain, Job also exist) | **Website** for a product site; **Tool** only if the product is itself a tool for creatives |
| URL | URL, required | `product.url` |
| Name of your submission | 100 chars, required | `product.name` |
| Your name | 100 chars, required | `founder.name` |
| Your email | email, required | `submission.email` |
| Add credit (repeatable: Role, Name, Link) | text | Role "Founder", `founder.name`, `founder.website` or `links.twitter`; add designer/agency rows if known |
| Message (optional) | 500 chars | one sentence: `product.tagline_short` plus stack if notable |

For **Template** the form swaps in Preview URL, Purchase URL (required) and Platform (100 chars). Not used for normal launches.

## Steps
1. Open https://minimal.gallery/ and search for `product.name`. If listed, mark `live` and stop.
2. Open https://minimal.gallery/submit/ and pick **Website** (or **Tool**).
3. Fill URL, Name of your submission, Your name, Your email.
4. Click **Add credit** for each credit row you have.
5. Add the optional Message, then click **Submit**.
6. Screenshot the confirmation to `.launchkit/evidence/minimal-gallery.png`.
7. `launchkit mark minimal-gallery submitted --note "review 1-2 weeks, most rejected"`

## Make the listing perform
- Tags on the site include SAAS, Startup, Tools, AI, Product and platform tags (Framer, Webflow, Astro). Mention the build platform in Message so it gets the right platform tag.
- Credits become links on the listing. Filling them in is the main backlink value here.
- If the product is a design, font, mockup or productivity tool for creatives, the **Tool** section has far less competition than Website.

## Gotchas
- There's a hidden honeypot field; don't fill fields you can't see.
- Message is capped at 500 characters.

## After submitting
- No reply on rejection. Check the gallery after 2 weeks and mark `live` with the listing URL if it shows up. The site invites a retry with the next project, not a resubmit of the same one.
