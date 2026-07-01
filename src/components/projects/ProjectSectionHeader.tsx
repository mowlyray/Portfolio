"use client";

import { motion } from "framer-motion";

interface ProjectSectionHeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function ProjectSectionHeader({
  title = "Featured Projects",
  subtitle = "PROJECTS",
  description = "A selection of projects that showcase my passion for building modern, scalable, and user-focused web applications.",
  centered = true,
}: ProjectSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mx-auto max-w-3xl ${
        centered ? "text-center" : "text-left"
      }`}
    >
      {/* Badge */}

      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-cyan-400/25
          bg-cyan-500/10
          px-4
          py-1.5
          text-xs
          font-semibold
          uppercase
          tracking-[0.25em]
          text-cyan-300
        "
      >
        {subtitle}
      </span>

      {/* Title */}

      <h2
        className="
          mt-6
          text-4xl
          font-bold
          leading-tight
          text-white
          sm:text-5xl
        "
      >
        {title}
      </h2>

      {/* Description */}

      <p
        className="
          mt-6
          text-lg
          leading-8
          text-slate-400
        "
      >
        {description}
      </p>
    </motion.div>
  );
}