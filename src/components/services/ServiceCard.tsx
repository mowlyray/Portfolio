"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
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
        duration-500
        hover:border-cyan-400/30
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,.12),transparent_60%)]
        "
      />

      {/* Icon */}

      <div
        className="
          flex
          h-12
          w-14          
          items-center
          justify-center
          rounded-3xl
          border
          border-cyan-400/20
          bg-cyan-500/5
          text-cyan-300
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:shadow-[0_0_35px_rgba(34,211,238,.25)]
        "
      >
        {icon}
      </div>

      {/* Title */}

      <h3
        className="
          mt-8
          text-2xl
          font-bold
          text-white
          transition-colors
          duration-300
          group-hover:text-cyan-300
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-5
          text-lg
          leading-9
          text-slate-400
        "
      >
        {description}
      </p>

      
    </motion.div>
  );
}