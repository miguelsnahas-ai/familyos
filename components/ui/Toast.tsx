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
      role={variant === "error" ? "alert" : "status"}
      aria-live={variant === "error" ? "assertive" : "polite"}
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md px-5 py-3 text-[14px] font-medium transition-all duration-300",
        variant === "success" ? "bg-ink text-cream" : "bg-error text-cream",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
      )}
    >
      {message}
    </div>
  );
}
