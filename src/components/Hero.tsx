"use client";

import { BlurRevealText } from "./BlurRevealText";

export function Hero() {
  return (
    <section
      className="min-h-[85vh] flex flex-col justify-center px-[var(--spacing-inline)] pt-[var(--spacing-section)]"
      aria-label="Hero"
    >
      <div className="max-w-[1400px] mx-auto w-full space-y-8 md:space-y-10">
        <BlurRevealText
          as="h1"
          blurAmount={12}
          duration={1.5}
          threshold={0.2}
          yOffset={6}
          className="font-display text-hero font-bold leading-[1.1] tracking-tight text-foreground block"
        >
          <span className="block">Human-centered</span>
          <span className="block">interaction designer</span>
          <span className="block">turning ambiguity into</span>
          <span className="block">clear, quietly delightful</span>
          <span className="block">experience.</span>
        </BlurRevealText>
        <p className="text-h2 font-medium text-foreground">Ying Chung</p>
        <p className="text-small text-foreground/70 uppercase tracking-wider">
          my practice · 0 → 1 · As a Designer
        </p>
        <p className="text-body text-foreground/90 leading-relaxed max-w-2xl">
          I believe good design in the future should be able to question default critically.
        </p>
        <a
          href="#contact"
          className="inline-block text-small font-medium text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
