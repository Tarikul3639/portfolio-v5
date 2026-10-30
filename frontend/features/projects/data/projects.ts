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
  demo?: string
  monogram: string
  visual: "classflow" | "deenseries" | "mosque" | "academy"
}

export const projects: PortfolioProject[] = [
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
    demo: "https://classflow-prime.vercel.app",
    monogram: "CF",
    visual: "classflow",
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
    demo: "https://deenseries.vercel.app",
    monogram: "DS",
    visual: "deenseries",
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
    demo: "https://mosque-management-systems.vercel.app/",
    monogram: "MM",
    visual: "mosque",
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
    demo: "https://bishuddho-academy.vercel.app/",
    monogram: "BA",
    visual: "academy",
  },
]

export const featuredProjects = projects.slice(0, 3)
export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)
