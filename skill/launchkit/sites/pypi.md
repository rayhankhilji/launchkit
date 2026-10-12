---
id: pypi
name: "PyPI"
url: https://packaging.python.org/en/latest/tutorials/packaging-projects/
category: Dev / Open Source
mode: manual
pricing: Free
login: email
captcha: none
backlink_required: no
review_time: "instant on upload"
verified: true
last_checked: 2026-10-12
---

# PyPI

The Python Package Index (913,000+ projects at last check). Worth doing when the product has a Python SDK, CLI or integration. There's no listing form: the user builds a package and uploads it.

## Before you start
- `manual` mode: don't upload anything yourself. Explain the steps, then mark `needs_human` (or `skipped` if there's no Python package).
- Artifact: a project with `pyproject.toml`, `README.md`, a license and source. Built into a wheel and sdist with `python -m build`.
- Account: free account on pypi.org with 2FA (required for publishing). Best path is Trusted Publishing from GitHub Actions, no token stored. TestPyPI (test.pypi.org) is a separate account for dry runs.
- Name: check `https://pypi.org/project/<name>/`. Names are normalized (case, `-`, `_` and `.` count as the same).

## Field map (pyproject.toml `[project]`)

| Field | Format | Fill with |
|---|---|---|
| name | normalized name | `product.name` slug |
| version | PEP 440 | `0.1.0` |
| description | one line, shown in search | `product.tagline` |
| readme | file | `README.md` (becomes the project page) |
| requires-python | spec | e.g. `>=3.9` |
| license | SPDX expression | repo license |
| authors | name + email | `founder.name`, `founder.email` |
| keywords | list | `product.tags` |
| classifiers | Trove list | Development Status, License, Programming Language :: Python :: 3, Topic matching `product.categories` |
| [project.urls] | Homepage, Documentation, Repository, Issues | `product.url`, `links.docs`, `product.repo_url`, `<repo>/issues` |

## Steps (for the user)
1. Fill `pyproject.toml` as above and pick a build backend (hatchling, setuptools, flit or pdm).
2. `python -m pip install --upgrade build twine` then `python -m build`.
3. Test first: `python -m twine upload --repository testpypi dist/*`, then `pip install` from TestPyPI.
4. Real upload: `python -m twine upload dist/*`, or set up a Trusted Publisher on the PyPI project and publish from CI.
5. `launchkit mark pypi submitted --listing-url https://pypi.org/project/<name>/`.

## Make the listing perform
- The README is the whole page. Lead with install (`pip install <name>`), a short usage example and a docs link. Use Markdown with `text/markdown`.
- Project URLs render as sidebar links; fill all four.
- Classifiers drive the browse filters, so add accurate Topic and Python version ones.

## Gotchas
- A version number can never be reused, even after deleting a file.
- Typosquatting names close to popular packages get flagged.
- Don't paste API tokens into files or chat.

## After submitting
- Add the PyPI badge and `pip install` line to the docs and README.
