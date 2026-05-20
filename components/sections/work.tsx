"use client";

import { cn } from "@/lib/utils";
import { motion as m } from "motion/react";
import { ChevronRight2 } from "pixelarticons/react";

const workData = [
  {
    orgnization: "Misty Interactive Studios Inc.",
    designation: "Full Stack Developer",
    location: "Remote, Canada",
    from: "May '26",
    to: "Present",
    active: true,
    points: [
      "Working on Nonilion, a virtual workspace where human and AI agents collaborate",
    ],
    technologies: ["React", "Next.js", "Tailwind", "Motion", "Figma"],
  },
  {
    orgnization: "Freelance",
    designation: "Frontend Developer",
    location: "Remote, India",
    from: "Jun '25",
    to: "Sep '25",
    active: false,
    points: [
      "Worked with teams to develop websites for clients using modern web technologies",
      "Leveraged frameworks like React and Next.js to build dynamic web applications",
      "Gained experience in frontend development, ensuring responsive design",
    ],
    technologies: ["React", "Next.js", "Tailwind", "Motion", "Figma"],
  },
];

type WorkDataType = {
  orgnization: string;
  designation: string;
  location: string;
  from: string;
  to: string;
  active: boolean;
  points: string[];
  technologies: string[];
};

const revealOnView = (delay = 0) => ({
  initial: { y: 10, filter: "blur(3px)", opacity: 0 },
  whileInView: { y: 0, filter: "blur(0px)", opacity: 1 },
  transition: { duration: 0.4, ease: "easeInOut" as const, delay },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
});

export default function Work() {
  return (
    <div id="work" className="px-4 py-16 md:px-6">
      {/* Timeline container — dashed vertical rail */}
      <div className="relative pl-0">
        {/* Dashed vertical line */}
        <div className="absolute top-3 bottom-3 left-2 w-px border-l border-dashed border-neutral-600" />

        <div className="space-y-12">
          {workData.map((data, idx) => (
            <WorkCard key={data.orgnization} data={data} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

function WorkCard({ data, index }: { data: WorkDataType; index: number }) {
  return (
    <m.div {...revealOnView(index * 0.15)} className="relative pl-10">
      {/* Diamond node on the rail */}
      <span
        className={cn(
          "absolute top-[10px] left-[0.2rem] h-[11px] w-[11px] rotate-45 border transition-colors duration-300",
          data.active
            ? "border-yellow-400 bg-yellow-400/50 shadow-[0_0_0_4px_rgba(234,179,8,0.06)] backdrop-blur-xs"
            : "border-neutral-400 bg-neutral-400/50 backdrop-blur-xs",
        )}
      />

      {/* Top row: org + meta */}
      <div className="mb-3 flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
        <div className="space-y-0.5">
          <h2 className="font-semibold tracking-widest text-neutral-200 uppercase">
            {data.orgnization}
          </h2>
          <p className="text-sm tracking-wide text-neutral-400">
            {data.designation}{" "}
            <span className="text-neutral-400/50">~ {data.location}</span>
          </p>
        </div>

        <div className="shrink-0 text-right">
          <p
            className={cn(
              "text-xs tracking-widest uppercase",
              data.active ? "text-yellow-400" : "text-muted-foreground/50",
            )}
          >
            {data.from} – {data.to}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div>
        {/* Bullet points */}
        <ul className="mb-4 space-y-2">
          {data.points.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-muted-foreground text-xs leading-relaxed tracking-wide">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-neutral-800 px-2 py-0.5 border border-neutral-600 text-xs tracking-widest uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
}
