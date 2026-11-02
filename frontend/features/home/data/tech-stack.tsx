import type { ReactNode } from "react"

import { NestJsIcon } from "@/components/stack/NestJsIcon"
import { NextJsIcon } from "@/components/stack/NextJsIcon"
import { TailwindIcon } from "@/components/stack/TailwindIcon"
import { GitIcon } from "@/components/stack/GitIcon"
import { SocketIoIcon } from "@/components/stack/SocketIoIcon"
import { FramerIcon } from "@/components/stack/FramerIcon"
import { NodeIcon } from "@/components/stack/NodeIcon"
import { RestApiIcon } from "@/components/stack/RestApiIcon"
import { JSIcon } from "@/components/stack/JSIcon"
import { TypeScriptIcon } from "@/components/stack/TypeScriptIcon"
import { ReduxIcon } from "@/components/stack/ReduxIcon"
import { ReactIcon } from "@/components/stack/ReactIcon"
import { CPlusPlusIcon } from "@/components/stack/CPlusPlusIcon"
import { DockerIcon } from "@/components/stack/DockerIcon"
import { PythonIcon } from "@/components/stack/PythonIcon"
import { MySQLIcon } from "@/components/stack/MySQLIcon"
import { MongoDBIcon } from "@/components/stack/MongoDBIcon"
import { GitHubIcon } from "@/components/icons/GitHubIcon"
import { AwsIcon } from "@/components/stack/AwsIcon"
import { McpIcon } from "@/components/stack/McpIcon"
import { AzureIcon } from "@/components/stack/AzureIcon"

export interface TechItem {
  label: string
  icon: ReactNode
  color: string
}

const ICON_CLASS = "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"

export const TECH_STACK: TechItem[] = [
  {
    label: "NestJS",
    icon: <NestJsIcon className={ICON_CLASS} />,
    color: "#e0234e",
  },
  {
    label: "Next.js",
    icon: <NextJsIcon className={ICON_CLASS} />,
    color: "currentColor",
  },
  {
    label: "TypeScript",
    icon: <TypeScriptIcon className={ICON_CLASS} />,
    color: "#3178c6",
  },
  {
    label: "JavaScript",
    icon: <JSIcon className={ICON_CLASS} />,
    color: "#f7df1e",
  },
  {
    label: "Redux",
    icon: <ReduxIcon className={ICON_CLASS} />,
    color: "#764abc",
  },
  {
    label: "Docker",
    icon: <DockerIcon className={ICON_CLASS} />,
    color: "#2496ed",
  },
  {
    label: "Python",
    icon: <PythonIcon className={ICON_CLASS} />,
    color: "#3776ab",
  },
  {
    label: "MySQL",
    icon: <MySQLIcon className={ICON_CLASS} />,
    color: "#f29111",
  },
  {
    label: "Tailwind CSS",
    icon: <TailwindIcon className={ICON_CLASS} />,
    color: "#38bdf8",
  },
  {
    label: "Framer Motion",
    icon: <FramerIcon className={ICON_CLASS} />,
    color: "#ec4899",
  },
  {
    label: "Node.js",
    icon: <NodeIcon className={ICON_CLASS} />,
    color: "#339933",
  },
  {
    label: "MongoDB",
    icon: <MongoDBIcon className={ICON_CLASS} />,
    color: "#10aa50",
  },
  {
    label: "Socket.IO",
    icon: <SocketIoIcon className={ICON_CLASS} />,
    color: "#808080",
  },
  {
    label: "C++",
    icon: <CPlusPlusIcon className={ICON_CLASS} />,
    color: "#00599c",
  },
  {
    label: "React",
    icon: <ReactIcon className={ICON_CLASS} />,
    color: "#61dafb",
  },
  {
    label: "Git",
    icon: <GitIcon className={ICON_CLASS} />,
    color: "#f05032",
  },
  {
    label: "GitHub",
    icon: <GitHubIcon className={ICON_CLASS} />,
    color: "currentColor",
  },
  {
    label: "REST API",
    icon: <RestApiIcon className={ICON_CLASS} />,
    color: "#43a2d8",
  },
  {
    label: "MCP",
    icon: <McpIcon className={ICON_CLASS} />,
    color: "currentColor",
  },
  {
    label: "AWS",
    icon: <AwsIcon className={ICON_CLASS} />,
    color: "currentColor",
  },
  {
    label: "Azure",
    icon: <AzureIcon className={ICON_CLASS} />,
    color: "#0078d4",
  },
]
