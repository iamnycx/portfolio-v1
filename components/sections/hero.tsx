import { Computer, MapPinIcon, UniversityIcon } from "lucide-react";
import { TextScramble } from "../common/text-scramble";
import { MemoizedAsciiAvatar } from "../special/ascii-avatar";
import MusicPlayer from "../special/music-player";

export default function Hero() {
  return (
    <div className="space-y-12 pt-12 pb-8">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end">
        <h1 className="text-xl font-bold tracking-tight">
          <TextScramble>nikhil singh mehta</TextScramble>
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <MapPinIcon size={14} />
            <span>{"india"}</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <UniversityIcon size={14} />
            <span>{"cs_ug"}</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
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
                "software developer based in india, final year cs undergrad. i'm into films, design, coding and i go down rabbit holes sometimes. i wanna create something that will live forever on this world of computers."
              }
            </span>
          </p>
          <p className="text-muted-foreground hidden tracking-tight md:block">
            press : to open command palette
          </p>
          <div className="w-fit">
            <MusicPlayer />
          </div>
        </div>
        <div className="ml-auto">
          <MemoizedAsciiAvatar />
        </div>
      </div>
    </div>
  );
}
