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
@use 'breakouts' as *;
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

## 🎨 Prebuilt Themes

| Theme Name     | Description                                                    | Import Path                            |
|----------------|----------------------------------------------------------------|----------------------------------------|
| **Chupa Pop**  | Bold and colorful palette inspired by candy tones              | `@use 'breakouts/theme/chupa-pop'`     |
| **Medical**    | Calm, healthcare-inspired palette with blues and greens        | `@use 'breakouts/theme/medical'`       |
| **Tootsie Pop**| Retro and playful candy-themed palette                         | `@use 'breakouts/theme/tootsie-pop'`   |

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
@use 'breakouts' with (
  $color-primary: #d1ff4a,
  $color-accent: #8a2be2
);
```

Or create a custom theme:

```scss
// my-theme.scss
@forward 'breakouts/src/theme/variables' with (
  $color-primary: #d1ff4a,
  $color-accent: #8a2be2
);

@use 'breakouts/src/theme/variables' as *;
@forward 'breakouts/src/theme/colors';
```

---

## 💡 Extend Breakouts

You can write your own mixins or import individual parts:

```scss
@use 'breakouts/utilities/spacing';
@use 'breakouts/base/typography';
```

---

## 📦 License

MIT — [Cantilux](https://github.com/Cantilux)
