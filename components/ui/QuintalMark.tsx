import Image from "next/image";

// The real Quintal logo lockups, cut from the brand's supplied logo
// sheet. `variant="wordmark"` (default) is the sun + wordmark without
// the tagline, for small sizes and footers. `variant="sun"` is the
// mark alone. `variant="reversed"` is the cream lockup for ink panels.
const SOURCES = {
  wordmark: { src: "/brand/quintal-wordmark.png", ratio: 662 / 359 },
  sun: { src: "/brand/quintal-sun.png", ratio: 319 / 185 },
  reversed: { src: "/brand/quintal-reversed.png", ratio: 651 / 413 },
} as const;

export function QuintalMark({
  height = 28,
  variant = "wordmark",
  className,
}: {
  height?: number;
  variant?: keyof typeof SOURCES;
  className?: string;
}) {
  const { src, ratio } = SOURCES[variant];
  return (
    <Image
      src={src}
      alt="Quintal"
      height={height}
      width={Math.round(height * ratio)}
      className={className}
      priority
    />
  );
}
