export type PortfolioProject = {
  slug: string
  title: string
  category: string
  year: string
  summary: string
  description: string
  stack: string[]
  role: string
  highlights: string[]
  repos: { label: string; href: string }[]
  live?: string
  monogram: string
  theme: {
    background: string
    foreground: string
  }
  image?: string
}

export const projects: PortfolioProject[] = [
  {
    slug: "rujuit",
    title: "RujuIT",
    category: "Software agency website",
    year: "2026",
    summary:
      "A bilingual website and brand identity for a global-facing software and digital solutions agency.",
    description:
      "RujuIT is a global-facing digital and software agency built to turn ambitious ideas into dependable digital products. Its bilingual website introduces the company, presents services across web development, cloud engineering, API integration, MCP development, AI automation, and custom software, and gives prospective clients a clear path to start a conversation. I founded the agency and built its brand identity and digital presence.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Resend",
    ],
    role: "Founder & full-stack development",
    highlights: [
      "Distinctive black-and-yellow brand identity and responsive website",
      "Bilingual English and Bengali experience",
      "Dedicated service pages for web, cloud, API, MCP, AI automation, and custom software",
      "Contact workflow and discovery-call entry points",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/rujuit",
      },
    ],
    live: "https://rujuit.vercel.app/",
    monogram: "RJ",
    theme: {
      background: "bg-[#090909]",
      foreground: "text-[#facc15]",
    },
    image: "/images/projects/rujuit.png",
  },
  {
    slug: "google-calendar-mcp",
    title: "Google Calendar MCP",
    category: "Developer tool",
    year: "2026",
    summary:
      "A hosted Google Calendar MCP server with Streamable HTTP, OAuth, and per-user access for AI clients.",
    description:
      "This full-stack service connects AI clients to a user's Google Calendar through a remote Streamable HTTP MCP endpoint. Users sign in with Google, connect Calendar, then authorize each client through dynamic OAuth registration, PKCE, and a per-user consent flow. A dashboard lets users manage calendar access and revoke client grants.",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "MCP"],
    role: "Full-stack development",
    highlights: [
      "Remote Streamable HTTP MCP endpoint with OAuth discovery",
      "Dynamic client registration and authorization code with PKCE",
      "Separate Google sign-in, Calendar connection, and per-client consent",
      "Tools to list, search, create, update, and delete events, plus a dashboard to manage client access",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/google-calendar-mcp",
      },
    ],
    live: "https://google-calendar-mcp-client.vercel.app/",
    monogram: "MCP",
    theme: {
      background: "bg-[#161616]",
      foreground: "text-[#f4c900]",
    },
    image: "/images/projects/google-calendar-mcp.png",
  },
  {
    slug: "google-drive-mcp",
    title: "Google Drive MCP",
    category: "Developer tool",
    year: "2026",
    summary:
      "A self-hosted Google Drive MCP server that gives AI clients secure, permission-controlled access to Drive.",
    description:
      "Google Drive MCP connects MCP-compatible AI clients to a user's Google Drive through a remote Streamable HTTP endpoint. It combines a Next.js dashboard with a NestJS API and OAuth authorization server, allowing users to connect Google, review client consent, and control each client's access to individual tools. The server exposes 54 MCP tools: 37 Google Drive management tools, 11 Google Workspace tools, 5 Office document-processing tools, and a health-check tool.",
    stack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "MCP",
    ],
    role: "Full-stack development",
    highlights: [
      "Remote Streamable HTTP MCP endpoint with OAuth metadata and Dynamic Client Registration",
      "Authorization Code flow with PKCE S256 and per-client consent",
      "54 MCP tools across Drive management, Google Docs, Sheets, Slides, Office document processing, and server health",
      "Per-client tool permissions with Redis-backed caching and grant management",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/google-drive-mcp",
      },
    ],
    live: "https://googledrivemcp.vercel.app",
    monogram: "GDM",
    theme: {
      background: "bg-[#f1f6ff]",
      foreground: "text-[#2878e5]",
    },
    image: "/images/projects/google-drive-mcp.png",
  },
  {
    slug: "projectron",
    title: "Projectron",
    category: "Developer tool",
    year: "2026",
    summary:
      "A local MCP server that gives AI assistants a structured way to work with files, terminal commands, browsers, documents, processes, and project workflows.",
    description:
      "Projectron is a NestJS and TypeScript Model Context Protocol server for AI-powered computer automation. It connects MCP-compatible assistants to local development workflows through filesystem operations, bounded terminal execution, isolated Chromium browser automation, document processing, managed processes, project workspaces, system and network inspection, and multi-step orchestration. Operations are constrained by configured workspace roots, validation, and domain-specific safety checks.",
    stack: ["NestJS", "TypeScript", "MCP", "Playwright", "Zod", "pnpm"],
    role: "Backend development",
    highlights: [
      "Filesystem management, resumable file transfers, and workspace-scoped terminal execution",
      "Isolated Chromium automation with page inspection, interaction, screenshots, and downloads",
      "Document creation and conversion, managed process controls, and project workspace management",
      "System and network diagnostics with validated multi-step task orchestration",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/Projectron",
      },
    ],
    monogram: "PR",
    theme: {
      background: "bg-[#101827]",
      foreground: "text-[#8bd5ff]",
    },
    image: "/images/projects/projectron.png",
  },
  {
    slug: "portfolio",
    title: "Portfolio",
    category: "Personal portfolio",
    year: "2026",
    summary:
      "A personal portfolio for presenting full-stack work, experience, and technical interests.",
    description:
      "This portfolio brings together selected projects, development experience, technical interests, and contact details in a responsive editorial interface.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    role: "Design and full-stack development",
    highlights: [
      "Responsive portfolio experience across desktop and mobile",
      "Project pages with repository and live demo links",
      "Accessible dark and light theme support",
      "Subtle motion and editorial visual system",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/Portfolio",
      },
    ],
    live: "https://tarikul-islam-v4.vercel.app",
    monogram: "P",
    theme: {
      background: "bg-[#071716]",
      foreground: "text-[#51e6c4]",
    },
    image: "/images/projects/portfolio-v4.png",
  },
  {
    slug: "classflow-prime",
    title: "ClassFlow Prime",
    category: "Education platform",
    year: "2026",
    summary: "A shared workspace for the details that keep a class moving.",
    description:
      "ClassFlow Prime brings academic schedules, class updates, exams, member coordination, and group work into one organized space for students and class representatives.",
    stack: ["Next.js", "NestJS", "TypeScript", "MongoDB", "Redux Toolkit"],
    role: "Full-stack development",
    highlights: [
      "Class updates, pinned materials, and read status",
      "Routine, exam, and viva schedules in one class workspace",
      "Role-based member management and class groups",
      "JWT authentication, email verification, and browser push notifications",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/classflow-prime",
      },
    ],
    live: "https://classflow-prime.vercel.app",
    monogram: "CF",
    theme: {
      background: "bg-[#eaf3ff]",
      foreground: "text-[#1677d2]",
    },
    image: "/images/projects/classflow-prime.png",
  },
  {
    slug: "deenseries",
    title: "DeenSeries",
    category: "Streaming platform",
    year: "2026",
    summary: "A considered home for Islamic films and episodic stories.",
    description:
      "DeenSeries is a full-stack streaming platform for browsing Islamic movies and series. Its public catalogue is paired with an administration area for managing titles, episodes, and published content.",
    stack: ["Next.js", "NestJS", "TypeScript", "MongoDB", "RTK Query"],
    role: "Full-stack development",
    highlights: [
      "Browse movies, series, and episode-based content",
      "Admin tools to create, edit, and publish media",
      "JWT authentication with HTTP-only cookies",
      "Cloudinary media handling and route-level SEO metadata",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/DeenSeries",
      },
    ],
    live: "https://deenseries.vercel.app",
    monogram: "DS",
    theme: {
      background: "bg-[#fff7fa]",
      foreground: "text-[#ec1455]",
    },
    image: "/images/projects/deenseries.png",
  },
  {
    slug: "mosque-management-system",
    title: "Mosque Management System",
    category: "Community platform",
    year: "2026",
    summary: "Practical tools for the daily work of a mosque community.",
    description:
      "A full-stack platform that brings family registration, monthly contributions, payments, donations, expenses, committee work, and development projects into one administrative system, alongside a public information site.",
    stack: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    role: "Full-stack development",
    highlights: [
      "Family and monthly contribution records",
      "Payment, donation, and expense tracking",
      "Committee and development project management",
      "Public pages for prayer times, mosque information, and updates",
    ],
    repos: [
      {
        label: "Frontend",
        href: "https://github.com/Tarikul3639/mosque-management-frontend",
      },
      {
        label: "Backend",
        href: "https://github.com/Tarikul3639/mosque-management-backend",
      },
    ],
    live: "https://mosque-management-systems.vercel.app/",
    monogram: "MM",
    theme: {
      background: "bg-[#e8f5f2]",
      foreground: "text-[#006b4f]",
    },
    image: "/images/projects/mosque-management-system.png",
  },
  {
    slug: "bishuddho-academy",
    title: "Bishuddho Academy",
    category: "Education platform",
    year: "2026",
    summary:
      "Course operations and learner tools for an educational institute.",
    description:
      "Bishuddho Academy connects course discovery and enrollment with student and administration workflows. The client and server are maintained as related repositories for one EdTech application.",
    stack: ["Next.js", "NestJS", "TypeScript", "MongoDB", "RTK Query"],
    role: "Full-stack development",
    highlights: [
      "Course management and student enrollment",
      "Admin and student dashboards",
      "Role-based authentication and REST API integration",
      "Teacher profiles, assessments, and course progress features",
    ],
    repos: [
      {
        label: "Client",
        href: "https://github.com/Tarikul3639/bishuddho-academy-client",
      },
      {
        label: "Server",
        href: "https://github.com/Tarikul3639/bishuddho-academy-server",
      },
    ],
    live: "https://bishuddho-academy.vercel.app/",
    monogram: "BA",
    theme: {
      background: "bg-[#f4f8ff]",
      foreground: "text-[#1755d1]",
    },
    image: "/images/projects/bishuddho-academy.png",
  },
]

export const featuredProjects = [
  projects.find((project) => project.slug === "rujuit"),
  projects.find((project) => project.slug === "classflow-prime"),
].filter((project): project is PortfolioProject => project !== undefined)

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)
