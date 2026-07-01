import { Code2, Box, Braces, Globe2, Rocket } from "lucide-react";
import type { JourneyItem, JourneyTheme } from "./types";

const blueTheme: JourneyTheme = {
  iconWrapperClass: "bg-sky-500/15 border border-sky-400/30",
  iconColorClass: "text-sky-300",
  underlineClass: "bg-sky-400",
  tagClass: "border-sky-400/30 bg-sky-500/10 text-sky-300",
  glowClass: "shadow-[0_0_60px_-15px_rgba(56,189,248,0.4)]",
  hoverBorderClass: "hover:border-sky-400/40",
};

const purpleTheme: JourneyTheme = {
  iconWrapperClass: "bg-violet-500/15 border border-violet-400/30",
  iconColorClass: "text-violet-300",
  underlineClass: "bg-violet-400",
  tagClass: "border-violet-400/30 bg-violet-500/10 text-violet-300",
  glowClass: "shadow-[0_0_60px_-15px_rgba(167,139,250,0.4)]",
  hoverBorderClass: "hover:border-violet-400/40",
};

const tealTheme: JourneyTheme = {
  iconWrapperClass: "bg-emerald-500/15 border border-emerald-400/30",
  iconColorClass: "text-emerald-300",
  underlineClass: "bg-emerald-400",
  tagClass: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  glowClass: "shadow-[0_0_60px_-15px_rgba(52,211,153,0.4)]",
  hoverBorderClass: "hover:border-emerald-400/40",
};

const amberTheme: JourneyTheme = {
  iconWrapperClass: "bg-amber-500/15 border border-amber-400/30",
  iconColorClass: "text-amber-300",
  underlineClass: "bg-amber-400",
  tagClass: "border-amber-400/30 bg-amber-500/10 text-amber-300",
  glowClass: "shadow-[0_0_60px_-15px_rgba(251,191,36,0.4)]",
  hoverBorderClass: "hover:border-amber-400/40",
};

const roseTheme: JourneyTheme = {
  iconWrapperClass: "bg-rose-500/15 border border-rose-400/30",
  iconColorClass: "text-rose-300",
  underlineClass: "bg-rose-400",
  tagClass: "border-rose-400/30 bg-rose-500/10 text-rose-300",
  glowClass: "shadow-[0_0_60px_-15px_rgba(251,113,133,0.4)]",
  hoverBorderClass: "hover:border-rose-400/40",
};

/**
 * Chronological list of milestones rendered by <JourneyTimeline />.
 * Items alternate LEFT / RIGHT starting with LEFT at index 0.
 */
export const journeyData: JourneyItem[] = [
  {
    id: "programming-fundamentals",
    title: "Programming Fundamentals",
    description:
      "My programming journey started with learning the basics of programming using C, C++ and solving simple problems. This built my logic and problem-solving foundation.",
    icon: Code2,
    tags: ["C", "C++", "Problem Solving"],
    theme: blueTheme,
  },
  {
    id: "data-structures",
    title: "Data Structures & Algorithms",
    description:
      "I dived into Data Structures and Algorithms to improve my thinking ability and solve more complex problems efficiently.",
    icon: Box,
    tags: ["DSA", "Algorithms", "Efficiency"],
    theme: purpleTheme,
  },
  {
    id: "object-oriented-programming",
    title: "Object-Oriented Programming",
    description:
      "Then I explored Object-Oriented Programming and learned Java and Python. This helped me understand how real-world software is designed and structured.",
    icon: Braces,
    tags: ["Java", "Python", "OOP"],
    theme: tealTheme,
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "I found my real passion in Web Development. I started building modern and responsive websites and full-stack applications using the MERN stack and Next.js.",
    icon: Globe2,
    tags: ["React", "Node.js", "MongoDB", "Next.js"],
    theme: amberTheme,
  },
  {
    id: "future-aspirations",
    title: "Future Aspirations",
    description:
      "I aspire to become a Software Engineer, work on impactful projects, explore AI, Cloud and System Design, and keep learning to grow every single day.",
    icon: Rocket,
    tags: ["AI", "Cloud", "System Design", "Growth"],
    theme: roseTheme,
  },
];
