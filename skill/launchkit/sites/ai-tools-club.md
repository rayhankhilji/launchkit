---
id: ai-tools-club
name: "AI Tools Club"
url: https://aitoolsclub.com/partnership-sponsorship/
category: AI Directory
mode: form
pricing: Paid
login: none
captcha: none
backlink_required: no
review_time: "by call (sales-led)"
verified: true
last_checked: 2026-10-12
---

# AI Tools Club

Curated AI tools and agents directory run by Marktechpost AI Media (Ghost blog). There is no public submission form: listings are editorial or paid promotion packages sold through a sales call. Skip at budget 0.

## Before you start
- There is no free path. `/submit/` returns a 404 and the only "Promotion" page is a sponsorship price list.
- Only continue if `launch_settings.budget_usd` covers at least $790 and the user explicitly wants a sponsored placement.
- The "Sign up" and "Subscribe" buttons are Ghost newsletter signups, not tool submissions. Don't use them.

## Field map

No form. The paid route is "Book a Call" on the promotion page. If the user wants to pitch, prepare:

| Item | Fill with |
|---|---|
| Product name and URL | `product.name`, `product.url` |
| One-line pitch | `product.tagline` |
| Short write-up | `product.description_medium` |
| Audience | `product.target_audience` |
| Contact | `founder.name`, `submission.email` |

## Steps
1. Search the site for `product.name` (search icon in the header). If a listing exists, `launchkit mark ai-tools-club live --listing-url <url>` and stop.
2. Open https://aitoolsclub.com/partnership-sponsorship/ and confirm the packages are still sales-led.
3. At budget 0: `launchkit mark ai-tools-club skipped --note "paid promotion only, from $790/month, no free submission"`.
4. If the user approved a budget: mark `needs_human` with "book a call via Promotion page" and give them the draft pitch from the table above. Don't book calls on their behalf.

## Make the listing perform
- Packages (Oct 2026): Signal+ $790/month (14 days in homepage Top 10, one newsletter feature to 10k+ subscribers, "Top AI Tools of the Month" inclusion), Pipeline+ $1,200/month (30 days, sponsored article, 2 newsletter features, pinned post in r/AIAGENTSNEWS), Partner+ $2,100/month (60 days Top 5, co-branded SEO article).
- The audience is business buyers and AI agent builders. Agent, MCP, vibe coding and business tools fit best (those are the site's main sections).
- Ask for UTM tracking on every link; all packages support it.
- Organic inclusion happens through Marktechpost editorial roundups. A tool with real traction can be pitched to their editors instead of buying a package (use `copy.press_pitch`, pitch mode rules).

## Gotchas
- `aitoolsclub.com/submit/` is a dead link that some directory lists still point to.
- Packages are monthly prices, not one-time.

## After submitting
- Nothing to check unless a package was bought. If it was, verify the homepage placement and newsletter issue against the package dates.
