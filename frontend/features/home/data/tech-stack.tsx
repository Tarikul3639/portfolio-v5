import type { ReactNode } from "react"

import { NestJsIcon } from "@/components/stack/NestJsIcon"
import { NextJsIcon } from "@/components/stack/NextJsIcon"
import { TailwindIcon } from "@/components/stack/TailwindIcon"
import { GitIcon } from "@/components/stack/GitIcon"
import { NodeIcon } from "@/components/stack/NodeIcon"
import { RestApiIcon } from "@/components/stack/RestApiIcon"
import { TypeScriptIcon } from "@/components/stack/TypeScriptIcon"
import { ReactIcon } from "@/components/stack/ReactIcon"
import { DockerIcon } from "@/components/stack/DockerIcon"
import { MongoDBIcon } from "@/components/stack/MongoDBIcon"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { McpIcon } from "@/components/stack/McpIcon"

export interface TechItem {
  label: string
  icon: ReactNode
  color: string
}

const ICON_CLASS = "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"

function Wordmark({ children }: { children: string }) {
  return (
    <span className="grid size-8 place-items-center rounded-md border border-current text-xs font-bold tracking-tight">
      {children}
    </span>
  )
}

export const TECH_STACK: TechItem[] = [
  { label: "React", icon: <ReactIcon className={ICON_CLASS} />, color: "#61dafb" },
  { label: "Next.js", icon: <NextJsIcon className={ICON_CLASS} />, color: "currentColor" },
  { label: "TypeScript", icon: <TypeScriptIcon className={ICON_CLASS} />, color: "#3178c6" },
  { label: "Tailwind CSS", icon: <TailwindIcon className={ICON_CLASS} />, color: "#38bdf8" },
  { label: "Node.js", icon: <NodeIcon className={ICON_CLASS} />, color: "#339933" },
  { label: "NestJS", icon: <NestJsIcon className={ICON_CLASS} />, color: "#e0234e" },
  { label: "Express.js", icon: <Wordmark>ex</Wordmark>, color: "currentColor" },
  { label: "MongoDB", icon: <MongoDBIcon className={ICON_CLASS} />, color: "#10aa50" },
  { label: "PostgreSQL", icon: <Wordmark>PG</Wordmark>, color: "#4169e1" },
  { label: "REST API", icon: <RestApiIcon className={ICON_CLASS} />, color: "#43a2d8" },
  { label: "MCP", icon: <McpIcon className={ICON_CLASS} />, color: "currentColor" },
  { label: "Vercel", icon: <Wordmark>▲</Wordmark>, color: "currentColor" },
  { label: "Git", icon: <GitIcon className={ICON_CLASS} />, color: "#f05032" },
  { label: "GitHub", icon: <GitHubIcon className={ICON_CLASS} />, color: "currentColor" },
  { label: "Docker", icon: <DockerIcon className={ICON_CLASS} />, color: "#2496ed" },
]
