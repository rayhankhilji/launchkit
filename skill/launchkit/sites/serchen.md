---
id: serchen
name: "Serchen"
url: https://www.serchen.com/get-listed/new
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: unknown
backlink_required: no
review_time: "editorial review, no stated time"
verified: true
last_checked: 2026-10-12
---

# Serchen

A long-running (since 1997) software and cloud services directory with US and UK editions. Listing is free after an editorial review; paid "members/sponsors" get priority placement and branded cards. Worth doing for B2B SaaS: the form is short and needs no account.

## Before you start
- No account needed for a new listing. The site is behind Cloudflare; if the check needs a human, mark `needs_human`.
- First check whether the company is already listed: `/get-listed` has a company search and a claim flow. Claiming is better than a duplicate.
- Paid placement is optional. Skip with budget 0.

## Field map (`/get-listed/new`, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Company / product name * | 200 chars | `product.name` |
| Website * | 200 chars, homepage only (they add https://) | domain from `product.url`, no tracking params, no press-release links |
| Category (optional) | type-to-search, existing categories only | closest existing match to `product.categories[0]`; don't invent one, unknown categories are rejected |
| Short description (optional) | 5,000 chars, "a paragraph or two on what the product does + who it's for" | `product.description_medium` (fill it, it's what the editors approve from) |
| Your name * | 200 chars | `founder.name` |
| Work email * | 200 chars | `submission.email` on the product's domain if possible |
| Your role (optional) | 200 chars | `founder.role` |
| Company website (hidden) | honeypot | leave empty |

## Steps
1. Open https://www.serchen.com/get-listed and search for `product.name`. If found, use **Claim** and follow its email verification (needs `submission.inbox_access`).
2. Otherwise open https://www.serchen.com/get-listed/new.
3. Fill fields per the map. In Category, type a keyword (e.g. "CRM", "project") and pick from the dropdown.
4. Click **Submit listing**. Screenshot the confirmation to `.launchkit/evidence/serchen.png`.
5. `launchkit mark serchen submitted --note "editorial review"`

## Make the listing perform
- Editors approve from the description. Say plainly what it does and who it's for in the first sentence; that also becomes the listing summary.
- A work email on the product domain reads as a real vendor and is more likely to be approved than a gmail address.
- Free profiles appear in category listings; paid members sit above them. After approval, ask real customers to review via the profile page.

## Gotchas
- The hidden "Company website" field is a bot trap. Never fill it.
- Category is optional but the form says submissions to non-existent categories won't be approved; pick from the list or leave blank.

## After submitting
- They email once approved. Then search the site for the listing and `launchkit mark serchen live --listing-url <url>`.
