# Breakouts

Breakouts is a minimal, modular layout framework for SCSS/CSS that gives you just the right amount of structure: full-bleed containers, responsive grids, spacing, theming, and a clean set of utilities.

## Installation

```bash
npm install breakouts
```

```bash
bun add breakouts
```

## Usage

### SCSS

```scss
@use 'breakouts' as *;
```

This imports the full bundle: color tokens, reset, base typography, layout, and utilities.

For smaller Sass builds, import only the layer you need:

```scss
@use 'breakouts/src/core';
@use 'breakouts/src/utilities';
```

### CSS

```html
<link rel="stylesheet" href="/node_modules/breakouts/dist/breakouts.css" />
```

The distributed CSS file is the full bundle.

## Sass Layers

| Import | Includes |
| --- | --- |
| `@use 'breakouts'` | Full bundle |
| `@use 'breakouts/src/core'` | Color tokens and layout primitives |
| `@use 'breakouts/src/base'` | Core, reset, and base typography |
| `@use 'breakouts/src/reset'` | Reset only |
| `@use 'breakouts/src/utilities'` | Color, spacing, position, and typography utilities |
| `@use 'breakouts/src/base/layout'` | Layout module only |

## Core Layout API

The main abstraction is the `.breakouts` container. Every direct child defaults to the centered content column, and modifier classes let individual elements break outward.

```html
<article class="breakouts">
  <p>Default content width</p>
  <figure class="popout">Slightly wider</figure>
  <pre class="feature">Wider still</pre>
  <aside class="feature-start">Anchored to the inline start side</aside>
  <img class="full" src="hero.jpg" alt="" />
</article>
```

### Layout classes

| Class | Purpose |
| --- | --- |
| `.breakouts` | Main named-line breakout grid container |
| `.content` | Explicitly place an item in the content column |
| `.popout` | Slight breakout outside content |
| `.popout-start`, `.popout-end` | One-sided popout breakout |
| `.popout-left`, `.popout-right` | Physical aliases for one-sided popout breakout |
| `.feature` | Larger breakout for emphasis |
| `.feature-start`, `.feature-end` | One-sided feature breakout |
| `.feature-left`, `.feature-right` | Physical aliases for one-sided feature breakout |
| `.full` | Full-width breakout |
| `.full-start`, `.full-end` | One-sided full breakout |
| `.full-left`, `.full-right` | Physical aliases for one-sided full breakout |
| `.container` | Traditional centered wrapper |
| `.full-bleed` | Viewport-wide utility outside the named-grid pattern |
| `.breakout` | Simpler wide utility outside the named-grid pattern |

### Nested breakout grids

Any `.breakouts` or `.breakouts-grid` item can also be placed with a breakout class and then reuse the same track system for its own children.

```html
<section class="breakouts">
  <div class="full breakouts">
    <p>Nested content column</p>
    <figure class="feature">Nested feature width</figure>
    <img class="full" src="wide.jpg" alt="" />
  </div>
</section>
```

The nested grid inherits the parent track definition, so child placement classes keep the same meaning inside wider regions.

### Default sizing tokens

These CSS custom properties drive the layout and can be overridden per scope:

```css
:root {
  --gap: clamp(1rem, 6vw, 3rem);
  --full: minmax(var(--gap), 1fr);
  --feature: minmax(0, 5rem);
  --popout: minmax(0, 2rem);
  --content: min(50ch, 100% - var(--gap) * 2);
}
```

## Utility Layer

Breakouts intentionally ships only a small utility surface around the breakout layout.

### Spacing

Spacing classes are generated from this scale:

```scss
$space-scale: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  5: 1.25rem,
  6: 1.5rem,
  auto: auto
);
```

Available prefixes:

- Margin: `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my`
- Padding: `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py`

`auto` is generated for margin utilities only. Padding utilities are generated from the numeric spacing values.

### Typography

- Alignment: `text-left`, `text-center`, `text-right`, `text-justify`
- Transform: `text-uppercase`, `text-lowercase`, `text-capitalize`
- Weight/style: `font-bold`, `font-normal`, `italic`, `not-italic`
- Leading: `leading-tight`, `leading-normal`, `leading-loose`

### Colors

Base tokens exposed as CSS variables:

- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-success`
- `--color-error`
- `--color-warning`

Common utility classes:

- Background: `bg-background`, `bg-surface`, `bg-primary`, `bg-secondary`, `bg-accent`, `bg-muted`
- Text: `text-background`, `text-color`, `text-primary`, `text-secondary`, `text-accent`, `text-muted`

## Themes And Color Modes

Breakouts supports explicit light/dark classes on `<html>` and also respects `prefers-color-scheme` when no explicit class is present.

```html
<html class="dark">
```

Prebuilt themes:

| Theme | Import |
| --- | --- |
| Chupa Pop | `@use 'breakouts/src/theme/chupa-pop';` |
| Medical | `@use 'breakouts/src/theme/medical';` |
| Tootsie Pop | `@use 'breakouts/src/theme/tootsie-pop';` |

If a theme overrides variables, load it before the main entrypoint:

```scss
@use 'breakouts/src/theme/chupa-pop';
@use 'breakouts' as *;
```

## Customization

Override variables on first load with `@use ... with (...)`:

```scss
@use 'breakouts' with (
  $color-primary: #d1ff4a,
  $color-accent: #8a2be2
);
```

Or import only the modules you need:

```scss
@use 'breakouts/src/core';
@use 'breakouts/src/base/layout';
@use 'breakouts/src/base/spacing';
```

## Demo

GitHub Pages demo: [cantilux.github.io/breakouts](https://cantilux.github.io/breakouts)
