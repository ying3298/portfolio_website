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
      className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between bg-[#000] border-b px-5 md:px-6 py-4"
      style={{ borderColor: "#333", borderWidth: "1px" }}
      role="banner"
    >
      <a
        href="#"
        className="text-[#fff] font-medium text-[18px] hover:opacity-80 transition-opacity shrink-0"
      >
        Ying C
      </a>

      <nav
        aria-label="Quick links"
        className="flex flex-col items-start gap-0.5 text-left"
      >
        <p className="text-[#fff] font-medium text-[14px]">Quick Links</p>
        <p className="text-[#9ca3af] font-normal text-[14px]">
          {quickLinks.map(({ label, href }, i) => (
            <span key={label}>
              <a href={href} className="hover:text-[#fff] transition-colors">
                {label}
              </a>
              {i < quickLinks.length - 1 && <span className="text-[#9ca3af]">, </span>}
            </span>
          ))}
        </p>
      </nav>

      <div className="hidden sm:flex flex-col items-start text-left shrink-0">
        <p className="text-[#fff] font-medium text-[14px]">Based in New York</p>
        <p className="text-[#9ca3af] font-normal text-[14px]">Interaction Designer</p>
      </div>
    </header>
  );
}
