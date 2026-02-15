"use client";

import Image from "next/image";

export interface ArticleCardProps {
  title: string;
  author: string;
  date: string;
  category?: string;
  excerpt: string;
  href?: string;
  imageSrc: string;
  imageAlt: string;
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
}: ArticleCardProps) {
  return (
    <a
      href={href}
      className="group block"
      aria-label={`Read article: ${title}`}
    >
      <div className="overflow-hidden transition-opacity duration-300 hover:opacity-90">
        <div className="aspect-[3/4] overflow-hidden bg-neutral-900 mb-4 rounded-lg relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
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
    </a>
  );
}
