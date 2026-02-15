"use client";

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
      className="px-[var(--spacing-inline)] py-[var(--spacing-section)] border-t border-neutral-200"
      role="contentinfo"
    >
      <div className="max-w-[1400px] mx-auto w-full space-y-10">
        <p className="text-label">
          © Final Section クロージング · (WDX® — 12) · Studio Wrap
        </p>
        <p className="text-body text-foreground/90 leading-relaxed max-w-2xl">
          I build expressive, performance-driven websites by blending clean design and native development inside Framer to help creative teams and modern brands stand out with intention.
        </p>
        <div className="flex flex-wrap gap-3">
          {pills.map((label) => (
            <span
              key={label}
              className="inline-block px-4 py-2 rounded-full border border-neutral-200 text-small text-foreground"
            >
              {label}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="inline-block text-small font-medium text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
        >
          Back To Top
        </a>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-neutral-200">
          <nav aria-label="Quick links">
            <p className="text-label mb-2">Quick Links</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-small text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Networks">
            <p className="text-label mb-2">Networks</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1">
              {networks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-small text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="text-label pt-4">©2025</p>
      </div>
    </footer>
  );
}
