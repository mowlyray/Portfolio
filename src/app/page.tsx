import Hero from "@/components/home/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import HomeProjects from "@/components/projects/HomeProjects";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Skills />
      <HomeProjects />
      <ContactSection />
    </>
  );
}