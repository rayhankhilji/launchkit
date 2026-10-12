---
id: pitchbook
name: "PitchBook"
url: https://pitchbook.com/request-your-pitchbook-profile
category: Startup Database
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# PitchBook

PitchBook is the private-market database used by VCs, PE firms and corp dev teams (a16z, Kleiner Perkins, Microsoft per their own page). Profiles are built by PitchBook's research team; founders can't self-publish, but they can request a profile or ask for a review of an existing one. Worth doing once the company has raised or is about to.

## Before you start
- The old URL `/profiles/claim-profile` now returns "Profile not found". Use the **Profile Request** page linked in PitchBook's footer: https://pitchbook.com/request-your-pitchbook-profile
- The form wants a business email (company domain, not Gmail) and a phone number. Ask the user for a phone number; it is not in the profile.
- Have `company.legal_name`, `company.funding_stage` and `company.funding_raised` handy for the follow-up email from their research team.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name | text, required | first part of `founder.name` |
| Last Name | text, required | rest of `founder.name` |
| Business Email | email, required | `founder.email` (must be on the company domain) |
| Phone | text | ask the user; leave blank if they decline and the form allows it |
| Company | text / search | `company.legal_name`, fall back to `product.name` |
| I agree to PitchBook's privacy policy | checkbox | tick only with the user's consent |

## Steps
1. Search https://pitchbook.com/profiles/ (site search box) for `product.name` to see if a public profile already exists. Note its URL.
2. Open https://pitchbook.com/request-your-pitchbook-profile. Accept or dismiss the cookie banner.
3. Fill the "Review your profile" form from the field map. If a Cloudflare "verify you are human" page appears, stop and mark `needs_human`.
4. Click **Submit**. Screenshot the confirmation to `.launchkit/evidence/pitchbook.png`.
5. If a profile already exists, the profile page also has an **Update this profile** link; it opens the same request flow. Use it to point PitchBook at the right company.
6. `launchkit mark pitchbook submitted --note "PitchBook research team follows up by email"`

## Make the listing perform
- PitchBook profiles are only as good as the data their analysts can verify. When they email, send: legal name, founding year, HQ, employee count, each funding round (date, amount, lead investor), and a press link per round.
- Announced rounds get picked up faster. If the user raises later, submit it through **Deal Submission** (https://pitchbook.com/submit-a-deal) instead of waiting for PitchBook to find it.
- Use `product.description_medium` for the company description; investors scan the first sentence, so it should say what the product does.

## Gotchas
- Free trial and "Request access" buttons sit all over profile pages. They are sales forms for the paid platform, not profile edits. Skip them.
- Personal email domains are often filtered out for "Business Email".
- Funding figures you send must match public sources, otherwise analysts won't publish them. Leave funding blank if `company.funding_raised` is empty.

## After submitting
- Expect an email from PitchBook's research or data team; reply with the facts above.
- Check the public profile URL every couple of weeks; new data appears on the free public profile summary.
