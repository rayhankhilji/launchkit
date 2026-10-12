---
id: docker-hub
name: "Docker Hub"
url: https://hub.docker.com/
category: Dev / Open Source
mode: manual
pricing: Free
login: email           # Docker ID; Google and GitHub sign-in also offered
captcha: unknown
backlink_required: no
review_time: "instant on push; DSOS application reviewed by Docker"
verified: true
last_checked: 2026-10-12
---

# Docker Hub

The default container registry. Not a directory you submit to: you publish an image so self-hosters can run the
product with one `docker run`. Relevant only if the product is self-hostable (open source or on-prem).

## Before you start
- Artifact needed: a working Dockerfile and image built for linux/amd64 (and arm64 ideally). The agent doesn't
  build or push images in a launch run; suggest it to the user if `product.open_source` and self-hosting apply.
- Account: free Docker Personal plan gives unlimited public repos (pulls by anonymous users are rate limited).
- Optional: the Docker-Sponsored Open Source (DSOS) program for non-commercial projects gives a verified badge and
  removes pull rate limits. Eligibility: public source, OSI license, image updates in the last 6 months, and no
  path to commercialisation (donations ok). A product with paid tiers doesn't qualify.

## Field map (repository settings)

| Field | Format | Fill with |
|---|---|---|
| Namespace | your Docker ID or org | org named after `product.name` if possible |
| Repository name | lowercase, digits, `-` `_` `.` | product slug |
| Short description | 100 chars | `product.tagline` |
| Visibility | Public / Private | Public |
| Overview (README) | Markdown | quick start (`docker run` / compose snippet), env vars, ports, volumes, link to `links.docs` and `product.repo_url` |
| Category tags | select | closest to `product.categories` |

## Steps
1. Mark `skipped` with "manual" unless the user wants to publish an image.
2. If they do: create the repo at https://hub.docker.com/repository/create, set name, short description, Public.
3. The user (or their CI) runs `docker tag` and `docker push <namespace>/<repo>:<version>` plus `:latest`.
4. Paste the Overview Markdown. Then `launchkit mark docker-hub live --listing-url https://hub.docker.com/r/<ns>/<repo>`.

## Make the listing perform
- Search ranking on Hub leans on pulls, stars and badges. Use semver tags, multi-arch builds, and a README that works
  without leaving the page.
- Link the Hub page from the repo README and from awesome-selfhosted / OpenAlternative entries.
- DSOS "Sponsored OSS" badge helps trust if eligible; apply at https://www.docker.com/community/open-source/application/.

## Gotchas
- Dockerising someone else's app is not a launch; publish under the product's own org.

## After submitting
- Track pulls on the repo page. Rebuild regularly so the image doesn't look stale.
