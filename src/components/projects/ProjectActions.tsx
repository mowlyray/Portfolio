"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import type { Project } from "./types";

interface ProjectActionsProps {
  project: Project;
}

export default function ProjectActions({
  project,
}: ProjectActionsProps) {
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
      className="pb-12"
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
          aria-hidden
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-cyan-500/5
            via-transparent
            to-blue-500/5
          "
        />

        <div className="relative z-10">
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
            Explore
          </span>

          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
            Explore This Project
          </h2>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
            Check out the live application, explore the source code, or
            return to the projects page to discover more work.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            {/* Live Demo */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href={project.liveDemo}
                target="_blank"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  bg-cyan-400
                  px-6
                  py-4
                  font-semibold
                  text-slate-950
                  transition-all
                  duration-300
                  hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
                "
              >
                Live Demo

                <ArrowUpRight
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </Link>
            </motion.div>

            {/* GitHub */}

            <motion.div
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href={project.github}
                target="_blank"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-6
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-500/10
                  hover:shadow-[0_0_30px_rgba(34,211,238,.18)]
                "
              >
                <FaGithub
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />

                Source Code
              </Link>
            </motion.div>
          </div>

          {/* Divider */}

          <div className="my-10 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

          {/* Back */}

          <Link
            href="/projects"
            className="
              group
              inline-flex
              items-center
              gap-3
              font-medium
              text-cyan-300
              transition-all
              duration-300
              hover:text-cyan-200
            "
          >
            <ArrowLeft
              size={20}
              className="
                transition-transform
                duration-300
                group-hover:-translate-x-1
              "
            />

            Back to Projects
          </Link>
        </div>
      </div>
    </motion.section>
  );
}