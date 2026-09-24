import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

// A small uppercase chip naming a value or theme. Not interactive —
// group two to four under a hero paragraph or list of roles.
export function Tag({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-block rounded-pill bg-sage-150 px-4 py-1.5 text-label font-bold uppercase tracking-[0.06em] text-ink",
        className,
      )}
      {...props}
    />
  );
}
