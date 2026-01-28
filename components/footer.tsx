"use client";

import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

export default function Footer() {
  const date_of_deployment = new Date();
  const [uptime_days, setUptimeDays] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setUptimeDays(differenceInDays(new Date(), date_of_deployment));
    }, 86400000);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-dotted border-neutral-400 px-4 md:px-6">
        <div className="h-6 border-x border-t border-dotted border-neutral-600" />
      </div>
      <div className="mx-auto max-w-6xl border-x border-t border-dotted border-neutral-400 px-4 text-sm md:px-6 md:text-base">
        <div className="flex flex-col items-center justify-between space-y-1 py-4 md:flex-row">
          <p className="text-secondary">
            <span>println!</span>
            <span>{"("}</span>
            <span className="text-muted-foreground">{"'uptime: {}', "}</span>
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
