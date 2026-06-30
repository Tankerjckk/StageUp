"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const thresholds = [25, 50, 75, 90];

export function useScrollTracking() {
  const tracked = useRef<Set<number>>(new Set());

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      thresholds.forEach((threshold) => {
        if (percent >= threshold && !tracked.current.has(threshold)) {
          tracked.current.add(threshold);

          trackEvent(`scroll_${threshold}`, {
            scroll_depth: threshold,
          });
        }
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}