"use client";

import { motion } from "framer-motion";

/**
 * Centered introduction for the About section: a small "ABOUT ME" badge,
 * a large two-tone heading, and a short paragraph describing the journey
 * ahead.
 */
export default function AboutIntro() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300"
      >
        About Me
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
        className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
      >
        <span className="text-white">My </span>
        <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Journey
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.55, ease: "easeOut", delay: 0.16 }}
        className="mt-5 text-balance text-base leading-relaxed text-slate-400 sm:text-lg"
      >
        I love turning ideas into reality through code. My journey in
        programming has been about continuous learning, building and
        improving every day.
      </motion.p>
    </div>
  );
}
