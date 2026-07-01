"use client";

import { motion } from "framer-motion";
import type { JourneyItem, TimelineSide } from "./types";

interface TimelineContentProps {
  item: JourneyItem;
  side: TimelineSide;
  index: number;
}

/**
 * The compact card shown for each milestone. Slides out from the center
 * line toward its side (LEFT cards slide left, RIGHT cards slide right),
 * uses a soft glassmorphism surface with a milestone-colored glow, and
 * lifts slightly on hover.
 */
export default function TimelineContent({
  item,
  side,
  index,
}: TimelineContentProps) {
  const Icon = item.icon;
  const isLeft = side === "left";
  const { theme } = item;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? 56 : -56 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.08 + index * 0.02,
      }}
      className={`relative w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 ${theme.glowClass} ${theme.hoverBorderClass}`}
    >
      <span
        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${theme.iconWrapperClass}`}
      >
        <Icon className={`h-5 w-5 ${theme.iconColorClass}`} strokeWidth={1.9} />
      </span>

      <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
        {item.title}
      </h3>

      <div className={`mt-2 h-0.5 w-8 rounded-full ${theme.underlineClass}`} />

      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${theme.tagClass}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
