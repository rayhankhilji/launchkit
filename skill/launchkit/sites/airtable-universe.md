---
id: airtable-universe
name: "Airtable Universe"
url: https://www.airtable.com/universe
category: No-Code
mode: manual
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant (no review step is documented)"
verified: true
last_checked: 2026-10-12
---

# Airtable Universe

A public gallery of Airtable bases built by users (Expedia, Product Hunt, Twilio and others have bases there). Visitors copy a base into their own workspace with **Use template**. It only fits products that can be shown as a useful Airtable base, for example a CRM, content calendar or tracker that links back to the product.

## Before you start
- The artifact is a real Airtable base, not a listing form. The user (or you, with their account) must build a base that is useful on its own: clean tables, example data, a short "How to use" note in the base description, and a link to `product.url`.
- An Airtable account with Owner or Creator permission on the base. Any plan works, including free.
- The publisher's Airtable user name and profile are shown publicly on Universe. Check they're correct first.
- Decide with the user whether extensions in the base should be visible (there's a toggle).

## Field map

Publishing happens through **Publish and manage** on the Universe home page (behind login, so the exact form is unconfirmed beyond Airtable's help article).

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Universe profile (one time) | name, bio, links | `founder.name`, `founder.bio_short`, `product.url` |
| Base | picker | the base the user built for this |
| Title | text | a use-case title, e.g. "Content calendar for indie SaaS". Mention `product.name` only if the base is the product's own template |
| Description | free text | 2-3 short paragraphs: what the base tracks, how to use it, then one line pointing to `product.url` for teams who want more |
| Categories | multi-select | pick from: Entrepreneurship, Marketing and sales, Operations, Product design and UX, Professional, Science and technology, Education, Nonprofits and volunteering, and the other Universe categories. Map `product.categories[0]` to the closest one |
| Show extensions in published base | toggle | on only if the base uses extensions that make it look better |

## Steps
1. This is `manual`. Don't build a base on the user's behalf unless they ask. Explain the idea and suggest one base that fits `product.use_cases`.
2. If they have a base ready: open https://www.airtable.com/universe and sign in.
3. Click **Publish and manage** at the bottom of the categories menu. Complete the Universe profile, then click **Start publishing**.
4. Select the base, enter title, description and categories, then click **Publish base**.
5. Open the public base page, screenshot it to `.launchkit/evidence/airtable-universe.png`.
6. `launchkit mark airtable-universe live --listing-url <universe url>`

## Make the listing perform
- Universe is sorted by featured by default. Bases that get featured are real workflows from named teams with redacted example data, like "How Kiwi uses Airtable". A base titled "How <company> runs <process> in Airtable" fits that pattern.
- Fill every table with believable sample rows. Empty bases don't get copied.
- Put the product link in the base description and in a "Start here" record, not in every field.
- Pick the category people browse for that job (Marketing and sales, Operations, Entrepreneurship) rather than Science and technology.

## Gotchas
- Universe is separate from Airtable's official templates, which only the Airtable team publishes.
- Publishing makes the base contents public. Remove real customer data first.
- Later edits don't go live until you click **Update base** and confirm **Publish base contents**.

## After submitting
- Share the Universe link where the product's users are. Update the base when the product changes, and unpublish it from **Publish and manage** if it goes stale.
