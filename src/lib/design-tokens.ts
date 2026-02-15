/**
 * Design tokens for the portfolio.
 * Edit this file to adjust spacing, font sizes, and other visual constants.
 */

export const tokens = {
  spacing: {
    section: "clamp(6rem, 15vw, 12rem)", // Section vertical padding
    block: "clamp(1.5rem, 4vw, 3rem)", // Block spacing
    inline: "clamp(1.25rem, 5vw, 3rem)", // Horizontal padding
  },
  typography: {
    hero: "clamp(2.5rem, 8vw, 5rem)",
    h1: "clamp(2rem, 5vw, 3.5rem)",
    h2: "clamp(1.5rem, 4vw, 2.5rem)",
    body: "clamp(1rem, 1.5vw, 1.25rem)",
    small: "clamp(0.875rem, 1vw, 1rem)",
  },
  animation: {
    blurReveal: {
      defaultBlur: 12,
      defaultDuration: 0.8,
      defaultThreshold: 0.2,
    },
  },
} as const;
