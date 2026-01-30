import { Triangle } from "lucide-react";

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
      "Ultralytics",
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
      "PWA",
      "Satellite Imagery",
      "OpenStreetMap (OSM)",
      "GeoSpatial Analysis (GIS)",
      "HDX / UN Datasets",
    ],
  },
  //   {
  //     title: "TechSprint-48",
  //     location: "Dehradun",
  //     points: [
  //       "Among Top 5 teams nationwide under SIH25037",
  //       "Low-cost camera-based beach sand grain size mapping system to aid coastal management",
  //     ],
  //     organizer: "Graphic Era University, Dehradun",
  //     techStack: [
  //       "Python",
  //       "OpenCV",
  //       "Ultralytics",
  //       "FastAPI",
  //       "React",
  //       "Raspberry-Pi",
  //     ],
  //   },
  {
    title: "Build for GEHU",
    location: "Bhimtal",
    points: [
      "Simple traffic simulation to visualize congestion at Kachi Dham",
      "Basic routing logic to reduce peak-hour traffic jams",
    ],
    organizer: "Graphic Era Hill University, Bhimtal",
    techStack: [
      "Python",
      "Routing Algorithms",
      "OpenStreetMap (OSM)",
      "FastAPI",
    ],
  },
];

type workDataType = {
  title: string;
  organizer: string;
  location: string;
  points: string[];
  techStack?: string[];
};

export default function Hackathons() {
  return (
    <div id="work">
      <div className="grid grid-cols-1 gap-6 py-8 md:grid-cols-2">
        {workData.map((data) => (
          <HackathonCard key={data.title} data={data} />
        ))}
      </div>
    </div>
  );
}

function HackathonCard({ data }: { data: workDataType }) {
  return (
    <div className="group group-[card] from-accent/30 hover:from-accent/50 relative flex flex-col gap-4 border border-dotted border-neutral-600 bg-linear-to-bl to-50% p-6 transition-colors duration-300 ease-in-out hover:border-orange-200">
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-xl font-bold tracking-tight">{data.title}</h1>
          <h2 className="text-neutral-400 transition-colors duration-300 ease-in-out group-hover:text-orange-200">
            {data.organizer}
          </h2>
        </div>
        <h2 className="text-neutral-400 sm:text-right">{data.location}</h2>
      </div>
      <ul className="list-inside space-y-1 tracking-wider text-pretty">
        {data.points.map((d, index) => (
          <li key={index} className="flex gap-2">
            <Triangle
              size={14}
              strokeWidth={1.5}
              className="mt-1 shrink-0 origin-center transition-all duration-300 ease-in-out group-hover:rotate-90 group-hover:text-orange-200"
            />
            <span>{d}</span>
          </li>
        ))}
      </ul>
      <div>
        {data.techStack && (
          <div className="flex flex-wrap gap-2">
            {data.techStack.map((tech) => (
              <span
                key={tech}
                className="from-accent/30 cursor-default border border-dotted border-neutral-600 bg-linear-to-bl to-50% px-2 py-1 transition-colors duration-300 ease-in-out group-hover:border-orange-200 group-hover:text-orange-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
