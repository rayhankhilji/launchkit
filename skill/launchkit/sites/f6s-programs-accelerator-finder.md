---
id: f6s-programs-accelerator-finder
name: F6S Programs (accelerator finder)
url: https://www.f6s.com/programs
category: Crowdfunding / Awards
mode: manual
pricing: Free
login: F6S account needed to apply
captcha: unknown, apply forms are behind login
backlink_required: no
review_time: Set by each program. Each card shows its own deadline.
verified: true
last_checked: 2026-10-12
---

# F6S Programs (accelerator finder)

A searchable list of accelerators, grants, competitions and other programs (about 15,600 listed on 2026-10-12). F6S is not one application. Each program has its own form, deadline and terms. Applying is free on F6S, but programs set their own investment and equity terms.

## Before you start
- The founder needs an F6S profile for the company and themselves. Most program forms pull from that profile, so fill it first.
- Each program card shows the deadline, the money offered per team, and the equity taken. Some take no equity, some charge nothing, some are grants.
- Applying commits the founder to that program's terms if accepted. Don't apply without their approval for each program.
- The "List Me Here" button is for program organizers, not startups.

## Field map
Startup profile fields (shared across most applications; behind login, from public profile pages):
| Site field | Profile key / instruction |
|---|---|
| Company name | `company.legal_name` |
| Website | `product.url` |
| One line pitch | `product.tagline` |
| Description | `product.description_medium` |
| Markets / industries | `product.categories`, `product.tags` |
| Location | `company.city`, `company.country` |
| Logo | `assets.logo_square` |
| Founders and team | `founder.name`, `founder.role`, `founder.linkedin`, `founder.bio_short` |
| Stage and funding raised | `product.status`; funding from the founder |
| Program-specific questions | draft from the profile; founder approves |

Program search filters on the live page: Type (Accelerator, Grant, Competition and more), Location, Markets, Investment, Invest in Country, and sort by Open Now, Popular or Closest.

## Steps
1. Open https://www.f6s.com/programs (or /programs/accelerators).
2. Filter by Markets matching `product.categories`, Location near `company.city`, `company.country` or remote, and Open Now.
3. Make a short list of 3 to 10 programs with deadline, money, and equity for each.
4. Show the list to the founder and let them pick.
5. For picked programs, draft answers. The founder logs in and submits each one.

## Make the listing perform
- A complete F6S company profile is reused by every program and is what reviewers see first. Fill every field.
- Apply only to programs that match the product's market and stage. Program teams screen hard for fit.
- Answer each program's own questions. Don't paste the same answer everywhere.
- Watch deadlines. Many close within days, shown on the card.

## Gotchas
- Equity terms differ widely. Read each program's terms page before applying.
- Some listings are old or recurring. Check the program's own site for current dates.

## After submitting
- Log each program application separately as `needs-human` or `submitted` when the founder confirms.
