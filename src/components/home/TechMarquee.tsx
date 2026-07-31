import { TECH_STACK } from "@/constants/tech-stack";

export default function TechMarquee() {
  const track = [...TECH_STACK, ...TECH_STACK];

  return (
    <section className="relative py-10">
      <div className="relative mx-auto max-w-6xl overflow-hidden px-6">
        {/* Edge fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#07131F] to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#07131F] to-transparent sm:w-24" />

        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-10 motion-reduce:animate-none">
          {track.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <div
                key={`${tech.name}-${index}`}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-5
                  py-2.5
                  backdrop-blur-xl
                "
              >
                <Icon size={20} color={tech.color} />
                <span className="whitespace-nowrap text-sm font-medium text-slate-300">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
