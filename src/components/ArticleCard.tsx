"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  category?: string;
  excerpt: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
  thumbnailSrc?: string;
}

export function ArticleCard({
  title,
  author,
  date,
  category,
  excerpt,
  href = "#",
  imageSrc,
  imageAlt,
  thumbnailSrc,
}: ArticleCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.a
      ref={ref}
      href={href}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Read article: ${title}`}
    >
      <div className="overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-4 rounded-lg relative">
          <motion.div
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={800}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/20 pointer-events-none"
          />
          {thumbnailSrc && (
            <motion.div
              initial={{ opacity: 0, y: 16, rotate: -3 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 16,
                rotate: isHovered ? 3 : -3,
              }}
              transition={{ duration: 0.4 }}
              className="absolute bottom-4 right-4 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src={thumbnailSrc}
                alt=""
                fill
                className="object-cover"
                sizes="96px"
              />
            </motion.div>
          )}
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3 bg-white">
            <span className="text-small font-medium text-black">{category || author}</span>
            <span className="px-4 py-2 rounded-full bg-black text-white text-small font-medium uppercase">
              VIEW
            </span>
          </div>
        </div>
        <h3 className="text-h2 font-display font-bold tracking-tight text-foreground mb-1">
          {title}
        </h3>
        <p className="text-small text-muted mb-2">
          {author} · {date}
        </p>
        <p className="text-small text-muted leading-relaxed">
          {excerpt}
        </p>
      </div>
    </motion.a>
  );
}
