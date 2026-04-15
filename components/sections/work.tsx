"use client";

import PlusIcons from "../plus-icons";
import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";
import { ChevronRight2 } from "pixelarticons/react";

const workData = [
  {
    orgnization: "Freelance",
    designation: "Frontend Developer",
    location: "Remote, India",
    from: "June 25",
    to: "Sept 25",
    points: [
      "Worked with teams to develop websites for client using modern web technologies",
      "Leveraged frameworks like React and Next.js to build dynamic web applications",
      "Gained experience in frontend development, ensuring responsive design",
    ],
    technologies: ["React", "Next.js", "Tailwind", "Motion", "Figma"],
  },
];

type workDataType = {
  orgnization: string;
  designation: string;
  location: string;
  from: string;
  to: string;
  points: string[];
  technologies: string[];
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

export default function Work() {
  return (
    <div id="work" className="px-4 py-16 md:px-6">
      <div className="space-y-6">
        {workData.map((data, idx: number) => (
          <WorkCard key={data.orgnization} data={data} index={idx} />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ data, index }: { data: workDataType; index: number }) {
  return (
    <m.div
      {...revealOnView(index * 0.2)}
      className="group group-[card] from-muted/30 hover:from-muted/50 border-muted-foreground hover:border-highlight relative flex flex-col gap-4 border border-dashed bg-linear-to-bl to-50% p-6 transition-colors duration-300 ease-in-out"
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
      <div className="z-10 flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-md font-bold tracking-wider">
            {data.orgnization}
          </h1>
          <h2>
            {data.designation} <span>~ {data.location}</span>
          </h2>
          <p className="text-muted-foreground group-hover:text-highlight text-sm transition-colors duration-300 ease-in-out">
            {data.from} - {data.to}
          </p>
        </div>
      </div>
      <ul className="z-10 list-inside space-y-1 tracking-wider text-balance">
        {data.points.map((point, index) => (
          <li key={index} className="flex">
            <ChevronRight2 className="fill-muted group-hover:fill-highlight -mt-1.5 size-8 shrink-0 origin-center -rotate-90 stroke-none transition-all duration-300 ease-in-out group-hover:rotate-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="z-10 flex flex-wrap gap-2 pt-2">
        {data.technologies.map((tech) => (
          <span
            key={tech}
            className="from-accent/30 group-hover:border-highlight/50 group-hover:text-highlight inline-block border border-dashed bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out"
          >
            {tech}
          </span>
        ))}
      </div>
    </m.div>
  );
}
