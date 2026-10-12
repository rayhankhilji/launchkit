---
id: hugging-face-spaces
name: "Hugging Face Spaces"
url: https://huggingface.co/new-space
category: AI Directory
mode: manual
pricing: Free/Paid
login: email
captcha: unknown
backlink_required: no
review_time: instant
verified: true
last_checked: 2026-10-12
---

# Hugging Face Spaces

Host a live demo of an AI product on Hugging Face. Spaces show up in HF search, on the trending Spaces page and on model pages that the Space uses. It is a build task, not a form: the user needs a demo app.

## Before you start
- Artifact: a small demo app. Options are Gradio, Docker or static HTML.
- Cost (from HF docs, 2026-10-12): **Static Spaces are free for everyone. Gradio and Docker Spaces need a paid plan** (PRO $9/month for personal accounts, Team/Enterprise for orgs). Free personal accounts can still host up to 2 Gradio Spaces on ZeroGPU. Default CPU Basic hardware (2 vCPU, 16 GB) has no hourly cost; GPUs are billed hourly.
- Login: a Hugging Face account (`/new-space` redirects to login). Account creation may need email confirmation.
- Decide with the user: is a demo worth building, and which SDK fits the budget? At budget 0, a static Space or a ZeroGPU Gradio Space.

## Field map

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Owner | user or org | the user's org if they have one |
| Space name | slug | `product.name` in kebab case |
| Short description | one line | `product.tagline_short` |
| License | select | the repo license if `product.open_source`, else leave blank |
| SDK | Gradio / Docker / Static | per the decision above |
| Hardware | select | CPU Basic (free) or ZeroGPU |
| Visibility | public / protected / private | Public |
| README card (`README.md` YAML) | title, emoji, colorFrom/To, sdk, tags, short_description | `product.name`, `product.tagline_short`, tags from `product.tags` |

## Steps
1. Ask the user whether to build a demo. If not, mark `skipped` ("manual, needs demo app").
2. If yes: create the Space at https://huggingface.co/new-space, push the demo code with git, and set the README card.
3. In the Space README body, add 2-3 sentences from `product.description_short` and a link to `product.url`.
4. Mark `submitted` with the Space URL once it builds and runs.

## Make the listing perform
- Trending is driven by likes and usage over recent days. Share the Space link in the launch posts and ask early users to like it.
- Use the README `tags` and link the models it uses (`models:` in the card) so the Space appears on those model pages.
- A short, specific `short_description` and a good thumbnail emoji/colour make the card stand out in search.
- Keep it working: sleeping or broken Spaces drop out of trending fast.

## Gotchas
- Free CPU Spaces sleep after inactivity; the first visit is slow.
- Don't put API keys in code; use Space secrets.

## After submitting
- Watch the Space logs after launch posts go out, and reply to Community tab questions if the user asks.
