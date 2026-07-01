"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuroraBackground({
  children,
  className,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-[#07131F]",
        className
      )}
    >
      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 180, -100, 0],
          y: [0, -120, 80, 0],
          rotate: [0, 120, 360],
          scale: [1, 1.25, .9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -top-80
        -left-72
        h-[900px]
        w-[900px]
        rounded-full
        bg-gradient-to-r
        from-sky-500/40
        via-cyan-400/20
        to-transparent
        blur-[220px]
        "
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -180, 120, 0],
          y: [0, 120, -80, 0],
          rotate: [180, 360, 540],
          scale: [1, .9, 1.2, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        -right-72
        top-20
        h-[950px]
        w-[950px]
        rounded-full
        bg-gradient-to-l
        from-cyan-400/35
        via-sky-500/20
        to-transparent
        blur-[230px]
        "
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 100, -120, 0],
          y: [0, 80, -90, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.15, 1, 1],
        }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        bottom-[-350px]
        left-1/2
        -translate-x-1/2
        h-[850px]
        w-[850px]
        rounded-full
        bg-gradient-to-t
        from-blue-500/25
        via-sky-500/15
        to-transparent
        blur-[220px]
        "
      />

      {/* Floating Glow */}
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 60, -60, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-1/3
        left-1/4
        h-[350px]
        w-[350px]
        rounded-full
        bg-sky-400/15
        blur-[130px]
        "
      />

      {/* Animated Overlay */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0% 0%",
            "100% 50%",
            "0% 100%",
            "0% 0%",
          ],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        inset-0
        opacity-40
        bg-[radial-gradient(circle_at_center,rgba(56,189,248,.15),transparent_60%)]
        bg-[length:300%_300%]
        "
      />

      {/* Grid */}
      <div
        className="
        absolute
        inset-0
        opacity-20
        bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      {/* Noise */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        
        mix-blend-soft-light
        "
      />

      {/* Vignette */}
      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.55))]
        "
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}