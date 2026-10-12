---
id: techpluto
name: "TechPluto"
url: https://www.techpluto.com/submit-startup/
category: Startup Database
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# TechPluto

TechPluto is a startup and tech news blog that writes up early-stage startups from founder submissions. The submit page embeds a Google Form ("SUBMIT YOUR STARTUP"); editors pick which submissions become articles. A paid "Priority Pass" (price not shown publicly, behind a **Purchase Now** button) speeds this up.

## Before you start
- The old URL `/submit-a-startup/` is outdated; the form lives at https://www.techpluto.com/submit-startup/.
- No login and no CAPTCHA on the Google Form. All seven fields are required.
- Ask the user before buying the Priority Pass.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| First Name | short text, required | first part of `founder.name` |
| Email | short text, required | `founder.email` |
| Startup Name | short text, required | `product.name` |
| Website URL | short text, required | `product.url` |
| Founder Name | short text, required | `founder.name` (add co-founders if known) |
| Startup Description (More Than 100 Words) | paragraph, required | `product.description_long`, at least 100 words; extend with facts from the profile if shorter |
| What Problem Does Your Startup Solve | paragraph, required | 2-4 sentences: the problem for `product.target_audience` and how the product solves it |

## Steps
1. Open https://www.techpluto.com/submit-startup/ and scroll to the embedded form (or open the form directly: https://docs.google.com/forms/d/e/1FAIpQLScmzHxA16yQUsr_pCwIjlMd3jvvValvon9zXs2NevoFosQ8Cg/viewform).
2. Fill the seven fields from the map.
3. Click **Submit**. Screenshot the "response recorded" screen to `.launchkit/evidence/techpluto.png`.
4. Skip **Purchase Now** unless the user approved it.
5. `launchkit mark techpluto submitted`

## Make the listing perform
- The description is raw material for an article, so give editors a story: who the founders are, the specific problem, how it works, any real traction from the profile.
- Write fresh copy rather than pasting text published elsewhere; news blogs prefer content that isn't duplicated across directories.
- A clear, concrete problem statement is what makes an editor pick a submission. Avoid feature lists.

## Gotchas
- The 100-word minimum isn't enforced by the form but is in the field label; short descriptions are likely ignored.
- No image upload. If they write about the product, they may email for a logo; send `assets.logo_square`.

## After submitting
- No confirmation email is promised. Search techpluto.com for `product.name` after a few weeks.
