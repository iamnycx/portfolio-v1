import { JSX, memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { avatarData } from "./avatar-data";

const useMotionPreferences = () => {
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    return isMobile || prefersReduced;
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 768px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () =>
      setIsMobileOrReduced(mobileQuery.matches || reducedQuery.matches);

    mobileQuery.addEventListener("change", update);
    reducedQuery.addEventListener("change", update);

    return () => {
      mobileQuery.removeEventListener("change", update);
      reducedQuery.removeEventListener("change", update);
    };
  }, []);

  return isMobileOrReduced;
};

const name_options = ["Nikhil", "Batman"] as const;

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
  const [name, setName] = useState<(typeof name_options)[number]>("Nikhil");
  const [canAnimate, setCanAnimate] = useState(false);
  const isMobileOrReduced = useMotionPreferences();

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className="text-muted-foreground absolute top-20 left-0 -translate-x-12 md:-translate-x-20">
        [i am]{" "}
        <span className="inline-block w-20 overflow-clip border border-dotted border-orange-200 px-1 text-center">
          <AnimatePresence mode="wait">
            <motion.span
              key={name}
              className="inline-block text-orange-200"
              initial={
                isMobileOrReduced
                  ? { filter: "blur(0px)", opacity: 1, y: 0 }
                  : { filter: "blur(4px)", opacity: 0, y: -12 }
              }
              animate={
                isMobileOrReduced
                  ? { filter: "blur(0px)", opacity: 1, y: 0 }
                  : { filter: "blur(0px)", opacity: 1, y: 0 }
              }
              exit={
                isMobileOrReduced
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

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        viewBox="0 0 800 1080"
        className="mask-b-from-80%"
        aria-label="ASCII art avatar"
        initial={
          isMobileOrReduced ? { filter: "blur(0px)" } : { filter: "blur(6px)" }
        }
        animate={
          isMobileOrReduced || canAnimate
            ? { filter: "blur(0px)" }
            : { filter: "blur(6px)" }
        }
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{ willChange: "transform" }}
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
      </motion.svg>
    </div>
  );
}

export const MemoizedAsciiAvatar = memo(AsciiAvatar);
