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
    slug: "tarikul-open-mcp",
    title: "Google Calendar MCP",
    category: "Developer tool",
    year: "2026",
    summary:
      "A remote MCP server that connects Google Calendar to compatible clients.",
    description:
      "Google Calendar MCP gives compatible MCP clients a single remote endpoint for working with a connected Google Calendar account, with a small dashboard for managing the connection.",
    stack: ["Next.js", "TypeScript", "MCP", "Google Calendar"],
    role: "Full-stack development",
    highlights: [
      "Connect a personal Google Calendar account through one dashboard",
      "Read, create, update, and delete calendar events",
      "One remote endpoint for MCP-compatible clients",
      "Works with MCP Inspector and Streamable HTTP clients",
    ],
    repos: [
      {
        label: "Source code",
        href: "https://github.com/Tarikul3639/tarikul-open-mcp",
      },
    ],
    live: "https://google-calendar-mcp-client.vercel.app/",
    monogram: "MCP",
    theme: {
      background: "bg-[#161616]",
      foreground: "text-[#f4c900]",
    },
    image: "/images/projects/tarikul-open-mcp-server.png",
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

export const featuredProjects = projects.slice(0, 3)

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)
