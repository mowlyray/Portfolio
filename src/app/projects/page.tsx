import ProjectSectionHeader from "@/components/projects/ProjectSectionHeader";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { projects } from "@/components/projects/project-data";

export const metadata = {
  title: "Projects",
  description: "Explore all of my featured web development projects.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-slate-950">
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ProjectSectionHeader
            title="All Projects"
            description="A collection of projects I've designed and developed while exploring modern web technologies."
          />

          <ProjectGrid
            projects={projects}
          />
        </div>
      </section>
    </main>
  );
}