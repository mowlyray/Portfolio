"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  LayoutDashboard,
  Bot,
  Smartphone,
  Lock,
  Database,
  Zap,
  Globe,
  CheckCircle2,
} from "lucide-react";

import type { Project } from "./types";

interface ProjectFeaturesProps {
  project: Project;
}

const featureIcons: Record<string, React.ElementType> = {
  Authentication: ShieldCheck,
  "Role Based Dashboard": LayoutDashboard,
  Dashboard: LayoutDashboard,
  "Recruiter Dashboard": LayoutDashboard,
  "Applicant Dashboard": LayoutDashboard,
  "Instructor Dashboard": LayoutDashboard,
  "Student Dashboard": LayoutDashboard,
  "Admin Dashboard": LayoutDashboard,

  "AI Integration": Bot,

  "Responsive Design": Smartphone,
  Responsive: Smartphone,

  "Protected Routes": Lock,

  "REST API": Database,

  "Realtime Messaging": Zap,
  "Realtime Chat": Zap,

  "Online Users": Globe,

  "Shopping Cart": CheckCircle2,
  "Order Management": CheckCircle2,

  "Course Management": CheckCircle2,

  "Stripe Payment": CheckCircle2,

  Animations: Zap,
  "Dark Theme": Globe,
  "Modern UI": Globe,
};

export default function ProjectFeatures({
  project,
}: ProjectFeaturesProps) {
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
        {/* Glow */}

        <div
          aria-hidden
          className="
            absolute
            -bottom-24
            -left-24
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
            Features
          </span>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">
            Key Features
          </h2>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-400">
            The main features and capabilities implemented in this project.
          </p>

          <div className="mt-8 h-px bg-gradient-to-r from-cyan-400/30 via-white/10 to-transparent" />

          {/* Feature Grid */}

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {project.features.map((feature, index) => {
              const Icon = featureIcons[feature] ?? CheckCircle2;

              return (
                <motion.div
                  key={feature}
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
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.02,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-5
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
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      {feature}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Included in this project
                    </p>
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