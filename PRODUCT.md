# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

The library: Dart Sass sources in `src/`, compiled CSS in `dist/` (see AGENTS.md).

The demo site (GitHub Pages, cantilux.github.io/breakouts): a single static page, hand-written
HTML and CSS in `docs/` with no build step. It loads `docs/breakouts.css`, a copy of the built
library, plus its own `docs/docs.css`. The **Docs** workflow deploys `docs/` as it is from the
`release` branch, so the page always shows the version that is on npm.

## Users

Front-end developers, in two situations, served in this order:

1. **Evaluating.** They arrived from npm, GitHub or a search and want to know within seconds what
   the grid does, see it working, and decide whether to install it.
2. **Using.** They already have it in a project and come back to look something up: a class, a
   custom property, a Sass variable, a theme, a default value.

## Product Purpose

Breakouts is a small SCSS/CSS layout library whose one real idea is a named-line breakout grid: a
`.breakouts` container in which every child sits in a centred reading column and any child can
widen to `popout`, `feature` or `full` with one class, while on a phone the same markup keeps text
off the screen edge with no media query. The site succeeds when an evaluating visitor understands
and sees that idea on the first screen, and a returning user finds any class, token or default
without leaving the page.

## Positioning

One grid, one class per breakout, and nothing else of consequence. Not a utility-first framework
and not a component kit: the colour tokens, reset, typography, utilities and themes are a thin,
optional layer around the grid. The named-line pattern comes from Ryan Mulligan's article "Layout
Breakouts with CSS Grid" (2022); Breakouts packages it with one-sided variants (`-start`/`-end`),
nesting through `subgrid`, and per-scope sizing through custom properties.

## Operating Context

- Visitors read code: class names, custom properties and Sass snippets are the content they copy.
- The grid behaves differently at phone and desktop widths, so visitors resize the window or open
  the page on a phone to check it.
- The README (repository root) is the complete written reference; the site must agree with it.

## Capabilities and Constraints

- Public API: the class names, the custom property names and the `!default` Sass variable names.
  Everything the site states about them must be true of the built CSS.
- Known limits, documented honestly rather than hidden: themes alone do not emit spacing and position
  utilities (issue #10); `$headings` and `$space-scale` replace their default maps (issue #11).
- No JavaScript in the library. The site may use a little script for its own demonstrations, and
  must still read completely without it.
- Static hosting only: no server, no forms, no analytics.

## Brand Commitments

- Name: "Breakouts" in prose, `breakouts` as the package.
- No logo and no fixed palette or typeface for the site. The library's own default tokens and three
  themes (Chupa Pop, Medical, Tootsie Pop) are product content to demonstrate, not a brand.
- Credit to Ryan Mulligan for the pattern is required wherever its origin is described.

## Evidence on Hand

- The library itself, which can be demonstrated live on the page.
- Measured grid sizes (default font, Chromium): at 375px viewport content, popout and feature are all
  330px; at 768px 504 / 568 / 676px; at 1440px 504 / 568 / 728px. Popout and feature equal the text
  below about 573px; every area has full size from about 824px.
- No users, testimonials, download figures, logos or press to show; none may be invented.

## Product Principles

- Show the grid working before explaining it.
- Every statement about a class, property, variable or default is checked against the code.
- The site is built with the library it documents.
- The grid is the product; the thin layer around it stays visibly secondary.
- Complete for reference, short to read: one page, every section findable from the navigation.

## Accessibility & Inclusion

Not specified beyond the usual floor: WCAG AA contrast in light and dark modes, keyboard access to
every control, visible focus, and content that does not depend on motion or on script.
