"use client";

import { InteractiveHoverButton } from "../special/interactive-button";
import { motion as m } from "motion/react";
import Isometric from "../special/isometric";
import {
  Computer,
  Goal,
  Leaf,
  MagicEdit,
  MapPinHome,
  University,
} from "pixelarticons/react";

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
    <div className="relative flex py-12 md:pb-0">
      <div className="space-y-8 px-4 md:w-2/3 md:px-6">
        <div className="flex items-center justify-center gap-4 md:justify-start">
          <m.h1
            {...revealOnView(0)}
            className="text-md font-bold tracking-wider"
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
        </div>

        <m.p
          {...revealOnView(0.4)}
          className="text-foreground/75 text-justify text-sm leading-6 md:text-base"
        >
          <b className="text-foreground"> software developer</b> based in{" "}
          <b className="text-foreground">india</b>, final year{" "}
          <b className="text-foreground">computer science</b> undergrad. i am
          into <b className="text-foreground">films, design, coding</b> and all
          the <b className="text-foreground">creative stuff</b> on earth. right
          now focused on <b className="text-foreground">web2</b> and{" "}
          <b className="text-foreground">web3</b> development.
        </m.p>

        <div className="flex items-center justify-center gap-4 font-bold md:justify-start">
          <m.p
            {...revealOnView(0.6)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <MapPinHome className="size-4" />
            <span>{"India"}</span>
          </m.p>
          <m.p
            {...revealOnView(0.7)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <University className="size-4" />
            <span>{"CS"}</span>
          </m.p>
          <m.p
            {...revealOnView(0.8)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <Computer className="size-4" />
            <span>{"Arch"}</span>
          </m.p>
          <m.p
            {...revealOnView(0.9)}
            className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
          >
            <Goal className="size-4" />
            <span>{"Solana"}</span>
          </m.p>
        </div>
        <m.p
          {...revealOnView(1.2)}
          className="text-foreground/75 text-center text-sm leading-6 text-balance md:text-left md:text-base"
        >
          and yeah i love to play with{" "}
          <b className="text-foreground inline-flex items-center gap-1">
            svg <Leaf className="size-4" />
          </b>{" "}
          and{" "}
          <b className="text-foreground inline-flex items-center gap-1">
            motion <MagicEdit className="size-4" />
          </b>
        </m.p>
      </div>

      <div className="relative hidden h-90 overflow-hidden md:block">
        <Isometric />
      </div>
    </div>
  );
}
