"use client";

import Container from "@/components/common/container";
import PlusIcons from "@/components/plus-icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";
import { GithubLogoIcon, GlobeIcon, TriangleIcon } from "@phosphor-icons/react";
import { Project, projects } from "@/lib/projects";

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
    <Container className="pt-16">
      <div className="space-y-4 py-12">
        <div className="flex items-baseline justify-between">
          <m.h1
            {...revealOnView(0)}
            className="font-offbit text-xl tracking-wider"
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
              className="text-highlight underline-offset-4 hover:underline"
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
      className="group from-muted/30 hover:from-muted/50 border-muted-foreground hover:border-highlight relative flex w-full flex-col gap-4 border border-dashed bg-linear-to-bl to-50% p-4 transition-colors duration-300 ease-in-out"
    >
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
          "bg-size-[8px_8px]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_50%,black)]" />{" "}
      <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center mask-r-from-10%" />
      <PlusIcons />
      <div className="z-10 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="font-offbit line-clamp-1 text-xl tracking-wide">
            {project?.name}
          </h1>
          <h2 className="text-muted-foreground group-hover:text-highlight transition-colors duration-300 ease-in-out">
            {project?.type}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.site && (
            <Link
              href={project?.site}
              target="_blank"
              className="hover:border-highlight hover:bg-highlight/5 hover:text-highlight border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
            >
              <GlobeIcon size={20} strokeWidth={1} />
            </Link>
          )}
          {project.repo && (
            <Link
              href={project?.repo}
              target="_blank"
              className="hover:border-highlight hover:bg-highlight/5 hover:text-highlight border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
            >
              <GithubLogoIcon size={20} strokeWidth={1} />
            </Link>
          )}
        </div>
      </div>
      <div className="z-10 flex gap-2">
        <TriangleIcon
          size={14}
          weight="duotone"
          className="fill-muted group-hover:fill-highlight mt-1 shrink-0 origin-center stroke-none transition-all duration-300 ease-in-out group-hover:rotate-90"
        />
        <p className="tracking-wider text-balance">{project.description}</p>
      </div>
      <div className="z-10 flex flex-wrap gap-2 pt-2">
        {project?.stack.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="from-accent/30 group-hover:border-highlight/50 group-hover:text-highlight inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out"
          >
            {tag}
          </span>
        ))}
      </div>
    </m.div>
  );
}
