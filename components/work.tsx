import { Building2, Hash, MapPin, Sparkle, Triangle } from "lucide-react";
import { TextScramble } from "./text-scramble";

const workData = [
  {
    orgnization: "freelance",
    designation: "web developer",
    location: "uttarakhand, india",
    from: "june 25",
    to: "sept 25",
    points: [
      "worked with teams to develop websites for various clients using modern web technologies",
      "leveraged frameworks like react and nextjs to build dynamic web applications",
      "gained experience in both frontend and backend development, ensuring seamless integration",
      "collaborated with clients to gather requirements and deliver tailored solutions",
    ],
    technologies: [
      "react",
      "nextjs",
      "node",
      "mongodb",
      "postgresql",
      "tailwind",
      "motion",
      "cloudinary",
      "figma",
    ],
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

export default function Work() {
  return (
    <div id="work">
      <h1 className="text-xl font-bold tracking-tight">
        <TextScramble>work</TextScramble>
      </h1>
      <div className="space-y-6 py-8">
        {workData.map((data) => (
          <WorkCard key={data.orgnization} data={data} />
        ))}
      </div>
    </div>
  );
}

function WorkCard({ data }: { data: workDataType }) {
  return (
    <div className="group group-[card] relative space-y-4 border border-dotted border-neutral-600 p-6 pt-4 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div className="flex justify-between">
        <div className="space-y-1">
          <h1 className="flex items-center gap-2 text-xl font-bold tracking-tight">
            <Building2 size={18} />
            {data.orgnization}
          </h1>
          <h2 className="text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {data.designation}
          </h2>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm text-neutral-400">
            {data.from} - {data.to}
          </p>
          <p className="flex items-center gap-1 text-sm text-neutral-400">
            <Hash size={12} />
            {data.location}
          </p>
        </div>
      </div>
      <ul className="list-inside space-y-1 tracking-wider text-balance lowercase">
        {data.points.map((point, index) => (
          <li key={index} className="flex items-center gap-2">
            <Sparkle
              size={14}
              strokeWidth={1.5}
              className="origin-center transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:text-orange-200"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="space-x-4 space-y-4 pt-2">
        {data.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-block border border-dotted bg-neutral-400/10 px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:bg-orange-200/5 group-hover:text-orange-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
