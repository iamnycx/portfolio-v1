"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function DigitalArt() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const charScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.8]);
  const textScale = useTransform(scrollYProgress, [0, 1], [0.4, 2]);

  return (
    <>
      <div className="border-accent-foreground mx-auto h-6 max-w-6xl border-t border-dotted md:border-x" />
      <div
        ref={containerRef}
        className="border-accent-foreground relative h-[50vh] w-full overflow-clip border border-dotted pb-16"
      >
        <motion.div
          style={{ scale: bgScale }}
          className="absolute bottom-25 z-0 w-full"
        >
          <Image
            src="/img/bg.png"
            alt="background"
            width={1024}
            height={768}
            className="w-full contrast-115 saturate-130"
          />
        </motion.div>
        <motion.div
          style={{ scale: charScale }}
          className="absolute -right-32 -bottom-40 z-50 w-96 md:right-0 md:-bottom-32"
        >
          <Image
            src="/img/char.png"
            alt="character"
            width={1024}
            height={768}
            className="w-full contrast-125"
          />
        </motion.div>
        <motion.div
          style={{ scale: textScale }}
          className="absolute inset-x-0 top-0 z-20 md:inset-0"
        >
          <h2 className="text-shadow-background max-w-xs md:max-w-2xl absolute top-10 left-1/2 z-10 w-full -translate-x-1/2 text-center text-6xl leading-14 font-thin tracking-tighter text-orange-200 uppercase mix-blend-difference text-shadow-2xs md:top-1/2 md:-translate-y-1/2">
            I <span className="font-black italic"> chose</span> this path
          </h2>
        </motion.div>
      </div>
      <div className="border-accent-foreground mx-auto h-6 max-w-6xl border-dotted md:border-x" />
    </>
  );
}
