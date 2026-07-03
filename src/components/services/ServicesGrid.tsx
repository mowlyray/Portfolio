"use client";

import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Code2,
  Database,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    description:
      "Conversion-focused marketing websites with smooth animations and modern UI that grabs attention.",
  },
  {
    icon: Code2,
    title: "Frontend Engineering",
    description:
      "Responsive, accessible and pixel-perfect React, Next.js & TypeScript applications.",
  },
  {
    icon: Database,
    title: "Full Stack Apps",
    description:
      "Authentication, APIs, databases, dashboards and complete MERN applications.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & SaaS",
    description:
      "Professional admin dashboards, analytics panels and scalable SaaS interfaces.",
  },
  {
    icon: Sparkles,
    title: "Design Polish",
    description:
      "Improve existing products with better UX, smoother interactions and modern visuals.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
                "
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-cyan-500/10
                    blur-3xl
                    opacity-0
                    transition
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-300
                  "
                >
                  <Icon size={28} />
                </div>

                <h3
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-white
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-7
                    text-slate-400
                  "
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}