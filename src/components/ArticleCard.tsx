"use client";

import Image from "next/image";

export interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
}

export function ArticleCard({
  title,
  author,
  date,
  excerpt,
  href = "#",
  imageSrc,
  imageAlt,
}: ArticleCardProps) {
  return (
    <a
      href={href}
      className="group block"
      aria-label={`Read article: ${title}`}
    >
      <div className="overflow-hidden transition-opacity duration-300 hover:opacity-90">
        <div className="aspect-[3/4] overflow-hidden bg-neutral-100 mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
        <h3 className="text-h2 font-medium tracking-tight text-foreground mb-1">
          {title}
        </h3>
        <p className="text-small text-neutral-500 mb-2">
          {author} · {date}
        </p>
        <p className="text-small text-foreground/80 leading-relaxed">
          {excerpt}
        </p>
      </div>
    </a>
  );
}
