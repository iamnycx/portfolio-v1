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
  site: string;
  repo: string;
  points: string[];
}

const projects: Project[] = [
  {
    name: "zag - personalized learning",
    type: "ongoing",
    stack: ["nextjs", "gemini", "ai-sdk", "postgresql"],
    site: "http",
    repo: "https://www.github.com/iamnycx",
    points: [
      "Developed and maintained full-stack web applications using modern technologies",
    ],
  },
  {
    name: "tinta - text to pallete",
    type: "ai",
    stack: ["nextjs", "gemini", "postgresql"],
    site: "http",
    repo: "https://www.github.com/iamnycx",
    points: [
      "Developed and maintained full-stack web applications using modern technologies",
    ],
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
        <div className="my-8 grid gap-4 md:grid-cols-2">
          {projects.map((project: Project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div>
          <p className="text-neutral-600">{"└─ End of projects list"}</p>
        </div>
      </motion.div>
    </Container>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group w-full space-y-4 border border-dotted border-neutral-400 p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
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
          <Link
            href={project?.repo}
            className="border border-dotted border-transparent p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
          >
            <Github size={20} strokeWidth={1} />
          </Link>
          <Link
            href={project?.site}
            className="border border-dotted border-transparent p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
          >
            <Globe size={20} strokeWidth={1} />
          </Link>
        </div>
      </div>
      <ul className="list-inside space-y-1 tracking-wider text-balance lowercase">
        {project?.points.map((point: string, index: number) => (
          <li key={index} className="flex gap-2">
            <Sparkle
              size={26}
              strokeWidth={1.5}
              className="origin-center transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:text-orange-200"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
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
