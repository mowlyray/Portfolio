"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Mail, Phone, MapPin } from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import { contactInfo } from "./contact-data";

export default function ContactInfo() {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: contactInfo.location,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Contact Cards */}

      <div className="grid gap-5">
        {cards.map((item, index) => {
          const Icon = item.icon;

          const Card = (
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-6
                backdrop-blur-xl
                transition
                hover:border-cyan-400/30
                hover:shadow-[0_0_30px_rgba(34,211,238,.15)]
              "
            >
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-500/10
                    text-cyan-300
                    transition
                    group-hover:scale-110
                  "
                >
                  <Icon size={24} />
                </div>

                <div>
                  <p className="text-sm text-slate-400">
                    {item.title}
                  </p>

                  <p className="mt-1 text-lg font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.div>
          );

          if (item.href) {
            return (
              <Link
                key={item.title}
                href={item.href}
              >
                {Card}
              </Link>
            );
          }

          return (
            <div key={item.title}>
              {Card}
            </div>
          );
        })}
      </div>

      {/* Social Links */}

      <motion.div
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
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-8
          backdrop-blur-xl
        "
      >
        <h3 className="text-2xl font-bold text-white">
          Connect With Me
        </h3>

        <p className="mt-3 leading-7 text-slate-400">
          You can also find me on these platforms.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href={contactInfo.socials.github}
            target="_blank"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-slate-900/60
              text-slate-300
              transition
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <FaGithub size={22} />
          </Link>

          <Link
            href={contactInfo.socials.linkedin}
            target="_blank"
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-slate-900/60
              text-slate-300
              transition
              hover:border-cyan-400/30
              hover:bg-cyan-500/10
              hover:text-cyan-300
            "
          >
            <FaLinkedin size={22} />
          </Link>

          
        </div>
      </motion.div>
    </div>
  );
}