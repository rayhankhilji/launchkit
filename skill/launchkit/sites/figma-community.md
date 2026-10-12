---
id: figma-community
name: "Figma Community"
url: https://help.figma.com/hc/en-us/articles/360042293394
category: App Store / Marketplace
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "plugins: varies, often 1-2 weeks; files publish instantly"
verified: true
last_checked: 2026-10-12
---

# Figma Community

Figma's public library of plugins, widgets and files (templates, UI kits). Free to publish. Strong fit for design and dev tools: a plugin that pulls the user's product into Figma, or a free template file that links back to `product.url`.

## Before you start
- Plugins and widgets: built with the Figma Plugin API and published only from the Figma desktop app (macOS or Windows). Figma reviews them.
- Files: any Figma file can be published to Community from the share menu; no code needed. This is the cheapest option for most products (e.g. a template that showcases the product).
- A Figma account (email or Google) and a Community profile.
- Selling: paid plugins require approved creator status and Stripe. Figma currently isn't approving new creators for paid files.

## Field map (plugin publish modal)

| Field on the site | Limit / format | Fill with |
|---|---|---|
| Name | text | `product.name` or "<product> for Figma" |
| Tagline | short text | `product.tagline` |
| Description | text | `product.description_medium` + setup steps, link to `links.docs` |
| Category | dropdown (e.g. Design tools, Software development) | closest to `product.categories[0]` |
| Icon | 128x128 | `assets.logo_square` |
| Thumbnail | image or video, 1920x1080 | hero image of the plugin in use |
| Carousel | up to 9 images/videos | `assets.screenshots`, `assets.demo_gif` |
| Playground file | optional Figma file | a file where people can try it |
| Data security disclosure | optional form | answer from how the plugin handles data (Figma reviews it, up to 2 weeks) |
| Support contact | email or URL | `submission.email` or `links.docs` |
| Network access | declared domains | from the plugin manifest |
| Pricing | free / one-time / subscription | free unless the user is an approved seller |

## Steps
1. Manual. Don't publish from the user's account.
2. Suggest it if the audience is designers or front-end devs. Offer two paths: a plugin (needs code) or a free Community file (needs only a nice template).
3. Plugin: desktop app > Figma menu > Plugins > Manage plugins > ... > **Publish**, fill the modal, submit. Files: Share > Publish to Community.
4. `launchkit mark figma-community needs_human --note "needs plugin build or template file"`

## Make the listing perform
- Thumbnails drive clicks in browse; show the result, not the logo.
- A playground file lets people try the plugin before running it on real work and lifts installs.
- Filling the data security form shows a disclosure badge to logged-in users, which helps for plugins that call external APIs.
- Match Figma's UI and handle offline state; broken or slow plugins get removed.
- Link to docs in the description; reviewers expect setup instructions.

## Gotchas
- Plugins that change files without user awareness, need external packages or exploit the API get banned.
- A paid plugin can't be made free later or unpublished, only delisted.
- Major functional changes need a new plugin and a new review.

## After submitting
- The plugin shows "In review" under Published. Figma emails the decision. Share the `figma.com/community/plugin/<id>` link.
