"use client";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "Gallery", href: "#gallery" },
  { label: "Work", href: "#selected-work-heading" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 px-[var(--spacing-inline)] py-6 md:py-8 flex items-start justify-between bg-background/95 backdrop-blur-md border-b"
      style={{ borderColor: "var(--divider)" }}
      role="banner"
    >
      <a
        href="#"
        className="text-lg md:text-xl font-bold text-foreground hover:opacity-80 transition-opacity shrink-0"
      >
        Ying C
      </a>

      <nav
        aria-label="Quick links"
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <p className="text-sm font-medium text-foreground">Quick Links</p>
        <p className="text-sm text-muted">
          {quickLinks.map(({ label, href }, i) => (
            <span key={label}>
              <a href={href} className="hover:text-foreground transition-colors">
                {label}
              </a>
              {i < quickLinks.length - 1 && <span className="text-muted/70">, </span>}
            </span>
          ))}
        </p>
      </nav>

      <div className="hidden sm:flex flex-col items-end text-right shrink-0">
        <p className="text-sm font-medium text-foreground">Based in New York</p>
        <p className="text-sm text-muted">Interaction Designer</p>
      </div>
    </header>
  );
}
