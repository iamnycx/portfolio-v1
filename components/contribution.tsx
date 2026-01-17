"use client";

import { useState, useEffect, JSX } from "react";
import {
  format,
  subDays,
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import { TextScramble } from "./text-scramble";
import axios from "axios";
import { motion } from "motion/react";

type ContributionItem = {
  date: string;
  count: number;
};

export default function Contribution(): JSX.Element {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const today = new Date();
  const startDate = subDays(today, 364);
  const weeks = 53;
  const colors = [
    "#262626", // neutral-800 (keep as-is)
    "#ffedd5", // orange-100
    "#fed7aa", // orange-200
    "#fb923c", // orange-400
    "#ea580c", // orange-600
  ];
  const username = "iamnycx";

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const res = await axios.get<{
          contributions: ContributionItem[];
        }>(`https://github-contributions-api.jogruber.de/v4/${username}`);

        setContributions(res.data.contributions || []);
      } catch (err) {
        console.error(err);
        setContributions([]);
      }
    })();
  }, []);

  const getColor = (count: number): string => {
    if (count === 0) return colors[0];
    if (count === 1) return colors[1];
    if (count === 2) return colors[2];
    if (count === 3) return colors[3];
    return colors[4] || colors[colors.length - 1];
  };

  const renderWeeks = (): JSX.Element[] => {
    const weeksArray = [];
    let currentWeekStart = startOfWeek(startDate, { weekStartsOn: 0 });

    for (let i = 0; i < weeks; i++) {
      const weekDays = eachDayOfInterval({
        start: currentWeekStart,
        end: endOfWeek(currentWeekStart, { weekStartsOn: 0 }),
      });

      weeksArray.push(
        <div key={i} className="flex flex-col gap-2">
          {weekDays.map((day, index) => {
            const contribution = contributions.find((c) =>
              isSameDay(new Date(c.date), day),
            );
            const color = contribution
              ? getColor(contribution.count)
              : colors[0];

            return (
              <motion.div
                initial={{
                  backgroundColor: "#262626",
                  opacity: 0.2,
                }}
                animate={{
                  backgroundColor: color,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.1 * index + 1,
                }}
                key={index}
                className={`m-[0.15px] h-2 w-2 rounded-full sm:h-3 sm:w-3 md:h-4 md:w-4`}
                style={{ backgroundColor: color }}
                title={`${format(day, "PPP")}: ${
                  contribution?.count || 0
                } contributions`}
              />
            );
          })}
        </div>,
      );
      currentWeekStart = addDays(currentWeekStart, 7);
    }

    return weeksArray;
  };

  const renderMonthLabels = (): JSX.Element[] => {
    const months = [];
    let currentMonth = startDate;

    for (let i = 0; i < 12; i++) {
      months.push(
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.05 * i,
            duration: 0.3,
            ease: "easeInOut",
          }}
          key={i}
          className="text-xs text-neutral-400"
        >
          {format(currentMonth, "MMM")}
        </motion.span>,
      );
      currentMonth = addDays(currentMonth, 30);
    }
    return months;
  };

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-4 py-6 sm:space-y-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-lg font-bold tracking-tight sm:text-xl">
          <TextScramble>contributions</TextScramble>
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-sm">less</span>
          {colors.map((color, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.1 * index,
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={index}
              className="h-2 w-2 rounded-full sm:h-3 sm:w-3"
              style={{ backgroundColor: color }}
            />
          ))}
          <span className="text-sm">more</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex min-w-max">
          <div className="mt-3 mr-1 flex flex-col justify-between sm:mt-5.5 sm:mr-2">
            {dayLabels.map((day, index) => (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.1 * index,
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
                key={index}
                className="h-2 text-xs text-neutral-400 lowercase sm:h-3"
              >
                {day}
              </motion.span>
            ))}
          </div>
          <div className="flex w-full flex-col items-stretch">
            <div className="mb-1 flex w-full justify-between gap-2 lowercase sm:mb-2 sm:gap-4">
              {renderMonthLabels()}
            </div>
            <div className="flex gap-0.5 sm:gap-1">{renderWeeks()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
