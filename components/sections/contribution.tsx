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
import axios from "axios";

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

export default function Contribution(): JSX.Element {
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const today = new Date();
  const startDate = subDays(today, 364);
  const weeks = 53;
  const colors = ["#1a1a1a", "#ffedd5", "#fed7aa", "#fb923c", "#ea580c"];
  const username = "iamnycx";

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
        <div key={i} className="flex flex-col gap-1">
          {weekDays.map((day, index) => {
            const contribution = contributions.find((c) =>
              isSameDay(new Date(c.date), day),
            );
            const color = contribution
              ? getColor(contribution.count)
              : colors[0];

            return (
              <div
                key={index}
                className="m-[0.15px] h-4 w-4 rounded-full"
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
        <span key={i} className="text-muted-foreground text-xs">
          {format(currentMonth, "MMM")}
        </span>,
      );
      currentMonth = addDays(currentMonth, 30);
    }
    return months;
  };

  const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-4 py-6 sm:space-y-8 sm:py-12">
      <div className="overflow-x-auto overflow-y-hidden">
        <div className="flex min-w-max">
          <div className="mt-5.5 mr-2 flex flex-col justify-between">
            {dayLabels.map((day, index) => (
              <span key={index} className="text-muted-foreground h-3 text-xs">
                {day}
              </span>
            ))}
          </div>
          <div className="flex w-full flex-col items-stretch">
            <div className="mb-2 flex w-full justify-between gap-4">
              {renderMonthLabels()}
            </div>
            <div className="flex h-[8.5rem] gap-1">{renderWeeks()}</div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-fit items-center gap-2 pt-4">
        <span className="text-sm">Less</span>
        {colors.map((color, index) => (
          <div
            key={index}
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="text-sm">More</span>
      </div>
    </div>
  );
}
