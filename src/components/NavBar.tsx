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
      className="fixed top-0 left-0 right-0 z-50 px-[var(--spacing-inline)] py-5 flex items-center justify-between bg-background/80 backdrop-blur-md border-b border-transparent"
      role="banner"
    >
      <a
        href="#"
        className="text-small font-medium text-foreground hover:opacity-80 transition-opacity"
      >
        Ying C
      </a>
      <div className="flex items-center gap-8 md:gap-12">
        <nav aria-label="Quick links">
          <ul className="flex gap-6 md:gap-8">
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
        <div className="hidden sm:block text-right">
          <p className="text-small text-foreground/70">Based in New York</p>
          <p className="text-small font-medium text-foreground">Interaction Designer</p>
        </div>
      </div>
    </header>
  );
}
