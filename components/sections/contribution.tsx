"use client";

import { useState, useEffect, useMemo, JSX } from "react";
import {
  format,
  subDays,
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
} from "date-fns";
import axios from "axios";
import { motion } from "motion/react";

type ContributionItem = {
  date: string;
  count: number;
};

type CachedData = {
  contributions: ContributionItem[];
  timestamp: number;
};

const CACHE_KEY = "github_contributions_cache";
const CACHE_DURATION = 24 * 60 * 60 * 1000;
// Weeks will be computed for the current calendar year
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// Use the same yellow-400 hue with different opacities (400 is primary)
// rgb(250,204,21) is the hex #facc15 (Tailwind yellow-400)
const COLORS = [
  "rgba(250,204,21,0.06)",
  "rgba(250,204,21,0.25)",
  "rgba(250,204,21,0.5)",
  "rgba(250,204,21,0.8)",
  "rgba(250,204,21,1)",
];

const revealOnView = (delay = 0) => ({
  initial: {
    filter: "blur(3px)",
    opacity: 0,
    y: 5,
  },
  whileInView: {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
  },
  transition: {
    ease: "easeInOut" as const,
    delay,
  },
  viewport: { once: true, margin: "0px 0px -15% 0px" },
});

export default function Contribution(): JSX.Element {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const username = "iamnycx";

  const baseDate = useMemo(() => {
    // Anchor to the same UTC calendar day on server/client to prevent hydration mismatches.
    const [year, month, day] = new Date()
      .toISOString()
      .slice(0, 10)
      .split("-")
      .map(Number);
    return new Date(year ?? 1970, (month ?? 1) - 1, day ?? 1);
  }, []);

  // Show contributions for the current calendar year (Jan 1 -> Dec 31)
  const yearBounds = useMemo(() => {
    const year = baseDate.getFullYear();
    const yearStart = new Date(year, 0, 1);
    const yearEnd = new Date(year, 11, 31);
    return { year, yearStart, yearEnd };
  }, [baseDate]);

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const parsed: CachedData = JSON.parse(cachedData);
          const now = Date.now();

          if (now - parsed.timestamp < CACHE_DURATION) {
            setContributions(parsed.contributions);
            return;
          }
        }

        const res = await axios.get<{
          contributions: ContributionItem[];
        }>(`https://github-contributions-api.jogruber.de/v4/${username}`);

        const newContributions = res.data.contributions || [];
        setContributions(newContributions);

        const cacheData: CachedData = {
          contributions: newContributions,
          timestamp: Date.now(),
        };
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
      } catch (err) {
        console.error(err);

        const cachedData = localStorage.getItem(CACHE_KEY);
        if (cachedData) {
          const parsed: CachedData = JSON.parse(cachedData);
          setContributions(parsed.contributions);
        } else {
          setContributions([]);
        }
      }
    })();
  }, []);

  const getColor = (count: number): string => {
    if (count === 0) return COLORS[0];
    if (count === 1) return COLORS[1];
    if (count === 2) return COLORS[2];
    if (count === 3) return COLORS[3];
    return COLORS[4] || COLORS[COLORS.length - 1];
  };

  const contributionByDate = useMemo(() => {
    return new Map(contributions.map((item) => [item.date, item.count]));
  }, [contributions]);

  const weeksToRender = useMemo(() => {
    const { yearStart, yearEnd } = yearBounds;
    const weeks: Date[] = [];
    let weekStart = startOfWeek(yearStart, { weekStartsOn: 0 });
    while (weekStart <= yearEnd) {
      weeks.push(weekStart);
      weekStart = addDays(weekStart, 7);
    }
    return weeks;
  }, [yearBounds]);

  const monthLabels = useMemo(() => {
    const { year } = yearBounds;
    return Array.from({ length: 12 }, (_, index) => new Date(year, index, 1));
  }, [yearBounds]);

  const weeksGrid = useMemo(() => {
    return weeksToRender.map((weekStart) => {
      const weekDays = eachDayOfInterval({
        start: weekStart,
        end: endOfWeek(weekStart, { weekStartsOn: 0 }),
      });

      return (
        <div
          key={format(weekStart, "yyyy-MM-dd")}
          className="flex flex-col gap-1"
        >
          {weekDays.map((day) => {
            const dayKey = format(day, "yyyy-MM-dd");
            const contributionCount = contributionByDate.get(dayKey) ?? 0;
            const inRange =
              +day >= +yearBounds.yearStart && +day <= +yearBounds.yearEnd;

            return (
              <div
                key={dayKey}
                style={{
                  backgroundColor: inRange
                    ? getColor(contributionCount)
                    : "transparent",
                }}
                title={
                  inRange
                    ? `${format(day, "PPP")}: ${contributionCount} contributions`
                    : ""
                }
                className={`border-accent text-accent m-[0.15px] grid h-4 w-4 place-items-center rounded-xs border border-dashed text-[0.4rem] font-black ${inRange ? "" : "opacity-30"}`}
              >
                {inRange ? <p>{contributionCount}</p> : <span />}
              </div>
            );
          })}
        </div>
      );
    });
  }, [contributionByDate, weeksToRender]);

  return (
    <div className="space-y-8 px-4 py-16 md:px-6">
      <motion.p
        {...revealOnView(0)}
        className="text-muted-foreground pb-4 text-center"
      >
        made
        <span className="text-foreground">
          {" "}
          {contributions.reduce((sum, item) => sum + item.count, 0)}{" "}
          contributions{" "}
        </span>
        this year
      </motion.p>

      <motion.div
        {...revealOnView(0.4)}
        className="scroll-hide scrollbar-hide overflow-x-auto overflow-y-hidden"
        style={{}}
      >
        <div className="flex min-w-max">
          <div className="mt-5.5 mr-2 flex flex-col justify-between">
            {DAY_LABELS.map((day, index) => (
              <span
                key={index}
                className="h-3 text-xs text-yellow-400/80 dark:text-yellow-400/40"
              >
                {day}
              </span>
            ))}
          </div>
          <div className="flex w-full flex-col items-stretch">
            <div className="mb-2 flex w-full justify-between gap-4">
              {monthLabels.map((monthDate, index) => (
                <span
                  key={`${format(monthDate, "MMM")}-${index}`}
                  className="text-xs text-yellow-400/80 dark:text-yellow-400/40"
                >
                  {format(monthDate, "MMM")}
                </span>
              ))}
            </div>
            <div className="flex h-[8.5rem] gap-1">{weeksGrid}</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        {...revealOnView(0.2)}
        className="mx-auto flex w-fit items-center gap-2 pt-4"
      >
        <span className="text-sm text-yellow-400/80 dark:text-yellow-400/40">
          Less
        </span>
        {COLORS.map((color, index) => (
          <div
            key={index}
            className="border-accent grid h-4 w-4 place-items-center rounded-xs border border-dashed"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="text-sm text-yellow-400/80 dark:text-yellow-400/40">
          More
        </span>
      </motion.div>
    </div>
  );
}
