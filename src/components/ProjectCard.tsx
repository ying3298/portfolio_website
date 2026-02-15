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
      <div className="overflow-hidden bg-transparent transition-opacity duration-300 hover:opacity-80">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-h2 font-medium tracking-tight text-foreground">
            {title}
            {number != null && (
              <span className="text-foreground/60 font-normal"> ({number})</span>
            )}
          </h3>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-small text-neutral-500">
            <span>{category}</span>
            {year && <span>{year}</span>}
          </div>
        </div>
      </div>
    </a>
  );
}
