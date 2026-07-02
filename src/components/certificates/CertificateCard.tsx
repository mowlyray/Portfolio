"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Certificate } from "./types";

interface Props {
  certificate: Certificate;
  onView: (certificate: Certificate) => void;
}

export default function CertificateCard({
  certificate,
  onView,
}: Props) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/30
        hover:shadow-[0_0_40px_rgba(34,211,238,.15)]
      "
    >
      {/* Image */}

      <div
        onClick={() => onView(certificate)}
        className="relative aspect-[16/10] cursor-pointer overflow-hidden"
      >
        <Image
          src={certificate.image}
          alt={certificate.title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      {/* Content */}

      <div className="p-6">
        <span
          className="
            inline-flex
            rounded-full
            bg-cyan-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-cyan-300
          "
        >
          Verified
        </span>

        <h3 className="mt-5 text-2xl font-bold text-white">
          {certificate.title}
        </h3>

        <p className="mt-3 text-slate-400">
          {certificate.issuer}
        </p>

        <p className="mt-2 text-sm text-cyan-200">
          Issued {certificate.issueDate}
        </p>

        <button
          type="button"
          onClick={() => onView(certificate)}
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            font-medium
            text-cyan-300
            transition-all
            duration-300
            hover:gap-3
          "
        >
          View Certificate

          <ArrowUpRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:rotate-45
            "
          />
        </button>
      </div>
    </motion.article>
  );
}