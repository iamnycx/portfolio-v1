import { Computer, MapPinIcon, UniversityIcon } from "lucide-react";
import { TextScramble } from "../common/text-scramble";
import { MemoizedAsciiAvatar } from "../special/ascii-avatar";
import Link from "next/link";

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
            humankind has created. curiosity takes me to places
          </p>
          <div className="flex h-58 flex-col items-center justify-center">
            <p className="text-muted-foreground">cooking something for here</p>
            <Link href="/cave" className="text-orange-200 hover:underline">
              {"/cave"}
            </Link>
          </div>
        </div>
        <div className="ml-auto">
          <MemoizedAsciiAvatar />
        </div>
      </div>
    </div>
  );
}
