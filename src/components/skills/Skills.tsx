"use client";

import { motion } from "framer-motion";
import { skillCategories } from "./skills-data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/30
              bg-cyan-400/10
              px-4
              py-1
              text-sm
              font-medium
              tracking-widest
              uppercase
              text-cyan-300
            "
          >
            Skills
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-bold
              text-white
              md:text-5xl
            "
          >
            Technologies I Work With
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            A collection of the technologies, programming languages,
            frameworks and tools I use to build modern web applications.
          </p>

        </motion.div>

        {/* Cards */}

        <div
          className="
            mt-16
            grid
            gap-8
            md:grid-cols-2
          "
        >

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .5,
                delay: index * .12,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                p-8
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:shadow-[0_0_35px_rgba(34,211,238,.15)]
              "
            >

              <div className="flex items-center gap-4">

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-cyan-500/10
                    text-2xl
                  "
                >
                  {category.icon}
                </div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-white
                  "
                >
                  {category.title}
                </h3>

              </div>

              <div
                className="
                  mt-8
                  flex
                  flex-wrap
                  gap-3
                "
              >

                {category.skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      rounded-full
                      border
                      border-cyan-400/20
                      bg-cyan-500/10
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-cyan-300
                      transition-all
                      duration-300
                      hover:border-cyan-300
                      hover:bg-cyan-400/15
                    "
                  >
                    {skill}
                  </motion.span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}