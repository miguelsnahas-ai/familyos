// The Quintal mark — a portal com sol: the gateway into the backyard,
// with the sun that's always there. Two shapes only, no illustration.
// `variant="dark"` (default) is the plum square for peach surfaces;
// `variant="light"` is the butter square for dark surfaces.
export function QuintalMark({
  size = 32,
  variant = "dark",
  className,
}: {
  size?: number;
  variant?: "dark" | "light";
  className?: string;
}) {
  const bg = variant === "dark" ? "#3A2C43" : "#FBD87F";
  const arch = variant === "dark" ? "#FDF2EC" : "#3A2C43";
  const sun = variant === "dark" ? "#FBD87F" : "#FBD87F";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Quintal"
      className={className}
    >
      <rect width="64" height="64" rx="18" fill={bg} />
      <path d="M20 50V32a12 12 0 0 1 24 0v18z" fill={arch} />
      {variant === "dark" && <circle cx="32" cy="30" r="7" fill={sun} />}
    </svg>
  );
}
