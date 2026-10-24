---
name: Breakouts demo site
description: The GitHub Pages page of Breakouts, laid out by the grid it documents.
colors:
  forest: "#0f1f10"
  forest-surface: "#162a17"
  ink: "#ffffff"
  muted: "#9aa39a"
  lime: "#c6f19d"
  lime-ink: "#0f1f10"
  field-dark: "#000000"
  field-light: "#ffffff"
  field-light-ink: "#0f1f10"
  field-light-muted: "#4b5a4b"
  field-light-step: "#edf1ea"
  band-content: "#3d6b37"
  band-popout: "#30582c"
  band-feature: "#254522"
  band-full: "#1b351a"
typography:
  display:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(3.75rem, 1rem + 11vw, 10rem)"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "-0.05em"
  heading:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  small:
    fontFamily: "Switzer, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem)"
    fontWeight: 400
    lineHeight: 1.5
  code:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "1em"
rounded:
  none: "0"
spacing:
  gap: "clamp(1rem, 6vw, 3rem)"
  section: "clamp(5rem, 3rem + 8vw, 11rem)"
  bar: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.lime-ink}"
    rounded: "{rounded.none}"
    padding: "0 1.125rem"
    height: "2.5rem"
  button-primary-hover:
    backgroundColor: "#d8f7b8"
  button-toggle:
    backgroundColor: "{colors.field-light-step}"
    textColor: "{colors.field-light-ink}"
    rounded: "{rounded.none}"
    height: "2.25rem"
  button-toggle-pressed:
    backgroundColor: "{colors.field-light-ink}"
    textColor: "{colors.field-light}"
  code-block:
    backgroundColor: "{colors.forest-surface}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    padding: "1.25rem 1.5rem"
---

# Design System: Breakouts demo site

## Overview

The page is a Breakouts grid performing itself. Every section is laid out by the classes it documents: reading text in `content`, code in `popout`, tables in `feature`, colour fields and photographs in `full`. The first screen shows four bands sitting in the four tracks with their live widths, so the product is visible before it is explained.

The world is a forest-green reading room with whole fields of black and white, archival photographs of the composing room and the press in greyscale, and one lime accent for the single action. It is documentation first: a calm reading column at the library's own 50ch measure, standard navigation, code and tables in the forms readers already know.

## Colors

### Primary
- **Lime** (`#c6f19d`) on **lime ink** (`#0f1f10`): the primary action only (Install, Copy), the selected row of the class index, the class picker in the live trial, focus rings and text selection.

### Neutral
- **Forest** (`#0f1f10`): the page ground and the bar. **Forest surface** (`#162a17`): code blocks and the install line on forest.
- **Ink** (`#ffffff`) for running text on forest and black; **muted** (`#9aa39a`, 6.6:1) for secondary notes and captions.
- **Field dark** (`#000000`) and **field light** (`#ffffff`, ink `#0f1f10`, muted `#4b5a4b`, step `#edf1ea`): whole-width sections that alternate with forest.
- **Bands** (`#3d6b37`, `#30582c`, `#254522`, `#1b351a`): the hero's four tracks, lightest at `content`, darkest at `full`.

### Named Rules
- **The One Accent Rule.** Lime marks what the visitor does, never decoration.
- **The Field Rule.** Surfaces separate by a step in tone or a change of field, never by a line or a shadow. Real tables keep their row rules.
- **Library colours stay the library's.** Demonstrations (fragments, the colour-mode sample, the article in the trial) render in the library's own `--color-*` tokens, not in the page's palette.

## Typography

One face, Switzer 400 and 500, self-described as the page's voice; monospace only inside code.

### Hierarchy
- **Display** (up to 160px, -0.05em, leading 0.9): the page title, once.
- **Heading** (32–64px): section titles, the try-it title halves and the class names of the index.
- **Lead** (20–26px): the opening sentence, the story statements, `h3`, the class search field.
- **Body** (17–19px, leading 1.5): running text in full ink.
- **Small** (13–14px): captions, notes, tables, controls, code blocks.

### Named Rules
- **Five sizes.** Every size on the page maps to one of the five steps; inline code takes the size of its text.

## Layout

The library itself: `.breakouts` on every section with the default tracks (`--content: min(50ch, 100% - var(--gap) * 2)`), so the page's widths are the library's widths in Switzer at 19px (547 / 611 / 771px at 1440). Sections are separated by `--section-space` (80–176px). The live trial and the variant rows are two-part splits (1:1 and 5:7) that stack below 52rem; the reference is tabs on a 12rem rail beside banded rows, stacking with wrapped tabs on a phone. Text in split rows starts where the fragments' own text starts.

## Elevation & Depth

Flat. No shadows at rest. The sticky bar and the pinned story stage sit on the forest ground, which covers what scrolls beneath them.

## Shapes

Square corners everywhere. Photographs keep their frames square and greyscale; the composing-room photograph is cropped to remove a damaged plate corner.

## Components

### Buttons
Lime, square, 2.5rem tall, small type at weight 500; press nudges it down 1px. Toggles (width presets, colour-mode sample) are filled steps of `#edf1ea` that invert to ink when pressed.

### Inputs / Fields
The class search is a filled block one tone off black, lead size, no border. The class picker is a lime `select` set inside the code it edits.

### Navigation
A plain sticky bar: wordmark, four section links in muted, one lime Install button. The links hide below 52rem; the button stays.

### Hero bands
Four filled bands placed with `.content`, `.popout`, `.feature`, `.full`, each naming its class and its live width in tabular figures.

### Live trial
Two fields meeting at the middle: markup with the class picker on black, a real Breakouts page in a scaled iframe on white, width presets and a range from 320 to 1440px, and a readout of the picture's measured width.

### Pinned story
A full-height sticky stage holding one photograph; scrolling through four spacer screens moves it through content, popout, feature and full while the statement and a live width caption change with it.

### Class index
A search field and every class as a large row; the selected row turns lime and shows its span and description.

### Reference rows
Banded rows in two alternating tones, 4px apart, with swatches that split light and dark values.

## Do's and Don'ts

### Do:
- Lay new sections out with Breakouts classes and show the class where it matters.
- Keep every value on the page true of the built CSS; label measured numbers with how they were measured.
- Use real, credited pictures of the printing world, in greyscale.

### Don't:
- Don't add labels above headings, numbered sections, gradients, shadows at rest or rounded cards.
- Don't use monospace outside code.
- Don't recolour library demonstrations with the page palette.
