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
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  const isHeadlineInView = useInView(headlineRef, { once: true, margin: "-80px" });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={heroRef}
      className="relative"
      aria-label="Hero"
    >
      {/* First view: headline + decorative Ying Chung (above the fold) */}
      <div className="min-h-screen flex flex-col justify-between px-[var(--spacing-inline)] pt-[calc(var(--spacing-section)+4rem)] pb-0 relative">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 max-w-[1400px] w-full"
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
        </motion.div>
        {/* Large decorative Ying Chung at bottom of first view */}
        <p
          className="font-display font-bold tracking-tighter text-muted/20 text-[clamp(6rem,25vw,18rem)] leading-[0.85] pt-8 -mb-[0.1em] select-none pointer-events-none"
          aria-hidden
        >
          Ying Chung
        </p>
      </div>

      {/* Contact section: reveals when scroll down */}
      <motion.div
        ref={contactRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isContactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="px-[var(--spacing-inline)] py-[var(--spacing-section)] max-w-[1400px] w-full"
      >
        <div id="contact" className="flex flex-col gap-4 max-w-[320px]">
          <p className="text-h2 font-medium text-foreground">Ying Chung</p>
          <p className="text-label">
            my practice · 0 → 1 · As a Designer
          </p>
          <p className="text-body text-muted leading-relaxed">
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
