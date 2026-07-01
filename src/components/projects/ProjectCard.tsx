"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "./types";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.18)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

    

        {project.featured && (
          <div className="absolute left-4 top-4 rounded-full border border-cyan-400/30 bg-cyan-500/15 px-3 py-1 text-xs font-medium tracking-wide text-cyan-300 backdrop-blur">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-cyan-200 transition-colors duration-300 group-hover:text-cyan-300">
          {project.title}
        </h3>

        <p className="mt-4 line-clamp-2 leading-7 text-slate-400">
          {project.shortDescription}
        </p>

        {/* Technologies (FIXED) */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech: any, i: number) => {
            const label = typeof tech === "string" ? tech : tech?.name;
            const key = typeof tech === "string" ? tech : tech?.id ?? i;

            return (
              <span
                key={key}
                className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
              >
                {label}
              </span>
            );
          })}
        </div>

        {/* Button */}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:gap-3 hover:text-cyan-200"
        >
          See Details

          <ArrowUpRight
            size={18}
            className="transition-transform duration-300 group-hover:rotate-45"
          />
        </Link>
      </div>
    </motion.article>
  );
}