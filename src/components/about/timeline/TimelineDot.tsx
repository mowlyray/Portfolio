"use client";

import { motion } from "framer-motion";

/**
 * The dot marker attached to the center timeline line for each milestone.
 * Pops in when scrolled into view, then pulses continuously with a soft
 * cyan glow halo around a bright white-cyan core.
 */
export default function TimelineDot() {
  return (
    <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="relative flex h-4 w-4 items-center justify-center"
      >
        {/* Continuous pulse halo */}
        <motion.span
          aria-hidden="true"
          animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/60 blur-[2px]"
        />
        {/* Solid glowing core */}
        <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-white to-cyan-300 shadow-[0_0_18px_5px_rgba(34,211,238,0.65)]" />
      </motion.span>
    </div>
  );
}
