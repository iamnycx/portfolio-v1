import { JSX, memo, useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import { avatarData } from "./avatar-data";

const useMotionPreferences = () => {
  const [isMobileOrReduced, setIsMobileOrReduced] = useState(false);

  useEffect(() => {
    const isMobile =
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 768px)").matches;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setIsMobileOrReduced(isMobile || prefersReduced);
  }, []);

  return isMobileOrReduced;
};

const desktopGlitchVariants: Variants = {
  idle: {
    x: 0,
    y: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
  },
  glitch: (rowIndex: number) => ({
    x: [0, -6, 8, -4, 10, 0],
    y: [0, 1, -2, 1, -1, 0],
    rotate: [0, -2, 3, -1, 1, 0],
    skewX: [0, 25, -30, 15, -10, 0],
    scaleX: [1, 1.15, 0.85, 1.05, 0.95, 1],
    scaleY: [1, 0.9, 1.1, 0.95, 1.05, 1],
    opacity: [1, 0.25, 1, 0.6, 1],
    transition: {
      duration: 0.18,
      repeat: Infinity,
      repeatDelay: 0.6,
      delay: ((rowIndex * 0.137) % 1.0) * 0.8,
    },
  }),
};

const mobileGlitchVariants: Variants = {
  idle: {
    x: 0,
    y: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
  },
  glitch: (rowIndex: number) => ({
    x: [0, -2, 3, -1, 2, 0],
    y: [0, 1, -2, 1, -1, 0],
    rotate: [0, -1, 1.5, -0.5, 0.5, 0],
    skewX: [0, 10, -12, 6, -4, 0],
    scaleX: [1, 1.05, 0.95, 1.02, 0.98, 1],
    scaleY: [1, 0.97, 1.03, 0.99, 1.01, 1],
    opacity: [1, 0.6, 1, 0.75, 1],
    transition: {
      duration: 0.28,
      repeat: Infinity,
      repeatDelay: 1.1,
      ease: "easeInOut",
      delay: ((rowIndex * 0.151) % 1.0) * 1.1,
    },
  }),
};

const textFlickerVariants: Variants = {
  flicker: {
    opacity: [1, 0.5, 1, 0.4, 1, 0.6, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatDelay: 0.3,
      ease: "linear",
    },
  },
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

  const glitchVariants = isMobileOrReduced
    ? mobileGlitchVariants
    : desktopGlitchVariants;

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
    <div className="relative mask-b-from-80%">
      <motion.div
        className="text-muted-foreground absolute top-20 left-0 -translate-x-14 md:-translate-x-24"
        variants={textFlickerVariants}
        animate={canAnimate ? "flicker" : undefined}
        style={{ willChange: "transform, opacity" }}
      >
        [call me] <span className="text-orange-200">{name}</span>
      </motion.div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        viewBox="0 0 800 1080"
        aria-label="ASCII art avatar"
      >
        <defs>
          {!isMobileOrReduced && (
            <filter id="glitch-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves={2}
                seed={8}
              >
                <animate
                  attributeName="baseFrequency"
                  dur="0.3s"
                  values="0.6;0.9;0.7"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale={14}>
                <animate
                  attributeName="scale"
                  dur="0.25s"
                  values="4;18;6"
                  repeatCount="indefinite"
                />
              </feDisplacementMap>
            </filter>
          )}
        </defs>
        <g filter={!isMobileOrReduced ? "url(#glitch-noise)" : undefined}>
          {avatarRows.map((row, rowIndex) => (
            <motion.g
              key={row.y}
              variants={glitchVariants}
              initial="idle"
              animate={canAnimate ? "glitch" : "idle"}
              custom={rowIndex}
              style={{ willChange: "transform, opacity" }}
            >
              {row.elements.map((element, index) => (
                <text
                  key={`${element.x}-${element.y}-${index}`}
                  x={element.x}
                  y={element.y}
                  fill={element.fill}
                >
                  {element.char}
                </text>
              ))}
            </motion.g>
          ))}
        </g>
      </svg>
    </div>
  );
}

export const MemoizedAsciiAvatar = memo(AsciiAvatar);
