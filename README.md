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

### CSS

```html
<link rel="stylesheet" href="/node_modules/breakouts/dist/breakouts.css" />
```

## Core Layout API

The main abstraction is the `.breakouts` container. Every direct child defaults to the centered content column, and modifier classes let individual elements break outward.

```html
<article class="breakouts">
  <p>Default content width</p>
  <figure class="popout">Slightly wider</figure>
  <pre class="feature">Wider still</pre>
  <img class="full" src="hero.jpg" alt="" />
</article>
```

### Layout classes

| Class | Purpose |
| --- | --- |
| `.breakouts` | Main named-line breakout grid container |
| `.content` | Explicitly place an item in the content column |
| `.popout` | Slight breakout outside content |
| `.feature` | Larger breakout for emphasis |
| `.full` | Full-width breakout |
| `.container` | Traditional centered wrapper |
| `.full-bleed` | Viewport-wide utility outside the named-grid pattern |
| `.breakout` | Simpler wide utility outside the named-grid pattern |

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
@use 'breakouts/src/base/layout';
@use 'breakouts/src/base/spacing';
```

## Demo

GitHub Pages demo: [cantilux.github.io/breakouts](https://cantilux.github.io/breakouts)
