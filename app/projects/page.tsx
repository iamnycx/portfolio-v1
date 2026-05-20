"use client";

import Container from "@/components/common/container";
import Link from "next/link";
import { motion as m } from "motion/react";
import { Project, projects } from "@/lib/projects";
import { ChevronRight2, GitBranch, Globe } from "pixelarticons/react";

const revealOnView = (delay = 0) => ({
  initial: {
    filter: "blur(3px)",
    opacity: 0,
    y: 5,
  },
  whileInView: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut" as const,
    delay,
  },
  viewport: { once: true, margin: "0px" },
});

export default function Projects() {
  return (
    <Container className="pt-12">
      <div className="space-y-4 px-4 py-16 md:px-6">
        <div className="flex items-baseline justify-between">
          <m.h1
            {...revealOnView(0)}
            className="text-xl font-bold tracking-wider"
          >
            projects
          </m.h1>
          <m.p
            {...revealOnView(0.2)}
            className="text-muted-foreground tracking-wide"
          >
            $ cd proof_of_work/
          </m.p>
        </div>
        <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project: Project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>

        <div className="text-muted-foreground flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{"└─ end of projects list"}</p>
          <p className="ml-auto">
            visit my{" "}
            <Link
              href="https://github.com/iamnycx"
              target="_blank"
              className="text-yellow-400 underline-offset-4 hover:underline"
            >
              Github
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <m.div
      {...revealOnView(index * 0.2)}
      className="group relative flex w-full flex-col gap-4 border border-dashed border-neutral-600 p-2 transition-colors duration-300 ease-out hover:border-yellow-400"
    >
      <div className="flex h-full flex-col bg-neutral-800/50 p-4">
        <div className="z-10 flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1 space-y-1">
            <h1 className="line-clamp-1 font-bold tracking-wide">
              {project?.name}
            </h1>
            <h2 className="text-muted-foreground group-hover:text-yellow-400 transition-colors duration-300 ease-in-out">
              {project?.type}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.site && (
              <Link
                href={project?.site}
                target="_blank"
                className="hover:border-yellow-400 hover:bg-yellow-400/5 hover:text-yellow-400 border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
              >
                <Globe className="size-5" />
              </Link>
            )}
            {project.repo && (
              <Link
                href={project?.repo}
                target="_blank"
                className="hover:border-yellow-400 hover:bg-yellow-400/5 hover:text-yellow-400 border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
              >
                <GitBranch className="size-5" />
              </Link>
            )}
          </div>
        </div>
        <div className="z-10 my-4 -translate-x-2 flex">
          <ChevronRight2 className="fill-neutral-600 group-hover:fill-yellow-400 -mt-1 size-8 shrink-0 origin-center -rotate-90 stroke-none transition-all duration-300 ease-in-out group-hover:rotate-0" />
          <p className="tracking-wider text-balance">{project.description}</p>
        </div>
        <div className="z-10 mt-auto flex flex-wrap gap-2 pt-2">
          {project?.stack.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="from-accent/30 group-hover:border-yellow-400/50 group-hover:text-yellow-400 inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
}
