"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

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

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div {...revealOnView(delay)} className={className}>
      {children}
    </motion.div>
  );
}

export function Heading({ title }: { title: string }) {
  return (
    <motion.h2
      layoutId={`blog-title-${title}`}
      className="font-offbit group-hover:text-highlight z-10 line-clamp-1 text-xl tracking-wide transition-colors duration-300 ease-in-out"
    >
      {title}
    </motion.h2>
  );
}

export function Date({
  date,
  readTime,
  title,
}: {
  date: string;
  readTime?: number;
  title: string;
}) {
  return (
    <motion.p
      layoutId={`blog-date-${title}-${date}`}
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
      {...revealOnView(0.2)}
      className="text-muted-foreground tracking-wide"
    >
      $ cd /var/log/thoughts
    </motion.p>
  );
}
