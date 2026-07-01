"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

/**
 * The glass "closing note" card shown below the timeline: a sparkle
 * badge alongside a short belief statement and a cyan tagline.
 */
export default function AboutClosingNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto flex w-full max-w-2xl items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-left shadow-lg shadow-black/20 backdrop-blur-xl sm:px-8 sm:py-6"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
        <Sparkles className="h-5 w-5" strokeWidth={1.9} />
      </span>

      <div>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          I believe in consistency, discipline and continuous learning.
        </p>
        <p className="mt-1 text-sm font-medium text-cyan-300 sm:text-base">
          This journey is still ongoing...
        </p>
      </div>
    </motion.div>
  );
}
