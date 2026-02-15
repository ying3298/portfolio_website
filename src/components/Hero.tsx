"use client";

import { BlurRevealText } from "./BlurRevealText";

export function Hero() {
  return (
    <section
      className="min-h-[85vh] flex flex-col justify-center px-[var(--spacing-inline)] pt-[var(--spacing-section)] relative"
      aria-label="Hero"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 lg:gap-16 items-start">
        <BlurRevealText
          as="h1"
          blurAmount={12}
          duration={1.5}
          threshold={0.2}
          yOffset={6}
          className="font-display text-hero font-bold leading-[1.15] tracking-tight text-foreground block"
        >
          <span className="block">Human-centered</span>
          <span className="block">interaction designer</span>
          <span className="block">turning ambiguity into</span>
          <span className="block">clear, quietly delightful</span>
          <span className="block">experience.</span>
        </BlurRevealText>
        <div className="flex flex-col gap-4 md:pt-0.5">
          <p className="text-h2 font-medium text-foreground">Ying Chung</p>
          <p className="text-label">
            my practice · 0 → 1 · As a Designer
          </p>
          <p className="text-body text-muted leading-relaxed max-w-[320px]">
            I believe good design in the future should be able to question default critically.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white bg-transparent text-foreground text-small font-medium uppercase tracking-wider hover:opacity-90 transition-opacity w-fit"
          >
            Contact
          </a>
        </div>
      </div>
      <p
        className="absolute bottom-0 left-[var(--spacing-inline)] text-[6rem] md:text-[8rem] font-bold text-muted/40 leading-none pointer-events-none select-none"
        aria-hidden
      >
        Ying Chung
      </p>
    </section>
  );
}
