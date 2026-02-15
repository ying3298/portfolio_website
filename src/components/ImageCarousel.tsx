"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CAROUSEL_IMAGES = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80",
  "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&q=80",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
];

export function ImageCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="overflow-hidden cursor-grab active:cursor-grabbing select-none -mx-[var(--spacing-inline)]"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        className="flex gap-4 px-[var(--spacing-inline)]"
      >
        {CAROUSEL_IMAGES.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="relative min-w-[180px] h-[240px] md:min-w-[200px] md:h-[280px] rounded-lg overflow-hidden flex-shrink-0"
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="200px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
