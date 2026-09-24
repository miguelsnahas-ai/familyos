import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

// The Quintal Button — two shapes only, per the design system:
// - cta: the honey pill with an arrow. Use at most once per page,
//   for the page's next step.
// - peach | butter | sage: the two-line card button (uppercase
//   label + sentence-case sub), closing a tinted card.
type CommonProps = {
  variant?: "cta" | "peach" | "butter" | "sage";
  size?: "md" | "sm";
  sub?: ReactNode;
  block?: boolean;
  arrow?: boolean;
  loading?: boolean;
  className?: string;
  children?: ReactNode;
};

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    href?: undefined;
  };

type LinkProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

function Arrow({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-[22px] w-[22px]"}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function Button(props: ButtonProps | LinkProps) {
  const {
    variant = "cta",
    size = "md",
    sub,
    block,
    arrow = true,
    loading = false,
    className,
    children,
    href,
    ...rest
  } = props;

  const shared = cn(
    "font-sans text-ink border-0 cursor-pointer inline-flex flex-col items-center justify-center text-center no-underline transition-[filter] duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-50",
    variant === "cta"
      ? cn(
          "flex-row gap-4 rounded-pill bg-honey font-medium hover:brightness-[0.97]",
          size === "md" ? "px-6 py-3 text-[20px] leading-7" : "px-4 py-2 text-[14px] leading-5 gap-2",
        )
      : cn(
          "rounded-md px-4 py-3 min-w-[200px] hover:brightness-[0.98]",
          variant === "peach" && "bg-peach-200",
          variant === "butter" && "bg-butter",
          variant === "sage" && "bg-sage-200",
        ),
    block && "w-full box-border",
    className,
  );

  const content =
    variant === "cta" ? (
      <>
        <span>{children}</span>
        {loading ? (
          <span
            className="h-[18px] w-[18px] animate-spin rounded-full border-2 border-ink/30 border-t-ink"
            aria-hidden="true"
          />
        ) : (
          arrow && <Arrow className={size === "sm" ? "h-4 w-4" : undefined} />
        )}
      </>
    ) : (
      <>
        <span className="text-label font-bold uppercase tracking-[0.06em]">{children}</span>
        {sub && <span className="text-body-sm text-ink-body">{sub}</span>}
      </>
    );

  if (href) {
    return (
      <a href={href} className={shared} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={shared}
      disabled={(rest as ButtonHTMLAttributes<HTMLButtonElement>).disabled || loading}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
