---
id: make-integromat-apps
name: "Make (Integromat) Apps"
url: https://developers.make.com/custom-apps-documentation/app-review/overview
category: No-Code
mode: manual
pricing: Free
login: email
captcha: unknown
backlink_required: no
review_time: "multi-stage (automatic + manual QA); no fixed SLA published"
verified: true
last_checked: 2026-10-12
---

# Make (Integromat) Apps

Make lists 3,000+ apps on make.com/en/integrations. To appear there, the product needs a Make custom app (connection plus modules that call the product's API) that passes Make's app review. Worth it for any SaaS with a public API and users who automate.

## Before you start
- Artifact: a custom app built in Make's web app editor or VS Code extension. It needs a public API with docs on the product's own domain (not a bare Heroku or AWS hostname).
- A Make account (free plan is fine for building).
- Prerequisites Make checks: the service isn't already on Make, the connection only asks for credentials the API needs, sensitive data is sanitized, error handling exists, there's a universal module, search/trigger modules have a limit parameter and pagination, and dates are formatted.
- Test scenarios that use every module at least once, run just before requesting review, plus one scenario that produces an error. No personal data in the logs.

## Field map

The review request form, after clicking **Publish** and opening the **Review** tab:

| Field on the site | Limit / format | Fill with |
|---|---|---|
| API documentation link | URL | `links.docs` |
| Test scenario links | URLs | links to the scenarios in the user's Make account |
| Relationship with the API vendor | select | usually "I am the vendor" |
| Partnership contact | name, email | `founder.name`, `founder.email` |
| Support contact | name, email | support address from the profile, else `founder.email` |
| Categories and subcategories | select | map `product.categories[0]` to Make's integration categories |
| Company logo | image | `assets.logo_square` |
| URL to the service | URL | `product.url` |
| Trademark and third-party T&C confirmations | checkboxes | user must confirm themselves |

## Steps
1. This is `manual`. Explain that it needs a developer to build the app, and point them to the Make Academy course "Getting started with custom apps".
2. Once built and tested: remove test modules and connections (public apps can't delete components), click **Publish**, set modules visible, open **Review**, fill the form, click **Request review**.
3. Make emails "App review: <app name>". An automatic review sends a PDF of issues, then a QA engineer reviews manually. Reply in that thread.
4. `launchkit mark make-integromat-apps submitted --note "Make app review requested"`

## Make the listing perform
- Ship the triggers and actions people search for first: "watch new records", "create record", "search records".
- Clear module labels and descriptions show up in the scenario builder, which is where users pick an app.
- Use the Technology Partner program (make.com/en/become-a-partner?type=technology) after approval for co-marketing.
- Publish scenario templates that pair the app with popular apps (Google Sheets, Slack, OpenAI).

## Gotchas
- Publishing can't be undone.
- Rerun scenarios after every fix; reviewers can't see expired logs.
- make.com pages sit behind a Cloudflare bot check, so open them in a normal browser session.

## After submitting
- Approved apps go into a planned release and Make emails when it ships. Keep the app maintained per Make's terms.
