"use client";

import { BlurRevealText } from "./BlurRevealText";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Motherhood and Wellness",
    category: "User Research",
    year: "2022-2025",
    number: "01",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    imageAlt: "Rocks",
  },
  {
    title: "Halo Wear",
    category: "User Research",
    year: "2022-2025",
    number: "02",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    imageAlt: "Man B&W",
  },
  {
    title: "Lucent Lab",
    category: "Creative Direction",
    year: "2022-2025",
    number: "03",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
    imageAlt: "Pool",
  },
  {
    title: "Arc & Bloom",
    category: "Identity Design",
    year: "2022-2025",
    number: "04",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    imageAlt: "Woman Side Pose",
  },
  {
    title: "Atelier Nara",
    category: "Portfolio Site",
    year: "2022-2025",
    number: "05",
    href: "#",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    imageAlt: "Glass Mirror",
  },
];

export function SelectedWork() {
  return (
    <section
      id="selected-work-heading"
      className="px-[var(--spacing-inline)] pt-[var(--spacing-section)] pb-[var(--spacing-section)]"
      aria-labelledby="selected-work-heading"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-4">
          <BlurRevealText
            as="h2"
            id="selected-work-heading"
            blurAmount={12}
            duration={0.8}
            threshold={0.2}
            yOffset={6}
            className="text-h1 font-display font-bold tracking-tight text-foreground"
          >
            Selected Works.
          </BlurRevealText>
          <div className="flex flex-wrap items-center gap-x-4 text-label">
            <span>IN TOTAL [5]</span>
            <span>2022-2025</span>
            <span>© Featured Projects</span>
          </div>
        </div>
        <p className="text-body text-muted leading-relaxed max-w-2xl mb-8">
          From interface flows to tangible prototypes, these projects capture how I design interactions that make invisible visible and feel intuitive, grounded, and deeply human.
        </p>
        <a
          href="#selected-work-heading"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-white bg-transparent text-foreground text-small font-medium uppercase tracking-wider hover:opacity-90 transition-opacity mb-10 w-fit"
        >
          SEE WORKS
        </a>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[var(--spacing-block)] gap-y-[var(--spacing-block)]">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
