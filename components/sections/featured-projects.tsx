import { Github, Globe, Triangle } from "lucide-react";
import Link from "next/link";
import PlusIcons from "../plus-icons";
import { cn } from "@/lib/utils";

interface Project {
  name: string;
  type: string;
  stack: string[];
  site?: string;
  repo?: string;
  description: string;
}

const projects: Project[] = [
  {
    name: "Support Ticket System",
    type: "Full Stack Project",
    stack: ["React", "DRF", "OpenAI", "PostgreSQL", "Docker"],
    site: "https://tickets-manager-phi.vercel.app/",
    repo: "https://github.com/iamnycx/lume",
    description:
      "A modern support ticket system built with React (TypeScript) and Django REST Framework, featuring LLM-based ticket classification and prioritization.",
  },
  {
    name: "BlackTrack",
    type: "Full Stack",
    stack: ["NextJS", "Node", "Drizzle", "Web3", "Ether.js", "Metamask"],
    site: "https://blacktrack-eta.vercel.app/",
    repo: "https://www.github.com/iamnycx/blacktrack",
    description:
      "Web3-enabled expense tracking application with MetaMask wallet authentication, implementing secure, password-less user access",
  },
];

export default function FeaturedProjects() {
  return (
    <div id="featured-projects">
      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project: Project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>
      <div className="flex pt-4">
        <Link
          href="/projects"
          className="mx-auto text-center text-orange-200 underline-offset-4 hover:underline"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group from-muted/30 hover:from-muted/50 border-muted-foreground relative flex w-full flex-col gap-4 border border-dotted bg-linear-to-bl to-50% p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div
        className={cn(
          "absolute inset-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100",
          "bg-size-[10px_10px]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      <div className="bg-background pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <PlusIcons />
      <div className="z-10 flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="line-clamp-1 text-xl font-bold tracking-tight">
            {project?.name}
          </h1>
          <h2 className="text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {project?.type}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.repo && (
            <Link
              href={project?.repo}
              target="_blank"
              className="border border-dotted border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
            >
              <Github size={20} strokeWidth={1} />
            </Link>
          )}
          {project.site && (
            <Link
              href={project?.site}
              target="_blank"
              className="border border-dotted border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
            >
              <Globe size={20} strokeWidth={1} />
            </Link>
          )}
        </div>
      </div>
      <div className="z-10 flex gap-2">
        <Triangle
          size={14}
          className="fill-muted mt-1 shrink-0 origin-center stroke-none transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:fill-orange-200"
        />
        <p className="tracking-wider text-balance">{project.description}</p>
      </div>
      <div className="z-10 flex flex-wrap gap-2 pt-2">
        {project?.stack.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="from-accent/30 inline-block border border-dotted bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:text-orange-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
