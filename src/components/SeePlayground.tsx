"use client";

const productDescription = `Product designer, specializing in
crafting user-friendly products and
brands with expertise in 3D Rendering,
Motion Design, Product design,
Prototyping and Front-end`;

function ArrowIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="inline-block ml-1 align-middle"
      aria-hidden
    >
      <path d="M7 17L17 7" />
      <path d="M17 7H7V17" />
    </svg>
  );
}

export function SeePlayground() {
  return (
    <section className="px-0 py-0" aria-label="See playground">
      <div className="px-[var(--spacing-inline)] pt-[var(--spacing-block)] pb-[var(--spacing-section)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start max-w-[1400px] mx-auto w-full">
          <a
            href="#"
            className="group inline-flex items-center text-h1 font-bold tracking-tight text-foreground underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
          >
            See playground
            <ArrowIcon />
          </a>
          <p className="text-body text-foreground/90 leading-relaxed whitespace-pre-line max-w-[320px] md:pt-0.5">
            {productDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
