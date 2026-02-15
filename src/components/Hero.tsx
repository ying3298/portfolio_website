"use client";

const LINES = [
  "Human-centered",
  "interaction designer",
  "turning ambiguity into",
  "clear, quietly delightful",
  "experience.",
];

export function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-57px)] flex items-center mt-[57px] px-5 md:px-6"
      aria-label="Hero"
    >
      <h1
        className="text-[#fff] font-medium text-[clamp(3rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.01em] w-[40%] min-w-[280px] max-w-[45vw] block"
        style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}
      >
        {LINES.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h1>
    </section>
  );
}
