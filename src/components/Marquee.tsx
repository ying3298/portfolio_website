"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
}

export function Marquee({ children, speed = 40, reverse = false }: MarqueeProps) {
  return (
    <div className="marquee-container overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-flex"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
