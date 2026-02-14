import posthog from "posthog-js";

if (typeof window !== "undefined") {
  window.addEventListener(
    "load",
    () => {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        defaults: "2025-11-30",
      });
    },
    { once: true },
  );
}
