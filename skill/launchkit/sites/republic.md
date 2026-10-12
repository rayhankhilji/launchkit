---
id: republic
name: Republic
url: https://republic.com/raise
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: Republic account (email), application through the "Apply to raise" button
captcha: unknown, application is behind signup
backlink_required: no
review_time: Republic screens applications and accepts a small share. Timing not published.
verified: true
last_checked: 2026-10-12
---

# Republic

Equity crowdfunding and private investment platform for US, UK and EU companies. The raise page says companies can raise up to $75M. This is a securities offering, so it is a founder decision.

## Before you start
- Costs on success: 7% of the total raised plus 2% of the securities offered, plus legal and other costs (Republic lists a flat fee attorney option).
- Republic is selective. It screens applications before a campaign is built.
- Typical needs: incorporated company, reviewed financial statements (GAAP), clean background checks on officers ("bad actor" checks), a pitch deck, and a round structure.
- Not legal advice. Point the founder to a lawyer and the Republic FAQ at https://republic.com/help.

## Field map
The application sits behind signup, so these are from public pages and not confirmed in order.
| Site field | Profile key / instruction |
|---|---|
| Company name | `company.legal_name` |
| Website | `product.url` |
| What does the company do | `product.description_short` |
| Pitch / description | `product.description_long` |
| Industry | best match from `product.categories` |
| Location and incorporation | `company.city`, `company.country`; incorporation from the founder |
| Founder contact | `founder.name`, `founder.email`, `founder.linkedin` |
| Pitch deck | founder uploads |
| Traction and revenue | founder-provided only |
| Raised to date and target raise | founder only |

## Steps
1. Open https://republic.com/raise and confirm the fee section.
2. Explain the 7% plus 2% cost and the legal work to the founder. Ask if they want to apply.
3. If yes, draft the short and long company description and a list of facts the founder must supply.
4. The founder clicks "Apply to raise", creates the account and sends the application. Do not create it.

## Make the listing perform
- Republic picks companies with real traction and a community. Lead the application with customers and revenue if there are any.
- Bring a list of interested investors and users. Republic campaigns that open with a committed audience get featured more.
- Keep the pitch page factual: product, market, traction, team, use of funds.

## Gotchas
- Fees on success are taken from the raise, plus securities. Legal costs are separate.
- Some regions and company types are not supported. Check the FAQ first.

## After submitting
- Log `needs-human` unless the founder confirms they applied.
