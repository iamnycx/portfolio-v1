"use client";

import posthog from "posthog-js";
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !initialized.current) {
      const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
      const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

      if (posthogKey && posthogHost) {
        try {
          posthog.init(posthogKey, {
            api_host: posthogHost,
            disableRemoteConfig: true,
            loaded: (posthog: any) => {
              if (process.env.NODE_ENV === "development") {
                posthog.debug();
              }
            },
            capture_pageview: false,
            capture_pageleave: true,
          } as any);
          initialized.current = true;
        } catch (error) {
          console.error("[PostHog] Initialization error:", error);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (pathname && typeof window !== "undefined" && initialized.current) {
      let url = window.origin + pathname;
      if (searchParams && searchParams.toString()) {
        url = url + `?${searchParams.toString()}`;
      }
      posthog.capture("$pageview", {
        $current_url: url,
      });
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
