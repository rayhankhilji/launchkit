---
id: techcrunch-tips
name: "TechCrunch (tips)"
url: https://techcrunch.com/got-a-tip/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless interested"
verified: true
last_checked: 2026-10-12
---

# TechCrunch (tips)

The largest US startup news site. The tips page (updated April 2024) says press releases and pitches go to tips@techcrunch.com by unencrypted email; Signal and WhatsApp (+1 415-320-7755) are for sensitive tips. Coverage odds are low for small launches; realistic only with a funding round, an exclusive, or a notable story.

## Before you start
- A real news hook: `company.funding_raised` with named investors, a big customer, or something surprising. Without one, still draft, but tell the user to expect silence.
- Find one reporter whose beat fits (staff list: https://techcrunch.com/staff/... linked from the site footer "Staff"). Pitch them directly and cc tips@.
- Email only. The user approves and sends from their inbox.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| To | email | the matching reporter (from their author page) |
| Cc | email | `tips@techcrunch.com` |
| Subject | under 80 chars | "Exclusive: `product.name` raises ..." or the headline you'd want |
| Body | under 150 words | news in sentence 1 (amount, round, lead investor, or launch fact), sentence 2 what the product does (`product.description_short`), sentence 3 why now; then embargo time, `links.press_kit`, `product.url` |
| Sign-off | text | `founder.name`, `founder.role`, phone if the user agrees |

## Steps
1. Open https://techcrunch.com/got-a-tip/ and confirm the tips address.
2. Browse the "Startups" or "Venture" sections for a reporter who covered a similar company in the last 3 months.
3. Draft the email with an embargo (e.g. "embargoed until Tuesday 9am ET"). `lk draft techcrunch-tips -`, mark `drafted`.
4. Send only with user approval and `pitch` mode on.

## Make the listing perform
- Offer the exclusive to one TechCrunch reporter, 5-7 days before the announcement. Funding news is their bread and butter.
- Startup Battlefield (their pitch competition) is a separate application on the events pages and gives far better odds of coverage for early startups. Suggest it to the user.
- Write the headline for them. Reporters skim subject lines.

## Gotchas
- The Contact Us page says "We do not accept pitches or guest post submissions" via that page. Use tips@ or reporters, not the contact form.
- SecureDrop is paused. Don't use Signal/WhatsApp for product pitches.
- No attachments in the first email.

## After submitting
- No auto-reply. One follow-up after 2-3 days only if the news is still under embargo, then stop.
