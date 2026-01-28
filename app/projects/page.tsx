"use client";

import Container from "@/components/container";
import { useDirection } from "@/components/DirectionContext";
import { TextScramble } from "@/components/text-scramble";
import { pageVariants } from "@/lib/pageVariants";
import { BoxIcon, Github, Globe, Sparkle } from "lucide-react";
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
    name: "sandscape",
    type: "hackathon project",
    stack: ["nextjs", "fastapi", "docker", "machine learning"],
    repo: "https://www.github.com/iamnycx/sandscape",
    description:
      "Developed the whole backend and frontend for sand grain analysis system",
  },
  {
    name: "lume - social network",
    type: "full stack project",
    stack: ["react", "django", "docker", "postgresql"],
    site: "https://social-network-eight-eta.vercel.app",
    repo: "https://github.com/iamnycx/lume",
    description:
      "Full-stack social media app with React, Django, JWT auth, images, interactions",
  },
  {
    name: "fund-me",
    type: "smart-contract",
    stack: ["solidity", "foundry", "chainlink", "ethereum"],
    repo: "https://github.com/iamnycx/fund-me",
    description:
      "A decentralized crowdfunding smart contract that enforces a minimum USD-based ETH contribution using Chainlink price feeds",
  },
  {
    name: "raffle",
    type: "smart-contract",
    stack: ["solidity", "foundry", "chainlink"],
    repo: "https://github.com/iamnycx/raffle",
    description:
      "A decentralized automated raffle that picks a provably random winner using Chainlink VRF",
  },
  {
    name: "tinta - text to pallete",
    type: "mini project",
    stack: ["nextjs", "gemini", "postgresql"],
    site: "https://tinta-flax.vercel.app",
    repo: "https://github.com/iamnycx/tinta",
    description:
      "a simple project to generate a color pallete from text using large language models",
  },
  {
    name: "zag - personalized learning",
    type: "ongoing",
    stack: ["nextjs", "gemini", "ai-sdk", "postgresql"],
    site: "zag-rosy.vercel.app",
    repo: "https://github.com/iamnycx/zag",
    description:
      "Developing a notion like workspace to help users with thier learnings with ai tools",
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
          <TextScramble>projects</TextScramble>
        </h1>
        <p className="text-neutral-400">
          {"a collection of personal projects and experiments."}
        </p>
        <div className="my-8 grid gap-6 md:grid-cols-2">
          {projects.map((project: Project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="flex items-center justify-between text-neutral-600">
          <p>{"└─ End of projects list"}</p>
          <p>
            visit my{" "}
            <Link
              href="https://github.com/iamnycx"
              target="_blank"
              className="text-orange-200 underline-offset-4 hover:underline"
            >
              github
            </Link>
          </p>
        </div>
      </motion.div>
    </Container>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group w-full gap-4 flex flex-col border border-dotted border-neutral-400 p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h1 className="line-clamp-1 text-xl font-bold tracking-tight">
            {project?.name}
          </h1>
          <h2 className="text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {project?.type}
          </h2>
        </div>
        <div className="flex items-center gap-2">
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
      <p className="tracking-wider text-balance lowercase">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-4 py-2">
        {project?.stack.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="inline-block border border-dotted bg-neutral-400/10 px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:bg-orange-200/5 group-hover:text-orange-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
