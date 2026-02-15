"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const LINES = [
  "Human-centered",
  "interaction designer",
  "turning ambiguity into",
  "clear, quietly delightful",
  "experience.",
];

export function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const isHeadlineInView = useInView(headlineRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={heroRef}
      className="min-h-[85vh] flex flex-col justify-center px-[var(--spacing-inline)] pt-[var(--spacing-section)] relative"
      aria-label="Hero"
    >
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative z-10 max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 lg:gap-16 items-start"
      >
        <h1
          ref={headlineRef}
          className="font-display text-hero font-bold leading-[1.15] tracking-tight text-foreground block"
        >
          {LINES.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isHeadlineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>
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
      </motion.div>
    </section>
  );
}
