---
id: the-rundown-ai
name: "The Rundown AI"
url: https://www.therundown.ai/advertise-with-us
category: Newsletter
mode: pitch
pricing: Paid
login: none
captcha: unknown
backlink_required: no
review_time: "reply within 24 hours; ads booked months out"
verified: true
last_checked: 2026-10-12
---

# The Rundown AI

One of the largest daily AI newsletters (1.7M+ subscribers on the AI edition, 51% open rate, 80%+ US readers), sent Monday to Friday. The site has a Tools section but no public "submit a tool" form. Getting in front of readers is paid, through the sponsor form linked from https://www.therundown.ai/advertise-with-us.

## Before you start
- With budget 0: mark `skipped` ("paid only"). Editorial coverage happens only for real news; a big launch can go to the support address below, but expect no reply.
- If the user has budget: they decide placement and budget. Mark `needs_human` after drafting.
- Have ready: `product.name`, `product.url`, `product.description_short`, budget from `launch_settings.budget_usd`, and the launch date.

## Field map

The sponsor form is a Typeform at https://therundownai.typeform.com/to/kraZ1TSO ("Fill out our quick form and we'll be in touch within 24 hours"). Its questions load one at a time with JS; the page states it asks for the product, budget and goals. Exact questions unconfirmed.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Product to advertise | text / URL | `product.name`, `product.url` |
| Budget | text or select | from the user, never guessed |
| Goals | text | e.g. signups for launch week, from the user |
| Contact | name, email, company | `founder.name`, `submission.email`, `company.legal_name` |

Placements described on the page (AI newsletter): Main Ad (logo at top + 400-char text and image, ~2,000-4,000 clicks), Secondary Ad (middle, 400 chars + image, ~1,500-2,500 clicks), and Sunday Full Email Takeover for major launches. Ads also stay on their website permanently.

## Steps
1. Open https://www.therundown.ai/advertise-with-us and read the formats.
2. Budget 0: `launchkit mark the-rundown-ai skipped --note "paid placements only"`.
3. With budget: write 4-6 bullet points for the ad from `product.key_features` (their editors rewrite the copy), save with `launchkit draft the-rundown-ai -`, and mark `needs_human` with "fill sponsor Typeform with budget".

## Make the listing perform
- Readers are professionals looking to apply AI at work (45.9% founders or execs, 48% say new AI tools are the most interesting part). Lead with a practical use case and a time saved, not technical depth.
- The Main Ad gets logo placement and the most clicks; Secondary is the cheaper test.
- Book early: they say ads are booked months in advance.

## Gotchas
- `support@therundown.ai` is for reader support, not ad sales. Use it only for real news tips, and only with user approval.
- There are separate Tech and Robotics newsletters with their own audiences; don't pick them unless the product fits.

## After submitting
- They promise a reply within 24 hours and a performance report a week after each ad. Log the run date and report link if the user books.
