---
id: wefunder
name: Wefunder
url: https://wefunder.com/raise
category: Crowdfunding / Awards
mode: manual
pricing: Paid
login: Wefunder account, founder setup at wefunder.com/setup/founders
captcha: unknown, setup is behind signup
backlink_required: no
review_time: Wefunder reviews the profile and Form C filing before a public round goes live. Funds disburse from escrow in about 5 business days once $50k is reached.
verified: true
last_checked: 2026-10-12
---

# Wefunder

US equity crowdfunding. A raise is a legal securities offering, not a listing. Only the founder can decide to do this, and it involves filings and investor disclosures.

## Before you start
- Eligible: US C corporations, LLCs and public benefit corporations only. LLCs add about $5,000 a year in tax paperwork.
- Three tiers from the pricing page:
  - Warmup Investors: $0. Collect non-binding interest before a raise.
  - Private Round: $0 for founders. Accredited investors only, up to 247 through an SPV (Reg D 506(b)).
  - Community Round: 7.9% of funds raised plus $1,000 a year. Public Reg CF round, anyone can invest from $100.
- A Community Round needs financial statements (reviewed or audited above certain sizes), a Form C, a pitch video, and the company's terms (SAFE, note or priced round).
- Not legal advice. Tell the founder to talk to a lawyer before launching.

## Field map
Founder setup is behind signup. Fields below are from the public raise and pricing pages, so they are not confirmed in order.
| Site field | Profile key / instruction |
|---|---|
| Company name | `company.legal_name` |
| Website | `product.url` |
| One line pitch | `product.tagline` |
| Company description / pitch | `product.description_long` |
| Logo and cover image | `assets.logo_square`, `assets.og_image` |
| Pitch video | `links.demo_video` or a founder pitch video |
| Founders and team | `founder.name`, `founder.role`, `founder.bio_short`, `founder.linkedin` |
| Location | `company.city`, `company.country` |
| Traction, revenue, financials | founder and accountant only |
| Round terms (instrument, valuation cap, target, max) | founder and lawyer only |
| Legal entity type and state | founder only |

## Steps
1. Open https://wefunder.com/raise and https://wefunder.com/pricing. Confirm the fee table.
2. Ask the founder whether they want to raise and which tier fits. Explain the 7.9% plus $1,000 a year cost for a public round.
3. If yes, draft the pitch text, team bios and FAQs from the profile.
4. The founder signs up at wefunder.com/setup/founders and completes the company profile, terms, financials and filings. Do not create the account.

## Make the listing perform
- Start with Warmup Investors. Wefunder ranks and promotes campaigns that show early interest, and reservations show demand before money is committed.
- Bring your own investors first. Users, customers and the founder's network make the first traction that the Wefunder audience reacts to.
- The pitch page should read like a plain investor memo: problem, product, traction, team, use of funds. Use real numbers only.
- Post updates during the round and answer every investor question on the page.

## Gotchas
- Not available to non-US companies.
- Reg CF has a yearly raise cap and ongoing annual reporting duties.
- Never present an outcome or return as certain in campaign copy.

## After submitting
- Log `needs-human`. This needs a founder and legal decision.
