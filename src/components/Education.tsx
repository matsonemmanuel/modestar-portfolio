
import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiAward,
  FiArrowUpRight,
  FiGlobe,
} from "react-icons/fi";

const educationItems = [
  {
    title: "Online Legal Studies",
    institution: "University of Cambridge",
    status: "Online Learning",
    description:
      "Online legal learning as part of her continued personal and professional development, complementing her work in leadership, community development and advocacy.",
    icon: FiBookOpen,
  },
  {
    title: "Cohort 6 AL for Education Fellow",
    institution: "African Leadership Academy",
    status: "Fellowship",
    description:
      "A fellowship experience connected to her commitment to education, leadership and expanding opportunities for young people and their communities.",
    icon: FiAward,
  },
];

const developmentAreas = [
  "Leadership & Governance",
  "Youth Empowerment",
  "Community Development",
  "Entrepreneurship",
  "Women's Economic Empowerment",
  "Partnership Development",
];

function Education() {
  return (
    <section id="education" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section heading */}
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
            Knowledge as a{" "}
            <span className="text-blue">
              foundation for impact.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Modestar's journey reflects a commitment to continuous learning,
            leadership development and creating opportunities for others.
            Her professional growth continues alongside her work in education,
            vocational skills and community development.
          </p>
        </motion.div>

        {/* Education and learning cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {educationItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group border border-navy/10 bg-ivory p-8 transition-all duration-300 hover:border-gold/50 sm:p-10 lg:p-12"
              >
                {/* Icon and learning type */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>

                  <span className="border border-gold/30 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {item.status}
                  </span>
                </div>

                {/* Card content */}
                <h3 className="mt-12 max-w-xl font-display text-2xl font-medium leading-tight text-navy sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                  {item.institution}
                </p>

                <p className="mt-5 max-w-xl text-sm leading-7 text-muted">
                  {item.description}
                </p>

                <div className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-navy/50 transition-colors duration-300 group-hover:text-blue">
                  Learning & Professional Growth
                  <FiArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
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
                Areas of Practice
              </p>

              <h3 className="mt-4 font-display text-3xl font-medium leading-tight text-navy">
                Learning that supports leadership.
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                The knowledge and practical capabilities she applies through
                her leadership and community work.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {developmentAreas.map((area, index) => (
                <div
                  key={area}
                  className="flex items-center gap-3 border-b border-navy/10 pb-4"
                >
                  <span className="font-display text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium text-navy">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-l-2 border-gold bg-ivory px-6 py-7 sm:px-8"
        >
          <div className="flex items-start gap-4">
            <FiGlobe
              size={22}
              className="mt-1 shrink-0 text-gold"
              strokeWidth={1.5}
            />

            <p className="max-w-3xl font-display text-xl leading-relaxed text-navy sm:text-2xl">
              Learning is not only about qualifications; it is also about
              building the knowledge and capacity to create opportunities
              for others.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
