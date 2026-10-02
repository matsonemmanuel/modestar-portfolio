import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";

const educationItems = [
  {
    year: "20XX",
    title: "Academic Programme",
    institution: "University / Institution",
    description:
      "Academic foundation that contributed to her professional growth, critical thinking and approach to leadership.",
    icon: FiBookOpen,
  },
  {
    year: "20XX",
    title: "Legal Studies",
    institution: "University of Cambridge",
    description:
      "Further learning in legal studies and related areas, strengthening her understanding of law, leadership and social impact.",
    icon: FiAward,
  },
];

const developmentAreas = [
  "Leadership",
  "Governance",
  "Community Development",
  "Advocacy",
  "Organizational Development",
  "Professional Learning",
];

function Education() {
  return (
    <section id="education" className="bg-white py-24 lg:py-32">
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
            Education & Professional Development
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
            Knowledge as a
            <span className="text-blue"> foundation for impact.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Continuous learning has remained an important part of her journey,
            strengthening the knowledge, skills and perspectives she brings to
            leadership and community work.
          </p>
        </motion.div>

        {/* Education cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group border border-navy/10 bg-ivory p-8 transition-all duration-300 hover:border-gold/50 sm:p-10 lg:p-12"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <span className="font-display text-2xl text-gold">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-12 font-display text-2xl font-medium text-navy sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {item.institution}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-navy/50 transition-colors duration-300 group-hover:text-blue">
                  Academic & Professional Growth
                  <FiArrowUpRight size={13} />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Professional development */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-navy/10 pt-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                Areas of Development
              </p>

              <h3 className="mt-4 font-display text-3xl font-medium text-navy">
                Learning that supports leadership.
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3">
              {developmentAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 border-b border-navy/10 pb-4"
                >
                  <span className="font-display text-sm text-gold">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-navy">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;