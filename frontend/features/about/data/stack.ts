export type StackCategory = {
  title: string
  description: string
  items: {
    name: string
    icon?: string
    description: string
    projects?: string[]
  }[]
}

export const stackCategories: StackCategory[] = [
  {
    title: "Frontend",
    description: "Technologies for responsive web interfaces and full-stack applications.",
    items: [
      { name: "React", icon: "react", description: "Component-based user interfaces." },
      { name: "Next.js", icon: "nextjs", description: "React applications with frontend and backend capabilities." },
      { name: "TypeScript", icon: "typescript", description: "Typed JavaScript used across application code." },
      { name: "Tailwind CSS", icon: "tailwind", description: "Utility-first styling for responsive interfaces." },
    ],
  },
  {
    title: "Backend and APIs",
    description: "Server-side application development and service integrations.",
    items: [
      { name: "Node.js", icon: "node", description: "JavaScript runtime for backend services." },
      { name: "NestJS", icon: "nestjs", description: "Structured Node.js applications and APIs." },
      { name: "Express.js", icon: "express", description: "Node.js web services and REST APIs." },
      { name: "REST APIs", icon: "rest", description: "Interfaces connecting applications and external services." },
    ],
  },
  {
    title: "Databases",
    description: "Document and relational data stores used in web applications.",
    items: [
      { name: "MongoDB", icon: "mongodb", description: "Document database for application data." },
      { name: "PostgreSQL", icon: "postgresql", description: "Relational database for structured application data." },
    ],
  },
  {
    title: "Cloud and AI integrations",
    description: "Deployment and tool-connection work alongside full-stack development.",
    items: [
      { name: "Vercel", icon: "vercel", description: "Cloud hosting and deployment workflows." },
      { name: "MCP", icon: "mcp", description: "Connecting AI assistants with tools, APIs, and business systems.", projects: ["tarikul-open-mcp"] },
    ],
  },
  {
    title: "Tools",
    description: "Development and delivery tools used across projects.",
    items: [
      { name: "Git and GitHub", icon: "github", description: "Version control and code collaboration." },
      { name: "Docker", icon: "docker", description: "Basic familiarity with container tooling." },
    ],
  },
]
