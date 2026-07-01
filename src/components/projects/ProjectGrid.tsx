"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import ProjectCard from "./ProjectCard";
import type { Project } from "./types";

interface ProjectGridProps {
  projects: Project[];
  showViewAllButton?: boolean;
}

export default function ProjectGrid({
  projects,
  showViewAllButton = false,
}: ProjectGridProps) {
  return (
    <div className="mt-20">
      {/* Grid */}

      <div
        className="
          grid
          gap-8
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* View All Button */}

      {showViewAllButton && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-7
              py-3.5
              text-sm
              font-semibold
              text-cyan-300
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-300/60
              hover:bg-cyan-500/15
              hover:shadow-[0_0_30px_rgba(34,211,238,.18)]
            "
          >
            View All Projects

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </motion.div>
      )}
    </div>
  );
}