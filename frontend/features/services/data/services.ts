export type PortfolioService = {
  number: string
  title: string
  summary: string
  scope: string[]
  projectSlugs: string[]
}

export const services: PortfolioService[] = [
  {
    number: "01",
    title: "Full-stack web applications",
    summary:
      "I can work across the browser and server to build a web application around a clear set of user workflows.",
    scope: [
      "Application structure and feature flows",
      "Frontend, APIs, and data layer",
      "Authentication and role-based access where needed",
    ],
    projectSlugs: [
      "classflow-prime",
      "mosque-management-system",
      "bishuddho-academy",
    ],
  },
  {
    number: "02",
    title: "Backend development & APIs",
    summary:
      "I build the server-side pieces that keep product features connected, from API routes and data models to access rules.",
    scope: [
      "NestJS and Node.js application services",
      "REST API design and frontend integration",
      "MongoDB or PostgreSQL data workflows",
    ],
    projectSlugs: ["classflow-prime", "deenseries", "mosque-management-system"],
  },
  {
    number: "03",
    title: "Frontend & responsive interfaces",
    summary:
      "I implement clear, responsive product interfaces for public pages, dashboards, and feature-heavy workflows.",
    scope: [
      "React and Next.js interface development",
      "Responsive layouts and reusable components",
      "API-connected forms, catalogues, and dashboards",
    ],
    projectSlugs: ["deenseries", "bishuddho-academy", "classflow-prime"],
  },
]
