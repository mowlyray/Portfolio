import { Project } from "./types";


export const projects: Project[] = [
  {
    id: 1,

    slug: "matrimony-hub",

    title: "Matrimony Hub",

    shortDescription:
      "A full-stack Matrimony Web Application built using the MERN Stack (MongoDB, Express, React, Node.js).This platform helps users find suitable life partners through biodata browsing, premium features, contact requests, and success stories.",

    fullDescription:
      "Matrimony Hub is a full-stack MERN application featuring secure email & Google authentication, user and admin dashboards, and premium membership functionality.Users can create and explore biodatas, request contact details, and share success stories.The platform includes Stripe payment integration, role-based access control, and a powerful admin panel for managing the system.",

    image: "/projects/matrimony-hub.png",

    banner: "/projects/matrimony-hub.png",

    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "JWT" },
    ],

    features: [
      "Authentication",
      "Role Based Dashboard",
      "AI Integration",
      "Responsive Design",
      "Protected Routes",
      "REST API",
    ],

    github: "#",

    liveDemo: "#",

    featured: true,
  },

  {
    id: 2,

    slug: "service-hub",

    title: "ServiceHub - Service Review Application System",

    shortDescription:
      "Welcome to ServiceHub, a full-stack Service Review platform where users can add, manage, and review different services",

    fullDescription:
      "ServiceHub is a full-stack Service Review Platform built with MERN stack, enabling users to add, review, and manage services securely. It features authentication, CRUD operations, real-time review management, and an intuitive responsive design for desktop and mobile.",

    image: "/projects/service-hub.png",

    banner: "/projects/garden-hub.png",

  technologies: [
  { name: "React" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
],

    features: [
      "Authentication",
      "Dashboard",
      "Job Apply",
      "Admin Panel",
    ],

    github: "#",

    liveDemo: "#",
  },

  {
    id: 3,

    slug: "Garden-hub",

    title: "Gardening Community & Resource Hub",

    shortDescription:
      "A full-stack MERN application for gardening enthusiasts to connect, share tips, attend local events, and exchange knowledge on composting, hydroponics, vertical gardening, and more.",

    fullDescription:
      "A MERN full-stack web app where gardening enthusiasts can share tips, connect with local gardeners, and explore events, built with React, Node.js, Express, and MongoDB.",

    image: "/projects/garden-hub.png",

    banner: "/projects/garden-hub.png",

   technologies: [
  { name: "React" },
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "MongoDB" },
],

    features: [
      "Authentication",
      "Stripe Payment",
      "Admin Dashboard",
      "Responsive",
    ],

    github: "#",

    liveDemo: "#",
  },

//   {
//     id: 4,

//     slug: "chat-app",

//     title: "Realtime Chat App",

//     shortDescription:
//       "Realtime messaging application with Socket.io.",

//     fullDescription:
//       "Chat application supporting realtime messaging and online status.",

//     image: "/projects/chat/card.png",

//     banner: "/projects/chat/banner.png",

//     technologies: [
//   { name: "React" },
//   { name: "Node.js" },
//   { name: "Express.js" },
//   { name: "MongoDB" },
// ],

//     features: [
//       "Realtime Chat",
//       "Authentication",
//       "Responsive",
//     ],

//     github: "#",

//     liveDemo: "#",
//   },

//   {
//     id: 5,

//     slug: "lms",

//     title: "Learning Management System",

//     shortDescription:
//       "Course management platform with instructor dashboard.",

//     fullDescription:
//       "A platform for creating and managing online courses with student enrollment.",

//     image: "/projects/lms/card.png",

//     banner: "/projects/lms/banner.png",

//     technologies: [
//   { name: "React" },
//   { name: "Node.js" },
//   { name: "Express.js" },
//   { name: "MongoDB" },
// ],

//     features: [
//       "Authentication",
//       "Course Dashboard",
//       "Student Panel",
//     ],

//     github: "#",

//     liveDemo: "#",
//   },

//   {
//     id: 6,

//     slug: "portfolio",

//     title: "Developer Portfolio",

//     shortDescription:
//       "Modern portfolio built using Next.js, Framer Motion and Tailwind CSS.",

//     fullDescription:
//       "A premium animated portfolio showcasing projects, skills and experience.",

//     image: "/projects/portfolio/card.png",

//     banner: "/projects/portfolio/banner.png",

//     technologies: [
//   { name: "React" },
//   { name: "Node.js" },
//   { name: "Express.js" },
//   { name: "MongoDB" },
// ],

//     features: [
//       "Animations",
//       "Responsive",
//       "Dark Theme",
//     ],

//     github: "#",

//     liveDemo: "#",
//   },
];