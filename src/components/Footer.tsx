"use client";

import { ImageCarousel } from "./ImageCarousel";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Gallery", href: "#gallery" },
  { label: "Work", href: "#selected-work-heading" },
  { label: "Contact", href: "#contact" },
];

const networks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Framer", href: "https://framer.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

const pills = ["Independent", "Overview", "Multidisciplinary", "Focused"];

export function Footer() {
  return (
    <footer
      id="contact"
      className="px-[var(--spacing-inline)] py-[var(--spacing-section)] border-t"
      style={{ borderColor: "var(--divider)" }}
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto w-full space-y-10">
        <div className="flex flex-wrap justify-between items-center gap-4 py-4 border-b" style={{ borderColor: "var(--divider)" }}>
          <span className="text-label">© FINAL SECTION クロージング</span>
          <span className="text-label">(WDX® — 12)</span>
          <span className="text-label">STUDIO WRAP</span>
        </div>
        <div className="mb-10">
          <ImageCarousel />
        </div>
        <div className="flex flex-wrap justify-center gap-4 py-6 px-8 bg-white rounded-lg">
          {pills.map((label) => (
            <span
              key={label}
              className="text-small font-medium text-black uppercase tracking-wider"
            >
              {label}
            </span>
          ))}
        </div>
        <p className="text-body text-foreground leading-relaxed max-w-2xl mx-auto text-center">
          I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-white bg-transparent text-foreground text-small font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            BACK TO TOP
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 pt-10 border-t" style={{ borderColor: "var(--divider)" }}>
          <nav aria-label="Quick links">
            <p className="text-small font-medium text-foreground mb-3">Quick Links</p>
            <ul className="flex flex-col gap-1">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-small text-foreground/90 hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Networks">
            <p className="text-small font-medium text-foreground mb-3">Networks</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {networks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-foreground/90 hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-[4rem] md:text-[6rem] font-bold text-foreground text-center pt-8">
          ©2025
        </p>
      </div>
    </footer>
  );
}
