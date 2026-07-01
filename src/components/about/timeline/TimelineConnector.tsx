"use client";

import { motion } from "framer-motion";
import type { TimelineSide } from "./types";

interface TimelineConnectorProps {
  side: TimelineSide;
}

/**
 * The short dashed horizontal line connecting the center timeline dot to
 * a milestone card. Grows from the dot toward the card once the item
 * scrolls into view.
 */
export default function TimelineConnector({ side }: TimelineConnectorProps) {
  const isLeft = side === "left";

  return (
    <>
      {/* Mobile connector: short, attaches to the left-aligned line */}
      <motion.div
        aria-hidden="true"
        initial={{ width: 0 }}
        whileInView={{ width: 24 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 border-t-2 border-dashed border-slate-500/50 md:hidden"
      />

      {/* Desktop connector: grows from the center line toward the card */}
      <motion.div
        aria-hidden="true"
        initial={{ width: 0 }}
        whileInView={{ width: 40 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.12 }}
        className={`absolute top-1/2 hidden -translate-y-1/2 border-t-2 border-dashed border-slate-500/50 md:block ${
          isLeft ? "right-0" : "left-0"
        }`}
      />
    </>
  );
}
