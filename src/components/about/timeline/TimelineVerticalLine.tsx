"use client";

import { motion, type MotionValue } from "framer-motion";

interface TimelineVerticalLineProps {
  /** Scroll-linked progress value (0 -> 1) driving the line's growth. */
  progress: MotionValue<number>;
}

/**
 * Renders the always-centered vertical timeline line.
 *
 * A faint static track spans the full height of the timeline, while a
 * bright cyan/sky gradient overlay grows from top to bottom as the user
 * scrolls, using `progress` as its `scaleY` transform. A small static
 * tick marks the start, and a soft glow blob caps the end.
 */
export default function TimelineVerticalLine({
  progress,
}: TimelineVerticalLineProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 left-6 w-0.5 md:left-1/2 md:-translate-x-1/2"
    >
      {/* Decorative top tick */}
      <div className="absolute -top-8 left-1/2 h-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 to-cyan-400/70" />

      {/* Static faint track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/0 via-white/10 to-white/0" />

      {/* Animated glowing progress line */}
      <motion.div
        style={{ scaleY: progress }}
        className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-cyan-300 via-sky-400 to-cyan-400 shadow-[0_0_20px_3px_rgba(56,189,248,0.6)]"
      />

      {/* Soft glow cap at the bottom of the line */}
      <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-cyan-400/40 blur-xl" />
    </div>
  );
}
