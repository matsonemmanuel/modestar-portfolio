import { motion } from "framer-motion";
import { FiArrowRight, FiHeart, FiUsers } from "react-icons/fi";
import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[520px]">
              {/* Gold decorative frame */}
              <div className="absolute -bottom-5 -left-5 z-0 h-full w-full border border-gold/60" />

              {/* Midnight navy backing */}
              <div className="absolute -bottom-3 -left-3 z-[1] h-full w-full bg-navy" />

              {/* Portrait */}
              <div className="relative z-10 aspect-[4/5] overflow-hidden bg-navy">
                <img
                  src={aboutImage}
                  alt="Portrait"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Small label */}
              <div className="absolute bottom-6 left-6 z-20 bg-gold px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
                  Leadership & Service
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              About Her
            </p>

            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
              A journey shaped by
              <span className="text-blue"> purpose, service and people.</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>
                Her leadership journey is rooted in a deep commitment to
                community, service and creating meaningful opportunities for
                others.
              </p>

              <p>
                Through leadership, community engagement and continuous
                learning, she has worked across different spaces to support
                initiatives that place people, participation and sustainable
                impact at the center.
              </p>

              <p>
                Today, her work brings together leadership, advocacy,
                organizational development and community transformation —
                guided by the belief that meaningful change begins with people
                and grows through collective action.
              </p>
            </div>

            {/* Values */}
            <div className="mt-9 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <FiHeart size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-semibold text-navy">
                    Purpose-Driven
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Leading with intention and a commitment to meaningful
                    change.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <FiUsers size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-semibold text-navy">
                    Community-Centered
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Creating spaces where people can participate, grow and
                    lead.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#leadership"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold text-navy transition-colors duration-300 hover:text-blue"
            >
              Explore Her Leadership
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;