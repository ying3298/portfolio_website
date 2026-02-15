"use client";

import { motion } from "framer-motion";

const TEXT = "Ying Chung";
const REPEATS = 8;

export function Marquee() {
  const items = Array(REPEATS)
    .fill(null)
    .map((_, i) => (
      <span key={i} className="inline-block text-[#a3a3a3] font-semibold text-[clamp(200px,25vw,280px)] leading-[0.9] tracking-tighter whitespace-nowrap mx-12 shrink-0">
        {TEXT}
      </span>
    ));

  return (
    <section
      className="overflow-hidden border-t py-6"
      style={{ borderColor: "#333", borderWidth: "1px" }}
      aria-hidden
    >
      <motion.div
        className="inline-flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {items}
        {items}
      </motion.div>
    </section>
  );
}
