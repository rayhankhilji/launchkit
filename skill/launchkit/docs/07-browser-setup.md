# Browser setup

Launchkit needs a browser your agent can control, ideally one **already signed into the user's Google/GitHub**
so OAuth sign-ups are one click.

Pick whatever your agent supports:

- **Built-in browsers** (Devin, Cursor's browser, Claude in Chrome extension, OpenAI Operator-style agents):
  nothing to install. Ask the user to sign into Google in that browser once.
- **Playwright MCP** (works with Claude Code, Cursor, Codex, Windsurf...): add the server
  `npx @playwright/mcp@latest`. By default it keeps a persistent profile, so logins survive between runs.
  For parallel workers, run one instance per worker with separate profiles (see its `--isolated` /
  `--user-data-dir` options in the Playwright MCP README). Some versions can attach to the user's existing
  Chrome through a browser extension. Check the README for the current flag.
- **Chrome DevTools MCP**: `npx chrome-devtools-mcp@latest`, which drives a real Chrome.
- **Computer-use tools**: slower, but work with any desktop browser.

Example Claude Code setup:

```
claude mcp add playwright -- npx @playwright/mcp@latest
claude mcp add launchkit -- node .launchkit/tool/bin/launchkit.mjs mcp
```

After setup, open https://accounts.google.com in the controlled browser and have the user sign in (and into the
sign-up inbox if `inbox_access: browser`). Then start the interview.
