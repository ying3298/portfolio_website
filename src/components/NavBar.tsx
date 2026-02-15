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
      className="fixed top-0 left-0 right-0 z-50 px-[var(--spacing-inline)] py-6 md:py-8 flex items-center justify-between bg-background/95 backdrop-blur-md border-b"
      style={{ borderColor: "var(--divider)" }}
      role="banner"
    >
      <a
        href="#"
        className="text-[1.125rem] font-medium text-foreground hover:opacity-80 transition-opacity"
      >
        Ying C
      </a>
      <div className="flex items-center gap-12 md:gap-16 lg:gap-24">
        <nav aria-label="Quick links" className="flex flex-col items-center md:items-end gap-1">
          <p className="text-label">Quick Links</p>
          <ul className="flex gap-6 md:gap-8">
            {quickLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-base text-foreground hover:opacity-80 transition-colors underline underline-offset-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden sm:block text-right">
          <p className="text-label">Based in New York</p>
          <p className="text-base font-medium text-foreground">Interaction Designer</p>
        </div>
      </div>
    </header>
  );
}
