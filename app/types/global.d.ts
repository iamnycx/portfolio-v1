import type { PostHog } from "posthog-node";

declare global {
  var posthogClient: PostHog | undefined;
}

export {};
