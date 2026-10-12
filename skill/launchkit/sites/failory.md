---
id: failory
name: "Failory"
url: https://www.failory.com/
category: Startup Database
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "unknown; editorial choice"
verified: true
last_checked: 2026-10-12
---

# Failory

Site and newsletter with 200+ founder interviews about successful and failed startups, plus startup lists. No
public interview form was found (/interview-submission and /contact do not exist). The About page lists
nico@failory.com as the contact, so the pitch goes by email.

## Before you start
- Pitch mode: draft the email and show it to the user. Send only if pitch mode is on and the user approves.
- Failory covers founder lessons: what worked, what failed, mistakes, and numbers. A launch announcement alone is not a fit.
- Best fit if the founder has a clear story: a pivot, a shutdown, a growth curve, or hard lessons.

## Field map
Email to nico@failory.com:
| Part | Profile key / instruction |
|---|---|
| From | `founder.email` |
| Subject | "Interview pitch: " + short story hook (e.g. "how we reached first 100 customers with no ads") |
| Line 1 | Who: `founder.name`, `founder.role` at `product.name` (`product.url`) |
| Line 2 | What the company does: `product.description_short` |
| Story | 3 to 5 sentences from `copy.launch_post_story`: start, key mistake or turning point, result |
| Numbers | Only figures the user gave (revenue, users, team). Ask before sharing. |
| Close | Offer to answer their questions in writing; link `links.press_kit` if present |

## Steps
1. Open https://www.failory.com, open the interviews section, and read two recent interviews to match tone.
2. Draft the email from the field map, under 180 words, first person.
3. Run `launchkit lint-copy` on the draft.
4. Show it to the user. On approval, the user sends it from their own email client.
5. `launchkit mark failory drafted` (or `submitted` once the user sends it).

## Make the listing perform
- Lead with the lesson, not the product. Failory titles are about what founders learned.
- Include one honest failure or mistake even for a successful startup.
- Specific numbers and timelines make an interview publishable.

## Gotchas
- No form exists; do not guess other addresses.
- Do not follow up more than once, and wait at least two weeks.

## After submitting
- Note the send date. If Nico replies with questions, draft written answers for the user.
