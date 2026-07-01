"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "./types";

interface ProjectBannerProps {
  project: Project;
}

export default function ProjectBanner({
  project,
}: ProjectBannerProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="relative"
    >
      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          shadow-[0_0_50px_rgba(34,211,238,.08)]
        "
      >
        {/* Banner */}

        <div className="relative aspect-[16/8]">

          <Image
            src={project.banner}
            alt={project.title}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-700
              hover:scale-105
            "
          />

          {/* Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Featured */}

          {project.featured && (
            <div
              className="
                absolute
                left-6
                top-6
                rounded-full
                border
                border-cyan-400/30
                bg-cyan-500/15
                px-4
                py-2
                text-sm
                font-medium
                text-cyan-300
                backdrop-blur-xl
              "
            >
              ⭐ Featured Project
            </div>
          )}

          {/* Bottom Content */}

          <div
            className="
              absolute
              bottom-0
              left-0
              w-full
              p-8
              md:p-12
            "
          >
            <h1
              className="
                text-4xl
                font-bold
                text-white
                md:text-6xl
              "
            >
              {project.title}
            </h1>

            <p
              className="
                mt-5
                max-w-3xl
                text-lg
                leading-8
                text-slate-300
              "
            >
              {project.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}