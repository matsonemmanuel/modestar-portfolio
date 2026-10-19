
import { motion } from "framer-motion";
import {
  FiUsers,
  FiTarget,
  FiHeart,
  FiGlobe,
} from "react-icons/fi";

const impactStats = [
  {
    value: "19",
    label: "Staff Supervised",
    description:
      "Providing team leadership while supporting vocational training and community-focused programmes.",
    icon: FiUsers,
  },
  {
    value: "10,000+",
    label: "Young People — Target",
    description:
      "A long-term ambition to expand access to employable vocational and entrepreneurial skills.",
    icon: FiTarget,
  },
  {
    value: "Youth",
    label: "Empowerment Focus",
    description:
      "Supporting young people through vocational skills, entrepreneurship, mentorship and financial literacy.",
    icon: FiHeart,
  },
  {
    value: "Community",
    label: "Development Focus",
    description:
      "Strengthening opportunities through women's savings groups, community partnerships and child protection initiatives.",
    icon: FiGlobe,
  },
];

function ImpactAtGlance() {
  return (
    <section
      id="impact-at-a-glance"
      className="bg-ivory py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Community Impact
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
            Transforming lives through{" "}
            <span className="text-blue">
              people-centered initiatives.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Exploring Modestar's work in youth empowerment, vocational
            skills, women's economic participation and community development.
          </p>
        </motion.div>

        {/* Impact cards */}
        <div className="grid gap-px overflow-hidden border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.article
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

                <p className="break-words font-display text-3xl font-medium leading-tight text-navy sm:text-4xl">
                  {stat.value}
                </p>

                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.08em] text-navy">
                  {stat.label}
                </h3>

                <p className="mt-4 text-sm leading-6 text-muted">
                  {stat.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactAtGlance;
