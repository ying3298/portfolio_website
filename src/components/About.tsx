"use client";

import { BlurRevealText } from "./BlurRevealText";

export function About() {
  return (
    <section
      className="px-[var(--spacing-inline)] py-[var(--spacing-section)] border-t border-neutral-200 dark:border-neutral-800"
      aria-labelledby="about-heading"
    >
      <div className="max-w-2xl">
        <BlurRevealText
          as="h2"
          id="about-heading"
          blurAmount={12}
          duration={0.8}
          threshold={0.2}
          yOffset={6}
          className="text-h1 font-semibold tracking-tight text-foreground mb-[var(--spacing-block)]"
        >
          About
        </BlurRevealText>
        <p className="text-body leading-[1.8] text-neutral-600 dark:text-neutral-400">
          I craft digital experiences at the intersection of brand and product
          design. With a focus on emotive interfaces, thoughtful motion, and
          systems thinking, I help teams build products that people connect
          with.
        </p>
      </div>
    </section>
  );
}
