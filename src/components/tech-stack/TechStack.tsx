"use client";

import { motion } from "framer-motion";

import { TECH_STACK } from "@/constants/tech-stack";
import TechStackRow from "./TechStackRow";

export default function TechStack() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-16 text-center"
        >
          <span
            className="
            rounded-full
            border
            border-sky-400/20
            bg-sky-400/10
            px-5
            py-2
            text-sm
            font-medium
            text-sky-300
            "
          >
            Technologies
          </span>

          <h2
            className="
            mt-6
            text-4xl
            font-black
            text-white
            md:text-5xl
            "
          >
            Tech Stack
          </h2>

          <p
            className="
            mx-auto
            mt-5
            max-w-2xl
            text-slate-400
            leading-8
            "
          >
            Technologies I use to build fast, scalable and modern web
            applications.
          </p>
        </motion.div>

        <TechStackRow items={TECH_STACK} />

      </div>
    </section>
  );
}