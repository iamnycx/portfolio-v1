"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitors")
      .then((res) => res.json())
      .then((data) => setVisitorCount(data.total));
  }, []);

  return (
    <div className="border-accent-foreground relative mx-auto max-w-6xl border-t border-dotted px-2 md:border-x md:px-6">
      <div className="flex min-w-0 flex-col items-center justify-between gap-2 overflow-hidden py-4 sm:flex-row sm:gap-0">
        <p className="border-accent-foreground shrink-0 md:mr-2">
          <span>api</span>
          <span className="text-muted-foreground">.fetch_data</span>
          <span>{"("}</span>
          <span className="text-orange-200">{"total_visitors"}</span>
          <span>{");"}</span>
        </p>

        <div className="flex w-full max-w-full min-w-0 flex-1 items-center overflow-hidden sm:w-auto">
          <div className="text-accent min-w-0 flex-1 overflow-hidden tracking-widest whitespace-nowrap">
            ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          </div>
          {visitorCount === null ? (
            <span className="shrink-0 px-1 md:pl-2">null</span>
          ) : (
            <span className="shrink-0 px-1 md:pl-2">
              {visitorCount !== null ? visitorCount : "null"}
            </span>
          )}
          <div className="text-accent min-w-0 flex-1 overflow-hidden tracking-widest whitespace-nowrap md:hidden">
            ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
          </div>
        </div>
      </div>
    </div>
  );
}
