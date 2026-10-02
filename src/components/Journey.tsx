import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const journeyItems = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "An early stage of personal growth, learning and discovering a deeper commitment to leadership and community service.",
  },
  {
    year: "2022",
    title: "Stepping Into Leadership",
    description:
      "Taking on greater responsibility and becoming more actively involved in initiatives focused on people, community and positive change.",
  },
  {
    year: "2024",
    title: "Expanding Community Impact",
    description:
      "Growing through practical leadership, community engagement, collaboration and experiences that strengthened a commitment to sustainable impact.",
  },
  {
    year: "2025",
    title: "Global Learning & Development",
    description:
      "Engaging in fellowships, professional development and learning opportunities that broadened perspectives on leadership and social transformation.",
  },
  {
    year: "2026",
    title: "Leading With Purpose",
    description:
      "Continuing to bring together leadership, service, learning and community transformation while creating opportunities for others to thrive.",
  },
];

function Journey() {
  return (
    <section id="journey" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            My Journey
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
            Growth shaped by
            <span className="text-blue"> experience.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
            Every chapter has contributed to a journey of learning, leadership,
            service and increasingly meaningful community impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Central line */}
          <div className="absolute bottom-0 left-5 top-0 w-px bg-navy/15 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14 md:space-y-20">
            {journeyItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -30 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.05,
                  }}
                  className="relative grid md:grid-cols-2"
                >
                  {/* Timeline point */}
                  <div className="absolute left-[1px] top-1 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-ivory md:left-1/2 md:-translate-x-1/2">
                    <div className="h-2.5 w-2.5 rounded-full bg-gold" />
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-16 md:pl-0 ${
                      isLeft
                        ? "md:pr-20 md:text-right"
                        : "md:col-start-2 md:pl-20"
                    }`}
                  >
                    <p className="font-display text-3xl font-medium text-gold">
                      {item.year}
                    </p>

                    <h3 className="mt-2 font-display text-2xl font-medium text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted">
                      {item.description}
                    </p>

                    <div
                      className={`mt-5 flex ${
                        isLeft
                          ? "md:justify-end"
                          : "justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-navy/60">
                        Chapter {index + 1}
                        <FiArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;