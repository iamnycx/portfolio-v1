"use client";

import { MoveLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function Heading({ title }: { title: string }) {
  return (
    <motion.h1
      layoutId={`blog-title-${title}`}
      className="text-4xl font-bold tracking-tight"
    >
      {title}
    </motion.h1>
  );
}

export function Date({
  date,
  readTime,
}: {
  date: string;
  readTime?: number;
  title: string;
}) {
  return (
    <motion.p layoutId={`blog-date-${date}`} className="text-neutral-400">
      {date}{" "}
      {readTime && (
        <span className="py-2 text-neutral-600">({readTime} min read)</span>
      )}
    </motion.p>
  );
}

export function NavItems({ slug }: { slug: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex items-center justify-between"
    >
      <Link
        href={"/blogs"}
        className="flex items-center gap-2 text-neutral-400 transition-colors duration-300 ease-in-out hover:text-orange-200"
      >
        <MoveLeft />
        <span>cd ..</span>
      </Link>
      <p className="text-neutral-600 hidden md:block">$ cat {slug}.mdx</p>
    </motion.div>
  );
}
