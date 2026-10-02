import {
  FiArrowUp,
  FiArrowUpRight,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import kmLogo from "../assets/images/kaM.png";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Leadership", href: "#leadership" },
  { name: "Impact", href: "#impact" },
  { name: "Fellowships", href: "#fellowships" },
  { name: "Education", href: "#education" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.2fr_1fr_0.8fr] lg:gap-16 lg:py-20">
          {/* Brand */}
          <div>
            <a
              href="#home"
                aria-label="Back to homepage"
                className="inline-flex items-center"
              >
                <img
                  src={kmLogo}
                  alt="KM Personal Brand"
                  className="h-16 w-auto max-w-[140px] object-contain transition-opacity duration-300 hover:opacity-80"
                />

                <span className="text-[9px] uppercase tracking-[0.25em] text-gold">
                  Leadership • Impact
                </span>
              
            </a>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/50">
              Leading with purpose, creating meaningful impact and building
              stronger communities through service, leadership and continuous
              learning.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <FiLinkedin size={17} />
              </a>

              <a
                href="mailto:modestarkabasinguzi@gmail.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors duration-300 hover:border-gold hover:text-gold"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </p>

            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-white/55 transition-colors duration-300 hover:text-gold"
                >
                  {link.name}

                  <FiArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </p>

            <div className="mt-6 space-y-4">
              <a
                href="modestarkabasinguzi@gmail.com"
                className="block text-sm text-white/55 transition-colors duration-300 hover:text-gold"
              >
                modestarkabasinguzi@gmail.com
              </a>

              <p className="text-sm leading-6 text-white/40">
                Location to be added
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-gold"
              >
                Start a conversation
                <FiArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
       <div className="flex flex-col gap-6 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
        {/* Copyright */}
        <p className="text-xs text-white/35">
          © {currentYear} Modestar K. All rights reserved.
        </p>

        {/* Developer branding */}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.18em] text-white/30">
              Powered by
            </span>

            <img
              src="/images/mat-labs.png"
              alt="Matson Labs"
              className="h-7 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
            />

            <span className="text-sm font-semibold text-white/70">
              Mat Labs
            </span>
          </div>

    {/* Back to top */}
    <a
      href="#home"
      aria-label="Back to top"
      className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/50 transition-colors duration-300 hover:border-gold hover:text-gold"
    >
      <FiArrowUp
        size={15}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </a>
  </div>
</div>
      </div>
    </footer>
  );
}

export default Footer;