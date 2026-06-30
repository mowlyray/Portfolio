"use client";

import { motion } from "framer-motion";

import type { TechStackItem } from "@/types/tech-stack";

interface TechStackRowProps {
  items: TechStackItem[];
  reverse?: boolean;
}

export default function TechStackRow({
  items,
  reverse = false,
}: TechStackRowProps) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-3">
      

      <motion.div
        className="flex w-max gap-5"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 38,
          ease: "linear",
        }}
      >
        {duplicated.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <div
              key={`${tech.name}-${index}`}
              className="
                group
                flex
                items-center
                gap-3

                rounded-full

                border
                border-white/10

                bg-white/5

                px-6
                py-3

                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-sky-400/40
                hover:bg-white/10
                hover:shadow-[0_0_30px_rgba(56,189,248,.18)]
              "
            >
              <Icon
                size={24}
                style={{
                  color: tech.color,
                }}
                className="
                  transition-transform
                  duration-300
                  group-hover:rotate-6
                  group-hover:scale-110
                "
              />

              <span
                className="
                  whitespace-nowrap
                  text-sm
                  font-medium
                  text-slate-200
                "
              >
                {tech.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}