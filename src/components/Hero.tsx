import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import heroImage from "../assets/images/Modestar.jpg";
import AnimatedCounter from "./AnimatedCounter";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-[76px]"
    >
      {/* =====================================================
          HERO CONTENT
      ====================================================== */}
      <div className="mx-auto grid min-h-[calc(100vh-76px)] max-w-[1400px] lg:grid-cols-2">
        
        {/* =================================================
            LEFT CONTENT
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-12"
        >
          {/* Small category label */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-gold">
            Leadership • Service • Impact
          </p>

          {/* =================================================
              PERSONAL NAME
          ================================================== */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-gold" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                Personal Leadership Portfolio
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-[42px]">
              Modestar{" "}
              <span className="text-gold">Kabasinguzi</span>
            </h2>
          </div>

          {/* =================================================
              MAIN HEADLINE
          ================================================== */}
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-white sm:text-6xl lg:text-[68px]">
            Leading with
            <br />

            <span className="text-gold">Purpose.</span>

            <br />

            Creating Impact.
            <br />

            Building Communities.
          </h1>

          {/* =================================================
              INTRODUCTION
          ================================================== */}
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            A community leader, social impact advocate and Managing Director
            at THEHASA Foundation, committed to advancing meaningful change
            through leadership, service and community-centered initiatives.
          </p>

          {/* =================================================
              ACTION BUTTONS
          ================================================== */}
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-md bg-gold px-6 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-[#d8b66d]"
            >
              Explore Her Journey

              <FiArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-white/30 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT IMAGE
        ================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-[500px] lg:min-h-0"
        >
          {/* Main photograph */}
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: "center 18%",
            }}
          />

          {/* Navy overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/20 to-transparent" />

          {/* Bottom overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* =====================================================
          IMPACT PROOF STRIP
      ====================================================== */}
      <div className="border-t border-navy/10 bg-ivory">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">

          {/* =====================
              STAT 01
          ====================== */}
          <div className="border-b border-r border-navy/10 px-6 py-8 sm:px-10 lg:border-b-0">
            <p className="font-display text-4xl font-medium text-navy sm:text-5xl">
              <AnimatedCounter end={15} suffix="+" />
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Years of Community Experience
            </p>
          </div>

          {/* =====================
              STAT 02
          ====================== */}
          <div className="border-b border-navy/10 px-6 py-8 sm:px-10 lg:border-b-0 lg:border-r">
            <p className="font-display text-4xl font-medium text-navy sm:text-5xl">
              <AnimatedCounter end={15} suffix="+" />
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Community Initiatives
            </p>
          </div>

          {/* =====================
              STAT 03
          ====================== */}
          <div className="border-r border-navy/10 px-6 py-8 sm:px-10">
            <p className="font-display text-4xl font-medium text-navy sm:text-5xl">
              <AnimatedCounter end={10} suffix="+" />
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Fellowships & Learning
            </p>
          </div>

          {/* =====================
              STAT 04
          ====================== */}
          <div className="px-6 py-8 sm:px-10">
            <p className="font-display text-4xl font-medium text-navy sm:text-5xl">
              <AnimatedCounter end={5} suffix="+" />
            </p>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Global Learning Spaces
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;