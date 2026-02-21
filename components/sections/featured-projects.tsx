import { Github, Globe, Triangle } from "lucide-react";
import Link from "next/link";
import PlusIcons from "../plus-icons";

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
    name: "BlackTrack",
    type: "Full Stack",
    stack: ["NextJS", "Node", "Drizzle", "Web3", "Ether.js", "Metamask"],
    site: "https://blacktrack-eta.vercel.app/",
    repo: "https://www.github.com/iamnycx/blacktrack",
    description:
      "Web3-enabled expense tracking application with MetaMask wallet authentication, implementing secure, password-less user access",
  },
  {
    name: "Sandscape",
    type: "Hackathon Project",
    stack: ["NextJS", "FastAPI", "Docker", "Machine Learning"],
    repo: "https://www.github.com/iamnycx/sandscape",
    description:
      "Developed the Backend and Frontend for sand grain analysis system, dockerized each service for seamless local setup and deployment",
  },
];

export default function FeaturedProjects() {
  return (
    <div id="work">
      <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project: Project) => (
          <FeaturedProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="group from-muted/30 hover:from-muted/50 border-muted-foreground relative flex w-full gap-4 flex-col border border-dotted bg-linear-to-bl to-50% p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <PlusIcons />
      <div className="flex items-start justify-between gap-2">
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
      <div className="flex gap-2">
        <Triangle
          size={14}
          className="fill-muted mt-1 shrink-0 origin-center stroke-none transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:fill-orange-200"
        />
        <p className="tracking-wider text-balance">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-2 pt-2">
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
