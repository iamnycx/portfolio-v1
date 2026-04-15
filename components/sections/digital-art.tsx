"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Logo from "../logo";
import Link from "next/link";
import { Bell } from "pixelarticons/react";

export default function DigitalArt() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const charY = useTransform(scrollYProgress, [0, 1], [120, -40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative px-4 md:px-6">
      <motion.p
        initial={{
          opacity: 0,
          filter: "blur(3px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        viewport={{ once: true, margin: "0px 0px -50% 0px" }}
        className="pb-16 text-center text-balance"
      >
        “Simplicity is the ultimate sophistication.”{" "}
        <span className="block md:inline">— Leonardo da Vinci</span>
      </motion.p>
      <div className="hidden md:block">
        <div className="absolute -left-2.5">
          <div className="border-muted-foreground h-9 w-9 origin-top-right rotate-45 border-r border-dashed" />
        </div>
        <div className="absolute -right-2.5">
          <div className="border-muted-foreground h-9 w-9 origin-top-left -rotate-45 border-l border-dashed" />
        </div>
      </div>
      <div className="border-muted-foreground relative mx-auto h-6 max-w-6xl overflow-hidden border-x border-t border-dashed">
        <div className="relative flex h-6 w-full before:absolute before:inset-y-0 before:-left-[100vw] before:h-6 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--stripe)_0,var(--stripe)_1px,transparent_1px,transparent_50%)] before:bg-size-[10px_10px] before:opacity-40 before:content-[''] before:[--stripe:var(--color-muted-foreground)]" />
      </div>
      <div className="flex flex-col-reverse md:flex-row">
        <div
          ref={containerRef}
          className="border-muted-foreground relative min-h-[55vh] w-full overflow-clip border border-dashed pb-16"
        >
          <motion.div
            style={{ y: bgY }}
            className="absolute bottom-0 z-0 w-full scale-120"
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
            style={{ y: charY }}
            className="absolute right-0 -bottom-6 z-10 w-96 scale-140"
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
            className="absolute inset-x-0 top-0 z-0 md:inset-0"
          >
            <h2 className="text-muted-foreground absolute top-8 -z-10 w-full text-center text-5xl font-bold uppercase md:left-10 md:text-left">
              EN ROUTE
            </h2>
          </motion.div>
        </div>
        <div className="border-muted-foreground flex flex-col space-y-8 border border-dashed md:w-120 md:border-l-0">
          <div className="flex items-baseline-last justify-between p-4">
            <h1 className="text-3xl font-bold">TL;DR</h1>
            <Logo />
          </div>
          <div className="text-muted-foreground flex flex-col gap-2 p-4 pt-0 tracking-wide uppercase">
            {[
              ["Location", "Delhi, India"],
              ["OS", "Arch Linux (Hyprland)"],
              ["Editor", "NVim - Zed - VsCode"],
              ["Focus", "Systems - DX - UX"],
              ["Learning", "Rust - Solana"],
              ["Next", "Applied AI - TUI"],
            ].map(([label, value]) => (
              <p key={label} className="grid grid-cols-[120px_1fr]">
                <span className="font-bold">{label}:</span>
                <span className="text-foreground font-semibold">{value}</span>
              </p>
            ))}
          </div>
          <Link
            href="https://x.com/messages/compose?recipient_id=1924049920560148480"
            target="_blank"
            className="border-muted-foreground hover:bg-muted/50 group mt-auto flex w-full cursor-pointer items-center justify-center gap-2 border-t border-dashed py-4 transition-colors duration-300 ease-in-out"
          >
            <Bell className="fill-muted-foreground group-hover:fill-foreground size-5 stroke-none transition-colors duration-300 ease-in-out" />
            <span className="text-md font-bold tracking-widest">PING ME</span>
          </Link>
        </div>
      </div>
      <div className="border-muted-foreground mx-auto h-6 max-w-6xl overflow-hidden border-x border-dashed">
        <div className="relative flex h-6 w-full before:absolute before:inset-y-0 before:-left-[100vw] before:h-6 before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--stripe)_0,var(--stripe)_1px,transparent_1px,transparent_50%)] before:bg-size-[10px_10px] before:opacity-40 before:content-[''] before:[--stripe:var(--color-muted-foreground)]" />
      </div>
    </div>
  );
}
