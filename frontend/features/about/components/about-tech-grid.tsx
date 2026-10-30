"use client"

import { motion, useReducedMotion } from "motion/react"

import { NestJsIcon } from "@/features/about/components/stack/NestJsIcon"
import { NextJsIcon } from "@/features/about/components/stack/NextJsIcon"
import { TailwindIcon } from "@/features/about/components/stack/TailwindIcon"
import { GitIcon } from "@/features/about/components/stack/GitIcon"
import { SocketIoIcon } from "@/features/about/components/stack/SocketIoIcon"
import { FramerIcon } from "@/features/about/components/stack/FramerIcon"
import { NodeIcon } from "@/features/about/components/stack/NodeIcon"
import { RestApiIcon } from "@/features/about/components/stack/RestApiIcon"
import { JSIcon } from "@/features/about/components/stack/JSIcon"
import { TypeScriptIcon } from "@/features/about/components/stack/TypeScriptIcon"
import { ReduxIcon } from "@/features/about/components/stack/ReduxIcon"
import { ReactIcon } from "@/features/about/components/stack/ReactIcon"
import { CPlusPlusIcon } from "@/features/about/components/stack/CPlusPlusIcon"
import { DockerIcon } from "@/features/about/components/stack/DockerIcon"
import { PythonIcon } from "@/features/about/components/stack/PythonIcon"
import { MySQLIcon } from "@/features/about/components/stack/MySQLIcon"
import { MongoDBIcon } from "@/features/about/components/stack/MongoDBIcon"
import { GitHubIcon } from "@/components/icons/GitHubIcon"

interface TechItem {
  label: string
  icon: React.ReactNode
  color: string
}

const ICON_CLASS = "h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10"

const TECH_STACK: TechItem[] = [
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
]

export const AboutTechGrid = () => {
  const reduceMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 md:gap-4 lg:grid-cols-6 xl:grid-cols-7">
      {TECH_STACK.map(({ label, icon, color }, i) => (
        <motion.div
          key={label}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: i * 0.07, duration: 0.4 }}
          className="group/card flex min-h-28 cursor-crosshair flex-col items-center justify-center gap-3 border border-border/40 bg-card/70 px-2 py-4 shadow-sm transition-colors duration-300 select-none sm:min-h-32 md:min-h-36"
        >
          {/* Icon with color + glow */}
          <div className="relative text-4xl" style={{ color }}>
            <div
              className="absolute inset-0 opacity-0 blur-2xl transition-opacity group-hover/card:opacity-30"
              style={{ backgroundColor: color }}
            />
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="relative z-10"
            >
              {icon}
            </motion.div>
          </div>

          {/* Label color changes on hover */}
          <span className="text-center text-[9px] font-bold tracking-[0.12em] text-muted-foreground uppercase transition-colors duration-300 group-hover/card:text-foreground sm:text-[10px] sm:tracking-[0.15em]">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  )
}
