---
id: jetbrains-marketplace
name: "JetBrains Marketplace"
url: https://plugins.jetbrains.com/plugin/add
category: Dev / Open Source
mode: manual
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "unknown, manual review"
verified: true
last_checked: 2026-10-12
---

# JetBrains Marketplace

The plugin store built into IntelliJ IDEA, PyCharm, WebStorm, GoLand, Rider and the other JetBrains IDEs. Relevant only if the product ships an IDE plugin. Every new plugin and every update is reviewed by hand.

## Before you start
- `manual` mode: explain and mark `needs_human`, or `skipped` with "no JetBrains plugin".
- Artifact: a plugin ZIP or JAR built with the IntelliJ Platform Gradle Plugin (start from the IntelliJ Platform Plugin Template), with `plugin.xml` filled.
- Account: free JetBrains Account. The upload page (https://plugins.jetbrains.com/plugin/add) asks you to sign in and accept the developer agreement. Paid plugins need extra vendor setup; launch as free.
- Approval rules that cause rejections: logo must be custom (not the template logo) and given at 40x40 (pluginIcon.svg); name must be unique and must not contain "Plugin", "IntelliJ", "JetBrains" or a JetBrains product name; vendor website and email must work; description must be in English first.

## Field map

| Field | Format | Fill with |
|---|---|---|
| plugin.xml `<name>` | unique text | `product.name` (plus the job if needed), no banned words |
| plugin.xml `<vendor>` url, email | URL, email | `company.website` or `product.url`, `founder.email` |
| plugin.xml `<description>` | HTML, English first, min 40 chars | `product.description_medium` plus a features list from `product.key_features` |
| plugin.xml `<change-notes>` | HTML | what's in this version |
| pluginIcon.svg / pluginIcon_dark.svg | 40x40 SVG in META-INF | from `assets.logo_square` |
| Upload: file | ZIP/JAR | the built plugin |
| Upload: License | URL or choice | repo license URL (open source) |
| Upload: Tags / category | choices | closest match to `product.categories` |
| Listing page: source code, docs, issue tracker | URLs | `product.repo_url`, `links.docs`, `<repo>/issues` |
| Listing page: screenshots / video | images | `assets.screenshots`, `assets.demo_video` |

## Steps (for the user)
1. Build with `./gradlew buildPlugin` and run the Plugin Verifier (`./gradlew verifyPlugin`).
2. Sign in at https://plugins.jetbrains.com/plugin/add, upload the ZIP, choose license and tags, submit.
3. Wait for the review email. Fix anything flagged and upload again.
4. After approval, add screenshots and links on the plugin page.
5. `launchkit mark jetbrains-marketplace submitted --note "in review"`, then `live --listing-url <url>`.

## Make the listing perform
- The IDE's plugin search matches name and tags. Put the job word in the name ("Acme SQL Formatter").
- Screenshots of the plugin inside the IDE, plus a short GIF, matter more than marketing text.
- Ratings and downloads drive ranking; ask early users to rate it from the IDE.
- Staff picks come from quality and usefulness; keep updates current with new IDE versions.

## Gotchas
- Every update goes through review again.
- Missing compatibility range (`since-build`, `until-build`) leads to failed verification.

## After submitting
- Add the Marketplace link and "Install" button to docs and README.
