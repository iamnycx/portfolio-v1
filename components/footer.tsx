"use client";

import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

export default function Footer() {
  const date_of_deployment = new Date();
  const [uptime_days, setUptimeDays] = useState(0);

  useEffect(() => {
    const updateUptime = () => {
      setUptimeDays(differenceInDays(new Date(), date_of_deployment));
    };

    updateUptime(); // Initial update
    const interval = setInterval(updateUptime, 86400000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-dotted border-neutral-400 px-4 md:px-6">
        <div className="h-6 border-x border-t border-dotted border-neutral-600" />
      </div>
      <div className="mx-auto max-w-6xl border-x border-t border-dotted border-neutral-400 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-2 py-4 sm:flex-row sm:gap-0">
          <p className="text-neutral-400">
            <span>println!</span>
            <span>{"("}</span>
            <span className="text-neutral-500">{"'uptime: {}', "}</span>
            <span className="text-orange-200">{"uptime_in_days"}</span>
            <span>{");"}</span>
          </p>
          <p className="text-foreground">
            <span>uptime: </span>
            <span>{uptime_days}d</span>
          </p>
        </div>
      </div>
    </>
  );
}
