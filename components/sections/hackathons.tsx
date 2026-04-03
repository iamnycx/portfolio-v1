"use client";

import { Triangle } from "lucide-react";
import PlusIcons from "../plus-icons";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";

const workData = [
  {
    title: "Smart India Hackathon 2025",
    location: "Chennai",
    points: [
      "Among Top 5 teams nationwide under SIH25037 (Ministry of Earth Sciences)",
      "Low-cost camera-based beach sand grain size mapping system to aid coastal management",
    ],
    organizer: "Ministry of Earth Sciences, Govt. of India",
    techStack: [
      "Python",
      "OpenCV",
      "FastAPI",
      "React",
      "Raspberry-Pi",
      "Docker",
    ],
  },
  {
    title: "Manthan 2025",
    location: "Roorkee",
    points: [
      "Offline-first AI survival system for conflict & disaster zones",
      "Satellite + ground data fusion for safe routing and damage insight",
    ],
    organizer: "COER University, Roorkee",
    techStack: [
      "OpenStreetMap (OSM)",
      "GeoSpatial Analysis",
      "HDX / UN Datasets",
    ],
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
    <div id="work">
      <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
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
      className="group group-[card] from-muted/30 hover:from-muted/50 border-muted-foreground relative flex flex-col gap-4 border border-dashed bg-linear-to-bl to-50% p-6 transition-colors duration-300 ease-in-out hover:border-lime-400"
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
      <div className="z-10 flex flex-col gap-1 sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-offbit tracking-wider">{data.title}</h1>
          <h2 className="text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-lime-400">
            {data.organizer}
          </h2>
        </div>
        <h2 className="text-muted-foreground sm:text-right">{data.location}</h2>
      </div>
      <ul className="z-10 list-inside space-y-1 tracking-wider text-pretty">
        {data.points.map((d, index) => (
          <li key={index} className="flex gap-2">
            <Triangle
              size={14}
              className="fill-muted mt-1 shrink-0 origin-center stroke-none transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:fill-lime-400"
            />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <div className="z-10">
        {data.techStack && (
          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="from-accent/30 border-muted-foreground cursor-default border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-lime-400/50 group-hover:text-lime-400"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </m.div>
  );
}
