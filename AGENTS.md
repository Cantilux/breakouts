# Breakouts

Small SCSS/CSS layout library published on npm as `breakouts`. Its one real idea is a
**named-line breakout grid**: a single `.breakouts` container whose column tracks grow
outward from a centred reading column, so any direct child can widen to `popout`, `feature`
or `full` with one class. Everything else (tokens, reset, typography, utilities, themes) is a
thin layer around that grid and should stay thin.

Demo site: `docs/` (GitHub Pages, cantilux.github.io/breakouts).

## Commands

```bash
npm run build      # src/_index.scss -> dist/breakouts.css + .min.css, then copies to docs/
```

There are no tests or linters. To check a change, build and compile every entry point:

```bash
for f in src/{breakouts,core,base,reset,utilities}.scss src/theme/_*.scss; do npx sass --no-source-map "$f" >/dev/null && echo "ok $f"; done
```

Then open `docs/index.html` in a browser and look at the examples at narrow and wide widths.

`release:patch|minor|major` logs in to npm if needed, builds, bumps the version, **publishes to
npm**, then pushes the commit and tag. Never run them unless explicitly asked.

## Layout

```text
_index.scss             package root: lets `@use 'breakouts'` resolve via load paths
src/
  breakouts.scss        package "sass" entry -> forwards _index
  _index.scss           full bundle (what dist/ is built from)
  core.scss             variables + color tokens + layout
  base.scss             core + reset + base typography
  reset.scss            reset only
  utilities.scss        color, spacing, position, typography utilities
  base/_*.scss          the actual modules
  theme/_*.scss         presets: configure base/variables, then forward base modules
dist/                   generated, committed — never edit by hand
docs/                   demo page; docs/breakouts.css is a copy of dist — never edit by hand
```

`base/_colors.scss` and `base/_typography.scss` are compatibility modules that just forward
their `-tokens`/`-utilities` (or `-base`/`-utilities`) halves. New code goes in the halves.

## The grid

Defined in `src/base/_layout.scss`. Tracks, left to right:

```text
[full-start] --full [feature-start] --feature [popout-start] --popout
[content-start] --content [content-end]
--popout [popout-end] --feature [feature-end] --full [full-end]
```

- Each track size is a custom property on `:root`, so consumers resize the grid per scope
  without Sass. `--gap` doubles as the minimum gutter of the `full` track, which is what keeps
  content off the viewport edge on phones.
- `.breakouts > *` puts every child in `content`; `.popout`, `.feature`, `.full` and the
  `-start`/`-end` (and physical `-left`/`-right` alias) variants override it. They have the
  **same specificity**, so the modifier rules must stay *after* the `> *` rule in the file.
- `-start`/`-end` span from the outer line to the opposite `content` line (one-sided breakout).
- Nesting: a `.breakouts` that is a direct child of another inherits `grid-template-columns`.
- `.container`, `.full-bleed*`, `.breakout*` and `.grid` are older helpers outside the named
  grid. Keep them working, don't extend them.

## Tokens and color modes

- Every Sass variable is `!default` and configurable through `@use ... with (...)`.
- `base/_color-tokens.scss` turns them into `--color-*` custom properties on `:root`, with
  overrides for `.dark`, `.light` and `prefers-color-scheme: dark` (only when neither class is
  set). Utilities and typography read only the custom properties, never the Sass variables.
- `$color-x-dark` / `$color-x-light` are the values applied in dark / light mode. When touching
  colours, check text contrast in the default, `.light` and `.dark` modes.

## Conventions

- Dart Sass module system only: `@use` / `@forward`, never `@import`. `sass:` built-ins
  through `@use 'sass:map'` etc.
- 4-space indentation, one short `//` comment at the top of each file saying what it is.
- Plain class selectors, low and flat specificity, no `!important`. Prefer logical properties
  (`margin-inline`, `inset-inline`) in new rules.
- The public API is the class names, custom property names and `!default` variable names.
  Renaming or removing any of them is a breaking change: note it and bump accordingly.
- When the API changes, update `README.md` and `docs/index.html` in the same change.
- `dist/` is committed: run `npm run build` before committing source changes.

## Skills

Project skills live in `.claude/skills/`. Which skill to use for what, where each comes from
and how to add or update one: `.claude/skills/project-skills/SKILL.md`.

- Code changes to `src/`: **ponytail**.
- Design work on `docs/` and the visual defaults: **impeccable**, **design-taste-frontend**.
- Questions about the codebase: **graphify** first when `graphify-out/graph.json` exists
  (`graphify query "<question>"`). After changing source files, rebuild it with a full
  `/graphify` run: graphify has no SCSS/CSS parser, so `src/**/*.scss` and `docs/docs.css`
  must be added to its semantic pass as documents (`--update` would miss them).
  `.graphifyignore` keeps vendored skills and build output out of the graph.
