---
id: publishyoursaas
name: "PublishYourSaaS"
url: https://publishyoursaas.com/submit
category: Software Review Site
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: yes
review_time: "30 days to 3 months (free), 24 hours (paid)"
verified: true
last_checked: 2026-10-12
---

# PublishYourSaaS

Indie SaaS directory that trades listings for backlinks. The free tier only works if the user puts the PublishYourSaaS badge on their site, and the free review queue is slow (30 days to 3 months). Low effort, low traffic; useful mainly for the dofollow link.

## Before you start
- Decide with the user: the **Free launch** requires installing and verifying the PublishYourSaaS badge on their site, and keeping it there (they check daily). Ask if `launch_settings.add_badge_to_site` is "ask". If the answer is no and budget is $0, mark `skipped` ("badge required for free tier").
- Paid tiers (one-time): Starter $9.99 (3 dofollow links, no badge, reviewed within 24h), Advanced $49.99 (4 links, newsletter, guest posts). Skip with budget 0.
- Two routes: `/submit` needs no account (email + form). Signing in (Google, GitHub, LinkedIn or email) at `/signin` gives a dashboard at `/dashboard/listings/new` and allows free relaunches. Use `/submit` unless the user wants dashboard access.
- Needs `assets.screenshots[0]` (single screenshot upload).

## Field map (the `/submit` form, in order)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Contact email | email, 254 chars | `submission.email` |
| Requested listing plan | radio: Free launch / Starter | Free launch (unless the user approved paying) |
| Listing title | 180 chars, e.g. "Acme - AI support for teams" | `product.name` + " - " + `product.tagline_short` |
| Website URL | URL, 500 chars | `product.url` |
| Autofill from website | button | don't use; it may overwrite nothing but adds scraped copy |
| Short description | 250 chars | `product.description_short` |
| About | 1,500 chars | `product.description_long` trimmed to 1,500 |
| Built with | up to 5 comma-separated technologies, 120 chars | from `product.tags` only if they are technologies (e.g. "Next.js, Postgres"); otherwise leave blank |
| Category | select | map `product.categories[0]`: AI -> Artificial Intelligence, dev tools -> Developer Tools, marketing -> Marketing, analytics -> Analytics, support -> Customer Support, no-code -> No Code, else Productivity or Other |
| Screenshot | file | `assets.screenshots[0]` |
| FAQs (optional) | Q/A pairs | `copy.faq` (first 3) |
| Content policy | checkbox | tick |
| Terms and privacy | checkbox | tick |

## Steps
1. Search the site for `product.name` (also try `/claim-a-listing`, since they pre-create some listings). If found, claim it or mark `live`.
2. If going free: add the PublishYourSaaS badge to the user's site first (get the embed code from the free plan flow or the user's dashboard) and confirm it's live.
3. Open https://publishyoursaas.com/submit. Fill the fields per the map.
4. Click **Submit for free review** (not "Submit and pay $9.99"). Screenshot the confirmation to `.launchkit/evidence/publishyoursaas.png`.
5. `launchkit mark publishyoursaas submitted --note "free review queue, 30 days to 3 months, badge must stay installed"`

## Make the listing perform
- The listing title is the page title. "Name - what it does" ranks better than the bare name.
- Fill the FAQs. They advertise them as "FAQs for AI visibility" and they become extra indexable text on the page.
- Pick a specific category over "Other". Category pages are how people browse.

## Gotchas
- The site banner pushes a "40% off" promo code. Ignore it unless the user wants a paid tier.
- If the badge is removed later, the link drops to nofollow.

## After submitting
- Listings stay private until approved. Check `publishyoursaas.com/listing/<slug>` (slug is the domain with dots as dashes, e.g. `saascity-io`) after a few weeks.
