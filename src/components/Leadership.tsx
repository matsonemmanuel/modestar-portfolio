import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiUsers,
  FiCompass,
} from "react-icons/fi";

const leadershipRoles = [
  {
    number: "01",
    role: "Managing Director",
    organization: "THEHASA Foundation",
    description:
      "Providing leadership and strategic direction while supporting initiatives focused on community transformation, organizational growth and meaningful impact.",
    icon: FiBriefcase,
  },
  {
    number: "02",
    role: "Board Leadership",
    organization: "Strategic Governance",
    description:
      "Contributing to organizational leadership, governance, strategic thinking and decisions that strengthen institutions and their ability to serve communities.",
    icon: FiCompass,
  },
  {
    number: "03",
    role: "Community Leadership",
    organization: "Community Initiatives",
    description:
      "Working alongside communities, young people and partners to support participation, collaboration and initiatives that create opportunities for positive change.",
    icon: FiUsers,
  },
];

function Leadership() {
  return (
    <section id="leadership" className="bg-navy py-24 lg:py-32">
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
            Leadership & Responsibility
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            Leadership that turns
            <span className="text-gold"> responsibility </span>
            into action.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60">
            Leadership is expressed through responsibility, collaboration and
            a commitment to creating meaningful outcomes for people and
            communities.
          </p>
        </motion.div>

        {/* Leadership roles */}
        <div className="border-t border-white/15">
          {leadershipRoles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group grid gap-8 border-b border-white/15 py-10 md:grid-cols-[100px_1fr_1.2fr] md:items-center lg:py-12"
              >
                {/* Number */}
                <div>
                  <span className="font-display text-4xl font-medium text-gold/70 transition-colors duration-300 group-hover:text-gold">
                    {item.number}
                  </span>
                </div>

                {/* Role */}
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-medium text-white sm:text-3xl">
                      {item.role}
                    </h3>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="md:pl-4">
                  <p className="max-w-xl text-sm leading-7 text-white/60">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 group-hover:text-gold">
                    Leadership & Impact
                    <FiArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Leadership;