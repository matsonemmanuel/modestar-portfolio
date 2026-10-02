import { motion } from "framer-motion";
import {
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Let's Connect
            </p>

            <h2 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Let's create
              <br />
              <span className="text-gold">meaningful</span>
              <br />
              impact together.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Whether you are interested in collaboration, community
              initiatives, leadership opportunities or simply starting a
              meaningful conversation, I would be glad to connect.
            </p>

            {/* Contact details */}
            <div className="mt-12 space-y-6">
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <FiMail size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-white transition-colors duration-300 group-hover:text-gold">
                    hello@example.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold">
                  <FiMapPin size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    Based In
                  </p>

                  <p className="mt-1 text-sm text-white">
                    Location to be added
                  </p>
                </div>
              </div>

              <a
                href="#"
                className="group flex items-center gap-5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <FiLinkedin size={18} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                    LinkedIn
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm text-white transition-colors duration-300 group-hover:text-gold">
                    Connect on LinkedIn
                    <FiArrowUpRight size={13} />
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right side - form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="lg:pt-8"
          >
            <div className="border border-white/10 bg-white/[0.03] p-7 sm:p-9 lg:p-10">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Start a conversation
                </p>

                <h3 className="mt-3 font-display text-3xl text-white">
                  Get in touch
                </h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/50"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/50"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/50"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    placeholder="What would you like to discuss?"
                    className="w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-gold"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium uppercase tracking-[0.15em] text-white/50"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message..."
                    className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-colors focus:border-gold"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-3 inline-flex cursor-pointer items-center gap-3 bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-[#d8b66d]"
                >
                  Send Message

                  <FiArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;