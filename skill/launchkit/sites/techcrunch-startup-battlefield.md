---
id: techcrunch-startup-battlefield
name: TechCrunch Startup Battlefield
url: https://techcrunch.com/startup-battlefield/
category: Crowdfunding / Awards
mode: manual
pricing: Free
login: TechCrunch application form (account details unconfirmed while closed)
captcha: unknown, form closed on 2026-10-12
backlink_required: no
review_time: Up to four review rounds. 2026 applicants were notified in late August for October Disrupt.
verified: true
last_checked: 2026-10-12
---

# TechCrunch Startup Battlefield

TechCrunch's startup competition at Disrupt. Applications for 2026 are closed (they ran through June 8, 2026; Disrupt 2026 is Oct 13 to 15 in San Francisco). Watch the page for the 2027 cycle. No fee and no equity taken.

## Before you start
- Fit check: mostly pre-Series A companies. Series A is case by case.
- A working MVP is required. Idea-stage companies are not eligible.
- Two short videos are required: a product demo (a screen recording is fine, no animation or AI generated demo) and a founder video.
- One application per company. You can edit and resubmit until the deadline.
- 200 companies are selected for the Battlefield 200. The top 20 pitch on the main stage for six minutes, and the winner gets $100,000 equity free.
- VCs can nominate startups, which is a second route in.

## Field map
The form was closed during research, so field order is from the public FAQ. Confirm when the next cycle opens.
| Site field | Profile key / instruction |
|---|---|
| Company name | `product.name` |
| Website | `product.url` |
| One line description | `product.tagline` |
| Product description | `product.description_medium` |
| Category / industry | best match from `product.categories` |
| Stage and funding raised | `product.status`; funding from the founder |
| Founders and contact | `founder.name`, `founder.email`, `founder.role`, `founder.linkedin` |
| Location | `company.city`, `company.country` |
| Product demo video | `links.demo_video` (real screen recording) |
| Founder video | founder records it |
| Traction | founder-provided numbers only |

## Steps
1. Open https://techcrunch.com/startup-battlefield/ and check if applications are open.
2. If closed, add a reminder to the wrap-up with the page link and tell the user the next cycle usually opens in early spring.
3. If open, draft text answers from the profile and list the two videos the founder must record.
4. The founder fills the form, uploads both videos, and submits. Do not submit for them.

## Make the listing perform
- TechCrunch says it judges on product, team, market and traction, and wants a real working product. Show the product working in the first seconds of the demo.
- Keep the demo a plain screen recording. They reject animated or AI made demos.
- Founder video: say what the product does and why this team. Short and specific.
- Apply early in the cycle. Review runs in rounds and early apps get more looks.
- Ask an investor in the company to nominate it if they can.

## Gotchas
- No fees, but travel to Disrupt is on the startup.
- Selection is announced roughly two months before Disrupt.
- If the company already raised Series B or later, it is not a fit.

## After submitting
- Log as `needs-human` while closed. Log `submitted` only when the founder confirms.
