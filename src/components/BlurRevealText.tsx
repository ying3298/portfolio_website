"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const motionComponents = {
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  div: motion.div,
} as const;

export interface BlurRevealTextProps {
  children: React.ReactNode;
  /** Blur amount in pixels when hidden. Default: 12 */
  blurAmount?: number;
  /** Animation duration in seconds. Default: 0.8 */
  duration?: number;
  /** Intersection threshold (0-1) when animation triggers at 20%. Default: 0.2 */
  threshold?: number;
  /** Y-translate in pixels when hidden. Default: 6 */
  yOffset?: number;
  /** HTML element to render. Default: "span" */
  as?: keyof typeof motionComponents;
  /** Additional CSS classes */
  className?: string;
  /** HTML id for anchor linking */
  id?: string;
}

export function BlurRevealText({
  children,
  blurAmount = 12,
  duration = 0.8,
  threshold = 0.2,
  yOffset = 6,
  as: Tag = "span",
  className = "",
  id,
}: BlurRevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const prefersReducedMotion = useReducedMotion();

  const shouldAnimate = !prefersReducedMotion;

  const initial = shouldAnimate
    ? { filter: `blur(${blurAmount}px)`, opacity: 0, y: yOffset }
    : { filter: "blur(0px)", opacity: 1, y: 0 };

  const animate =
    shouldAnimate && isInView
      ? { filter: "blur(0px)", opacity: 1, y: 0 }
      : initial;

  const MotionTag = motionComponents[Tag];

  return (
    <MotionTag
      ref={ref as any}
      id={id}
      initial={initial}
      animate={animate}
      transition={{
        duration: shouldAnimate ? duration : 0,
        ease: [0, 0, 0.2, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
