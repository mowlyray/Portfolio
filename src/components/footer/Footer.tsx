"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-64
          w-64
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          py-14
          text-center
        "
      >
        {/* Heading */}

        <motion.h3
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          mt-10
            text-2xl
            font-bold
            text-white
          "
        >
          Thanks for Visiting 👋
        </motion.h3>

        {/* Glow Line */}

        <motion.div
          initial={{
            width: 0,
          }}
          whileInView={{
            width: 90,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mx-auto
            mt-4
            h-[3px]
            rounded-full
            bg-cyan-400
            shadow-[0_0_20px_rgba(34,211,238,.9)]
          "
        />

        {/* Description */}

        <p
          className="
            mx-auto
            mt-6
            max-w-xl
            text-slate-400
            leading-7
          "
        >
          Let's build something amazing together.
        </p>

        {/* Social Icons */}

        <div
          className="
            mt-8
            flex
            justify-center
            gap-5
          "
        >
          <motion.div whileHover={{ y: -5, scale: 1.08 }}>
            <Link
              href="https://github.com/mowlyray"
              target="_blank"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-500/10
                hover:text-cyan-300
                hover:shadow-[0_0_25px_rgba(34,211,238,.45)]
              "
            >
              <FaGithub size={20} />
            </Link>
          </motion.div>

          <motion.div whileHover={{ y: -5, scale: 1.08 }}>
            <Link
              href="https://www.linkedin.com/in/mowlyray/"
              target="_blank"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                text-slate-300
                transition-all
                duration-300
                hover:border-cyan-400/50
                hover:bg-cyan-500/10
                hover:text-cyan-300
                hover:shadow-[0_0_25px_rgba(34,211,238,.45)]
              "
            >
              <FaLinkedin size={20} />
            </Link>
          </motion.div>
        </div>

        {/* Divider */}

        <div className="py-5 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Copyright */}

        <p className="text-sm text-slate-400">
          © 2026 Mowly
        </p>

        <p className="mt-2 mb-2 text-sm text-slate-400">
          Designed & Developed by{" "}
          <span className="font-semibold text-cyan-300">
            Mowly
          </span>
        </p>
      </div>
    </motion.footer>
  );
}