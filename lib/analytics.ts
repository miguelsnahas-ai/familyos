"use client";

import { track as vercelTrack } from "@vercel/analytics";

type EventName =
  | "page_view"
  | "scroll_50"
  | "scroll_90"
  | "pilar_click"
  | "waitlist_start"
  | "waitlist_submit_success"
  | "family_setup_interest";

type EventProps = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: EventProps }) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Fan-out a single event call to every analytics provider wired up on the
// page (Vercel Analytics + Plausible + Meta Pixel). Any provider that
// isn't configured just no-ops.
export function track(event: EventName, props?: EventProps) {
  try {
    vercelTrack(event, props);
  } catch {
    // Vercel Analytics not initialized (e.g. local dev) — ignore.
  }

  if (typeof window !== "undefined") {
    window.plausible?.(event, props ? { props } : undefined);
    window.fbq?.("trackCustom", event, props);
  }
}
