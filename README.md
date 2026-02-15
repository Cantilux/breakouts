# 📐 Breakouts – SCSS/CSS Layout Framework

Breakouts is a minimal, modular layout framework for SCSS/CSS that gives you just the right amount of structure: full-bleed containers, responsive grids, spacing, theming, and a clean set of utilities.

---

## 🚀 Installation

Using npm:

```bash
npm install breakouts
```

Using bun:

```bash
bun add breakouts
```

---

## 🛠 Usage

### SCSS with `@use`

```scss
@use 'breakouts/src/breakouts' as *;
```

### Import CSS directly

```html
<link rel="stylesheet" href="/node_modules/breakouts/dist/breakouts.css" />
```

---

## 🧱 Features

- ✅ Full-bleed layout with `.container`, `.full-bleed`, `.breakouts`
- ✅ Breakouts Grid with named areas (`.full`, `.popout`, `.feature`, etc.)
- ✅ Spacing utilities: `.m-1`, `.px-2`, etc.
- ✅ Text utilities: alignment, transformation, weight
- ✅ Responsive-friendly
- ✅ Dark mode support and theme overrides
- ✅ Prebuilt themes for fast prototyping
- ✅ Minimal reset and clean typography

---

## 📦 Framework Structure

Breakouts includes a small set of layout-focused utility classes to help you build responsive and consistent page structures.

| Class          | Purpose                                                                  |
|----------------|---------------------------------------------------------------------------|
| `.container`   | Creates a centered layout wrapper with a max-width and responsive padding |
| `.full-bleed`  | Stretches content edge-to-edge across the viewport                        |
| `.breakout`    | Expands content outside the container’s padding without going full-bleed  |
| `.grid`        | Defines a named-line CSS grid with `main` and `full` layout regions        |
| `.grid--full`  | Forces children of `.grid` to span the entire width (`full` region)        |
| `.breakouts-grid` | A more advanced named-line grid layout using CSS variables              |
| `.content`     | Places content in the main centered column within `.breakouts-grid`       |
| `.popout`      | Slightly outside the `.content` width for medium breakout                 |
| `.feature`     | Wider area used for highlighting visual components                        |
| `.full`        | Full-width layout spanning the entire grid                                |

---

## ✍️ Text Utilities

| Class             | Description              |
|------------------|--------------------------|
| `.text-left`      | Align text left          |
| `.text-center`    | Align text center        |
| `.text-right`     | Align text right         |
| `.text-justify`   | Justify text             |
| `.text-uppercase` | Uppercase text           |
| `.text-lowercase` | Lowercase text           |
| `.text-capitalize`| Capitalize text          |
| `.font-bold`      | Bold text                |
| `.font-normal`    | Normal weight text       |
| `.italic`         | Italic text              |
| `.not-italic`     | Not italic               |
| `.leading-tight`  | Line height 1.25         |
| `.leading-normal` | Line height 1.5          |
| `.leading-loose`  | Line height 2            |

---

## 📏 Spacing Utilities

Available spacing classes are based on the `$space-scale` map:

```scss
$space-scale: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  5: 1.25rem,
  6: 1.5rem
);
```

| Type     | Prefixes                           |
|----------|------------------------------------|
| Margin   | `m`, `mt`, `mr`, `mb`, `ml`, `mx`, `my` |
| Padding  | `p`, `pt`, `pr`, `pb`, `pl`, `px`, `py` |

---

## 🎨 Color Utilities

Breakouts ships with a small base palette exposed as CSS variables and a few utility classes.

### Base colors (CSS variables)

The following tokens are always available:

- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-muted`
- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-neutral-100`
- `--color-neutral-200`
- `--color-neutral-300`
- `--color-neutral-400`
- `--color-neutral-500`
- `--color-neutral-600`
- `--color-neutral-700`
- `--color-neutral-800`
- `--color-neutral-900`

### Utility classes

#### Background colors

| Class           | Description                          |
|----------------|--------------------------------------|
| `.bg-surface`   | `background-color: var(--color-surface)`   |
| `.bg-primary`   | `background-color: var(--color-primary)`   |
| `.bg-secondary` | `background-color: var(--color-secondary)` |
| `.bg-accent`    | `background-color: var(--color-accent)`    |

#### Text colors

| Class              | Description                               |
|-------------------|-------------------------------------------|
| `.text-primary`    | `color: var(--color-primary)`             |
| `.text-secondary`  | `color: var(--color-secondary)`           |
| `.text-accent`     | `color: var(--color-accent)`              |
| `.text-surface`    | `color: var(--color-surface)`             |
| `.text-muted`      | `color: var(--color-muted)`               |
| `.text-neutral-100`| `color: var(--color-neutral-100)`         |
| `.text-neutral-200`| `color: var(--color-neutral-200)`         |
| `.text-neutral-300`| `color: var(--color-neutral-300)`         |
| `.text-neutral-400`| `color: var(--color-neutral-400)`         |
| `.text-neutral-500`| `color: var(--color-neutral-500)`         |
| `.text-neutral-600`| `color: var(--color-neutral-600)`         |
| `.text-neutral-700`| `color: var(--color-neutral-700)`         |
| `.text-neutral-800`| `color: var(--color-neutral-800)`         |
| `.text-neutral-900`| `color: var(--color-neutral-900)`         |

Example:

```html
<div class="bg-surface p-4">
  <h3 class="text-primary">Primary title</h3>
  <p class="text-muted">Muted paragraph text</p>
  <p class="text-neutral-700">Neutral text</p>
</div>
```

---

## 📍 Position Utilities

| Class             | Description                          |
|-------------------|--------------------------------------|
| `.position-static` | Set `position: static;` (default)    |
| `.position-relative` | Set `position: relative;`         |
| `.position-absolute` | Set `position: absolute;`         |
| `.position-fixed`  | Set `position: fixed;`              |
| `.position-sticky` | Set `position: sticky;`             |
| `.z-index-0`       | Set `z-index: 0;`                   |
| `.z-index-1`       | Set `z-index: 1;`                   |
| `.z-index-10`      | Set `z-index: 10;`                  |
| `.z-index-100`     | Set `z-index: 100;`                 |
| `.z-index-1000`    | Set `z-index: 1000;`                |

---

## 🌗 Dark Mode

Breakouts supports dark mode automatically by toggling the `.dark` or `.light` class on the `<html>` tag.

```html
<html class="dark">
<!-- or -->
<html class="light">
```

Use `prefers-color-scheme` if you want to auto-detect:

```scss
@media (prefers-color-scheme: dark) {
  html { class: dark; }
}
```

---

## 🧪 Demo & Examples

View the live demo via GitHub Pages:
👉 [https://cantilux.github.io/breakouts](https://cantilux.github.io/breakouts)

---

## 🧩 Customize with `@use`

Override core variables before importing:

```scss
@use 'breakouts/src/breakouts' with (
  $color-primary: #d1ff4a,
  $color-accent: #8a2be2
);
```

Or create a custom theme:

```scss
// my-theme.scss
@forward 'breakouts/src/base/variables' with (
  $color-primary: #d1ff4a,
  $color-accent: #8a2be2
);

@use 'breakouts/src/base/variables' as *;
@forward 'breakouts/src/base/colors';
```

---

## 🎨 Prebuilt Themes

| Theme Name     | Description                                                    | Import Path                            |
|----------------|----------------------------------------------------------------|----------------------------------------|
| **Chupa Pop**  | Bold and colorful palette inspired by candy tones              | `@use 'breakouts/src/theme/chupa-pop'`     |
| **Medical**    | Calm, healthcare-inspired palette with blues and greens        | `@use 'breakouts/src/theme/medical'`       |
| **Tootsie Pop**| Retro and playful candy-themed palette                         | `@use 'breakouts/src/theme/tootsie-pop'`   |

Case of use

```scss
@use 'breakouts/src/theme/chupa-pop';
@use 'breakouts' as *;
```

---

## 💡 Extend Breakouts

You can write your own mixins or import individual parts:

```scss
@use 'breakouts/src/base/spacing';
@use 'breakouts/src/base/typography';
```

---

## 📦 License

MIT — [Cantilux](https://github.com/Cantilux)
