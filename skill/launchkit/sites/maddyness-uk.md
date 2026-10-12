---
id: maddyness-uk
name: "Maddyness UK"
url: https://www.maddyness.com/uk/contact-us/
category: Press / Media
mode: pitch
pricing: Free
login: none
captcha: unknown
backlink_required: no
review_time: "unknown, team says it will reply as soon as possible"
verified: true
last_checked: 2026-10-12
---

# Maddyness UK

UK edition of the French startup media brand Maddyness. Covers UK (and French) startups, funding, founder opinion pieces and the Portfolio section of startup profiles. Best for UK or France based companies.

## Before you start
- Fit: `company.country` is UK or France, or the product is launching in the UK.
- The contact form is shared with the French site, so some placeholders are in French (Prénom = first name, Nom = last name, Entreprise = company, Poste = position, Écrire = write).
- For guest articles read https://www.maddyness.com/uk/2020/04/27/submit-article-maddyness/ first. They want practical founder advice and opinion, not PR.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Prénom* | required | first part of `founder.name` |
| Nom* | required | rest of `founder.name` |
| Entreprise* | required | `company.legal_name` or `product.name` |
| Poste | optional | `founder.role` |
| Email* | required | `founder.email` |
| Subject* | required dropdown | "You need to write about my startup!" for a pitch; "I'd like to make a guest submission for Maddyness" for an article (others: I have a question, I have an idea for a partnership) |
| Message (Écrire...*) | required | pitch below |
| Newsletter checkbox | optional | leave unticked |

Message (under 200 words): what the startup does, where it is based, what's new now (launch, round, milestone), one traction fact from the profile, `product.url`, `links.press_kit`.

## Steps
1. Open https://www.maddyness.com/uk/contact-us/.
2. Draft the message, `launchkit draft maddyness-uk -`, mark `drafted`.
3. With `pitch` mode on and approval: fill the fields, choose the subject, click **ENVOYER** (Send). Expect "Merci pour votre confiance". Screenshot to `.launchkit/evidence/maddyness-uk.png`.
4. `launchkit mark maddyness-uk submitted --note "contact form"`.

## Make the listing perform
- The guest article route works well for early companies. Their guide asks for content with expert advice from founders who hit a problem and solved it. Draft it from `copy.launch_post_story`, product mentioned once at most.
- Funding rounds and UK-France cross-border stories fit their audience.
- Write the message in English for the UK desk even though the form labels are French.

## Gotchas
- "Maddyness Factory" and MaddyMoney services are commercial offers. Not needed for editorial.
- The page also contains hidden error-report and info forms. Fill only the main contact form.

## After submitting
- Search maddyness.com/uk for `product.name` after a few weeks.
