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
    description:
      "Interfaces and client-side systems used across my shipped work.",
    items: [
      {
        name: "TypeScript",
        icon: "typescript",
        description:
          "The main language across my current frontend and backend projects.",
        projects: ["classflow-prime", "deenseries"],
      },
      {
        name: "React",
        icon: "react",
        description:
          "Component-driven interfaces for product workflows and dashboards.",
      },
      {
        name: "Next.js",
        icon: "nextjs",
        description:
          "App Router applications with route metadata, server rendering, and responsive UI.",
        projects: ["classflow-prime", "mosque-management-system"],
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
        description:
          "Utility-first styling for the portfolio and product interfaces.",
      },
      {
        name: "Redux Toolkit",
        icon: "redux",
        description:
          "Predictable client state and data fetching for larger application flows.",
      },
      {
        name: "JavaScript",
        icon: "javascript",
        description:
          "A foundation for browser behavior and full-stack application code.",
      },
    ],
  },
  {
    title: "Backend and APIs",
    description:
      "Server-side tools and integration patterns represented in my projects.",
    items: [
      {
        name: "Node.js",
        icon: "node",
        description:
          "The runtime behind my API and server-side JavaScript work.",
      },
      {
        name: "NestJS",
        icon: "nestjs",
        description:
          "Structured REST backends for authentication, admin workflows, and domain logic.",
        projects: ["classflow-prime", "deenseries", "bishuddho-academy"],
      },
      {
        name: "REST APIs",
        icon: "rest",
        description:
          "Resource-oriented APIs connecting the product interfaces to backend services.",
      },
      {
        name: "Socket.IO",
        description:
          "Real-time communication is an area represented in my broader full-stack work.",
      },
    ],
  },
  {
    title: "Databases and data",
    description: "Data stores I have used in application development.",
    items: [
      {
        name: "MongoDB",
        icon: "mongodb",
        description: "Document data models for education and media platforms.",
        projects: ["classflow-prime", "deenseries"],
      },
      {
        name: "MySQL",
        icon: "mysql",
        description:
          "Relational database experience from application and coursework projects.",
      },
      {
        name: "PostgreSQL",
        description: "Used with Prisma in the mosque management project.",
        projects: ["mosque-management-system"],
      },
      {
        name: "Prisma",
        description: "Type-safe database access in a relational application.",
        projects: ["mosque-management-system"],
      },
    ],
  },
  {
    title: "Tools and infrastructure",
    description: "Tools that support a reliable development workflow.",
    items: [
      {
        name: "Git and GitHub",
        icon: "github",
        description:
          "Version control and public repositories for my project work.",
      },
      {
        name: "Docker",
        icon: "docker",
        description: "Container tooling for reproducible local development.",
      },
      {
        name: "Python",
        icon: "python",
        description: "A language I have worked with alongside web development.",
      },
      {
        name: "C++",
        icon: "cpp",
        description:
          "A programming language from my foundational development work.",
      },
    ],
  },
  {
    title: "Currently learning",
    description:
      "Areas I am actively exploring; these are learning goals rather than claims of production expertise.",
    items: [
      {
        name: "MCP server development",
        icon: "mcp",
        description:
          "Building tool-connected servers and integrations for AI-assisted workflows.",
      },
      {
        name: "Microsoft Azure",
        icon: "azure",
        description: "Exploring cloud services and deployment patterns.",
      },
      {
        name: "AWS",
        icon: "aws",
        description:
          "Learning the fundamentals of cloud infrastructure and managed services.",
      },
      {
        name: "Framer Motion",
        icon: "motion",
        description:
          "Adding purposeful, accessible motion to interfaces like this portfolio.",
      },
    ],
  },
]
