import { Triangle } from "lucide-react";
import PlusIcons from "../plus-icons";

const workData = [
  {
    orgnization: "Freelance",
    designation: "Frontend Developer",
    location: "Uttarakhand, India",
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

export default function Work() {
  return (
    <div id="work">
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
    <div className="group group-[card] from-muted/30 hover:from-muted/50 border-muted-foreground relative flex flex-col gap-4 border border-dotted bg-linear-to-bl to-50% p-6 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <PlusIcons />
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight">
            {data.orgnization}
          </h1>
          <h2>
            {data.designation} <span>~ {data.location}</span>
          </h2>
          <p className="text-muted-foreground text-sm transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {data.from} - {data.to}
          </p>
        </div>
      </div>
      <ul className="list-inside space-y-1 tracking-wider text-balance">
        {data.points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <Triangle
              size={14}
              className="fill-muted mt-1 shrink-0 origin-center stroke-none transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:fill-orange-200"
            />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {data.technologies.map((tech) => (
          <span
            key={tech}
            className="from-accent/30 inline-block border border-dotted bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:text-orange-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
