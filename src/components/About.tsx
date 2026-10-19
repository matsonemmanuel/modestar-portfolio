
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiHeart,
  FiUsers,
} from "react-icons/fi";

import aboutImage from "../assets/images/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* Portrait and decorative frame */}
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
                  alt="Modestar Kabasinguzi"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>

              {/* Image label */}
              <div className="absolute bottom-6 left-6 z-20 bg-gold px-5 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-navy">
                  Leadership &amp; Service
                </p>
              </div>
            </div>
          </motion.div>

          {/* About content */}
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
              A journey shaped by{" "}
              <span className="text-blue">
                purpose, service and people.
              </span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-muted">
              <p>
                Modestar Kabasinguzi is a community leader and social
                impact advocate whose work is grounded in service,
                purposeful leadership and a commitment to creating
                meaningful opportunities for others.
              </p>

              <p>
                As Managing Director of THEHASA Foundation, she
                contributes to organizational leadership and community
                initiatives focused on participation, learning and
                community transformation. Her work reflects the
                importance of listening to communities, strengthening
                collaboration and creating opportunities for people
                to contribute to change.
              </p>

              <p>
                Her journey also reflects a commitment to continuous
                learning and leadership development. Through her
                community engagement, organizational responsibilities
                and learning experiences, she continues to build her
                capacity to serve, collaborate and support meaningful
                change.
              </p>
            </div>

            {/* Core values */}
            <div className="mt-9 grid gap-6 border-t border-navy/10 pt-8 sm:grid-cols-2">

              {/* Purpose-driven */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <FiHeart size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-semibold text-navy">
                    Purpose-Driven
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Leading with intention, integrity and a
                    commitment to meaningful change.
                  </p>
                </div>
              </div>

              {/* Community-centered */}
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <FiUsers size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-semibold text-navy">
                    Community-Centered
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-muted">
                    Encouraging participation, collaboration and
                    opportunities for people to grow and lead.
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership link */}
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
