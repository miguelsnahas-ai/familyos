"use client";

import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

// Fires page_view once on mount, then scroll_50 / scroll_90 the first
// time the reader crosses those depths. Mounted once near the top of
// the page so every section below benefits without extra wiring.
export function AnalyticsEvents() {
  const fired = useRef({ scroll50: false, scroll90: false });

  useEffect(() => {
    track("page_view");

    function handleScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const depth = window.scrollY / scrollable;

      if (depth >= 0.5 && !fired.current.scroll50) {
        fired.current.scroll50 = true;
        track("scroll_50");
      }
      if (depth >= 0.9 && !fired.current.scroll90) {
        fired.current.scroll90 = true;
        track("scroll_90");
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
