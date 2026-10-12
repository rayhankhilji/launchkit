---
id: crozdesk-revleads
name: "Crozdesk (Revleads)"
url: https://vendor.revleads.com/user/signup
category: Software Review Site
mode: form
pricing: Free
login: email            # passwordless "send me the link" login after approval
captcha: none
backlink_required: no
review_time: "automated eligibility check on submit; login emailed if accepted"
verified: true
last_checked: 2026-10-12
---

# Crozdesk (Revleads)

Crozdesk is a business software directory; Revleads is the vendor network that runs it (vendor.crozdesk.com now redirects to vendor.revleads.com). The free application gets your product listed on Crozdesk; paid options are PPC, display ads and listicle placements.

## Before you start
- A phone number is required. Ask the user once; never invent one.
- B2B software only. Consumer apps tend to be rejected by their screening bots.
- Login is a magic link to email, so the user needs inbox access later.

## Field map (checked live, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name* / Last Name* | text | split `founder.name` |
| Your Email* | email | `submission.email` (domain email preferred) |
| Phone Number* | text | from the user (ask) |
| Company Name* | text | `company.legal_name` or `product.name` |
| Headquarters Location* | country select | `company.country` |
| Product Name* | text | `product.name` |
| Software URL* | URL | `product.url` |
| Primary Software Category* | type-ahead, pick one | closest match to `product.categories[0]` |
| Software Description* | 175 chars | `product.description_short`, trimmed to 175 |
| Monthly Marketing Budget* | select | lowest option (match `launch_settings.budget_usd`) |
| How did you hear about us? | optional | leave blank |
| PPC campaigns checkbox | optional | leave unchecked |

## Steps
1. Search crozdesk.com for `product.name`. If listed, use **Claim Crozdesk Listing** on the signup page instead.
2. Open https://vendor.revleads.com/user/signup. Fill the fields from the map.
3. Click **Submit Your Application**. Their bots assess eligibility on submit.
4. Screenshot to `.launchkit/evidence/crozdesk-revleads.png`. `launchkit mark crozdesk-revleads submitted --note "application sent, login link by email if accepted"`

## Make the listing perform
- The 175-char description shows on category pages. Lead with the job the product does and the user type.
- Pick the most specific primary category; secondary categories can be added after approval.
- After approval, add screenshots and pricing in the vendor portal; incomplete profiles rank lower.

## Gotchas
- A high marketing budget invites sales calls. Pick the lowest.
- Extra products are added inside the portal, not with a second application.

## After submitting
- Log in via email link at https://vendor.revleads.com/user/login once approved, then complete the profile.
