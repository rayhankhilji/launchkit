---
id: futurepedia
name: "Futurepedia"
url: https://www.futurepedia.io/contact
category: AI Directory
mode: form
pricing: Paid
login: none
captcha: recaptcha
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# Futurepedia

One of the biggest AI tool directories, now also an AI education and media brand. There's **no public "Submit a tool" form** any more: /submit-tool and /submit-a-tool return 404, and the homepage only links "Update a Tool" and "Contact Us". New listings appear to go through their editorial team or a paid placement arranged over the contact form. Price is not published.

## Before you start
- Decide with the user if they want to pay for placement. Futurepedia doesn't list prices, so the contact form only starts a sales talk.
- Have `founder.name`, `submission.email`, `company.country`, and `company.legal_name` (or `product.name`) ready.
- No login is needed for the contact form. It has a Google reCAPTCHA.

## Field map

Contact form at https://www.futurepedia.io/contact (HubSpot form):

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name | text, required | first word of `founder.name` |
| Last Name | text, required | rest of `founder.name` |
| Email | email, required | `submission.email` |
| Country/Region | text, required | `company.country` |
| Reason for contacting | select, required | "Advertising / Sponsorship" for a paid listing. Options: Advertising / Sponsorship, Affiliate / Partnership, Bug / Issue, Careers, Feedback, Media / PR, Other |
| Company name | text, required | `company.legal_name`, else `product.name` |
| Message | textarea, optional | 3-4 lines: `product.name`, `product.url`, `product.description_short`, "we'd like to be listed, what are the options and prices?" |

## Steps
1. Get the user's OK to contact Futurepedia about a listing. Make clear it may cost money.
2. Open https://www.futurepedia.io/contact and fill the form with the map above.
3. If a reCAPTCHA challenge appears, stop and ask the user to solve it.
4. Click the submit button. Screenshot the confirmation to `.launchkit/evidence/futurepedia.png`.
5. `launchkit mark futurepedia submitted --note "contact form, waiting on pricing reply"`

## Make the listing perform
- Their editorial guidelines say tools are tested by humans and checked for usability, privacy, and security. A clean homepage with clear pricing and a privacy policy helps.
- The site groups tools by "Best AI X" lists (Best AI Image Generators, Best AI Chatbots). Ask which list fits your main category when they reply.

## Gotchas
- Don't use the "Update a Tool" form for new tools. It asks for "Tool URL on Futurepedia" and a certification that you own an existing listing.
- Never agree to a price or pay. Hand any quote to the user.

## After submitting
- Watch `submission.email` for a reply. If listed, search futurepedia.io for `product.name`.
- To fix an existing listing later, use https://www.futurepedia.io/update-a-tool (name, email, country, tool name, Futurepedia tool URL, what to change, owner checkbox).
