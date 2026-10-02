import { motion } from "framer-motion";
import {
  FiUsers,
  FiGlobe,
  FiAward,
  FiHeart,
} from "react-icons/fi";

const impactStats = [
  {
    value: "15+",
    label: "Years of Community Experience",
    description: "Committed to community-centered leadership and service.",
    icon: FiUsers,
  },
  {
    value: "20+",
    label: "Community Initiatives",
    description: "Supporting meaningful transformation through practical action.",
    icon: FiHeart,
  },
  {
    value: "10+",
    label: "Fellowships & Learning",
    description: "Engaging in global leadership and professional development.",
    icon: FiAward,
  },
  {
    value: "5+",
    label: "Countries & Global Spaces",
    description: "Building connections through international learning and collaboration.",
    icon: FiGlobe,
  },
];

function ImpactAtGlance() {
  return (
    <section id="impact" className="bg-ivory py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Impact at a Glance
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
            Turning leadership into
            <span className="text-blue"> meaningful impact.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            A journey shaped by community service, leadership, learning and a
            commitment to creating opportunities for people and communities.
          </p>
        </motion.div>

        {/* Impact cards */}
        <div className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group bg-ivory p-8 transition-colors duration-300 hover:bg-white lg:p-10"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                  <Icon size={21} strokeWidth={1.5} />
                </div>

                <p className="font-display text-5xl font-medium text-navy">
                  {stat.value}
                </p>

                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                  {stat.label}
                </h3>

                <p className="mt-4 text-sm leading-6 text-muted">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactAtGlance;