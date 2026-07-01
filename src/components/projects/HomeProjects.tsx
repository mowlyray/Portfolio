"use client";

import ProjectSectionHeader from "./ProjectSectionHeader";
import ProjectGrid from "./ProjectGrid";
import { projects } from "./project-data";

export default function HomeProjects() {
  return (
    <section
      id="projects"
      className="relative py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <ProjectSectionHeader />

        <ProjectGrid
          projects={projects.slice(0, 6)}
        //   showViewAllButton
        />
      </div>
    </section>
  );
}