"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-500/10
          blur-[160px]
        "
      />

      <div className="relative mx-auto max-w-4xl text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/10
            px-5
            py-2
            text-sm
            font-medium
            text-cyan-300
            backdrop-blur-xl
          "
        >
          ✨ Professional Web Development Services
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .2 }}
          className="
            mt-8
            text-5xl
            font-black
            leading-tight
            text-white
            md:text-6xl
          "
        >
          Building Modern
          <br />

          <span
            className="
              bg-gradient-to-r
              from-sky-300
              via-cyan-300
              to-blue-500
              bg-clip-text
              text-transparent
            "
          >
            Digital Experiences
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .35 }}
          className="
            mx-auto
            mt-8
            max-w-3xl
            text-lg
            leading-8
            text-slate-400
          "
        >
          I build fast, scalable and visually polished web applications
          using React, Next.js, TypeScript and the MERN stack.
          From beautiful landing pages to complete full-stack solutions,
          every project is crafted with performance and user experience
          in mind.
        </motion.p>

        {/* Bottom Glow Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{
            delay: .5,
            duration: .7,
          }}
          className="
            mx-auto
            mt-10
            h-[4px]
            rounded-full
            bg-cyan-400
            shadow-[0_0_25px_rgba(34,211,238,.9)]
          "
        />

      </div>
    </section>
  );
}