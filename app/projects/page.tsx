"use client";

import Container from "@/components/common/container";
import PlusIcons from "@/components/plus-icons";
import { Github, Globe, Triangle } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";

interface Project {
  name: string;
  type: string;
  stack: string[];
  site?: string;
  repo?: string;
  description: string;
}

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
          <m.h1
            {...revealOnView(0)}
            className="text-xl font-bold tracking-tight"
          >
            projects
          </m.h1>
          <motion.p
            {...revealOnView(0.2)}
            className="text-muted-foreground tracking-wide"
          >
            $ cd proof_of_work/
          </motion.p>
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
              className="text-lime-400 underline-offset-4 hover:underline"
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
      className="group from-muted/30 hover:from-muted/50 border-muted-foreground relative flex w-full flex-col gap-4 border border-dashed bg-linear-to-bl to-50% p-4 transition-colors duration-300 ease-in-out hover:border-lime-400"
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
          <h1 className="line-clamp-1 text-xl font-bold tracking-tight">
            {project?.name}
          </h1>
          <h2 className="text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-lime-400">
            {project?.type}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.repo && (
            <Link
              href={project?.repo}
              target="_blank"
              className="border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-lime-400 hover:bg-lime-400/5 hover:text-lime-400"
            >
              <Github size={20} strokeWidth={1} />
            </Link>
          )}
          {project.site && (
            <Link
              href={project?.site}
              target="_blank"
              className="border border-dashed border-transparent p-1 opacity-40 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-lime-400 hover:bg-lime-400/5 hover:text-lime-400"
            >
              <Globe size={20} strokeWidth={1} />
            </Link>
          )}
        </div>
      </div>
      <div className="z-10 flex gap-2">
        <Triangle
          size={14}
          className="fill-muted mt-1 shrink-0 origin-center stroke-none transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:fill-lime-400"
        />
        <p className="tracking-wider text-balance">{project.description}</p>
      </div>
      <div className="z-10 flex flex-wrap gap-2 pt-2">
        {project?.stack.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="from-accent/30 inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-lime-400/50 group-hover:text-lime-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </m.div>
  );
}
