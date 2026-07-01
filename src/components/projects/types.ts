export interface Technology {
  name: string;
}

export interface Project {
  id: number;
  slug: string;

  title: string;
  shortDescription: string;
  fullDescription: string;

  image: string;
  banner: string;

  technologies: Technology[];

  features: string[];

  github: string;
  liveDemo: string;

  featured?: boolean;
}