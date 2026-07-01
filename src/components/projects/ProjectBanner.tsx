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



        </div>

        <div className="px-8 py-10 md:px-12">
  {project.featured && (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-500/10
        px-4
        py-2
        text-sm
        font-medium
        text-cyan-300
      "
    >
      ⭐ Featured Project
    </span>
  )}

  <h1 className="mt-6 text-xl font-bold text-white md:text-6xl">
    {project.title}
  </h1>

  <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-400">
    {project.shortDescription}
  </p>
</div>



      
    </motion.section>
  );
}