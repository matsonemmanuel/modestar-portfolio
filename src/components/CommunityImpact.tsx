import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import community1 from "../assets/images/community-1.jpg";
import community2 from "../assets/images/community-2.jpg";
import community3 from "../assets/images/community-3.jpg";
import community4 from "../assets/images/community-4.jpg";

type Category =
  | "All"
  | "Education"
  | "Youth Empowerment"
  | "Women & Girls"
  | "Community Development";

type Initiative = {
  title: string;
  category: Exclude<Category, "All">;
  focus: string;
  role: string;
  year: string;
  image: string;
};

const categories: Category[] = [
  "All",
  "Education",
  "Youth Empowerment",
  "Women & Girls",
  "Community Development",
];

const initiatives: Initiative[] = [
  {
    title: "Youth Empowerment Initiative",
    category: "Youth Empowerment",
    focus: "Youth Development",
    role: "Program Lead",
    year: "2025",
    image: community1,
  },
  {
    title: "Women & Girls Support Program",
    category: "Women & Girls",
    focus: "Women Empowerment",
    role: "Co-founder",
    year: "2024",
    image: community2,
  },
  {
    title: "Education Access Project",
    category: "Education",
    focus: "Education",
    role: "Project Advisor",
    year: "2023",
    image: community3,
  },
  {
    title: "Community Development",
    category: "Community Development",
    focus: "Livelihoods & Skills",
    role: "Lead Coordinator",
    year: "2024",
    image: community4,
  },
];

function CommunityImpact() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredInitiatives = useMemo(() => {
    if (activeCategory === "All") {
      return initiatives;
    }

    return initiatives.filter(
      (initiative) =>
        initiative.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="impact"
      className="bg-ivory py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Community Impact
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
            Transforming lives through
            <span className="text-blue">
              {" "}people-centered initiatives.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted">
            Exploring community initiatives, partnerships and
            practical efforts that create opportunities and
            strengthen communities.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer rounded-md px-5 py-2.5 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-navy text-white"
                    : "bg-white text-navy/70 hover:bg-gold hover:text-navy"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* Initiative cards */}
        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {filteredInitiatives.map((initiative, index) => (
            <motion.article
              layout
              key={initiative.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-xl border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
            >
              {/* Initiative image */}
<div className="relative h-[230px] overflow-hidden">
  <img
    src={initiative.image}
    alt={initiative.title}
    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
</div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-medium text-navy">
                  {initiative.title}
                </h3>

                <div className="mt-4 space-y-1.5 text-sm text-muted">
                  <p>
                    <span className="font-semibold text-navy">
                      Focus:
                    </span>{" "}
                    {initiative.focus}
                  </p>

                  <p>
                    <span className="font-semibold text-navy">
                      Role:
                    </span>{" "}
                    {initiative.role}
                  </p>

                  <p>
                    <span className="font-semibold text-navy">
                      Year:
                    </span>{" "}
                    {initiative.year}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {initiative.category}
                  </span>

                  <button
                    type="button"
                    className="group/link inline-flex cursor-pointer items-center gap-2 text-xs font-semibold text-gold transition-colors hover:text-navy"
                  >
                    View Initiative

                    <FiArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <p className="max-w-2xl text-center font-display text-xl italic text-navy/60 sm:text-2xl">
            "Leadership becomes meaningful when it creates
            opportunities for others."
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default CommunityImpact;