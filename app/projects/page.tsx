"use client";

import Container from "@/components/common/container";
import { TextScramble } from "@/components/common/text-scramble";
import PlusIcons from "@/components/plus-icons";
import { Github, Globe, Triangle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
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
    site: "https://social-network-eight-eta.vercel.app",
    repo: "https://github.com/iamnycx/tickets-manager",
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
  {
    name: "Sandscape",
    type: "Hackathon Project",
    stack: ["NextJS", "FastAPI", "Docker", "Machine Learning"],
    repo: "https://www.github.com/iamnycx/sandscape",
    description:
      "Developed the Backend and Frontend for sand grain analysis system, dockerized each service for seamless local setup and deployment",
  },
  {
    name: "Lume - Social Network",
    type: "Full Stack Project",
    stack: ["React", "Django", "Djoser", "Docker", "PostgreSQL"],
    site: "https://social-network-eight-eta.vercel.app",
    repo: "https://github.com/iamnycx/lume",
    description:
      "Full-stack social media app with React for frontend and Django for backend. implemented JWT auth, images, interactions (like/dislike)",
  },
  {
    name: "Therapist Landing Page",
    type: "Frontend Project",
    stack: ["NextJS", "TailwindCSS", "Motion.dev"],
    site: "https://maya-website-kappa.vercel.app/",
    repo: "https://github.com/iamnycx/maya-website",
    description:
      "A minimalist therapist landing page emphasizing clarity, calm visuals, and smooth animations.",
  },
  {
    name: "Tinta - Text to Pallete",
    type: "Mini Project",
    stack: ["NextJS", "Gemini", "PostgreSQL"],
    site: "https://tinta-flax.vercel.app",
    repo: "https://github.com/iamnycx/tinta",
    description:
      "A simple project to generate a color pallete from simple text prompts using large language models. Used Gemini as LLM provider",
  },
  {
    name: "Fund-Me",
    type: "Smart-Contract",
    stack: ["Solidity", "Foundry", "Chainlink", "Ethereum"],
    repo: "https://github.com/iamnycx/fund-me",
    description:
      "A Decentralized crowdfunding smart Contract that enforces a minimum USD-based ETH contribution using Chainlink price feeds",
  },
  {
    name: "Raffle",
    type: "Smart-Contract",
    stack: ["Solidity", "Foundry", "Chainlink", "Ethereum"],
    repo: "https://github.com/iamnycx/raffle",
    description:
      "A Decentralized automated raffle Contract written with Solidity that picks a provably random winner using Chainlink VRF",
  },
];

export default function Projects() {
  return (
    <Container className="pt-16">
      <div className="space-y-4 py-12">
        <div className="flex items-baseline justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            <TextScramble>projects</TextScramble>
          </h1>
          <motion.p
            initial={{ filter: "blur(4px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground tracking-wide"
          >
            $ cd proof_of_work/
          </motion.p>
        </div>
        <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project: Project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="text-muted-foreground flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>{"└─ end of projects list"}</p>
          <p className="ml-auto">
            visit my{" "}
            <Link
              href="https://github.com/iamnycx"
              target="_blank"
              className="text-orange-200 underline-offset-4 hover:underline"
            >
              Github
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

function ProjectCard({ project }: { project: Project }) {
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
