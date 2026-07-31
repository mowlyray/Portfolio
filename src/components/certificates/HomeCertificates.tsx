"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import ProjectSectionHeader from "@/components/projects/ProjectSectionHeader";
import { certificates } from "@/constants/certificates";

import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import type { Certificate } from "./types";

export default function HomeCertificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section id="certificates" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <ProjectSectionHeader
          subtitle="CERTIFICATES"
          title="Certifications & Learning"
          description="Credentials that reflect my continuous learning in web development and AI."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {certificates.slice(0, 3).map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <CertificateCard
                certificate={certificate}
                onView={setSelectedCertificate}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/certificates"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/25
              bg-cyan-500/10
              px-6
              py-3
              font-medium
              text-cyan-300
              transition-all
              hover:border-cyan-400/40
              hover:bg-cyan-500/15
            "
          >
            View All Certificates
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
    </section>
  );
}
