---
id: indie-hackers-interviews
name: "Indie Hackers Interviews"
url: https://www.indiehackers.com/interviews
category: Launch Platform
mode: pitch
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "editorial; no stated timeline"
verified: true
last_checked: 2026-10-12
---

# Indie Hackers Interviews

Editorial founder case studies on Indie Hackers. /interviews now opens the "Case Studies Database": hundreds of founder stories sorted and filtered by monthly revenue (most feature $3K to $1M+ MRR). There is no public pitch form on the page, so this is a pitch: draft, get approval, send.

## Before you start
- Only pitch if the product has real revenue to share. Every case study headline leads with an MRR figure. If `company.business_model` shows no revenue yet, mark `skipped` with "pre-revenue, revisit later".
- Stories are published as posts by the Indie Hackers team. No pitch form or editor email is listed on the public page (checked 2026-10-12). Routes, in order:
  1. Add the product to the Products DB at https://www.indiehackers.com/products/new ("Add Yours") with revenue shown. Case study subjects come from builders who are visible there.
  2. Post the story in the community (a "how I got to $X MRR" post using `copy.launch_post_story`). Strong posts get picked up.
  3. Reach the team through the FAQ/contact links at https://www.indiehackers.com/about or their X account @IndieHackers.
- Both 1 and 2 need an Indie Hackers account (email or social sign-in). The site sits behind a Cloudflare check; if it blocks you, mark `needs_human`.

## Pitch content

| Pitch part | Fill with |
|---|---|
| Subject | "Case study pitch: how `product.name` got to <MRR>" |
| Who | `founder.name`, `founder.role`, `founder.bio_short` |
| Numbers | current MRR, time to get there, team size (`company.team_size`), funding (`company.funding_stage`; bootstrapped is a plus here) |
| Story angle | one surprising decision or channel from `copy.launch_post_story` |
| Links | `product.url`, IH product page, `founder.twitter` |

## Steps
1. Confirm revenue with the user and get the exact MRR they are willing to publish.
2. Draft the pitch (under 200 words) or the community post. Follow the human-writing skill.
3. Show the draft to the user and wait for explicit approval. Never send or post unapproved.
4. After approval, add the product at /products/new, then send or post via the chosen route.
5. Save the draft and the send location to `.launchkit/evidence/indie-hackers-interviews.md`, `launchkit mark indie-hackers-interviews submitted --note "pitched via <route>"`.

## Make the listing perform
- Case studies are filtered by learnings tags such as "Launching", "Pricing Strategy", "Marketing on Reddit", "Building an Audience". Build the angle around one of these with concrete numbers.
- Specific beats impressive: "$4.2K MRR in 5 months from one SEO page" gets read; "growing fast" doesn't.

## Gotchas
- Never invent or round up revenue. Indie Hackers readers check.
- No guaranteed reply. Don't follow up more than once, after two weeks.

## After submitting
- If they reply, hand the conversation to the user. Answering interview questions is the founder's job.
