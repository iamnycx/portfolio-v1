"use client";

import {
  LinuxLogoIcon,
  MapPinAreaIcon,
  StudentIcon,
  TargetIcon,
} from "@phosphor-icons/react";
import { InteractiveHoverButton } from "../special/interactive-button";
import { motion as m } from "motion/react";

const revealOnView = (delay = 0) => ({
  initial: {
    filter: "blur(3px)",
    opacity: 0,
    y: 5,
  },
  whileInView: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut" as const,
    delay,
  },
  viewport: { once: true, margin: "0px" },
});

export default function Hero() {
  return (
    <div className="relative space-y-8 pt-12">
      <m.div
        {...revealOnView(0.05)}
        className="flex flex-col items-center justify-between gap-2 sm:flex-row sm:items-end"
      >
        <m.div {...revealOnView(0.1)} className="flex items-center gap-4">
          <m.h1
            {...revealOnView(0.15)}
            className="font-offbit text-xl tracking-wider"
          >
            nikhil singh mehta
          </m.h1>
          <m.div {...revealOnView(0.2)}>
            <InteractiveHoverButton
              href="https://mail.google.com/mail/?view=cm&fs=1&to=25nikmehta%40gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block"
            >
              Open to work
            </InteractiveHoverButton>
          </m.div>
        </m.div>
        <div className="font-offbit mt-6 flex flex-wrap justify-center gap-4 tracking-wide sm:justify-end md:mt-0">
          <m.p
            {...revealOnView(0.3)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <MapPinAreaIcon weight="bold" className="size-4 -translate-y-0.5" />
            <span>{"India"}</span>
          </m.p>
          <m.p
            {...revealOnView(0.35)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <StudentIcon weight="bold" className="size-4 -translate-y-0.5" />
            <span>{"CS"}</span>
          </m.p>
          <m.p
            {...revealOnView(0.4)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <LinuxLogoIcon weight="bold" className="size-4 -translate-y-0.5" />
            <span>{"Arch"}</span>
          </m.p>
          <m.p
            {...revealOnView(0.45)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <TargetIcon weight="bold" className="size-4 -translate-y-0.5" />
            <span>{"Solana"}</span>
          </m.p>
        </div>
      </m.div>

      <div className="flex flex-col justify-between gap-8 lg:flex-row">
        <m.div {...revealOnView(0.55)} className="w-full max-w-lg space-y-12">
          <m.p
            {...revealOnView(0.6)}
            className="text-foreground/75 tracking text-justify"
          >
            <b className="text-foreground"> software developer</b> based in{" "}
            <b className="text-foreground">india</b>, final year{" "}
            <b className="text-foreground">computer science</b> undergrad. i am
            into <b className="text-foreground">films, design, coding</b> and
            all the <b className="text-foreground">creative stuff</b> on earth.
            right now focused on <b className="text-foreground">web2</b> and{" "}
            <b className="text-foreground">web3</b> development.
          </m.p>
        </m.div>
        <m.div
          {...revealOnView(0.8)}
          className="mx-auto h-[10rem] overflow-y-hidden md:mr-0"
        >
          <video
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="w-full max-w-[12rem]"
          >
            <source
              src="/jet.webm"
              type="video/webm"
              className="mix-blend-screen"
            />
          </video>
        </m.div>
      </div>
      <div className="absolute inset-x-0">
        <div className="border-muted-foreground h-0.01 w-8 origin-top-left -rotate-135 border-t border-dashed" />
        <div className="border-muted-foreground h-0.5 w-full border-t border-dashed mask-r-to-50%" />
      </div>
    </div>
  );
}
