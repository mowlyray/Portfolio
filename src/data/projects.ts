import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Career Code",
    slug: "career-code",
    description:
      "A full-stack career management platform built with Next.js, TypeScript, MongoDB, and Express.",
    image: "/images/projects/career-code/banner.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],
    github: "https://github.com/yourusername/career-code",
    live: "https://career-code.vercel.app",
    featured: true,
  },

  {
    id: 2,
    title: "Food Delivery",
    slug: "food-delivery",
    description:
      "Modern food ordering application with authentication and dashboard.",
    image: "/images/projects/food-delivery/banner.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    github: "https://github.com/yourusername/food-delivery",
    live: "https://food-delivery.vercel.app",
    featured: true,
  },
];