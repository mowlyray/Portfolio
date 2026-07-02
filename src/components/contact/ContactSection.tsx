"use client";

import { motion } from "framer-motion";

import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}

      <div
        aria-hidden
        className="
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Hero */}

        <ContactHero />

        {/* Contact Grid */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-20
            grid
            gap-10
            lg:grid-cols-5
          "
        >
          {/* Left */}

          <div className="lg:col-span-2">
            <ContactInfo />
          </div>

          {/* Right */}

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}