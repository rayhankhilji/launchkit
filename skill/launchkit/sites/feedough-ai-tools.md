---
id: feedough-ai-tools
name: "Feedough AI tools"
url: https://www.feedough.com/contact-us/
category: AI Directory
mode: form
pricing: Free
login: none
captcha: unknown
backlink_required: unknown
review_time: unknown
verified: false
last_checked: 2026-10-12
---

# Feedough AI tools

**No public submission path.** Feedough is a startup education site whose "AI Tools" section is its own set of 250+ free generators (business plan, pitch, branding, copywriting tools) built by Feedough. It does not list third-party AI products and has no submit, "add tool" or advertise page. `/submit-ai-tool/` returns 404. The only channel is the general contact page.

## Before you start
- Default: skip. `launchkit mark feedough-ai-tools skipped --note "no third-party listings; own tools only"`.
- If the user wants coverage anyway, treat it as a `pitch`: a short note to the editors through the contact page suggesting the product for one of their "best AI tools for X" articles.

## Field map

Contact page only; the form is loaded by script and its fields were not visible in the page source.

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `founder.name` |
| Email | email | `submission.email` |
| Message | textarea | 3-4 sentences from `copy.press_pitch`: what the product does, which Feedough article or category it fits (e.g. "AI Tools for Marketing and Sales"), link |

## Steps
1. Mark `skipped` as above unless the user enabled `pitch` mode.
2. If pitching: find the Feedough listicle that matches (`https://www.feedough.com/ai-tools-for-<topic>/`), write the note, save with `lk draft feedough-ai-tools -`, mark `drafted`. Send only with user approval.

## Make the listing perform
- Feedough's traffic comes from SEO articles on startup topics. A pitch has a chance only if it names a specific article and explains why the tool belongs next to the ones already there.

## Gotchas
- Don't confuse Feedough's own generators with a directory. There is nowhere to upload a logo or listing.

## After submitting
- No status tracking. If an article later mentions the product, mark `live` with that URL.
