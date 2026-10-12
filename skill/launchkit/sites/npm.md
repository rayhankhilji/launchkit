---
id: npm
name: "npm"
url: https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages
category: Dev / Open Source
mode: manual
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant on publish"
verified: true
last_checked: 2026-10-12
---

# npm

The JavaScript package registry. A public package is free and shows up in npmjs.com search and in every developer's terminal. Useful when the product has a JS/TS SDK, CLI, or plugin. There is no form: you publish a package with the npm CLI.

## Before you start
- This is `manual` mode: don't publish anything yourself. Explain the process to the user and mark `needs_human` (or `skipped` if there's no JS package to ship).
- Artifact: a package folder with `package.json`, `README.md`, license file and built code. The package has to do something useful, not be a placeholder.
- Account: free npm account. 2FA is expected for publishing; npm is restricting tokens that bypass 2FA (account changes Aug 2026, direct publishing Jan 2027 per the npmjs.com banner), so CI should use trusted publishing / provenance.
- Name: check `https://www.npmjs.com/package/<name>`. If `product.name` is taken, use a scope like `@<company>/<name>` (scoped public packages need `--access public`).

## Field map (package.json)

| Field | Format | Fill with |
|---|---|---|
| name | lowercase, URL safe, scoped or not | `product.name` slug or `@company/slug` |
| version | semver | start at `0.1.0` or `1.0.0` |
| description | one line, shown in search | `product.tagline` |
| keywords | array | `product.tags` plus competitor names people search |
| homepage | URL | `product.url` |
| repository | git URL | `product.repo_url` |
| bugs | URL | `<repo_url>/issues` |
| license | SPDX id | the repo license |
| author | text | `founder.name` <`founder.email`> |
| README.md | Markdown | install line, 10 line usage example, link to `links.docs` |

## Steps (for the user)
1. `npm login` (or create an account at npmjs.com and enable 2FA).
2. In the package folder fill `package.json` as above, run `npm pack --dry-run` and check the file list.
3. `npm publish` (add `--access public` for scoped packages; add `--provenance` from CI).
4. Open `https://www.npmjs.com/package/<name>` to confirm.
5. Record: `launchkit mark npm submitted --listing-url https://www.npmjs.com/package/<name>`.

## Make the listing perform
- npm search ranks on quality, popularity and maintenance signals: a README, repository link, tests, recent releases and real downloads all help.
- Put the key search words in `description` and `keywords`; that's what npm search matches.
- Ship types (`types` field or bundled `.d.ts`) and say so in the README.
- Link the package from the product docs so real installs come in.

## Gotchas
- A published version can't be republished; unpublish rules are strict after 72 hours.
- Name squatting or empty packages get removed.
- Never commit an npm token to the repo.

## After submitting
- Add the npm badge and install command to the product docs and repo README.
