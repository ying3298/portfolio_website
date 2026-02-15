"use client";

import { BlurRevealText } from "./BlurRevealText";
import { ArticleCard } from "./ArticleCard";

const articles = [
  {
    title: "Women Zoom Shot",
    author: "Gregory Lalle",
    date: "May 21, 2024",
    category: "Web Design",
    excerpt:
      "Good design is not just about structure—it's about the emotional weight of space, rhythm, and silence.",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    imageAlt: "Women Zoom Shot",
  },
  {
    title: "Woman Pimples",
    author: "Clive Willow",
    date: "February 5, 2024",
    category: "Design",
    excerpt:
      "Typography today is no longer static. It breathes, scales, and adapts—blurring the lines between function and expression.",
    imageSrc: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    imageAlt: "Woman",
  },
  {
    title: "Man B&W",
    author: "Raven Claw",
    date: "June 2, 2024",
    category: "Visual Identity",
    excerpt:
      "Minimal design isn't emptiness—it's clarity, intention, and the reduction of noise to amplify what truly matters.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    imageAlt: "Woman Glasses",
  },
  {
    title: "Black Man",
    author: "Clay Nicolas",
    date: "June 10, 2025",
    category: "Portfolio",
    excerpt:
      "Portfolios today must be more than archives—they need to feel alive, intentional, and editorial by design.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    imageAlt: "Woman Alone",
  },
];

export function VisualJournal() {
  return (
    <section
      id="gallery"
      className="px-[var(--spacing-inline)] pt-[var(--spacing-section)] pb-[var(--spacing-section)] border-t"
      style={{ borderColor: "var(--divider)" }}
      aria-labelledby="visual-journal-heading"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        <div className="flex flex-wrap justify-between items-center gap-4 py-4 border-b" style={{ borderColor: "var(--divider)" }}>
          <span className="text-label">© VISUAL JOURNAL ジャーナル</span>
          <span className="text-label">(WDX® — 10)</span>
          <span className="text-label">CREATIVE NOTES</span>
        </div>
        <BlurRevealText
          as="h2"
          id="visual-journal-heading"
          blurAmount={12}
          duration={0.8}
          threshold={0.2}
          yOffset={6}
          className="text-h1 font-display font-bold tracking-tight text-foreground mb-10 mt-8"
        >
          Featured Article©
        </BlurRevealText>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[var(--spacing-block)] gap-y-[var(--spacing-block)]">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
}
