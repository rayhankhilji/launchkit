---
id: startups-magazine-uk
name: "Startups Magazine (UK)"
url: https://startupsmagazine.co.uk/contact
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: recaptcha
backlink_required: no
review_time: "no stated reply time"
verified: true
last_checked: 2026-10-12
---

# Startups Magazine (UK)

UK print and digital magazine for founders (49,000 digital subscribers per its Partner Perks page). It runs funding news ("X raises £500K"), founder profiles, features and the Cereal Entrepreneur podcast. Good fit for UK startups with a funding round or a founder story. No public editorial email or pitch page was found; the only form is on the contact page and is labelled for advertising and partnership enquiries.

## Before you start
- Best fit: `company.country` = UK. Non-UK startups rarely appear unless they are expanding into the UK.
- A hook: funding round (`company.funding_raised`), a founder story, or an expert opinion the founder can write.
- No account needed for the contact form. reCAPTCHA is present on the site; stop and mark `needs_human` if a challenge appears.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Your name | text | `founder.name` |
| Your email | email | `submission.email` |
| Company | text | `product.name` |
| Subject | text | "Editorial: " + one-line news |
| Tell us about your enquiry | select: Advertising / Marketing Enquiry, Partnership Enquiry | "Partnership Enquiry" (there is no editorial option; say in the message it's an editorial pitch) |
| Your message (optional) | textarea | `copy.press_pitch` tailored to UK founders, under 150 words, with `product.url` and `links.press_kit` |

## Steps
1. Open https://startupsmagazine.co.uk/contact.
2. Fill the form as above. Make the first line of the message "Editorial pitch, not an ad enquiry".
3. `lk draft startups-magazine-uk -` and mark `drafted`. Submit only with user approval and `pitch` mode on.
4. After submitting, screenshot to `.launchkit/evidence/startups-magazine-uk.png` and `lk mark startups-magazine-uk submitted --note "contact form, editorial pitch"`.

## Make the listing perform
- Their news section is mostly funding announcements written from press releases. A short release with amount, investors, use of funds and a founder quote is the format that gets used.
- Founder-bylined advice pieces appear in Features. Offer one practical piece (e.g. "what we learned pricing our first B2B deal") instead of a product pitch.
- Many reporters can be found as article bylines (e.g. on funding stories); the user can look them up on LinkedIn if the form gets no answer. Unconfirmed: no editorial address is published.

## Gotchas
- The contact form is aimed at advertisers. Expect a sales reply offering paid placement; decline with budget 0.
- "Submit a Partner Perk" (https://startupsmagazine.co.uk/submit-a-partner-perk) is for offers in their newsletter, not coverage. Only relevant if `product.deal_or_promo_code` exists.

## After submitting
- Search the site for `product.name` after two weeks. One polite follow-up at most.
