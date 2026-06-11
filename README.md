# Sell Lemons Wiki

Astro + Cloudflare Pages Roblox wiki hub for Sell Lemons.

This repository is a static-site wiki hub for the Roblox game Sell Lemons. It uses static output and deploys to Cloudflare Pages with `dist/`.

## Default navigation

The default navigation is configuration-driven:

```text
Home
Codes
Progression
Income Sources
Rebirths
Deals
Tools
```

Language candidates are:

```text
English
Thai
Filipino
Indonesian
```

Only English is completed by default. Thai, Filipino, and Indonesian are language candidates only. They must not generate pages or enter sitemap until localized content is completed.
Unfinished language candidates are hidden from the first-screen header until localized pages are complete.

## Launch modes

### minimal

Publishes only:

```text
/
/about/
/contact/
/editorial-policy/
/privacy/
/terms/
```

### wiki-hub

Publishes:

```text
/
/codes/
/progression/
/income-sources/
/rebirths/
/deals/
/beginner-guide/
/money-fast/
/best-upgrades/
/profit-calculator/
/sewer-maze-map/
/lever-sequence/
/ascension/
/evolution/
/badge-tracker/
/sewer-key/
/ufo-key/
/ad-policy/
/about/
/contact/
/editorial-policy/
/privacy/
/terms/
```

About, contact, and editorial policy are exported and included in sitemap. Privacy and terms are exported but excluded from sitemap.

## AdSense readiness checklist

Before review, verify:

```text
/about/ exists and explains site ownership and evidence boundaries
/contact/ exists and gives a reachable contact path
/editorial-policy/ exists and explains verification, corrections, and unsafe content boundaries
/privacy/ exists, outputs HTML, and remains noindex
/terms/ exists, outputs HTML, and remains noindex
Footer links to About, Contact, Privacy, Terms, Editorial Policy, and Ad Policy
sitemap.xml includes /, /codes/, /progression/, /income-sources/, /rebirths/, /deals/, English guide/tool pages, /about/, /contact/, /editorial-policy/, and /ad-policy/
sitemap.xml excludes /privacy/, /terms/, /guide/, /updates/, /scripts/, /macros/, /executor/, /exploit/, /th/, /fil/, and /id/
No fake active codes, rewards, value rows, or official claims are published
No unsafe exploit, executor, macro, or script pages are generated
```

Run before review:

```bash
npm run validate:template
npm test
npm run build
npm run validate:static-export
npm run check
```

## Evidence policy

Use three labels:

```text
verified
community-reported
pending
```

Verified content requires official Roblox page, Roblox public API, official channel, or in-game proof.

Community-reported content is only a research signal and must not be presented as verified.

Do not invent active codes, rewards, income source stats, rebirth multipliers, deal rates, or official claims.

## Themed icons

The template generates favicon and PWA assets from site configuration. New sites should not reuse a fixed template icon.

Configuration lives in:

```text
src/data/config.ts
```

Supported icon settings:

```text
assets.iconTheme
assets.brandColor
assets.accentColor
```

Supported icon themes:

```text
default
magic
farm
anime
combat
racing
simulator
```

Example initialization:

```bash
npm run init:new-site -- \
  --site-name "Sell Lemons Wiki" \
  --game-name "Sell Lemons" \
  --domain "https://selllemonswiki.online" \
  --contact-email "tangjei414@gmail.com" \
  --roblox-url "https://www.roblox.com/games/79268393072444/Sell-Lemons" \
  --launch-mode wiki-hub \
  --icon-theme simulator \
  --brand-color "#236b2e" \
  --accent-color "#facc15"
```

During `npm run build`, the generator creates:

```text
favicon.ico
favicon.svg
icon.svg
icon-16.png
icon-32.png
icon-48.png
icon-96.png
icon-192.png
icon-512.png
icon-192.webp
icon-512.webp
apple-touch-icon.png
site.webmanifest
```

## GA4 event tracking

This site includes a minimal GA4 event helper for reusable event tracking.

Default event names:

```text
copy_action
outbound_link_click
tool_input_change
tool_result_view
related_guide_click
```

Reusable files:

```text
src/lib/analytics.ts
src/components/TrackedLink.astro
src/components/CopyButton.astro
src/components/ToolEventTracker.astro
docs/ANALYTICS_EVENTS.md
```

Privacy rule: do not send email addresses, usernames, IP addresses, phone numbers, passwords, account data, or raw private user input to GA4.

The helper only sends real events in production. In local development it uses `console.debug`. If `window.gtag` does not exist, no error is thrown.

## Static SEO files

The build generates English-named static files:

```text
sitemap.xml
robots.txt
llms.txt
llms-full.txt
```

These files are written to `dist/` during `npm run build`.

Default sitemap routes are:

```text
/
/codes/
/progression/
/income-sources/
/rebirths/
/deals/
/beginner-guide/
/money-fast/
/best-upgrades/
/profit-calculator/
/sewer-maze-map/
/lever-sequence/
/ascension/
/evolution/
/badge-tracker/
/sewer-key/
/ufo-key/
/ad-policy/
/about/
/contact/
/editorial-policy/
```

Default HTML output also includes:

```text
/privacy/
/terms/
```

## Create a new site

### Minimal launch

```bash
npm install
npm run init:new-site -- \
  --site-name "Example Game Guide" \
  --game-name "Example Game" \
  --domain "https://example.com" \
  --contact-email "admin@example.com" \
  --roblox-url "https://www.roblox.com/games/123/example" \
  --launch-mode minimal
```

### Wiki hub launch

```bash
npm install
npm run init:new-site -- \
  --site-name "Example Game Guide" \
  --game-name "Example Game" \
  --domain "https://example.com" \
  --contact-email "admin@example.com" \
  --roblox-url "https://www.roblox.com/games/123/example" \
  --launch-mode wiki-hub \
  --icon-theme magic
```

Optional arguments:

```text
--primary-keyword "Example Game guide"
--creator-name "Example Creator"
--universe-id "123456"
--root-place-id "123456"
--max-players "12"
--official-title "Example Game"
--genre "Adventure"
--icon-theme "magic"
--brand-color "#17241f"
--accent-color "#facc15"
```

The initialization script updates:

```text
src/data/config.ts
src/data/game.ts
src/content/home.ts
astro.config.mjs
package.json name
```

## Required checks

Run before deployment:

```bash
npm run validate:template
npm test
npm run build
npm run validate:static-export
npm run check
```

## Cloudflare Pages

Use these settings:

```text
Framework preset: Astro
Build command: npm run build
Build output directory: dist
Node.js version: 20 or 22
```
