"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import AnimatedBorderButton from "@/components/common/AnimatedBorderButton";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >
      {/* Hire Me */}
      <Link href="/contact">
        <AnimatedBorderButton>
          Hire Me
        </AnimatedBorderButton>
      </Link>

      {/* Resume */}
      <Link
        href="/resume/Mowly_Ray_Resume.pdf"
        download
        target="_blank"
        className="text-white px-8 py-1.5 border-glow rounded-full"
      >
        Download Resume
      </Link>
    </motion.div>
  );
}