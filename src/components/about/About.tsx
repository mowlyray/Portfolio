"use client";

import AboutIntro from "./AboutIntro";
import AboutClosingNote from "./AboutClosingNote";
import JourneyTimeline from "./timeline/JourneyTimeline";



export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-slate-950 py-24 sm:py-28 lg:py-32"
    >
      {/* Starfield */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 90px 110px, rgba(255,255,255,0.6), transparent), radial-gradient(1px 1px at 150px 40px, rgba(255,255,255,0.7), transparent), radial-gradient(1px 1px at 60px 160px, rgba(255,255,255,0.5), transparent), radial-gradient(1px 1px at 180px 180px, rgba(255,255,255,0.6), transparent)",
          backgroundRepeat: "repeat",
          backgroundSize: "220px 220px",
        }}
      />

      {/* Ambient nebula glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-20 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -top-10 right-1/5 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <AboutIntro />

      <div className="mt-20 sm:mt-24 lg:mt-28">
        <JourneyTimeline />
      </div>

      <div className="mt-16 px-4 sm:mt-20 sm:px-6">
        <AboutClosingNote />
      </div>
    </section>
  );
}
