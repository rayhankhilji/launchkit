---
id: y-combinator
name: Y Combinator
url: https://www.ycombinator.com/apply
category: Crowdfunding / Awards
mode: manual
pricing: Free
login: YC account (email and password, created on the apply page)
captcha: none seen on the public page
backlink_required: no
review_time: Decision by a set date per batch (W2027 on-time apps decided by Dec 11, 2026). Late apps are reviewed, most within a month.
verified: true
last_checked: 2026-10-12
---

# Y Combinator

An accelerator application, not a directory listing. YC invests $500,000 in each company it accepts. The YC company directory and Launch YC (ycombinator.com/launches) are only open to companies already in YC, so there is nothing to submit there until the founder is accepted.

## Before you start
- This is a founder decision. Don't start or submit the application for the user. Draft answers for them to paste.
- Current batch on 2026-10-12: Winter 2027, January to March in San Francisco. On-time deadline Nov 2, 2026, 8pm PT. Late applications are still read.
- Early Decision exists for later batches (Spring, Summer, Fall) if the founder wants an answer now and to start later.
- No incorporation needed to apply. Solo founders and idea-stage companies are accepted (YC says about 40% of a recent batch was just an idea).
- Non-US companies are funded, but usually need a US, Canada, Singapore or Cayman parent company. That can be set up after acceptance.
- Each founder needs a short video intro. Have a one-minute founder video ready.
- One application per batch. Reapplying is normal and encouraged.

## Field map
The full form sits behind a YC login, so field order below is from YC's public FAQ and apply guide, not a live view. Confirm in the form.
| Site field | Profile key / instruction |
|---|---|
| Company name | `product.name` |
| Company URL | `product.url` |
| Describe what your company does in 50 characters or less | `product.tagline_short` (check length) |
| What is your company going to make? | `product.description_medium`, rewritten plain and literal |
| Location / where you will be based | `company.city`, `company.country` |
| Founders (name, email, role, LinkedIn, background) | `founder.name`, `founder.email`, `founder.role`, `founder.linkedin`, `founder.bio_short` |
| Something impressive each founder has built or achieved | ask the founder; never invent |
| How far along are you / users / revenue | `product.status`, `product.launch_date`; numbers from the founder only |
| Why this idea, what do you understand that others don't | ask the founder |
| Competitors | `product.competitors_alternatives` |
| How will you make money | `product.pricing_model`, `product.pricing_details` |
| Founder video | founder records it; not in the profile |
| Demo (optional) | `links.demo_video` |
| Equity, legal entity, prior funding | ask the founder |

## Steps
1. Open https://www.ycombinator.com/apply and read the batch dates and deadline shown.
2. Tell the user the deadline and the late-application rule, and ask if they want to apply to this batch or Early Decision.
3. Draft every answer from the profile in a text file. Leave founder-only answers (impressive thing, insight, traction numbers) as questions.
4. Hand the draft to the founder. They click "Apply", create a YC account, paste answers, record the video, and submit.
5. Do not press submit yourself.

## Make the listing perform
- YC asks for matter-of-fact answers. Paul Graham's apply advice: say what you are making in plain words, as if to a friend. Cut adjectives.
- The 50 character description should say what the product is, not why it matters. Use `product.tagline_short`, not marketing copy.
- Real numbers beat claims. If there are users or revenue, state them exactly. If not, say so and show what was built.
- Founder strength matters most early. Push the founder to give a concrete answer to the "impressive thing you built" question.
- Applying before the on-time deadline is best. Late apps are read but after on-time ones.
- After acceptance: Launch YC (ycombinator.com/launches) and the YC company directory become available. Use `copy` launch drafts then.

## Gotchas
- Interviews are by video in the weeks before the decision date. The decision comes the same day as the interview.
- Do not reuse marketing copy. YC readers skim thousands of apps and hype reads badly.
- Don't list co-founders who are not committed full time. Ask the founder.
- The YC Deals page is for offering deals to YC companies, not for listing a startup.

## After submitting
- Note the batch and decision date in the run log as `submitted` only if the founder confirms they sent it, else `needs-human`.
- If rejected, YC accepts reapplications next batch. Many accepted founders applied more than once.
