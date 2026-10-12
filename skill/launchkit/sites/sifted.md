---
id: sifted
name: "Sifted"
url: https://sifted.eu/pitch-your-story
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "no reply unless interested; news desk works same-day on exclusives"
verified: true
last_checked: 2026-10-12
---

# Sifted

FT-backed news site for European startups and VC, read by founders, investors and operators (120,000+ newsletter readers per its homepage). Worth a pitch only if the company is based in Europe and has real news: a funding round, a notable hire, a launch with numbers, or data nobody else has.

## Before you start
- `company.country` must be in Europe (UK counts). If not, mark `skipped` with "not European".
- A news hook from the profile: `company.funding_raised` + `company.funding_stage`, `product.launch_date`, or a concrete milestone. "We launched a tool" alone rarely gets covered.
- No account, no form. Pitches go by email, so the user must approve sending from their own inbox.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| To | email | `news@sifted.eu` |
| Cc | email | `martin@sifted.eu` (news editor, per the pitch page) and, if the beat matches, one reporter from the table below |
| Subject | under 80 chars | "Exclusive: " + one-line news, e.g. "Exclusive: `product.name` raises `company.funding_raised` for ..." |
| Body | under 150 words | `copy.press_pitch` rewritten so the first line is the news, then `company.city`, `company.country`, `company.funding_stage`, why it matters for European tech |
| Links | inline | `product.url`, `links.press_kit` |
| Sign-off | text | `founder.name`, `founder.role`, `founder.email` |

Beat map from https://sifted.eu/pitch-your-story (checked 2026-10-12):
- VC: Amy Lewin, Anne Sraders, Maya Dharampal-Hornby
- Breaking news, policy, UK tech: Martin Coulter
- Robotics, chips: Tom Nugent
- UK tech, data centres, energy: Freya Pratty
- Nordics: Mimi Billing
- Startup life: Éanna Kelly
- Deeptech and French tech: Daphné Leprince-Ringuet
- Fintech: Damisola Sulaiman

Addresses are firstname@sifted.eu, as shown on that page. The whole team covers the AI application layer.

## Steps
1. Open https://sifted.eu/pitch-your-story and re-check the beat list (staff change).
2. Pick the one reporter whose beat matches `product.categories[0]` or `company.country`.
3. Write the email from the table above. Offer it as an exclusive with a date and time embargo if the news is not public yet.
4. `lk draft sifted -` with To/Cc/Subject/Body. Mark `drafted`.
5. Send only if the user approves and `pitch` mode is on. Then `lk mark sifted submitted --note "emailed news@ + <reporter>"`.

## Make the listing perform
- Sifted's page says "ideally exclusive news". Offer the exclusive to Sifted first for European rounds; do not send the same day to Tech.eu or UKTN.
- Lead with the number: amount raised, investors, revenue or user figures from the profile. No numbers in the profile means the odds are low; say so to the user.
- Opinion pieces are a separate track (the "Opinion" tab on the pitch page). A founder op-ed on a European angle is a realistic way in for pre-revenue startups.
- Rankings and leaderboards have their own entry process (see the FAQ on https://sifted.eu/contact-us); suggest it to the user if they are a scaleup.

## Gotchas
- Sifted has a paid branded content team (commercial@sifted.eu). That is advertising, not coverage. Skip with budget 0.
- Don't attach decks or images to the first email. Link the press kit instead.
- Contact page FAQ mentions hello@sifted.eu may no longer be in use; don't send pitches there.

## After submitting
- No auto-reply. If no answer in 3 working days, the user can send one short follow-up, then drop it.
- Coverage appears under https://sifted.eu/articles; search the company name.
