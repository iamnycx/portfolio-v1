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

const name_options = ["Web2", "Design", "Web3", "Films"] as const;

const FALL_DURATION_S = 0.22;
const TOTAL_SPREAD_S = 1.8;

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

function AsciiAvatar(): JSX.Element {
  const [name, setName] = useState<(typeof name_options)[number]>("Web2");
  const prefersReducedMotion = useMotionPreferences();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setName((prev) => {
        const i = name_options.indexOf(prev);
        return name_options[(i + 1) % name_options.length];
      });
    }, 2000);
    return () => clearInterval(t);
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
        style={{ overflow: "visible" }}
      >
        {ready && (
          <g>
            {avatarData.map((element) => (
              <AvatarChar
                key={`${element.x}-${element.y}`}
                element={element}
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
