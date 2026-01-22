"use client";

import { useEffect, useState } from "react";
import Container from "./container";
import Link from "next/link";
import { motion } from "motion/react";

const links = [
  {
    text: "[1]home",
    href: "/",
  },
  {
    text: "[2]projects",
    href: "/projects",
  },
  {
    text: "[3]blogs",
    href: "/blogs",
  },
];

export default function Navbar() {
  const [time, setTime] = useState<string | null>(null);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const update = () => setTime(new Date().toISOString().slice(11, 19));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="from-background fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between border-x border-b border-dotted border-neutral-400 bg-linear-to-b to-transparent px-4 py-4 backdrop-blur-xs md:inset-x-32 md:px-6">
      <div className="flex items-center space-x-6">
        <h1 className="flex items-center gap-2">
          <span>{"nycx@dev"}</span>
          <span className="text-orange-200">{"~"}</span>
          <span>{"$"}</span>
        </h1>
        <h2 className="hidden md:block">
          {time ? <span>{time}</span> : <span>00:00:00</span>}
        </h2>
      </div>
      <div className="hidden space-x-6 md:flex">
        {links.map((link, idx) => (
          <Link
            href={link.href}
            className="group relative cursor-pointer px-2 py-0.5"
            key={link.href}
            onClick={() => setActivePage(idx)}
          >
            {activePage === idx && (
              <motion.div
                layoutId="active-page-indicator"
                transition={{
                  ease: "easeInOut",
                }}
                className="absolute inset-0 border border-dotted border-orange-200"
              />
            )}
            <span className="transition-colors duration-300 ease-in-out group-hover:text-orange-200">
              {link.text}
            </span>
          </Link>
        ))}
      </div>
      <Link
        href={"mailto:25nikmehta@gmail.com"}
        className="hidden border border-dotted border-neutral-400 px-2 py-1 transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200 md:block"
      >
        {"./contact.sh"}
      </Link>
      <Link
        href={"mailto:25nikmehta@gmail.com"}
        className="block border border-dotted border-neutral-600 px-2 py-1 transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200 md:hidden"
      >
        {"./menu.sh"}
      </Link>
    </div>
  );
}
