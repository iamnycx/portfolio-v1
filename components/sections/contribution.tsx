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
const WEEKS = 53;
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const COLORS = ["#1a1a1a55", "#ecfccb", "#d9f99d", "#a3e635", "#65a30d"];

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
  viewport: { once: true, margin: "0px" },
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

  const startDate = useMemo(() => subDays(baseDate, 364), [baseDate]);

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
    const firstWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });
    return Array.from({ length: WEEKS }, (_, weekIndex) =>
      addDays(firstWeekStart, weekIndex * 7),
    );
  }, [startDate]);

  const monthLabels = useMemo(() => {
    return Array.from({ length: 12 }, (_, index) =>
      addDays(startDate, index * 30),
    );
  }, [startDate]);

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

            return (
              <div
                key={dayKey}
                className="m-[0.15px] h-4 w-4 rounded-full"
                style={{ backgroundColor: getColor(contributionCount) }}
                title={`${format(day, "PPP")}: ${contributionCount} contributions`}
              />
            );
          })}
        </div>
      );
    });
  }, [contributionByDate, weeksToRender]);

  return (
    <div className="space-y-4 py-6 sm:space-y-8 sm:py-12">
      <motion.div
        {...revealOnView(0)}
        className="overflow-x-auto overflow-y-hidden"
      >
        <div className="flex min-w-max">
          <div className="mt-5.5 mr-2 flex flex-col justify-between">
            {DAY_LABELS.map((day, index) => (
              <span
                key={index}
                className="h-3 text-xs text-lime-700/80 dark:text-lime-300/80"
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
                  className="text-xs text-lime-700/80 dark:text-lime-300/80"
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
        {...revealOnView(0.15)}
        className="mx-auto flex w-fit items-center gap-2 pt-4"
      >
        <span className="text-sm text-lime-700 dark:text-lime-300">Less</span>
        {COLORS.map((color, index) => (
          <div
            key={index}
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="text-sm text-lime-700 dark:text-lime-300">More</span>
      </motion.div>
    </div>
  );
}
