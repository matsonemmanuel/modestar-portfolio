import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGlobe,
  FiBookOpen,
  FiAward,
} from "react-icons/fi";

import southAfricaImage from "../assets/images/southafrica.jpg";

const fellowships = [
  {
    number: "01",
    title: "Featured Fellowship",
    organization: "Leadership & Global Learning",
    description:
      "A learning experience that expanded perspectives, strengthened leadership capacity and created opportunities to connect with people and ideas beyond local contexts.",
    icon: FiGlobe,
    featured: true,
    image: southAfricaImage,
  },
  {
    number: "02",
    title: "Leadership Development",
    organization: "Professional Learning",
    description:
      "Building practical leadership skills through structured learning, collaboration and exchange.",
    icon: FiAward,
  },
  {
    number: "03",
    title: "Global Learning",
    organization: "International Exposure",
    description:
      "Engaging with diverse perspectives and experiences to strengthen approaches to leadership and community transformation.",
    icon: FiBookOpen,
  },
];

function Fellowships() {
  return (
    <section id="fellowships" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Fellowships & Global Learning
          </p>

          <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
            Learning beyond
            <span className="text-blue"> borders.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
            Fellowships, leadership programmes and learning experiences have
            created opportunities to exchange ideas, build relationships and
            strengthen a broader understanding of leadership and impact.
          </p>
        </motion.div>

        {/* Fellowship layout */}
        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Featured */}
          {/* Featured fellowship */}
<motion.article
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7 }}
  className="group relative min-h-[500px] overflow-hidden bg-navy"
>
  {/* South Africa image */}
  <div className="absolute inset-y-0 right-0 w-full lg:w-[48%]">
    <img
      src={fellowships[0].image}
      alt="Leadership training experience in South Africa"
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    {/* Image overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent lg:from-navy lg:via-navy/30 lg:to-transparent" />

    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
  </div>

  {/* Decorative circle */}
  <div className="absolute -right-28 -top-28 z-10 h-72 w-72 rounded-full border border-gold/20" />

  {/* Content */}
  <div className="relative z-20 flex min-h-[500px] w-full flex-col justify-between p-8 sm:p-10 lg:w-[65%] lg:p-14">
    <div>
      {/* Number + icon */}
      <div className="flex items-center justify-between">
        <span className="font-display text-4xl text-gold/60">
          {fellowships[0].number}
        </span>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold">
          <FiGlobe size={21} strokeWidth={1.5} />
        </div>
      </div>

      {/* Label */}
      <p className="mt-16 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
        Featured Experience
      </p>

      {/* Title */}
      <h3 className="mt-4 max-w-xl font-display text-3xl font-medium leading-tight text-white sm:text-4xl">
        {fellowships[0].title}
      </h3>

      {/* Organization */}
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
        {fellowships[0].organization}
      </p>

      {/* Description */}
      <p className="mt-6 max-w-xl text-sm leading-7 text-white/65">
        {fellowships[0].description}
      </p>

      {/* Location */}
      <div className="mt-6 inline-flex items-center gap-2 border border-gold/30 bg-navy/50 px-4 py-2">
        <FiGlobe
          size={14}
          className="text-gold"
        />

        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
          South Africa
        </span>
      </div>
    </div>

    {/* Bottom link */}
    <div className="mt-10 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 group-hover:text-gold">
      Leadership & Global Learning

      <FiArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </div>
  </div>
</motion.article>

          {/* Supporting experiences */}
          <div className="grid gap-5">
            {fellowships.slice(1).map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group border border-navy/10 bg-white p-8 transition-all duration-300 hover:border-gold/50 sm:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-3xl text-gold">
                      {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy">
                      <Icon size={19} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-10 font-display text-2xl font-medium text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                    {item.organization}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px w-12 bg-gold transition-all duration-300 group-hover:w-20" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fellowships;