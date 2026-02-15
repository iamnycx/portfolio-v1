"use client";

import { motion } from "motion/react";

export function Heading({ title }: { title: string }) {
  return (
    <motion.h2
      layoutId={`blog-title-${title}`}
      className="line-clamp-1 text-xl font-semibold transition-colors duration-300 ease-in-out group-hover:text-orange-200"
    >
      {title}
    </motion.h2>
  );
}

export function Date({ date, readTime }: { date: string; readTime?: number }) {
  return (
    <motion.p layoutId={`blog-date-${date}`} className="text-muted-foreground">
      {date}
      {readTime && (
        <span className="pl-2 text-muted-foreground">({readTime} min read)</span>
      )}
    </motion.p>
  );
}
