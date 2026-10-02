import { motion } from "framer-motion";
import {
  FiAward,
  FiStar,
  FiArrowUpRight,
} from "react-icons/fi";

const achievements = [
  {
    number: "01",
    year: "20XX",
    title: "Featured Achievement",
    organization: "Organization / Institution",
    description:
      "Recognition for leadership, service or contribution to meaningful community and organizational work.",
    featured: true,
  },
  {
    number: "02",
    year: "20XX",
    title: "Leadership Milestone",
    organization: "Organization / Programme",
    description:
      "A milestone reflecting growth in leadership, responsibility and community engagement.",
  },
  {
    number: "03",
    year: "20XX",
    title: "Community Recognition",
    organization: "Organization / Initiative",
    description:
      "Recognition connected to contribution, service or positive community impact.",
  },
  {
    number: "04",
    year: "20XX",
    title: "Professional Milestone",
    organization: "Institution / Programme",
    description:
      "A professional or learning milestone that contributed to continued development.",
  },
];

function Achievements() {
  return (
    <section className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Achievements & Milestones
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            Moments that mark the
            <span className="text-gold"> journey.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Recognition and milestones that reflect continued growth,
            leadership, learning and contribution.
          </p>
        </motion.div>

        {/* Achievement layout */}
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Featured achievement */}
          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[500px] bg-navy p-8 sm:p-10 lg:p-14"
          >
            <div className="absolute right-10 top-10 opacity-20">
              <FiAward
                size={100}
                strokeWidth={0.7}
                className="text-gold"
              />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-4xl text-gold/60">
                    {achievements[0].number}
                  </span>

                  <span className="font-display text-xl text-gold">
                    {achievements[0].year}
                  </span>
                </div>

                <p className="mt-20 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Featured Recognition
                </p>

                <h3 className="mt-4 max-w-lg font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
                  {achievements[0].title}
                </h3>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  {achievements[0].organization}
                </p>

                <p className="mt-6 max-w-lg text-sm leading-7 text-white/60">
                  {achievements[0].description}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 group-hover:text-gold">
                Recognition & impact
                <FiArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </motion.article>

          {/* Achievement list */}
          <div className="bg-navy">
            {achievements.slice(1).map((item, index) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group border-b border-white/10 p-8 last:border-b-0 sm:p-10"
              >
                <div className="flex items-start gap-6">
                  <span className="font-display text-2xl text-gold/70">
                    {item.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-display text-2xl font-medium text-white">
                        {item.title}
                      </h3>

                      <span className="text-sm font-medium text-gold">
                        {item.year}
                      </span>
                    </div>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                      {item.organization}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-white/60">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/40 transition-colors duration-300 group-hover:text-gold">
                      View milestone
                      <FiArrowUpRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="h-px w-12 bg-gold" />

          <div className="flex items-center gap-2 text-sm text-white/50">
            <FiStar className="text-gold" size={15} />
            <span>
              Every milestone is part of a larger journey of service.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Achievements;