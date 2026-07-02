import Skills from "@/components/skills/Skills";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Page Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-500/10
              px-4
              py-2
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-cyan-300
            "
          >
            My Skills
          </span>

          <h1 className="mt-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Technologies & Skills
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Here are the technologies, frameworks and tools I use to build
            modern, scalable and responsive full-stack web applications. I
            continuously improve my skills by building real-world projects and
            learning industry best practices.
          </p>
        </div>

        {/* Existing Skills Component */}
        <Skills />

        {/* Future Goal */}
        <section className="mx-auto mt-24 max-w-4xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl md:p-12">
            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-cyan-400/20
                bg-cyan-500/10
                px-4
                py-2
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
                text-cyan-300
              "
            >
              My Goal
            </span>

            <h2 className="mt-6 text-3xl font-bold text-white">
              Continuous Learning & Growth
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              My goal is to become a highly skilled Full Stack Software Engineer
              capable of building scalable, secure and user-focused web
              applications. I enjoy learning modern technologies and improving
              my problem-solving skills through practical projects.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Currently, I am strengthening my expertise in TypeScript and
              Next.js. My next learning goals include AI integration, cloud
              technologies, Docker, and software architecture to build
              production-ready applications.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}