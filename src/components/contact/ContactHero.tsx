"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="text-center">

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          inline-flex
          rounded-full
          border
          border-cyan-400/20
          bg-cyan-500/10
          px-4
          py-2
          text-sm
          font-medium
          uppercase
          tracking-[0.25em]
          text-cyan-300
        "
      >
        Contact
      </motion.span>

      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .15,
        }}
        className="
          mt-8
          text-5xl
          font-bold
          text-white
        "
      >
        Get In Touch
      </motion.h1>

      <motion.p
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: .3,
        }}
        className="
          mx-auto
          mt-8
          max-w-3xl
          text-lg
          leading-8
          text-slate-400
        "
      >
        I'm currently open to Junior Software Engineering
        opportunities, internships and exciting collaborations.
        Feel free to reach out if you'd like to work together
        or simply connect.
      </motion.p>

    </section>
  );
}