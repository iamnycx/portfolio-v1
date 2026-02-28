"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Logo from "../logo";
import { Antenna } from "lucide-react";
import Link from "next/link";

export default function DigitalArt() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const charScale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      <div>
        <div className="absolute -top-30 -left-9">
          <div className="border-accent-foreground bg-background h-9 w-9 origin-bottom-right -rotate-45 border-r border-dotted" />
          <div className="border-accent-foreground bg-background h-12 w-9 border-r border-dotted" />
          <div className="border-accent-foreground bg-background h-9 w-9 origin-top-right rotate-45 border-r border-dotted" />
          <div className="border-muted-foreground h-9 w-9 origin-top-right rotate-45 border-r border-dotted" />
        </div>
        <div className="absolute -top-30 -right-9">
          <div className="border-accent-foreground bg-background h-9 w-9 origin-bottom-left rotate-45 border-l border-dotted" />
          <div className="border-accent-foreground bg-background h-12 w-9 border-l border-dotted" />
          <div className="border-accent-foreground bg-background h-9 w-9 origin-top-left -rotate-45 border-l border-dotted" />
          <div className="border-muted-foreground h-9 w-9 origin-top-left -rotate-45 border-l border-dotted" />
        </div>
      </div>
      <div className="border-muted-foreground relative mx-auto h-6 max-w-6xl overflow-hidden border-x border-t border-dotted">
        <div className="relative flex h-6 w-full before:absolute before:-left-[100vw] before:-z-1 before:h-6 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--muted-foreground)_0,var(--muted-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--muted-foreground:var(--color-muted-foreground)]/40" />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div
          ref={containerRef}
          className="border-muted-foreground relative h-[50vh] w-full overflow-clip border border-dotted pb-16"
        >
          <motion.div
            style={{ scale: bgScale }}
            className="absolute bottom-0 z-0 w-full"
          >
            <Image
              src="/img/background.png"
              alt=""
              width={1024}
              height={768}
              className="w-full mix-blend-screen contrast-120"
            />
          </motion.div>
          <motion.div
            style={{ scale: charScale }}
            className="absolute right-0 -bottom-26 z-50 w-96"
          >
            <Image
              src="/img/astronaut.png"
              alt=""
              width={1024}
              height={768}
              className="w-full contrast-125"
            />
          </motion.div>
          <motion.div
            style={{ opacity }}
            className="absolute inset-x-0 top-0 z-20 md:inset-0"
          >
            <h2 className="text-muted-foreground absolute top-10 z-10 w-full text-center text-7xl tracking-tighter uppercase md:left-10 md:text-left">
              EN ROUTE
            </h2>
          </motion.div>
        </div>
        <div className="border-muted-foreground flex flex-col space-y-8 border border-dotted md:w-120 md:border-l-0">
          <div className="flex items-baseline-last justify-between p-4">
            <h1 className="text-3xl font-black">TL;DR</h1>
            <Logo />
          </div>
          <div className="text-muted-foreground flex flex-col gap-1 p-4 pt-0 tracking-wide">
            {[
              ["Location", "Delhi, India"],
              ["OS", "Arch Linux (Hyprland)"],
              ["Editor", "Neovim · VS Code"],
              ["Focus", "Systems · DX · UX"],
              ["Learning", "Rust · Solana"],
              ["Next", "Applied AI · TUI"],
              ["Status", "Available"],
            ].map(([label, value]) => (
              <p key={label} className="grid grid-cols-[120px_1fr]">
                <span>{label}:</span>
                <span className="text-foreground">{value}</span>
              </p>
            ))}
          </div>
          <Link
            href="https://x.com/messages/compose?recipient_id=1924049920560148480"
            target="_blank"
            className="border-muted-foreground hover:bg-muted/50 group mt-auto flex w-full cursor-pointer items-center justify-center gap-2 border-t border-dotted py-4 transition-colors duration-300 ease-in-out"
          >
            <Antenna className="stroke-muted-foreground group-hover:stroke-accent-foreground size-5 transition-colors duration-300 ease-in-out" />
            <span className="text-xl font-black tracking-wider">PING ME</span>
          </Link>
        </div>
      </div>
      <div className="border-muted-foreground mx-auto h-6 max-w-6xl overflow-hidden border-x border-dotted">
        <div className="relative flex h-6 w-full before:absolute before:-left-[100vw] before:-z-1 before:h-6 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--muted-foreground)_0,var(--muted-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--muted-foreground:var(--color-muted-foreground)]/40" />
      </div>
    </div>
  );
}
