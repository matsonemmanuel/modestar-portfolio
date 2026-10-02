import { motion } from "framer-motion";

import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";

const galleryImages = [
  {
    src: gallery1,
    alt: "Community engagement",
    title: "Community Engagement",
    size: "large",
  },
  {
    src: gallery2,
    alt: "Leadership and collaboration",
    title: "Leadership & Collaboration",
    size: "small",
  },
  {
    src: gallery3,
    alt: "Youth engagement",
    title: "Youth & Community",
    size: "small",
  },
  {
    src: gallery4,
    alt: "Learning and leadership",
    title: "Learning & Leadership",
    size: "wide",
  },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-ivory py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Moments of Impact
            </p>

            <h2 className="font-display text-4xl font-medium leading-tight text-navy sm:text-5xl lg:text-6xl">
              Stories captured
              <span className="text-blue"> in moments.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
              A visual collection of moments from community work,
              leadership, learning and the people who make the journey
              meaningful.
            </p>
          </div>

          <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-navy/40 lg:block">
            Selected moments
          </span>
        </motion.div>

        {/* Gallery */}
        <div className="grid gap-5 lg:grid-cols-12">

          {/* Large image */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[420px] overflow-hidden lg:col-span-7 lg:min-h-[620px]"
          >
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

            <figcaption className="absolute bottom-0 left-0 p-7 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                01
              </span>

              <h3 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl">
                {galleryImages[0].title}
              </h3>
            </figcaption>
          </motion.figure>

          {/* Right column */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            {galleryImages.slice(1, 3).map((image, index) => (
              <motion.figure
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative min-h-[300px] overflow-hidden sm:min-h-[340px] lg:min-h-[295px]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                <figcaption className="absolute bottom-0 left-0 p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                    0{index + 2}
                  </span>

                  <h3 className="mt-1 font-display text-xl font-medium text-white">
                    {image.title}
                  </h3>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Wide image */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="group relative min-h-[300px] overflow-hidden lg:col-span-12 lg:min-h-[360px]"
          >
            <img
              src={galleryImages[3].src}
              alt={galleryImages[3].alt}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-transparent to-transparent" />

            <figcaption className="absolute bottom-0 left-0 p-7 sm:p-9">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                04
              </span>

              <h3 className="mt-2 font-display text-2xl font-medium text-white sm:text-3xl">
                {galleryImages[3].title}
              </h3>
            </figcaption>
          </motion.figure>

        </div>
      </div>
    </section>
  );
}

export default Gallery;