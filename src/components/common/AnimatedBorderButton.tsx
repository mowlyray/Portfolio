"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function AnimatedBorderButton({
  children,
  className,
  ...props
}: AnimatedBorderButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "cursor-pointer relative inline-flex overflow-hidden rounded-full p-[4px]",
        className
      )}
      {...props}
    >
      {/* Rotating Border */}
      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "linear",
        }}
        className=" absolute inset-[-120%] bg-conic from-violet-500 via-cyan-400 to-violet-500"
      />

      {/* Content */}
      <span
  className="
    relative
    z-10
    flex
    items-center
    justify-center
    rounded-full

    bg-gradient-to-b
    from-white/10
    via-white/5
    to-transparent

    dark:from-white/8
    dark:via-white/5
    dark:to-black/30

    backdrop-blur-xl

    px-8
    py-2

    font-semibold
    text-white

    border
    border-white/10

    transition-all
    duration-300

    group-hover:border-cyan-400/40
  "
>
  {children}
</span>
    </motion.button>
  );
}