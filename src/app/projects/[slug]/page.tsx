import { notFound } from "next/navigation";

import { projects } from "@/components/projects/project-data";

import ProjectBanner from "@/components/projects/ProjectBanner";
import ProjectDescription from "@/components/projects/ProjectDescription";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import ProjectFeatures from "@/components/projects/ProjectFeatures";
import ProjectActions from "@/components/projects/ProjectActions";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 py-24">
      {/* Background Glow */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-0 top-0 h-[30rem] w-[30rem] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-500/10 blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        <ProjectBanner project={project} />

        <div className="mx-auto mt-20 max-w-5xl space-y-20">

          <ProjectDescription project={project} />

          <ProjectTechStack project={project} />

          <ProjectFeatures project={project} />

          <ProjectActions project={project} />

        </div>

      </div>
    </main>
  );
}