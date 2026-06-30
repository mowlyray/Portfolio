"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 140,
    damping: 22,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 140,
    damping: 22,
    mass: 0.5,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    document
      .querySelectorAll("button,a,.glass-card")
      .forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });

    return () => {
      window.removeEventListener("mousemove", move);

      document
        .querySelectorAll("button,a,.glass-card")
        .forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Spotlight */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.8 : 1.3,
          opacity: hovering ? 0.45 : 0.28,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        pointer-events-none
        fixed
        inset-0
        z-[999]
        h-[420px]
        w-[420px]
        rounded-full
        bg-sky-400/40
        blur-[140px]
        "
      />

      {/* Cyan Layer */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.3 : 1,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
        pointer-events-none
        fixed
        z-[998]
        h-[250px]
        w-[250px]
        rounded-full
        bg-cyan-400/30
        blur-[90px]
        "
      />

      {/* Tiny White Core */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="
        pointer-events-none
        fixed
        z-[997]
        h-20
        w-20
        rounded-full
        bg-white/40
        blur-3xl
        "
      />
    </>
  );
}