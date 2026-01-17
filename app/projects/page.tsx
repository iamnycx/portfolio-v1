"use client";

import Container from "@/components/container";
import { useDirection } from "@/components/DirectionContext";
import { TextScramble } from "@/components/text-scramble";
import { pageVariants } from "@/lib/pageVariants";
import { Github, Globe } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    name: "mini-git",
    description: "a personalized workspace for learning with ai",
    stack: ["nextjs", "gemini", "ai-sdk", "postgresql"],
  },
  {
    name: "zag",
    description: "a personalized workspace for learning with ai",
    stack: ["nextjs", "gemini", "ai-sdk", "postgresql"],
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
        <div className="my-8 grid md:grid-cols-2 gap-4">
          {projects.map((project) => (
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

function ProjectCard({ project }: { project?: (typeof projects)[0] }) {
  return (
    <div className="group w-full space-y-4 border border-dotted border-neutral-400 p-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-orange-200">
          {project?.name}
        </h2>
        <div className="flex items-center gap-2">
          <Link
            href={"#"}
            className="border border-dotted border-transparent p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
          >
            <Github size={20} strokeWidth={1} />
          </Link>
          <Link
            href={"#"}
            className="border border-dotted border-transparent p-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 hover:border-orange-200 hover:bg-orange-200/5 hover:text-orange-200"
          >
            <Globe size={20} strokeWidth={1} />
          </Link>
        </div>
      </div>
      <p className="text-muted-foreground">{project?.description}</p>
      <div className="flex flex-wrap gap-4">
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
