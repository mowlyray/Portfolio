"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "MERN Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Next.js Developer",
  "Software Developer",
];

export default function AnimatedRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-12 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={roles[index]}
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -25,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="
            text-3xl
            md:text-5xl
            font-extrabold
            bg-gradient-to-r
            from-sky-300
            via-cyan-300
            to-blue-500
            bg-clip-text
            text-transparent
          "
        >
          {roles[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}