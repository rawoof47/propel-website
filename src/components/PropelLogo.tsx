type Props = { className?: string; color?: string };

export function PropelLogo({
  className = "h-7",
  color = "currentColor",
}: Props) {
  return (
    <div
      className={`inline-flex flex-col items-start ${className}`}
      style={{ color }}
    >
      {/* Logo */}
      <div className="inline-flex items-start gap-1 font-display font-bold">
        <span className="text-[1.4em] leading-none tracking-tight">
          Propel Strategies
        </span>

        <svg
          viewBox="0 0 24 24"
          className="h-[0.75em] w-[0.75em] -mt-[0.15em] self-start"
          fill="none"
          stroke={color}
          strokeWidth="3.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          aria-hidden="true"
        >
          <path d="M6 18 L18 6" />
          <path d="M9 6 H18 V15" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="mt-1 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        <span className="inline-block size-1.5 rounded-full bg-[var(--orange)]" />
        <span>Business Growth & Development</span>
      </div>
    </div>
  );
}
