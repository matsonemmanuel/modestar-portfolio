import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const contacts = [
  {
    label: "WhatsApp",
    href: "https://wa.me/256794292318",
    icon: FaWhatsapp,
    targetBlank: true,
  },
  {
    label: "Call",
    href: "tel:+256794292318",
    icon: FaPhone,
    targetBlank: false,
  },
  {
    label: "Email",
    href: "mailto:modestarkabasinguzi@gmail.com",
    icon: FaEnvelope,
    targetBlank: false,
  },
];

function FloatingContact() {
  return (
    <>
      {/* =====================================================
          DESKTOP CONTACT WIDGET
      ====================================================== */}
      <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 md:flex">
        <div className="flex flex-col overflow-hidden rounded-full border border-gold/30 bg-navy/95 p-1.5 shadow-[0_12px_40px_rgba(11,31,51,0.25)] backdrop-blur-sm">

          {contacts.map((contact, index) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.targetBlank
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.targetBlank
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={contact.label}
                className={`group relative flex h-11 w-11 items-center justify-center text-gold transition-all duration-300 hover:bg-gold hover:text-navy ${
                  index !== contacts.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                {/* Icon */}
                <Icon
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                {/* Tooltip */}
                <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-md bg-navy px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white opacity-0 shadow-lg transition-all duration-300 group-hover:right-12 group-hover:opacity-100">
                  {contact.label}
                </span>
              </a>
            );
          })}

        </div>
      </div>

      {/* =====================================================
          MOBILE CONTACT WIDGET
      ====================================================== */}
      <div className="fixed bottom-5 right-5 z-50 flex md:hidden">
        <div className="flex items-center gap-1 rounded-full border border-gold/30 bg-navy/95 p-1.5 shadow-[0_10px_30px_rgba(11,31,51,0.3)] backdrop-blur-sm">

          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.label}
                href={contact.href}
                target={
                  contact.targetBlank
                    ? "_blank"
                    : undefined
                }
                rel={
                  contact.targetBlank
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={contact.label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gold transition-all duration-300 active:bg-gold active:text-navy"
              >
                {/* Icon */}
                <Icon
                  size={16}
                  className="transition-transform duration-200 active:scale-90"
                />
              </a>
            );
          })}

        </div>
      </div>
    </>
  );
}

export default FloatingContact;