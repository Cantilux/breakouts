# ✨ Breakouts

**Breakouts** is a minimal and extensible SCSS/CSS utility framework for modern layout systems.

It provides utilities for containers, full-bleed sections, breakout content, and grid layouts with named lines — built for flexibility and responsiveness, whether you're building a landing page, a blog, or a full-scale web app.

---

## 🚀 Installation

### via npm

```bash
npm install breakouts
```

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

## 🧩 Extending the Framework

Breakouts is fully configurable — you can override its core variables before importing it.

### 🔁 Example: Override the color palette

```scss
$colors: (
  primary: #ff6600,
  secondary: #222222,
  background: #fefefe,
  text: #111
);

@use "breakouts";
```

This replaces the default color palette defined in the framework. You can override any variable marked with !default.

## 🔌 Use Only What You Need

Breakouts is modular and each part of the framework can be imported individually.

### Import specific modules

If you only want color utilities, you can import them directly:

```scss
@use "breakouts/theme/colors" as *;

@include text-color-utilities();
@include bg-color-utilities();
```

If you only need grid layout helpers:

```scss
@use "breakouts/layout/grid";
```

This gives you full control over what gets compiled into your CSS, keeping it lean and optimized for your project.

## 🧱 Define Your Own Utilities on Top

Breakouts exposes a consistent set of CSS variables (e.g. `--color-primary`, `--color-background`, etc.) that you can reuse to build your own custom components or utility classes.

### Example: custom button style

```scss
.button {
  background-color: var(--color-primary);
  color: var(--color-background);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 600;
  cursor: pointer;
}

.button:hover {
  background-color: var(--color-secondary);
}
```

By using the same design tokens, your custom elements stay visually aligned with the rest of the system.

This approach encourages consistency while giving you full creative freedom.

## 🌙 Dark Mode Support

Breakouts includes built-in support for **dark mode**, using CSS variables and system preferences.

### 🌓 Automatic dark mode

By default, the framework responds to the user's system setting using:

```scss
@media (prefers-color-scheme: dark) {
  :root {
    // Dark color variables
  }
}
```

This means all your color utility classes like .bg-primary, .text-muted, etc., automatically switch based on the user's device.

### 🌘 Manual Override (Optional)

If you want to control dark mode manually—rather than relying on the user's system preferences—you can use the `.dark` class.

Apply it to the root HTML element:

```html
<html class="dark">
```

When this class is present, Breakouts will use the dark color palette regardless of system settings.

This is ideal for implementing a light/dark theme toggle in your application via JavaScript or local storage.

All color-based utility classes like .text-* and .bg-* will respond automatically, as they rely on CSS variables.

### ✅ Compatible with All Color Utilities

All utility classes that rely on colors—such as:

- `.text-primary`
- `.bg-surface`
- `.text-muted`
- `.bg-secondary`

...are automatically compatible with dark mode.

This is possible because Breakouts uses CSS custom properties (variables) for all colors. When the color mode changes (automatically or via `.dark` class), the variables are updated, and the utilities respond instantly without requiring any changes to your HTML.

You can keep writing markup the same way in both themes:

```html
<div class="bg-background text-text">
  <p class="text-muted">This works in both light and dark modes.</p>
</div>
```


## 🛠️ Development

To build or modify Breakouts locally, follow these steps:

1. Install dependencies:

```bash
npm install
```

2. Build the CSS files:

```bash
npm run build
```

This will generate two files in the dist/ folder:

breakouts.css: the expanded, human-readable version (ideal for development)

breakouts.min.css: the minified version (ideal for production)

You can customize or extend the framework by editing the SCSS source files located in the src/ directory. The entry point is:

```bash
src/_index.scss
```

The build process uses Dart Sass under the hood.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, distribute, and even sell this framework in personal or commercial projects — just include the original license and copyright.

> © 2025 Cantilux
