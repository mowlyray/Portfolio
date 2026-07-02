"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { navigationLinks } from "@/constants/navigation";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          lg:hidden
          relative
          z-[100]
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          transition
          hover:border-sky-400/50
        "
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={22} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-xl
              "
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="
                fixed
                right-0
                top-0
                z-50
                flex
                h-screen
                w-[300px]
                flex-col
                border-l
                border-white/10
                bg-[#07131F]/90
                backdrop-blur-3xl
                p-8
              "
            >
              {/* Navigation */}
              <div className="mt-20 flex flex-col gap-5">
                {navigationLinks.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{
                      opacity: 0,
                      x: 30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="
                        block
                        text-base
                        font-medium
                        tracking-wide
                        text-slate-300
                        transition-all
                        duration-300
                        hover:translate-x-2
                        hover:text-sky-300
                      "
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="mt-auto flex items-center gap-4 pt-10">

                <Link
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  target="_blank"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-slate-300
                    transition-all
                    hover:border-cyan-400/40
                    hover:bg-cyan-500/10
                    hover:text-cyan-300
                  "
                >
                  <FaGithub size={18} />
                </Link>

                <Link
                  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
                  target="_blank"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    text-slate-300
                    transition-all
                    hover:border-cyan-400/40
                    hover:bg-cyan-500/10
                    hover:text-cyan-300
                  "
                >
                  <FaLinkedin size={18} />
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}