import { MapPinIcon, UniversityIcon } from "lucide-react";
import { TextScramble } from "./text-scramble";
import Spotify from "./spotify";

export default function Hero() {
  return (
    <div className="space-y-12 py-12">
      <div className="flex flex-col items-center justify-between space-y-2 md:flex-row md:items-baseline-last">
        <h1 className="text-xl font-bold tracking-tight">
          <TextScramble>nikhil singh mehta</TextScramble>
        </h1>
        <div className="flex space-x-4">
          <p className="flex items-center space-x-2 text-neutral-400">
            <MapPinIcon size={14} />
            <span>{"india"}</span>
          </p>
          <p className="flex items-center space-x-2 text-neutral-400">
            <UniversityIcon size={14} />
            <span>{"cs_ug"}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="max-w-lg space-y-6">
          <p className="text-justify tracking-tight">
            <span>
              {
                "developer based in india, final year cs undergrad. i'm into films, design, coding and many cool things. i love creating things that live on the internet."
              }
            </span>
          </p>
          <p className="hidden tracking-tight text-neutral-400 md:block">
            press : to open command palette
          </p>
        </div>
        {/* <Spotify /> */}
      </div>
    </div>
  );
}
