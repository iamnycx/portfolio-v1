"use client";

import { ArrowLeftIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Link from "next/link";
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
    <motion.h1
      layoutId={`blog-title-${title}`}
      className="font-offbit text-4xl tracking-wide"
    >
      {title}
    </motion.h1>
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
      className="text-muted-foreground"
    >
      {date}{" "}
      {readTime && (
        <span className="text-muted-foreground py-2">
          ({readTime} min read)
        </span>
      )}
    </motion.p>
  );
}

export function NavItems({ slug }: { slug: string }) {
  return (
    <motion.div
      {...revealOnView(0)}
      className="flex items-center justify-between"
    >
      <Link
        href={"/blogs"}
        className="text-muted-foreground hover:text-highlight flex items-center gap-2 transition-colors duration-300 ease-in-out"
      >
        <ArrowLeftIcon weight="bold" />
        <span>cd ..</span>
      </Link>
      <p className="text-muted-foreground hidden md:block">$ cat {slug}.mdx</p>
    </motion.div>
  );
}
