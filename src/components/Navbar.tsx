import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import kmLogo from "../assets/images/kaM.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
  { name: "Impact", href: "#impact" },
  { name: "Fellowships", href: "#fellowships" },
  { name: "Education", href: "#education" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    const navHeight = 76;
    const triggerPoint = window.scrollY + navHeight + 30;

    let currentSection = "home";

    navLinks.forEach((link) => {
      const section = document.querySelector(
        link.href
      ) as HTMLElement | null;

      if (!section) return;

      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY;

      if (triggerPoint >= sectionTop) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-navy">
      <nav className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Brand */}
        {/* PERSONAL BRAND LOGO */}
        <a
          href="#home"
          aria-label="Back to homepage"
          className="group flex shrink-0 items-center gap-3"
        >
          <img
            src={kmLogo}
            alt="KM Personal Brand"
            className="h-12 w-auto max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-105 sm:h-14"
          />
          <span className="text-[9px] uppercase tracking-[0.25em] text-gold">
                  Leadership • Impact
                </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-gold"
                    : "text-white/80 hover:text-gold"
                }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gold" />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="ml-2 rounded-md bg-gold px-5 py-2.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-[#d8b66d]"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="cursor-pointer text-2xl text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-navy px-6 pb-6 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`border-b border-white/10 py-4 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gold"
                      : "text-white/90 hover:text-gold"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {link.name}

                    {isActive && (
                      <span className="h-[2px] w-8 bg-gold" />
                    )}
                  </span>
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={() => handleNavClick("#contact")}
              className="mt-5 rounded-md bg-gold px-5 py-3 text-center text-sm font-semibold text-navy transition-colors duration-300 hover:bg-[#d8b66d]"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;