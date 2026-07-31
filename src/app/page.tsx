import Hero from "@/components/home/Hero";
import StatsCounters from "@/components/home/StatsCounters";
import TechMarquee from "@/components/home/TechMarquee";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import HomeProjects from "@/components/projects/HomeProjects";
import HomeCertificates from "@/components/certificates/HomeCertificates";
import ContactSection from "@/components/contact/ContactSection";

export const metadata = {
  description:
    "Mowly is a MERN Stack & Next.js Developer. Explore featured projects, technical skills, certificates, and get in touch for opportunities.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <StatsCounters />
      <TechMarquee />
      <About/>
      <Skills />
      <HomeProjects />
      <HomeCertificates />
      <ContactSection />
    </>
  );
}