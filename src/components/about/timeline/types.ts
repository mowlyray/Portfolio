import type { LucideIcon } from "lucide-react";

/**
 * Which side of the central timeline line a given item's card
 * is rendered on at desktop breakpoints.
 */
export type TimelineSide = "left" | "right";

/**
 * Static Tailwind class strings that style a milestone's icon badge,
 * title underline, skill tags, and ambient card glow. Kept as literal
 * class strings (rather than built dynamically) so Tailwind's compiler
 * can always find and generate them.
 */
export interface JourneyTheme {
  /** Icon badge background + border. */
  iconWrapperClass: string;
  /** Icon glyph color. */
  iconColorClass: string;
  /** Short accent line under the card title. */
  underlineClass: string;
  /** Skill/tag pill background + border + text color. */
  tagClass: string;
  /** Soft colored glow shadow behind the card. */
  glowClass: string;
  /** Border color used on hover. */
  hoverBorderClass: string;
}

/**
 * A single milestone in the developer's programming journey.
 */
export interface JourneyItem {
  /** Stable unique identifier, also used as the React key. */
  id: string;
  /** Milestone title shown prominently on the card. */
  title: string;
  /** Short, compact description of the milestone. */
  description: string;
  /** Icon rendered inside the card's badge. */
  icon: LucideIcon;
  /** Short skill/topic tags rendered as pills. */
  tags: string[];
  /** Color theme applied to this milestone's icon, tags, and glow. */
  theme: JourneyTheme;
}
