"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVisitorCount() {
      try {
        const response = await fetch("/api/visitor-count?days=30");
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchVisitorCount();
    const interval = setInterval(fetchVisitorCount, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="mx-auto max-w-6xl border-x border-dotted border-neutral-400 px-4 md:px-6">
        <div className="h-6 border-x border-t border-dotted border-neutral-600" />
      </div>
      <div className="mx-auto max-w-6xl border-x border-t border-dotted border-neutral-400 px-2 md:px-6">
        <div className="flex min-w-0 flex-col items-center justify-between gap-2 overflow-hidden py-4 sm:flex-row sm:gap-0">
          <p className="shrink-0 text-neutral-400 md:mr-2">
            <span>println!</span>
            <span>{"("}</span>
            <span className="text-neutral-500">{"'{}', "}</span>
            <span className="text-orange-200">{"total_visitors"}</span>
            <span>{");"}</span>
          </p>

          <div className="flex w-full max-w-full min-w-0 flex-1 items-center overflow-hidden sm:w-auto">
            <div className="text-muted-foreground/30 min-w-0 flex-1 overflow-hidden whitespace-nowrap">
              ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
            </div>
            {loading ? (
              <span className="shrink-0 px-1 md:pl-2">***</span>
            ) : (
              <span className="shrink-0 px-1 md:pl-2">
                {visitorCount !== null ? visitorCount : "N/A"}
              </span>
            )}
            <div className="text-muted-foreground/30 min-w-0 flex-1 overflow-hidden whitespace-nowrap md:hidden">
              ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
