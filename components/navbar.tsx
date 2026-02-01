"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

const links = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "projects",
    href: "/projects",
  },
  {
    text: "blogs",
    href: "/blogs",
  },
];

export default function Navbar() {
  const [time, setTime] = useState<string | null>(null);
  const [activePage, setActivePage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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

  return (
    <>
      <div className="from-background fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between border-b border-dotted border-neutral-400 bg-linear-to-b to-transparent px-4 py-4 backdrop-blur-xs md:border-x md:px-6">
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 text-sm sm:text-base"
          >
            <span>{"nycx@dev"}</span>
            <span className="text-orange-200">{"~"}</span>
            <span>{"$"}</span>
          </Link>
          <h2 className="hidden text-sm sm:text-base md:block">
            {isClient ? <span>{time}</span> : <span>00:00:00</span>}
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
          className="hidden border border-dotted border-neutral-400 px-2 py-1 text-sm transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200 sm:text-base lg:block"
        >
          {"./contact.sh"}
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="block border border-dotted border-neutral-600 px-2 py-1 text-sm transition-colors duration-300 ease-in-out hover:border-orange-200 hover:text-orange-200 sm:text-base lg:hidden"
        >
          {isMobileMenuOpen ? "./close.sh" : "./menu.sh"}
        </button>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

const NAVBAR_HEIGHT = "4rem";

function MobileMenu({ onClose }: { onClose: () => void }) {
  const menuItems = [
    { text: "Home", href: "/" },
    { text: "Projects", href: "/projects" },
    { text: "Blogs", href: "/blogs" },
    { text: "Contact", href: "mailto:25nikmehta@gmail.com" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
      }}
      className="bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        style={{
          top: NAVBAR_HEIGHT,
          position: "absolute",
          left: 0,
          right: 0,
        }}
        className="mx-auto max-w-6xl px-4 md:px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-muted-foreground bg-background/50 overflow-hidden border-x border-b border-dotted backdrop-blur-sm">
          <nav className="divide-muted-foreground divide-y divide-dotted">
            {menuItems.map((item, idx) => {
              const isMailto = item.href?.startsWith("mailto:");
              const content = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  className="group flex items-center justify-between px-6 py-4 transition-colors duration-200 hover:bg-orange-200/5"
                >
                  <span className="text-base font-medium transition-colors duration-200 group-hover:text-orange-200">
                    {item.text}
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-neutral-600 transition-all duration-200 group-hover:translate-x-1 group-hover:text-orange-200"
                  />
                </motion.div>
              );

              return isMailto ? (
                <a key={item.text} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <Link
                  key={item.text}
                  href={item.href ?? "/"}
                  onClick={onClose}
                  className="block"
                >
                  {content}
                </Link>
              );
            })}
          </nav>
        </div>
      </motion.div>
    </motion.div>
  );
}
