---
id: n8n-integrations-templates
name: "n8n Integrations / Templates"
url: https://creators.n8n.io/
category: No-Code
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: unknown
verified: true
last_checked: 2026-10-12
---

# n8n Integrations / Templates

n8n's template library (n8n.io/workflows) and its community nodes. Submissions go through the n8n Creator Portal at creators.n8n.io. Good for products with an API or a clear automation use case: a template that uses the product shows up in n8n search and inside the n8n editor.

## Before you start
- Artifact, one of:
  - a **workflow template**: an exported n8n workflow (JSON) that uses the product via its community node or the HTTP Request node, with sticky notes explaining setup.
  - a **community node**: an npm package named `n8n-nodes-<name>` with the `n8n-community-node-package` keyword. Check n8n's current verification rules in the Creator Portal before publishing.
- A Creator Portal account (sign up at creators.n8n.io/register). The signup page returned a 500 error on 2026-10-12, so retry later if it fails.
- Template submission form fields are behind login and unconfirmed.

## Field map

Unconfirmed beyond public template pages, which show these parts:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Workflow | JSON paste or import | the workflow export |
| Title | short, verb-led | "Sync new <product> leads to Google Sheets" style. Name the apps used |
| Description | markdown | who it's for, what it does, setup steps, credentials needed. Link `product.url` once |
| Categories | select | e.g. AI, Sales, Marketing, IT Ops, Engineering. Map from `product.categories` |
| Creator profile | name, avatar, bio, links | `founder.name`, `founder.avatar`, `founder.bio_short`, `links.twitter` |
| Community node (separate flow) | npm package name | the published package at creators.n8n.io/nodes |

## Steps
1. This is `manual`. Recommend a workflow template first (no code needed), and a community node if the user has developers.
2. The user builds the workflow in n8n, adds sticky notes, removes credentials and test data, exports JSON.
3. Sign in at https://creators.n8n.io/, open the hub, submit the template. n8n reviews before it goes public.
4. `launchkit mark n8n-integrations-templates submitted --note "n8n creator review"`

## Make the listing perform
- Templates that combine AI with popular apps (OpenAI, Slack, Google Sheets, Gmail) get the most views right now. Pair the product with one of those.
- Put the outcome in the title, not the product name alone.
- Several focused templates beat one giant workflow.
- Become a verified creator (badge, creators directory listing, private Discord) once a few templates are approved.

## Gotchas
- Never leave API keys inside the exported JSON.
- Test the imported template in a fresh n8n instance before submitting.

## After submitting
- Templates appear at n8n.io/workflows and in the in-app template browser. Answer questions on the n8n forum thread if one is linked.
