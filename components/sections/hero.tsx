import { Computer, MapPinIcon, UniversityIcon, Zap } from "lucide-react";
import { TextScramble } from "../common/text-scramble";
import { InteractiveHoverButton } from "../special/interactive-button";

export default function Hero() {
  return (
    <div className="relative space-y-12 pt-12">
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold tracking-tight">
            <TextScramble>nikhil singh mehta</TextScramble>
          </h1>
          <InteractiveHoverButton
            href="https://mail.google.com/mail/?view=cm&fs=1&to=25nikmehta%40gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            Open to work
          </InteractiveHoverButton>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <MapPinIcon size={14} />
            <span>{"India"}</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <UniversityIcon size={14} />
            <span>{"CS"}</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <Computer size={14} />
            <span>{"Arch"}</span>
          </p>
          <p className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base">
            <Zap size={14} />
            <span>{"SuperteamIn"}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <div className="w-full max-w-lg space-y-12">
          <p className="text-foreground/75 text-justify tracking-wide">
            <b className="text-foreground"> software developer</b> based in{" "}
            <b className="text-foreground">india</b>, final year{" "}
            <b className="text-foreground">computer science</b> undergrad. i am
            into <b className="text-foreground">films, design, coding</b>{" "}
            and all the <b className="text-foreground">creative stuff</b>{" "}
            on earth. right now focused on{" "}
            <b className="text-foreground">web2</b> and{" "}
            <b className="text-foreground">web3</b> development.
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
