"use client";

import Container from "@/components/container";
import { useDirection } from "@/app/providers/direction-provider";
import { TextScramble } from "@/components/text-scramble";
import { pageVariants } from "@/lib/pageVariants";
import { Github, Globe } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

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
    name: "Sandscape",
    type: "Hackathon Project",
    stack: ["NextJS", "FastAPI", "Docker", "Machine Learning"],
    repo: "https://www.github.com/iamnycx/sandscape",
    description:
      "Developed the Backend and Frontend for sand grain analysis system, dockerized each service for seamless local setup and deployment",
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
    name: "Lume - Social Network",
    type: "Full Stack Project",
    stack: ["React", "Django", "Docker", "PostgreSQL"],
    site: "https://social-network-eight-eta.vercel.app",
    repo: "https://github.com/iamnycx/lume",
    description:
      "Full-stack social media app with React for frontend and Django for backend. implemented JWT auth, images, interactions (like/dislike)",
  },
  {
    name: "Raffle",
    type: "Smart-Contract",
    stack: ["Solidity", "Foundry", "Chainlink", "Ethereum"],
    repo: "https://github.com/iamnycx/raffle",
    description:
      "A Decentralized automated raffle Contract written with Solidity that picks a provably random winner using Chainlink VRF",
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
    name: "Zag - Personalized Learning",
    type: "Ongoing",
    stack: ["NextJS", "Gemini", "AI-SDK", "PostgreSQL"],
    site: "https://zag-rosy.vercel.app",
    repo: "https://github.com/iamnycx/zag",
    description:
      "Developing a notion like workspace to help users with their studies with AI assistance. Used Vercel's AI-SDK for LLM integration",
  },
];

export default function Projects() {
  const direction = useDirection();

  return (
    <Container className="pt-16">
      <motion.div
        custom={direction}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ ease: "easeInOut" }}
        className="space-y-4 py-12"
      >
        <h1 className="text-xl font-bold tracking-tight">
          <TextScramble>Projects</TextScramble>
        </h1>
        <p className="text-neutral-400">
          {"A collection of Personal Projects and Experiments"}
        </p>
        <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project: Project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="flex flex-col gap-2 text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>{"└─ End of projects list"}</p>
          <p className="ml-auto">
            Visit my{" "}
            <Link
              href="https://github.com/iamnycx"
              target="_blank"
              className="text-orange-200 underline-offset-4 hover:underline"
            >
              Github
            </Link>
          </p>
        </div>
      </motion.div>
    </Container>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group from-accent/30 flex w-full flex-col gap-4 border border-dotted border-neutral-400 bg-linear-to-bl to-50% p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1 space-y-1">
          <h1 className="line-clamp-1 text-xl font-bold tracking-tight">
            {project?.name}
          </h1>
          <h2 className="text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {project?.type}
          </h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {project.repo && (
            <Link
              href={project?.repo}
              target="_blank"
              className="border border-dotted border-transparent p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
            >
              <Github size={20} strokeWidth={1} />
            </Link>
          )}
          {project.site && (
            <Link
              href={project?.site}
              target="_blank"
              className="border border-dotted border-transparent p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
            >
              <Globe size={20} strokeWidth={1} />
            </Link>
          )}
        </div>
      </div>
      <p className="tracking-wider text-balance">{project.description}</p>
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
