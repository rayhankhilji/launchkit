---
id: python-weekly
name: "Python Weekly"
url: https://www.pythonweekly.com/
category: Newsletter
mode: pitch
pricing: Free
login: none
captcha: none
backlink_required: no
review_time: "weekly, Thursdays; no confirmation"
verified: true
last_checked: 2026-10-12
---

# Python Weekly

A free weekly email of hand-picked Python links, curated by Rahul Chaudhary and published on beehiiv every Thursday (issue 766 went out on 2026-10-08). Each issue has these sections: Articles, Tutorials and Talks; Interesting Projects, Tools, and Libraries; New Releases; Upcoming Events and Webinars. Only worth the time if the product is a Python library, a Python dev tool, or has a real Python angle (SDK, tutorial).

## Before you start
- Fit check: open source Python package (`product.open_source`, `product.repo_url`) or a tool aimed at Python developers. If the product isn't for Python developers, mark `skipped` ("not a fit").
- The site has no public submission form, no contact page and no visible email (the /about, /sponsor and /advertise paths all 404 back to the homepage). Treat the contact route as unconfirmed.
- Paid placements in the issue ("In partnership with" blocks) come through the beehiiv ad network, not a direct form. Skip at budget 0.

## Field map

No form. Send a short note to the curator:

| Part | Limit / format | Fill with |
|---|---|---|
| Channel | reply to an issue | subscribe with `submission.email` at https://www.pythonweekly.com/subscribe, then reply to the next issue (unconfirmed that replies are read) |
| Subject | short | "Project for Interesting Projects: " + `product.name` |
| Body line 1 | 1 sentence | `product.description_short`, rewritten to name the Python use |
| Body line 2 | 1 sentence | install line or repo, e.g. `pip install ...` and `product.repo_url` |
| Link | URL | `product.repo_url` if open source, otherwise `product.url` |
| Sign-off | name | `founder.name` |

## Steps
1. Open https://www.pythonweekly.com/ and the latest issue. Read the "Interesting Projects, Tools, and Libraries" section: entries are a linked name plus one plain sentence.
2. Write the one-sentence description in that exact style (no marketing, what it does in Python terms).
3. `launchkit draft python-weekly -` with the note and the suggested channel, then `launchkit mark python-weekly drafted --note "no public form; reply to issue after subscribing"`.
4. Only with user approval: subscribe with `submission.email` and reply to an issue from the user's inbox.

## Make the listing perform
- A GitHub repo with a clear README, a pip install line and a recent release gets picked far more often than a SaaS landing page.
- A tutorial or blog post ("How we built X in Python") fits the Articles section, which is the biggest one. If the user has one, pitch that instead of the product page.
- A tagged release lands in "New Releases"; time the note for the week of a version bump.

## Gotchas
- No confirmation, no reply. The only signal is seeing the link in an issue.
- Don't pitch closed-source SaaS with no Python angle; it won't run and burns the contact.

## After submitting
- Check the next two Thursday issues in the archive at https://www.pythonweekly.com/archive. If included, mark `submitted` with the issue URL.
