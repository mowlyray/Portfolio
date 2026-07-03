"use client";

import {
  Rocket,
  MonitorSmartphone,
  Layers3,
  LayoutDashboard,
  Wand2,
} from "lucide-react";

import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: <Rocket size={30} />,
    title: "Landing Pages",
    description:
      "Conversion-focused marketing sites with motion that earns attention and drives results.",
  },
  {
    icon: <MonitorSmartphone size={30} />,
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, accessible UIs built on React, TypeScript and modern design systems.",
  },
  {
    icon: <Layers3 size={30} />,
    title: "Full Stack Apps",
    description:
      "Authentication, database, APIs and dashboards built with clean architecture.",
  },
  {
    icon: <LayoutDashboard size={30} />,
    title: "Dashboards & SaaS",
    description:
      "Information-dense interfaces that stay calm under pressure and scale beautifully.",
  },
  {
    icon: <Wand2 size={30} />,
    title: "Design Polish",
    description:
      "Take an existing product from good to memorable with thoughtful UI improvements.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="pb-24">
      <div
        className="
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
    </section>
  );
}