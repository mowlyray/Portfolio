"use client";

import { motion } from "framer-motion";

export default function CertificateHero() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative overflow-hidden py-24"
    >
      {/* Glow */}

      <div
        aria-hidden
        className="
          absolute
          left-1/2
          top-0
          h-72
          w-72
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}

        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-5
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-cyan-300
          "
        >
          🏆 Certificates
        </span>

        {/* Heading */}

        <h1
          className="
            mt-8
            text-5xl
            font-bold
            leading-tight
            text-white
            md:text-6xl
          "
        >
          Professional{" "}
          <span className="text-cyan-300">
            Certifications
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
          "
        >
          These certifications reflect my dedication to
          continuous learning, mastering modern web
          technologies, and growing as a professional
          software engineer.
        </p>
      </div>
    </motion.section>
  );
}