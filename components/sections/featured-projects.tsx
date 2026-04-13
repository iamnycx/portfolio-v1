"use client";

import Link from "next/link";
import PlusIcons from "../plus-icons";
import { cn } from "@/lib/utils";
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
  viewport: { once: true, margin: "0px 0px -15% 0px" },
});

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div id="featured-projects" className="px-4 py-16 md:px-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {featuredProjects.map((project: Project, idx: number) => (
          <FeaturedProjectCard
            key={project.name}
            project={project}
            index={idx}
          />
        ))}
      </div>
      <div className="flex pt-16">
        <Link
          href="/projects"
          className="text-highlight mx-auto text-center underline-offset-4 hover:underline"
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
      {...revealOnView(index * 0.2 + 1.2)}
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
          <h1 className="text-md line-clamp-1 font-bold tracking-wider">
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
              className="hover:bg-text-highlight/5 hover:border-highlight hover:text-highlight border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
            >
              <Globe className="size-5" />
            </Link>
          )}
          {project.repo && (
            <Link
              href={project?.repo}
              target="_blank"
              className="hover:bg-text-highlight/5 hover:border-highlight hover:text-highlight border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100"
            >
              <GitBranch className="size-5" />
            </Link>
          )}
        </div>
      </div>
      <div className="z-10 flex">
        <ChevronRight2 className="fill-muted group-hover:fill-highlight -mt-1 size-8 shrink-0 origin-center rotate-90 stroke-none transition-all duration-300 ease-in-out group-hover:rotate-0" />
        <p className="tracking-wider text-balance">{project.description}</p>
      </div>
      <div className="z-10 flex flex-wrap gap-2 pt-2">
        {project?.stack.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="from-accent/30 group-hover:border-text-highlight/50 group-hover:text-highlight inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out"
          >
            {tag}
          </span>
        ))}
      </div>
    </m.div>
  );
}
