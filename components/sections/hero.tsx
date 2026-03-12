import { Computer, MapPinIcon, UniversityIcon } from "lucide-react";
import { TextScramble } from "../common/text-scramble";

export default function Hero() {
  return (
    <div className="relative min-h-[50vh] space-y-12 pt-12 pb-8">
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
            <span>{"computer_science"}</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <Computer size={14} />
            <span>{"arch_linux"}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="w-full max-w-lg space-y-6">
          <p className="text-foreground/75 text-justify tracking-tight">
            <b className="text-foreground">software developer</b> based in{" "}
            <b className="text-foreground">india</b>, final year{" "}
            <b className="text-foreground">computer science</b> undergrad. i am
            into <b className="text-foreground">films, design, coding, music</b>{" "}
            and all the <b className="text-foreground">creative stuff</b>{" "}
            humankind has created.
          </p>
        </div>
        <div className="ml-auto"></div>
      </div>
      {/* <div className="absolute inset-x-0">
        <div className="border-accent-foreground h-0.5 w-6 origin-top-left rotate-135 border-t border-dotted" />
        <div className="border-accent-foreground h-0.5 w-full border-t border-dotted" />
      </div> */}
    </div>
  );
}
