"use client";

import Link from "next/link";
import { motion as m } from "motion/react";
import { projects, type Project } from "@/lib/projects";
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
  viewport: { once: true, margin: "0px 0px -5% 0px" },
});

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div id="featured-projects" className="relative px-4 py-16 md:px-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {featuredProjects.map((project: Project, idx: number) => (
          <FeaturedProjectCard
            key={project.name}
            project={project}
            index={idx}
          />
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-22 hidden md:block">
        <div className="absolute top-1/2 -left-2.5 -translate-y-1/2">
          <div className="border-muted-foreground h-9 w-9 origin-bottom-right -rotate-45 border-r border-dashed bg-neutral-900" />
          <div className="border-muted-foreground h-12 w-9 border-r border-dashed bg-neutral-900" />
          <div className="border-muted-foreground h-9 w-9 origin-top-right rotate-45 border-r border-dashed bg-neutral-900" />
        </div>
        <div className="absolute top-1/2 -right-2.5 -translate-y-1/2">
          <div className="border-muted-foreground h-9 w-9 origin-bottom-left rotate-45 border-l border-dashed bg-neutral-900" />
          <div className="border-muted-foreground h-12 w-9 border-l border-dashed bg-neutral-900" />
          <div className="border-muted-foreground h-9 w-9 origin-top-left -rotate-45 border-l border-dashed bg-neutral-900" />
        </div>
      </div>
      <div className="flex pt-16">
        <Link
          href="/projects"
          className="md:text-muted-foreground mx-auto w-[11rem] border-dotted text-center text-yellow-400 transition-colors duration-300 ease-out hover:text-yellow-400 lg:py-3.5"
        >
          /projects
        </Link>
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <m.div
      {...revealOnView(index * 0.2 + 0.8)}
      className="group relative flex w-full flex-col gap-4 border border-dashed border-neutral-600 p-2 transition-colors duration-300 ease-out hover:border-yellow-400"
    >
      <div className="flex h-full flex-col bg-neutral-800/50 p-4">
        <div className="z-10 flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1 space-y-1">
            <h1 className="line-clamp-1 font-bold">{project?.name}</h1>
            <h2 className="text-muted-foreground transition-colors duration-300 ease-out group-hover:text-yellow-400">
              {project?.type}
            </h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.site && (
              <Link
                href={project?.site}
                target="_blank"
                className="hover:bg-text-yellow-400/5 border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-out group-hover:opacity-100 hover:border-yellow-400 hover:text-yellow-400"
              >
                <Globe className="size-5" />
              </Link>
            )}
            {project.repo && (
              <Link
                href={project?.repo}
                target="_blank"
                className="hover:bg-text-yellow-400/5 border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-out group-hover:opacity-100 hover:border-yellow-400 hover:text-yellow-400"
              >
                <GitBranch className="size-5" />
              </Link>
            )}
          </div>
        </div>
        <div className="z-10 my-4 flex -translate-x-2">
          <ChevronRight2 className="-mt-1 size-8 shrink-0 origin-center -rotate-90 fill-neutral-600 stroke-none transition-all duration-300 ease-out group-hover:rotate-0 group-hover:fill-yellow-400" />
          <p className="tracking-wider text-balance">{project.description}</p>
        </div>
        <div className="z-10 mt-auto flex flex-wrap gap-2 pt-2">
          {project?.stack.map((tag: string, idx: number) => (
            <span
              key={idx}
              className="from-accent/30 inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-out group-hover:border-yellow-400/50 group-hover:text-yellow-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
}
