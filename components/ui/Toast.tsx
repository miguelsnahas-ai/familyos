"use client";

import { cn } from "@/lib/utils";

export function Toast({
  message,
  variant = "success",
  visible,
}: {
  message: string;
  variant?: "success" | "error";
  visible: boolean;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-field px-5 py-3 text-[14px] font-medium shadow-[var(--shadow-q-md)] transition-all duration-300",
        variant === "success" ? "bg-ink text-cream" : "bg-attention text-cream",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      {message}
    </div>
  );
}
