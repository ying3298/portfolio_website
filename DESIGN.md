# Design System & File Structure

This document explains where to edit styling, spacing, and typography for the portfolio.

## Design Tokens (Primary customization)

**File:** `src/app/globals.css`

Edit the CSS variables in `:root` to adjust the visual rhythm:

| Token | Purpose | Example values |
|-------|---------|----------------|
| `--spacing-section` | Vertical padding between major sections (Hero, Selected Work, About) | `clamp(6rem, 15vw, 12rem)` |
| `--spacing-block` | Spacing between blocks within a section (e.g. heading to cards) | `clamp(1.5rem, 4vw, 3rem)` |
| `--spacing-inline` | Horizontal padding (page margins) | `clamp(1.25rem, 5vw, 3rem)` |
| `--font-hero` | Hero headline size | `clamp(2.5rem, 8vw, 5rem)` |
| `--font-h1` | Section headings (e.g. "Selected Work", "About") | `clamp(2rem, 5vw, 3.5rem)` |
| `--font-h2` | Project card titles | `clamp(1.5rem, 4vw, 2.5rem)` |
| `--font-body` | Body text, project intros | `clamp(1rem, 1.5vw, 1.25rem)` |
| `--font-small` | Labels, footer, metadata | `clamp(0.875rem, 1vw, 1rem)` |

## Fonts

**File:** `src/app/globals.css`

- **Primary font:** SF Pro via system font stack (`-apple-system`, `BlinkMacSystemFont`, `SF Pro Display`, `SF Pro Text`) — renders as SF Pro on Apple devices, Segoe UI on Windows
- Edit `--font-sf-pro` in `:root` to change the font stack

## BlurRevealText Animation

**File:** `src/components/BlurRevealText.tsx`

Props for fine-tuning the signature blur reveal:

| Prop | Default | Description |
|------|---------|-------------|
| `blurAmount` | `12` | Blur in px when hidden |
| `duration` | `0.8` | Animation duration in seconds |
| `threshold` | `0.2` | Intersection ratio (0–1) when animation triggers |
| `yOffset` | `16` | Y-translate in px when hidden |

## File Structure

```
src/
├── app/
│   ├── globals.css      # Design tokens, base styles
│   ├── layout.tsx       # Fonts, metadata, HTML shell
│   └── page.tsx         # One-page layout composition
├── components/
│   ├── BlurRevealText.tsx   # Reusable scroll-triggered blur reveal
│   ├── Hero.tsx
│   ├── SelectedWork.tsx     # Section + 3 project cards
│   ├── ProjectCard.tsx      # Card with hover state
│   ├── About.tsx
│   └── Footer.tsx
└── lib/
    └── design-tokens.ts     # JS tokens (optional, mirrors globals.css)
```

## Section-Specific Tweaks

- **Hero:** `src/components/Hero.tsx` — adjust `min-h-[85vh]`, hero copy
- **Project cards:** `src/components/ProjectCard.tsx` — hover effects, border radius
- **Project data:** `src/components/SelectedWork.tsx` — edit the `projects` array
