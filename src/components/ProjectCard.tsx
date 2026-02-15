"use client";

import Image from "next/image";

export interface ProjectCardProps {
  title: string;
  category: string;
  year?: string;
  number?: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export function ProjectCard({
  title,
  category,
  year,
  number,
  href,
  imageSrc,
  imageAlt,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group block"
      aria-label={`View project: ${title}`}
    >
      <div className="overflow-hidden transition-opacity duration-300 hover:opacity-90">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-900 mb-4 rounded-lg relative">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
    </a>
  );
}
