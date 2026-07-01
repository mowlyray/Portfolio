"use client";

import { motion } from "framer-motion";
import type { Project } from "./types";

import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiJsonwebtokens,
  SiStripe,
  SiFramer,
  SiFirebase,
} from "react-icons/si";

interface ProjectTechStackProps {
  project: Project;
}

export default function ProjectTechStack({
  project,
}: ProjectTechStackProps) {

    const techIcons = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  JWT: SiJsonwebtokens,
  "Socket.io": SiSocketdotio,
  Stripe: SiStripe,
  "Framer Motion": SiFramer,
  "JavaScript": SiJavascript,
  "Firebase": SiFirebase,
} as const;



  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
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
          aria-hidden
          className="
            absolute
            -top-20
            right-0
            h-80
            w-80
            rounded-full
            bg-cyan-500/10
            blur-[120px]
          "
        />

        <div className="relative z-10">
          {/* Badge */}

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
            Tech Stack
          </span>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-3xl
              font-bold
              text-white
              md:text-4xl
            "
          >
            Technologies Used
          </h2>

          <p
            className="
              mt-4
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            Modern technologies, frameworks and tools used to build this
            project.
          </p>

          {/* Divider */}

          <div
            className="
              mt-8
              h-px
              bg-gradient-to-r
              from-cyan-400/30
              via-white/10
              to-transparent
            "
          />

          {/* Tech Grid */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.technologies.map((tech, index) => {
              const Icon = techIcons[tech.name as keyof typeof techIcons];

              return (
                <motion.div
                  key={tech.name}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-slate-900/60
                    p-5
                    transition-all
                    duration-300
                    hover:border-cyan-400/40
                    hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-cyan-500/5
                      via-transparent
                      to-blue-500/5
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative flex items-center gap-4">
                    <div
                      className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-cyan-400/20
                        bg-cyan-500/10
                        text-cyan-300
                        transition-all
                        duration-300
                        group-hover:rotate-6
                        group-hover:scale-110
                      "
                    >
                      {Icon && <Icon size={24} />}
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {tech.name}
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Technology
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}