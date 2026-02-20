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

  const charScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.6]);

  return (
    <>
      <div
        ref={containerRef}
        className="border-accent-foreground relative h-[50vh] w-full overflow-clip rounded-t-4xl border-x border-t border-dotted pb-16"
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
            className="w-full saturate-130 contrast-115"
          />
        </motion.div>
        <motion.div
          style={{ scale: charScale }}
          className="absolute right-0 -bottom-30 z-10 w-96"
        >
          <Image
            src="/img/char.png"
            alt="character"
            width={1024}
            height={768}
            className="w-full contrast-125"
          />
        </motion.div>
      </div>
      <div className="border-accent-foreground mx-auto max-w-6xl border-dotted md:border-x">
        <div className="border-accent-foreground h-6 border-t border-dotted" />
      </div>
    </>
  );
}
