"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import TimelineVerticalLine from "./TimelineVerticalLine";
import TimelineItem from "./TimelineItem";
import { journeyData } from "./journey-data";

/**
 * Renders the full vertical journey timeline: a scroll-driven center
 * line plus an alternating LEFT / RIGHT sequence of milestone cards.
 */
export default function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.2", "end 0.85"],
  });

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-5xl px-4 sm:px-6"
    >
      <TimelineVerticalLine progress={scrollYProgress} />

      <div className="relative flex flex-col">
        {journeyData.map((item, index) => (
          <TimelineItem
            key={item.id}
            item={item}
            index={index}
            side={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
