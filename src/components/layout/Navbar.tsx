"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { navigationLinks } from "@/constants/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        fixed
        inset-x-0
        top-0
        z-50
        px-4
      "
    >
      <div
        className={`
          mx-auto
          mt-5
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          rounded-full
          border
          px-6
          transition-all
          duration-300

          ${
            scrolled
              ? "border-sky-400/20 bg-[#07131F]/80 backdrop-blur-3xl shadow-[0_15px_40px_rgba(0,0,0,.45)]"
              : "border-white/10 bg-white/5 backdrop-blur-xl"
          }
        `}
      >
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {navigationLinks.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="
                  relative
                  group
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition
                "
              >
                <span
                  className={
                    active
                      ? "text-sky-300"
                      : "text-slate-300 group-hover:text-white"
                  }
                >
                  {item.label}
                </span>

                <span
                  className={`
                    absolute
                    left-1/2
                    bottom-0
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-sky-400
                    transition-all
                    duration-300

                    ${
                      active
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Desktop Social Icons */}
          <div className="hidden lg:flex items-center gap-3 pr-10">

            {/* GitHub */}
            <Link
              href="https://github.com/mowlyray"
              target="_blank"
              aria-label="GitHub"
              className="
                flex
                h-10
                w-10
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
                hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
              "
            >
              <FaGithub size={18} />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/mowlyray/"
              target="_blank"
              aria-label="LinkedIn"
              className="
                flex
                h-10
                w-10
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
                hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
              "
            >
              <FaLinkedin size={18} />
            </Link>

          </div>

          {/* Mobile & Tablet */}
  <div className="lg:hidden md:flex">
    <MobileMenu />
  </div>

        </div>
      </div>
    </motion.header>
  );
}