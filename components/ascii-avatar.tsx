import { JSX, memo, useEffect, useState } from "react";
import { motion, Variants } from "motion/react";
import { avatarData } from "./avatar-data";

const glitchVariants: Variants = {
  idle: {
    x: 0,
    y: 0,
    rotate: 0,
    skewX: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
  },
  glitch: {
    x: [0, -6, 8, -4, 10, 0],
    y: [0, 3, -6, 4, -2, 0],
    rotate: [0, -2, 3, -1, 1, 0],
    skewX: [0, 25, -30, 15, -10, 0],
    scaleX: [1, 1.15, 0.85, 1.05, 0.95, 1],
    scaleY: [1, 0.9, 1.1, 0.95, 1.05, 1],
    opacity: [1, 0.25, 1, 0.6, 1],
    transition: {
      duration: 0.18,
      repeat: Infinity,
      repeatDelay: 0.6,
    },
  },
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

function AsciiAvatar(): JSX.Element {
  const [name, setName] = useState<(typeof name_options)[number]>("Nikhil");

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
      <motion.div
        className="text-muted-foreground absolute top-20 left-0 -translate-x-12 md:-translate-x-20"
        variants={textFlickerVariants}
        animate="flicker"
        style={{ willChange: "transform, opacity" }}
      >
        [i am] <span className="text-orange-200">{name}</span>
      </motion.div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={250}
        viewBox="0 0 800 1080"
        aria-label="ASCII art avatar"
      >
        <defs>
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
        </defs>
        <g filter="url(#glitch-noise)">
          {avatarData.map((element, index) => (
            <motion.text
              key={`${element.x}-${element.y}-${index}`}
              x={element.x}
              y={element.y}
              fill={element.fill}
              variants={glitchVariants}
              initial="idle"
              animate="glitch"
              style={{
                willChange: "transform, opacity",
              }}
            >
              {element.char}
            </motion.text>
          ))}
        </g>
      </svg>
    </div>
  );
}

export const MemoizedAsciiAvatar = memo(AsciiAvatar);
