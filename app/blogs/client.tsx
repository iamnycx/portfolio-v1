"use client";

import { motion } from "motion/react";

export function Heading({ title }: { title: string }) {
  return (
    <motion.h2
      layoutId={`blog-title-${title}`}
      className="z-10 line-clamp-1 text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-orange-200"
    >
      {title}
    </motion.h2>
  );
}

export function Date({ date, readTime }: { date: string; readTime?: number }) {
  return (
    <motion.p
      layoutId={`blog-date-${date}`}
      className="text-muted-foreground z-10"
    >
      {date}
      {readTime && (
        <span className="text-muted-foreground pl-2">
          ({readTime} min read)
        </span>
      )}
    </motion.p>
  );
}

export function DummyCommand() {
  return (
    <motion.p
      initial={{ filter: "blur(4px)" }}
      animate={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      className="text-muted-foreground tracking-wide"
    >
      $ cd /var/log/thoughts
    </motion.p>
  );
}
