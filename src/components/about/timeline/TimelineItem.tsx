"use client";

import TimelineDot from "./TimelineDot";
import TimelineConnector from "./TimelineConnector";
import TimelineContent from "./TimelineContent";
import type { JourneyItem, TimelineSide } from "./types";

interface TimelineItemProps {
  item: JourneyItem;
  side: TimelineSide;
  index: number;
}

/**
 * A single row of the timeline: the center dot plus its connector and
 * card. On desktop the card sits on the given `side` of the center line.
 * On mobile every card collapses into a single left-aligned column while
 * the center line stays intact.
 */
export default function TimelineItem({ item, side, index }: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <div className="relative py-8 md:grid md:grid-cols-2 md:items-center md:py-10">
      <TimelineDot />

      {/* Left column (desktop) */}
      <div
        className={`relative flex pl-12 md:pl-0 md:pr-10 ${
          isLeft ? "justify-start md:justify-end" : "hidden md:flex md:justify-end"
        }`}
      >
        {isLeft && (
          <>
            <TimelineConnector side="left" />
            <TimelineContent item={item} side="left" index={index} />
          </>
        )}
      </div>

      {/* Right column (desktop) */}
      <div
        className={`relative flex pl-12 md:pl-10 ${
          !isLeft ? "justify-start" : "hidden md:flex md:justify-start"
        }`}
      >
        {!isLeft && (
          <>
            <TimelineConnector side="right" />
            <TimelineContent item={item} side="right" index={index} />
          </>
        )}
      </div>
    </div>
  );
}
