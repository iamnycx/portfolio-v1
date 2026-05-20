"use client";

import { motion as m } from "motion/react";
import { ChevronRight2 } from "pixelarticons/react";

const workData = [
  {
    title: "Smart India Hackathon 2025",
    location: "Chennai",
    points: [
      "Among Top 5 teams nationwide under SIH25037 (Ministry of Earth Sciences)",
      "Low-cost camera-based beach sand grain size mapping system to aid coastal management",
    ],
    organizer: "Ministry of Earth Sciences, Govt. of India",
    techStack: ["Python", "OpenCV", "FastAPI", "React", "Docker"],
  },
  {
    title: "Manthan 2025",
    location: "Roorkee",
    points: [
      "Offline-first AI survival system for conflict & disaster zones",
      "Satellite + ground data fusion for safe routing and damage insight",
    ],
    organizer: "COER University, Roorkee",
    techStack: ["OpenStreetMap (OSM)", "HDX / UN Datasets"],
  },
  {
    title: "TechSprint-48",
    location: "Dehradun",
    points: [
      "AI-powered career guidance website that assists students through LLM conversations",
      "Generates personalized visual career roadmap based on interests, market demand and skills",
    ],
    organizer: "Graphic Era University, Dehradun",
    techStack: ["NextJS", "Gemini", "AI-SDK", "React-Flow"],
  },
  {
    title: "Build for GEHU",
    location: "Bhimtal",
    points: [
      "Simple traffic simulation to visualize congestion at Kanchi Dham",
      "Basic routing logic to reduce peak-hour traffic jams near the busy temple",
    ],
    organizer: "Graphic Era Hill University, Bhimtal",
    techStack: ["React", "Routing Algorithms", "OpenStreetMap (OSM)"],
  },
];

type workDataType = {
  title: string;
  organizer: string;
  location: string;
  points: string[];
  techStack?: string[];
};

const revealOnView = (delay = 0) => ({
  initial: {
    y: 10,
    filter: "blur(3px)",
    opacity: 0,
  },
  whileInView: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
  },
  transition: {
    duration: 0.4,
    ease: "easeInOut" as const,
    delay,
  },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
});

export default function Hackathons() {
  return (
    <div id="work" className="px-4 py-16 md:px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {workData.map((data, idx: number) => (
          <HackathonCard key={data.title} data={data} index={idx} />
        ))}
      </div>
    </div>
  );
}

function HackathonCard({ data, index }: { data: workDataType; index: number }) {
  return (
    <m.div
      {...revealOnView(index * 0.2)}
      className="group relative flex w-full flex-col gap-4 border border-dashed border-neutral-600 p-2 transition-colors duration-300 ease-out hover:border-yellow-400"
    >
      <div className="flex h-full flex-col bg-neutral-800/50 p-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
          <div className="space-y-1">
            <h1 className="font-bold tracking-wider">{data.title}</h1>
            <h2 className="text-muted-foreground group-hover:text-yellow-400 transition-colors duration-300 ease-in-out">
              {data.organizer}
            </h2>
          </div>
          <h2 className="text-muted-foreground sm:text-right">
            {data.location}
          </h2>
        </div>
        <ul className="list-inside space-y-1 tracking-wider text-pretty">
          {data.points.map((d, index) => (
            <li key={index} className="flex my-4 -translate-x-2">
              <ChevronRight2 className="fill-neutral-600 group-hover:fill-yellow-400 -mt-1 size-8 shrink-0 origin-center -rotate-90 stroke-none transition-all duration-300 ease-in-out group-hover:rotate-0" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          {data.techStack && (
            <div className="flex flex-wrap gap-2">
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  className="from-accent/30 border-muted-foreground group-hover:border-yellow-400/50 group-hover:text-yellow-400 cursor-default border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </m.div>
  );
}
