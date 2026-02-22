import { JSX, memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { avatarData } from "./avatar-data";

const useMotionPreferences = () => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    return prefersReduced;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(reducedQuery.matches);

    reducedQuery.addEventListener("change", update);

    return () => {
      reducedQuery.removeEventListener("change", update);
    };
  }, []);

  return prefersReduced;
};

const name_options = ["Web2", "Design", "Web3", "Films"] as const;

const avatarRows = Object.values(
  avatarData.reduce(
    (rows, element) => {
      const key = element.y;
      if (!rows[key]) {
        rows[key] = {
          y: element.y,
          elements: [],
        };
      }
      rows[key].elements.push(element);
      return rows;
    },
    {} as Record<
      number,
      {
        y: number;
        elements: (typeof avatarData)[number][];
      }
    >,
  ),
).sort((a, b) => a.y - b.y);

function AsciiAvatar(): JSX.Element {
  const [name, setName] = useState<(typeof name_options)[number]>("Web2");
  const prefersReducedMotion = useMotionPreferences();

  useEffect(() => {
    const interval = setInterval(() => {
      setName((prev) => {
        const currentIndex = name_options.indexOf(prev);
        const nextIndex = (currentIndex + 1) % name_options.length;
        return name_options[nextIndex];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="text-muted-foreground absolute top-20 left-0 -translate-x-16">
        [into]{" "}
        <span className="inline-block w-20 overflow-clip border border-dotted border-orange-200 px-1 text-center uppercase">
          <AnimatePresence mode="wait">
            <motion.span
              key={name}
              className="inline-block text-orange-200"
              initial={
                prefersReducedMotion
                  ? { filter: "blur(0px)", opacity: 1, y: 0 }
                  : { filter: "blur(4px)", opacity: 0, y: -12 }
              }
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { filter: "blur(0px)", opacity: 1, y: 0 }
                  : { filter: "blur(4px)", opacity: 0, y: 12 }
              }
              transition={{ duration: 0.35, ease: "easeOut" }}
              style={{ willChange: "filter, opacity, transform" }}
            >
              {name}
            </motion.span>
          </AnimatePresence>
        </span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        viewBox="0 0 800 1080"
        className="mask-b-from-80%"
        aria-label="ASCII art avatar"
      >
        <g>
          {avatarRows.map((row) =>
            row.elements.map((element, index) => (
              <text
                key={`${element.x}-${element.y}-${index}`}
                x={element.x}
                y={element.y}
                fill={element.fill}
              >
                {element.char}
              </text>
            )),
          )}
        </g>
      </svg>
    </div>
  );
}

export const MemoizedAsciiAvatar = memo(AsciiAvatar);
