"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const targets = document.querySelectorAll(
      "button,a,input,textarea,[data-cursor]"
    );

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      {/* Cursor Ring */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 48 : 28,
          height: hovering ? 48 : 28,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 35,
        }}
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          rounded-full
          border-2
          bg-transparent
          ${
            hovering
              ? "border-white shadow-[0_0_35px_rgba(255,255,255,.8)]"
              : "border-sky-400 shadow-[0_0_20px_rgba(56,189,248,.65)]"
          }
        `}
      />

      {/* Center Dot */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.35 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 700,
          damping: 30,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[10000]
          h-2.5
          w-2.5
          rounded-full
          bg-sky-400
          shadow-[0_0_18px_rgba(56,189,248,.9)]
        "
      />
    </>
  );
}