"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import MobileMenu from "./navbar-mobile";

const CLOCK_PLACEHOLDER = "00:00:00";
const INITIAL_TOP_OFFSET = 100;

const links = [
  {
    text: "/home",
    href: "/",
  },
  {
    text: "/projects",
    href: "/projects",
  },
  {
    text: "/blogs",
    href: "/blogs",
  },
];

export default function Navbar() {
  const [time, setTime] = useState(CLOCK_PLACEHOLDER);
  const [activePage, setActivePage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const navbarOffset = useTransform(
    scrollY,
    [0, INITIAL_TOP_OFFSET],
    [INITIAL_TOP_OFFSET, -1],
    { clamp: true },
  );

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setTime(istTime);
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const syncDesktopState = (event?: MediaQueryListEvent) => {
      setIsDesktop(event ? event.matches : desktopQuery.matches);
    };

    syncDesktopState();
    desktopQuery.addEventListener("change", syncDesktopState);
    return () => desktopQuery.removeEventListener("change", syncDesktopState);
  }, []);

  const navbarStyle = prefersReducedMotion
    ? { y: -1 }
    : isDesktop === false
      ? { y: -1 }
      : { y: navbarOffset };

  return (
    <>
      <motion.div
        style={navbarStyle}
        className="from-background border-muted-foreground fixed inset-x-0 top-0 z-50 mx-auto flex items-center justify-between border-y border-dashed bg-linear-to-b to-transparent px-4 py-4 backdrop-blur-sm md:inset-x-0 md:max-w-6xl md:border-x md:px-6"
      >
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm sm:text-base"
          >
            <span>{"nycx@dev"}</span>
            <span className="text-highlight">{"~"}</span>
            <span>{"$"}</span>
          </Link>
          <h2 className="hidden text-sm sm:text-base md:block">
            <span
              suppressHydrationWarning
              className="inline-block min-w-[4.75rem] tabular-nums"
            >
              {time}
            </span>
          </h2>
        </div>
        <div className="hidden gap-4 lg:flex lg:gap-6">
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
                  className="border-highlight absolute inset-0 border border-dotted"
                />
              )}
              <span className="group-hover:text-highlight transition-colors duration-300 ease-in-out">
                {link.text}
              </span>
            </Link>
          ))}
        </div>
        <Link
          href={"mailto:25nikmehta@gmail.com"}
          className="border-background hover:border-highlight/50 hover:text-highlight hidden border border-dashed px-2 py-1 text-sm transition-colors duration-300 ease-in-out sm:text-base lg:block"
        >
          {"/contact.sh"}
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="border-muted-foreground hover:border-highlight hover:text-highlight block border border-dashed px-2 py-1 text-sm transition-colors duration-300 ease-in-out sm:text-base lg:hidden"
        >
          {isMobileMenuOpen ? "./close.sh" : "./menu.sh"}
        </button>
      </motion.div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
