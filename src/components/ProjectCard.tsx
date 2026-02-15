"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export interface ProjectCardProps {
  title: string;
  category: string;
  year?: string;
  number?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  index?: number;
}

export function ProjectCard({
  title,
  category,
  year,
  number,
  href,
  imageSrc,
  imageAlt,
  index = 0,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`View project: ${title}`}
    >
      <div className="overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-900 mb-4 rounded-lg relative">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/30 pointer-events-none"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white">
            <span className="text-small font-medium text-black">{category}</span>
            <span className="px-4 py-2 rounded-full bg-black text-white text-small font-medium uppercase">
              VIEW
            </span>
          </div>
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-h2 font-display font-bold tracking-tight text-foreground">
            {title}
          </h3>
          {number != null && (
            <span className="text-small text-foreground shrink-0">({number})</span>
          )}
        </div>
        {year && (
          <p className="text-small text-muted mt-1">{year}</p>
        )}
      </div>
    </motion.a>
  );
}
