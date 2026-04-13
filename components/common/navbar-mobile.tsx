import { motion } from "motion/react";
import Link from "next/link";

const NAVBAR_HEIGHT = "4rem";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
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
      className="bg-background/60 backdrop-blur-sm"
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
        <div className="border-muted-foreground bg-background/50 overflow-hidden border-x border-b border-dashed backdrop-blur-sm">
          <nav className="divide-muted-foreground divide-y divide-dashed">
            {menuItems.map((item, idx) => {
              const isMailto = item.href?.startsWith("mailto:");
              const content = (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.3 }}
                  className="group hover:bg-highlight/5 flex items-center justify-between px-6 py-4 transition-colors duration-200"
                >
                  <span className="group-hover:text-highlight text-base font-medium transition-colors duration-200">
                    {item.text}
                  </span>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    className="text-muted-foreground group-hover:text-highlight h-[18px] w-[18px] transition-all duration-200 group-hover:translate-x-1"
                    fill="none"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
