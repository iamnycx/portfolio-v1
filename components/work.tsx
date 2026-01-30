import { Triangle } from "lucide-react";

const workData = [
  {
    orgnization: "Freelance",
    designation: "Web Developer",
    location: "Uttarakhand, India",
    from: "June 25",
    to: "Sept 25",
    points: [
      "Worked with teams to develop websites for various clients using modern web technologies",
      "Leveraged frameworks like React and Next.js to build dynamic web applications",
      "Gained experience in both frontend and backend development, ensuring seamless integration",
      "Collaborated with clients to gather requirements and deliver tailored solutions",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind",
      "Motion",
      "Cloudinary",
      "Figma",
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
    <div className="group group-[card] from-accent/30 hover:from-accent/50 relative flex flex-col gap-4 border border-dotted border-neutral-600 bg-linear-to-bl to-50% p-6 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight">
            {data.orgnization}
          </h1>
          <h2 className="text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {data.designation}
          </h2>
        </div>
        <div className="flex flex-col text-neutral-400 sm:items-end sm:text-right">
          <p className="text-sm">
            {data.from} - {data.to}
          </p>
          <p className="text-sm">{data.location}</p>
        </div>
      </div>
      <ul className="list-inside space-y-1 tracking-wider text-balance">
        {data.points.map((point, index) => (
          <li key={index} className="flex gap-2">
            <Triangle
              size={14}
              className="mt-1 shrink-0 stroke-none fill-muted origin-center transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:fill-orange-200"
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
