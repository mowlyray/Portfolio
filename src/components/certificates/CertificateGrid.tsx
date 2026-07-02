"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { certificates } from "@/constants/certificates";

import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import type { Certificate } from "./types";

export default function CertificateGrid() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <>
      <motion.section
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="mt-16"
      >
        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
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
                delay: index * 0.08,
              }}
            >
              <CertificateCard
                certificate={certificate}
                onView={setSelectedCertificate}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}