"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" aria-label="Go to Home" className="inline-block">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
        className="group flex items-center"
      >
        <span className="text-xl font-extrabold tracking-tight">
          <motion.span
            className="text-violet-500 inline-block"
            whileHover={{ rotate: -12 }}
            transition={{ duration: 0.25 }}
          >
            &lt;
          </motion.span>

          <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
            Mowly
          </span>

          <motion.span
            className="text-cyan-400 inline-block"
            whileHover={{ rotate: 12 }}
            transition={{ duration: 0.25 }}
          >
            /&gt;
          </motion.span>
        </span>
      </motion.div>
    </Link>
  );
}