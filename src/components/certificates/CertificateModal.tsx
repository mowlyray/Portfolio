"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

import type { Certificate } from "./types";

interface Props {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: Props) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKey);

    // Prevent background scrolling
    if (certificate) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKey);

      // Restore scrolling
      document.body.style.overflow = "auto";
    };
  }, [certificate, onClose]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-slate-950/75
            backdrop-blur-xl
            p-6
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-2xl
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-[#07131F]
              p-6 mt-16 
            "
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="
                absolute
                right-5
                top-5
                z-20
                rounded-full
                bg-black/60
                p-2
                text-white
                transition
                hover:bg-cyan-500
              "
            >
              <X size={22} />
            </button>

            {/* Certificate Image */}

            <div className="relative aspect-[16/10] w-full">
              <Image
                src={certificate.image}
                alt={certificate.title}
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}