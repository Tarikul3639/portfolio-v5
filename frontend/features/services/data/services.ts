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
    title: "Full-stack web application development",
    summary:
      "Build responsive web applications that connect user-friendly interfaces with backend services and useful business workflows.",
    scope: [
      "Responsive React and Next.js interfaces",
      "Backend services, APIs, and business logic",
      "Authentication, role-based access, and database integration",
    ],
    projectSlugs: [
      "classflow-prime",
      "mosque-management-system",
      "bishuddho-academy",
    ],
  },
  {
    number: "02",
    title: "Backend and API development",
    summary:
      "Design and build maintainable backend applications and REST APIs that connect products to data and external services.",
    scope: [
      "Node.js, NestJS, and Express.js services",
      "REST API design, validation, and error handling",
      "MongoDB and PostgreSQL data workflows",
    ],
    projectSlugs: ["classflow-prime", "deenseries", "tarikul-open-mcp"],
  },
  {
    number: "03",
    title: "Cloud deployment and application integration",
    summary:
      "Deploy web applications and backend services, configure their environments, and connect the parts into a reliable system.",
    scope: [
      "Vercel deployment and environment configuration",
      "Frontend, backend API, and database integration",
      "Deployment troubleshooting and application maintenance",
    ],
    projectSlugs: ["portfolio", "classflow-prime", "tarikul-open-mcp"],
  },
  {
    number: "04",
    title: "AI integration and MCP development",
    summary:
      "Build custom MCP servers and integrations that let AI assistants work with external tools, APIs, and business systems.",
    scope: [
      "Custom Model Context Protocol servers",
      "Google Calendar and third-party API integrations",
      "Controlled local file-system tools and AI-assisted workflows",
    ],
    projectSlugs: ["tarikul-open-mcp"],
  },
]
