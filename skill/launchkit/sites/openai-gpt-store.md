---
id: openai-gpt-store
name: "OpenAI GPT Store"
url: https://chatgpt.com/gpts
category: AI Directory
mode: manual
pricing: Paid
login: email
captcha: unknown
backlink_required: no
review_time: "automated checks, usually instant"
verified: true
last_checked: 2026-10-12
---

# OpenAI GPT Store

Publish a custom GPT that is useful on its own and links to the product. As of 2026-10-12, OpenAI's help page "Sharing and publishing GPTs" says **personal ChatGPT accounts (Free, Go, Plus, Pro) can no longer create or publish new GPTs**; existing ones can still be shared and edited. Creating and publishing now needs a Business, Enterprise or Edu workspace with GPT creation allowed by its admin. This is a manual build task for the user.

## Before you start
- Ask: does the user have a ChatGPT Business/Enterprise/Edu workspace that allows GPT building and public sharing? If not, mark `skipped` ("needs ChatGPT Business workspace").
- Artifact: a GPT configuration (name, description, instructions, conversation starters, optional knowledge files and Actions).
- Public listing in the store needs a **verified builder profile** (a verified domain via DNS TXT record, or a linked social profile), a category, and passing OpenAI's usage-policy checks. GPTs with Actions need a valid privacy policy URL.

## Field map

| Field in the GPT builder | Limit / format | Fill with |
|---|---|---|
| Name | short text | `product.name` plus the task, e.g. "<name> Helper" (don't use OpenAI brand names) |
| Description | one line | `product.tagline` |
| Instructions | long text | how the GPT helps, based on `product.use_cases`; when relevant, point users to `product.url` |
| Conversation starters | up to 4 | four real tasks from `product.use_cases` |
| Profile picture | image | `assets.logo_square` |
| Actions (optional) | OpenAPI schema | only if the product has a public API (`links.docs`) |
| Privacy policy URL | URL | required for public Actions; the user's privacy page |
| Builder profile | domain or social | verify `product.url` domain, otherwise `links.twitter`/`links.linkedin` |
| Share: GPT Store + category | select | closest store category to `product.categories[0]` |

## Steps
1. Confirm the workspace requirement with the user. Without it, mark `skipped`.
2. Help the user draft the GPT fields above (`lk draft openai-gpt-store -`).
3. The user builds the GPT at https://chatgpt.com/gpts/editor, verifies the builder profile in Settings > Builder profile, then shares to the GPT Store with a category.
4. Mark `submitted` with the GPT link, then consider `gpts-hunter` with that link.

## Make the listing perform
- Store search matches name and description. Put the task people search for in both ("PDF to slides", not just the brand).
- Rankings use conversations and ratings. A GPT that finishes a task fully inside ChatGPT gets better ratings than one that just sends people to a website.
- Conversation starters are the first thing users click. Make each one a complete, concrete request.

## Gotchas
- OpenAI's policy forbids GPTs that are mainly ads. Link to the product where it helps, not in every reply.
- Workspace admins can block public sharing even if building is allowed.

## After submitting
- Check the GPT's page in the store and its conversation count after a week. Update instructions based on reviews.
