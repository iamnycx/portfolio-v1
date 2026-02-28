import { JSX, memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { avatarData } from "./avatar-data";

const useMotionPreferences = () => {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const q = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReduced(q.matches);
    q.addEventListener("change", update);
    return () => q.removeEventListener("change", update);
  }, []);
  return prefersReduced;
};

const name_options = ["Web2", "Design", "Music", "Web3", "Films"] as const;

const FALL_DURATION_S = 0.22;
const TOTAL_SPREAD_S = 1.8;
const MATRIX_CHARS = [".", ":", "-", "=", "+", "*", "#", "@", "&", "%"];
const SVG_HEIGHT = 1080;
const SVG_WIDTH = 800;
const RAIN_DENSITY = 50;
const RAIN_REGENERATE_MS = 1500;

type FallingCharType = "falling-from" | "falling-to" | "non-interacting";

interface FallingChar {
  id: string;
  x: number;
  startY: number;
  endY: number;
  char: string;
  type: FallingCharType;
  delay: number;
  duration: number;
  color: string;
  opacityPhase: number;
}

function deterministicShuffle<T>(arr: T[]): T[] {
  const out = [...arr];
  let seed = 0xdeadbeef;
  const rand = () => {
    seed ^= seed << 13;
    seed ^= seed >> 17;
    seed ^= seed << 5;
    return (seed >>> 0) / 0xffffffff;
  };
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

const shuffled = deterministicShuffle(avatarData);
const delayMap = new Map<string, number>(
  shuffled.map((el, i) => [
    `${el.x}-${el.y}`,
    (i / shuffled.length) * TOTAL_SPREAD_S,
  ]),
);

// Generate avatar position map for quick lookups
const avatarPositions = new Set(
  avatarData.map((el) => `${Math.round(el.x)}-${Math.round(el.y)}`),
);

const avatarYPositions = Array.from(
  new Set(avatarData.map((el) => Math.round(el.y))),
).sort((a, b) => a - b);

function generateFallingChars(baseCount: number): FallingChar[] {
  const fallingChars: FallingChar[] = [];

  for (let i = 0; i < baseCount; i++) {
    // Random column
    const x = Math.random() * SVG_WIDTH;

    // Random character
    const char = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];

    // Assign type based on probability
    const typeRand = Math.random();
    let type: FallingCharType;
    if (typeRand < 0.33) {
      type = "falling-from";
    } else if (typeRand < 0.66) {
      type = "falling-to";
    } else {
      type = "non-interacting";
    }

    // Determine end Y position based on type
    let endY: number;
    if (type === "non-interacting") {
      // Fall all the way to bottom
      endY = SVG_HEIGHT + 100;
    } else {
      // For falling-from and falling-to, target avatar positions or bottom
      if (Math.random() < 0.6 && avatarYPositions.length > 0) {
        // Target a random avatar Y position
        endY =
          avatarYPositions[Math.floor(Math.random() * avatarYPositions.length)];
      } else {
        // Fall to bottom
        endY = SVG_HEIGHT + 100;
      }
    }

    // Random delay
    const delay = Math.random() * 1.5;

    // Random duration (slight variance)
    const duration = FALL_DURATION_S + Math.random() * 0.1;

    // Random color from avatar palette
    const colors = [
      "rgb(89,82,81)",
      "rgb(206,189,174)",
      "rgb(85,67,66)",
      "rgb(156,138,138)",
      "rgb(71,57,60)",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Random opacity phase for variation
    const opacityPhase = Math.random();

    fallingChars.push({
      id: `${i}-${Math.random()}`,
      x,
      startY: -100,
      endY,
      char,
      type,
      delay,
      duration,
      color,
      opacityPhase,
    });
  }

  return fallingChars;
}

const KEYFRAME_ID = "matrix-fall-kf";
if (typeof document !== "undefined" && !document.getElementById(KEYFRAME_ID)) {
  const style = document.createElement("style");
  style.id = KEYFRAME_ID;
  style.textContent = `
    @keyframes matrixFall {
      0%   { opacity: 0; transform: translateY(-1100px); }
      60%  { opacity: 1; }
      100% { opacity: 1; transform: translateY(0px); }
    }
    @keyframes matrixFallCustom {
      0%   { opacity: 0; transform: translateY(var(--start-y, -100px)); }
      20%  { opacity: var(--opacity-peak, 0.8); }
      60%  { opacity: var(--opacity-mid, 0.9); }
      100% { opacity: var(--opacity-end, 0.7); transform: translateY(var(--end-y, 0px)); }
    }
    @keyframes opacityFlicker {
      0%   { opacity: 0.3; }
      25%  { opacity: 0.8; }
      50%  { opacity: 0.5; }
      75%  { opacity: 0.9; }
      100% { opacity: 0.4; }
    }
  `;
  document.head.appendChild(style);
}

const AvatarChar = memo(function AvatarChar({
  element,
  prefersReducedMotion,
}: {
  element: (typeof avatarData)[number];
  prefersReducedMotion: boolean;
}) {
  const key = `${element.x}-${element.y}`;
  const delay = delayMap.get(key) ?? 0;

  return (
    <text
      x={element.x}
      y={element.y}
      fill={element.fill}
      style={
        prefersReducedMotion
          ? undefined
          : {
              animation: `matrixFall ${FALL_DURATION_S}s cubic-bezier(0.15,0.6,0.35,1) ${delay}s both`,
            }
      }
    >
      {element.char}
    </text>
  );
});

const FallingCharComponent = memo(function FallingCharComponent({
  falling,
  prefersReducedMotion,
}: {
  falling: FallingChar;
  prefersReducedMotion: boolean;
}) {
  if (prefersReducedMotion) return null;

  const startPixels = falling.startY;
  const endPixels = falling.endY;
  const opacityPeak = 0.6 + falling.opacityPhase * 0.4;
  const opacityMid = 0.5 + falling.opacityPhase * 0.4;
  const opacityEnd = 0.3 + falling.opacityPhase * 0.4;
  const flickerSpeed = 0.1 + falling.opacityPhase * 0.3;

  return (
    <text
      x={falling.x}
      y={falling.startY}
      fill={falling.color}
      style={
        {
          animation: `matrixFallCustom ${falling.duration}s cubic-bezier(0.15,0.6,0.35,1) ${falling.delay}s forwards, opacityFlicker ${flickerSpeed}s ease-in-out ${falling.delay}s infinite`,
          "--start-y": `${startPixels}px`,
          "--end-y": `${endPixels}px`,
          "--opacity-peak": opacityPeak,
          "--opacity-mid": opacityMid,
          "--opacity-end": opacityEnd,
        } as React.CSSProperties & {
          "--start-y": string;
          "--end-y": string;
          "--opacity-peak": number;
          "--opacity-mid": number;
          "--opacity-end": number;
        }
      }
    >
      {falling.char}
    </text>
  );
});

function AsciiAvatar(): JSX.Element {
  const [name, setName] = useState<(typeof name_options)[number]>("Web2");
  const prefersReducedMotion = useMotionPreferences();
  const [ready, setReady] = useState(false);
  const [fallingChars, setFallingChars] = useState<FallingChar[]>([]);
  const [hiddenPositions, setHiddenPositions] = useState<Set<string>>(
    new Set(),
  );

  // Initialize falling characters when component is ready
  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      // Generate initial falling characters
      const chars = generateFallingChars(RAIN_DENSITY);
      setFallingChars(chars);

      // Track positions where characters are falling FROM
      const hidden = new Set<string>();
      chars.forEach((char) => {
        if (char.type === "falling-from") {
          const posKey = `${Math.round(char.x)}-${Math.round(char.endY)}`;
          if (avatarPositions.has(posKey)) {
            hidden.add(posKey);
          }
        }
      });
      setHiddenPositions(hidden);

      // Regenerate falling characters periodically
      const interval = setInterval(() => {
        const newChars = generateFallingChars(RAIN_DENSITY);
        setFallingChars(newChars);

        const newHidden = new Set<string>();
        newChars.forEach((char) => {
          if (char.type === "falling-from") {
            const posKey = `${Math.round(char.x)}-${Math.round(char.endY)}`;
            if (avatarPositions.has(posKey)) {
              newHidden.add(posKey);
            }
          }
        });
        setHiddenPositions(newHidden);
      }, RAIN_REGENERATE_MS);

      return () => clearInterval(interval);
    }, 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setName((prev) => {
        const i = name_options.indexOf(prev);
        return name_options[(i + 1) % name_options.length];
      });
    }, 3000);
    return () => clearInterval(t);
  }, []);

  // Filter avatar data to hide characters that are falling from
  const displayedAvatarData = avatarData.filter((el) => {
    const key = `${Math.round(el.x)}-${Math.round(el.y)}`;
    return !hiddenPositions.has(key);
  });

  return (
    <div className="relative">
      <div className="text-muted-foreground absolute top-22 -left-6 -translate-x-12 tracking-tighter">
        <span className="border-muted-foreground inline-block w-fit overflow-clip border border-r-0 border-dotted px-1 text-center">
          i am into
        </span>
        <span className="border-muted-foreground inline-block w-16 overflow-clip border border-dotted px-1 text-center uppercase">
          <AnimatePresence mode="wait">
            <motion.span
              key={name}
              className="inline-block text-orange-200"
              initial={prefersReducedMotion ? { y: 0 } : { y: -50 }}
              animate={{ y: 0 }}
              exit={prefersReducedMotion ? { y: 0 } : { y: 50 }}
              transition={{ duration: 1, ease: "anticipate" }}
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
        style={{ overflow: "visible" }}
      >
        {ready && (
          <g>
            {/* Original avatar characters */}
            {displayedAvatarData.map((element) => (
              <AvatarChar
                key={`${element.x}-${element.y}`}
                element={element}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}

            {/* Falling characters */}
            {fallingChars.map((falling) => (
              <FallingCharComponent
                key={falling.id}
                falling={falling}
                prefersReducedMotion={prefersReducedMotion}
              />
            ))}
          </g>
        )}
      </svg>
    </div>
  );
}

export const MemoizedAsciiAvatar = memo(AsciiAvatar);
