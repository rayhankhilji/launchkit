---
id: the-rundown-ai-tools-supertools
name: "The Rundown AI Tools (Supertools)"
url: https://www.therundown.ai/submit
category: AI Directory
mode: form
pricing: Free/Paid
login: none
captcha: none
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# The Rundown AI Tools (Supertools)

Supertools is the tools directory of The Rundown AI, a newsletter with 2,000,000+ readers. rundown.ai now redirects
to therundown.ai. There is no web form any more: free recommendations go by email, and newsletter features are paid
advertising.

## Before you start
- Free route: an email to support@therundown.ai with the tool's name, URL, category and a one-sentence description.
  Sending email from the user's account needs explicit approval (docs/05). Draft it with `lk draft` and mark `drafted`.
- Paid route: "Newsletter Feature" / "Advertise with The Rundown" (pricing not public). Skip at budget 0.

## Field map (email)

| Item they ask for | Format | Fill with |
|---|---|---|
| To | email | support@therundown.ai |
| Subject | one line | "Supertools submission: `product.name`" |
| Tool name | text | `product.name` |
| URL | URL | `product.url` |
| Category | text | `product.categories[0]` in plain words (e.g. "Coding", "Writing", "Productivity") |
| One-sentence description | 1 sentence | `product.description_short` cut to its first sentence |
| Sign-off | text | `founder.name`, `founder.role` |

## Steps
1. Open https://www.therundown.ai/submit and confirm it still says to email support@therundown.ai.
2. Search https://www.therundown.ai/tools for `product.name`. If listed, mark `live` and stop.
3. Write the email above, under 80 words, no attachments. `lk draft the-rundown-ai-tools-supertools -` with it.
4. Mark `drafted`. Send only if the user approves and gives inbox access; then mark `submitted`.

## Make the listing perform
- Editors curate for their readers (professionals applying AI at work). Lead with the job it does at work and the
  result, not the model under the hood.
- One sentence only, as asked. Long pitches are less likely to be read.
- A tool that gets into Supertools can later be picked up in the newsletter's tools section, but that is editorial,
  so don't ask for it in the email.

## After submitting
- No confirmation is promised. Check the Tools page after 2-4 weeks.
