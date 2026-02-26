"use client";

import Container from "@/components/common/container";
import { TextScramble } from "@/components/common/text-scramble";
import MusicPlayer from "@/components/special/music-player";
import { motion } from "motion/react";
import Link from "next/link";

export default function Cave() {
  return (
    <Container className="pt-16">
      <div className="space-y-4 py-12">
        <div className="flex items-baseline justify-between">
          <h1 className="text-xl font-bold tracking-tight">
            <TextScramble>cave</TextScramble>
          </h1>
          <motion.p
            initial={{ filter: "blur(4px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground tracking-wide"
          >
            tony stark build that in a cave
          </motion.p>
        </div>
        <div className="flex h-[60vh] flex-col items-center justify-center gap-8">
          <MusicPlayer />
          <p className="max-w-2xl text-center text-balance">
            {
              "I’m into music too. I’ll be sharing some of my own tracks here soon, using this little player."
            }
          </p>
          <Link href="/" className="text-orange-200 hover:underline">
            ./home
          </Link>
        </div>
      </div>
    </Container>
  );
}
