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
