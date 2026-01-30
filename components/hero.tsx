import { Computer, MapPinIcon, UniversityIcon } from "lucide-react";
import { TextScramble } from "./text-scramble";
import Spotify from "./spotify";
import { MemoizedAsciiAvatar } from "./ascii-avatar";

export default function Hero() {
  return (
    <div className="space-y-12 pt-12 pb-8">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end">
        <h1 className="text-xl font-bold tracking-tight">
          <TextScramble>nikhil singh mehta</TextScramble>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
          <p className="flex items-center gap-2 text-sm text-neutral-400 sm:text-base">
            <MapPinIcon size={14} />
            <span>{"india"}</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-neutral-400 sm:text-base">
            <UniversityIcon size={14} />
            <span>{"cs_ug"}</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-neutral-400 sm:text-base">
            <Computer size={14} />
            <span>{"arch_linux"}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="w-full max-w-lg space-y-6">
          <p className="text-justify tracking-tight">
            <span>
              {
                "Developer based in India, final year CS undergrad. I'm into films, design, coding and many cool things. I love creating things that live on the internet."
              }
            </span>
          </p>
          <p className="text-muted-foreground hidden tracking-tight md:block">
            press : to open command palette
          </p>
          <div className="w-fit">
            <Spotify />
          </div>
        </div>
        <div className="translate-x-[20vw] md:translate-x-0">
          <MemoizedAsciiAvatar />
        </div>
      </div>
    </div>
  );
}
