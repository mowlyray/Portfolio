"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { FolderGit2, Award, Layers, Sparkles } from "lucide-react";

import { projects } from "@/components/projects/project-data";
import { certificates } from "@/constants/certificates";
import { TECH_STACK } from "@/constants/tech-stack";
import { skillCategories } from "@/components/skills/skills-data";

const totalSkills = skillCategories.reduce(
  (sum, category) => sum + category.skills.length,
  0
);

const stats = [
  {
    icon: FolderGit2,
    value: projects.length,
    label: "Projects Completed",
  },
  {
    icon: Award,
    value: certificates.length,
    label: "Certifications Earned",
  },
  {
    icon: Layers,
    value: TECH_STACK.length,
    label: "Technologies Used",
  },
  {
    icon: Sparkles,
    value: totalSkills,
    label: "Core Skills",
  },
];

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value}+</span>;
}

export default function StatsCounters() {
  return (
    <section className="relative py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="
                flex
                flex-col
                items-center
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                text-center
                backdrop-blur-xl
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-cyan-500/10
                  text-cyan-300
                "
              >
                <Icon size={22} />
              </div>

              <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                <Counter to={stat.value} />
              </p>

              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
