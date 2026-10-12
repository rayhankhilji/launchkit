---
id: submitaitools-org
name: "SubmitAITools.org"
url: https://submitaitools.org/submit-your-ai-tool/
category: AI Directory
mode: form
pricing: Free/Paid
login: unknown          # Login link in header; form may require an account
captcha: unknown        # custom "click the button with the X color" check before the form
backlink_required: unknown
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# SubmitAITools.org

AI tools directory with categories, "alternatives" pages, a Telegram channel, Substack newsletter and deals page.
The homepage says "Have an AI tool? Add it for free". Featured spots are sold on /promote/.

## Before you start
- Every visit to /submit-your-ai-tool/ (and /promote/) redirects to /verify/submit/, a "Human Verification" page that
  asks you to click the button of a named colour. This is a CAPTCHA. Do not solve it: mark `needs_human`
  ("SubmitAITools colour check") and ask the user to pass it in the attended browser, then continue.
- The real form is behind that check, so the field map below is unconfirmed.
- Categories on the site: Productivity, Education, Marketing, Business, Chatbot, Code & IT, Image, Video, Voice,
  Text & Writing, Life Assistant, Design & Art, Prompt, AI Detector, 3D, Github Repos, Other.

## Field map (unconfirmed, behind verification)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Tool name | text | `product.name` |
| Website URL | URL | `product.url` |
| Short description | short text | `product.tagline` |
| Description | long text | `product.description_long` |
| Category | select | from the list above; dev tools -> Code & IT, writing -> Text & Writing, open-source repo -> Github Repos |
| Pricing | select | `product.pricing_model` |
| Logo | upload | `assets.logo_square` |
| Email | email | `submission.email` |

## Steps
1. Search the homepage for `product.name`. If listed, mark `live` and stop.
2. Click **List Your Tool Free**. On the colour check, hand over to the user (`needs_human`).
3. After the user passes it, sign in if asked (header **Login**), choose the free option, fill the form, submit.
4. Screenshot to `.launchkit/evidence/submitaitools-org.png`; `launchkit mark submitaitools-org submitted --note "<confirmation>"`.

## Make the listing perform
- The site builds "alternatives" and comparison pages. Fill any competitors field with `product.competitors_alternatives`
  so the tool shows up on those pages.
- Open-source products fit the Github Repos category, which is less crowded.
- Skip the Promote / Featured ad slots at budget 0.

## After submitting
- Check search and the Dashboard link after a week.
