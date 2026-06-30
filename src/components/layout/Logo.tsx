"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center">
      <motion.div
        whileHover={{
          rotate: -6,
          scale: 1.05,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 12,
        }}
        className="
        relative
        flex
        items-center
        gap-3
        "
      >
        {/* Glow */}
        <div
          className="
          absolute
          -inset-2
          rounded-full
          bg-sky-400/20
          blur-xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          "
        />

        {/* Logo */}
        <div
          className="
          relative
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl

          border
          border-white/10

          bg-white/5

          backdrop-blur-xl

          shadow-[0_0_30px_rgba(56,189,248,.18)]
          "
        >
          <span
            className="
            text-xl
            font-black

            bg-gradient-to-r
            from-sky-300
            via-cyan-300
            to-sky-500

            bg-clip-text
            text-transparent
            "
          >
            M
          </span>
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span
            className="
            text-lg
            font-bold
            tracking-wide
            text-white
            "
          >
            Mowly
          </span>

          <span
            className="
            text-xs
            tracking-[0.25em]
            uppercase
            text-sky-300/70
            "
          >
            Developer
          </span>
        </div>
      </motion.div>
    </Link>
  );
}