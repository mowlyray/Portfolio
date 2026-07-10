"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-20">

      {/* Left Glow */}
      <div
        className="
          absolute
          -left-40
          top-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[170px]
        "
      />

      {/* Right Glow */}
      <div
        className="
          absolute
          -right-40
          top-10
          h-[450px]
          w-[450px]
          rounded-full
          bg-sky-500/10
          blur-[170px]
        "
      />

      {/* Floating Dots */}

      <motion.div
        animate={{
          y: [-10, 10, -10],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
          absolute
          left-[12%]
          top-24
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_18px_#22d3ee]
        "
      />

      <motion.div
        animate={{
          y: [10, -15, 10],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
          absolute
          right-[15%]
          top-40
          h-2
          w-2
          rounded-full
          bg-cyan-400
          shadow-[0_0_18px_#22d3ee]
        "
      />

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-cyan-400/20
            bg-cyan-500/5
            px-5
            py-2
            text-sm
            tracking-[0.2em]
            uppercase
            text-cyan-300
            backdrop-blur-xl
          "
        >
          <Sparkles size={14} />

          What I Do
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .2,
          }}
          className="
            mt-8
            text-5xl
            font-black
            leading-tight
            md:text-5xl
          "
        >
          <span className="text-white">
            My
          </span>{" "}

          <span
            className="
              
              text-cyan-300
              
            "
          >
            Services
          </span>
        </motion.h1>

        {/* Subtitle */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .35,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-7
            max-w-2xl
            text-lg
            leading-8
            text-slate-400
          "
        >
          I build modern, fast and scalable web solutions
          that help businesses grow and users love.
        </motion.p>

        {/* Divider */}

        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            delay: .5,
          }}
          viewport={{
            once: true,
          }}
          className="
            mx-auto
            mt-10
            flex
            items-center
            justify-center
            gap-3
          "
        >
          <div className="h-px w-20 bg-cyan-400/70" />

          <div
            className="
              h-3
              w-3
              rotate-45
              bg-cyan-400
              shadow-[0_0_20px_#22d3ee]
            "
          />

          <div className="h-px w-20 bg-cyan-400/70" />
        </motion.div>

      </div>
    </section>
  );
}