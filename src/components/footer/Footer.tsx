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
        mt-24
        border-t
        border-white/10
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-14
          text-center
        "
      >
        {/* Heading */}

        <h3
          className="
            text-2xl
            font-bold
            text-white
          "
        >
          Thanks for Visiting 👋
        </h3>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-slate-400
            leading-7
          "
        >
          Let's build something amazing together.
        </p>

        {/* Socials */}

        <div
          className="
            mt-8
            flex
            justify-center
            items-center
            gap-5
          "
        >
          <Link
            href="https://github.com/your-github"
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
              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <FaGithub size={20} />
          </Link>

          <Link
            href="https://linkedin.com/in/your-linkedin"
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
              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <FaLinkedin size={20} />
          </Link>
        </div>

        {/* Divider */}

        <div
          className="
            my-10
            h-px
            w-full
            bg-white/10
          "
        />

        {/* Copyright */}

        <p
          className="
            text-sm
            text-slate-500
          "
        >
          © 2026 Mowly
        </p>

        <p
          className="
            mt-2
            text-sm
            text-slate-400
          "
        >
          Designed & Developed by{" "}
          <span className="font-semibold text-cyan-300">
            Mowly
          </span>
        </p>
      </div>
    </motion.footer>
  );
}