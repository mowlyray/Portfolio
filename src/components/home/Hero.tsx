"use client";

import { motion } from "framer-motion";

import AnimatedRoles from "./AnimatedRoles";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center pt-28 md:pt-32">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center">

        {/* Greeting */}
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mb-5
            rounded-full
            border
            border-sky-400/20
            bg-sky-400/10
            px-5
            py-2
            text-sm
            font-medium
            text-sky-300
            backdrop-blur-xl
          "
        >
          👋 Welcome to my Portfolio
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="
            text-5xl
            font-black
            text-white
            md:text-7xl
          "
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Mowly
          </span>
        </motion.h1>

        {/* Animated Roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-6"
        >
          <AnimatedRoles />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-slate-300
          "
        >
          I build modern, responsive and scalable web applications using
          React, Next.js, TypeScript, Node.js and MongoDB with a strong focus
          on clean UI, performance and user experience.
        </motion.p>

        <HeroButtons />

      </div>
    </section>
  );
}