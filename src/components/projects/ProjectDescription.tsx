"use client";

import { motion } from "framer-motion";
import type { Project } from "./types";

interface ProjectDescriptionProps {
  project: Project;
}

export default function ProjectDescription({
  project,
}: ProjectDescriptionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mt-20"
    >
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
          shadow-[0_0_50px_rgba(34,211,238,.06)]
          md:p-12
        "
      >
        {/* Background Glow */}

        <div
          aria-hidden="true"
          className="
            absolute
            -right-20
            -top-20
            h-72
            w-72
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-20
            -left-20
            h-72
            w-72
            rounded-full
            bg-blue-500/10
            blur-[120px]
          "
        />

        <div className="relative z-10">
          {/* Small Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
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
            Overview
          </span>

          {/* Title */}

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              text-white
              md:text-4xl
            "
          >
            About This Project
          </h2>

          {/* Divider */}

          <div
            className="
              mt-6
              h-px
              w-full
              bg-gradient-to-r
              from-cyan-400/30
              via-white/10
              to-transparent
            "
          />

          {/* Description */}

          <div
            className="
              mt-8
              space-y-6
              text-lg
              leading-9
              text-slate-300
            "
          >
            {project.fullDescription
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}