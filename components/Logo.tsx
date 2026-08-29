type LogoLockupProps = {
  className?: string;
  tone?: "onDark" | "onLight";
};

export function LogoBadge({ className = "h-[3.15rem] w-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 174"
      className={className}
      role="img"
      aria-label="ZBE Power Engineering"
    >
      <title>ZBE Power Engineering</title>
      <rect width="200" height="128" fill="var(--yellow)" />
      <rect y="128" width="200" height="46" fill="var(--mark)" />
      <rect
        x="0.5"
        y="0.5"
        width="199"
        height="173"
        fill="none"
        stroke="var(--black)"
        strokeWidth="1"
      />
      <text
        x="100"
        y="82"
        textAnchor="middle"
        fill="var(--mark)"
        fontFamily="var(--font-instrument), Arial, Helvetica, sans-serif"
        fontSize="54"
        fontWeight="700"
        letterSpacing="-2.2"
      >
        ZBE
      </text>
      <text
        x="100"
        y="157"
        textAnchor="middle"
        fill="var(--yellow)"
        fontFamily="var(--font-instrument), Arial, Helvetica, sans-serif"
        fontSize="14.5"
        fontWeight="500"
        letterSpacing="-0.15"
      >
        power engineering
      </text>
    </svg>
  );
}

export function LogoLockup({ className = "h-16 w-auto", tone = "onDark" }: LogoLockupProps) {
  const fill = tone === "onDark" ? "var(--mark)" : "var(--yellow)";

  return (
    <svg
      viewBox="0 0 460 100"
      className={className}
      role="img"
      aria-label="ZBE Power Engineering and Trading"
    >
      <title>ZBE Power Engineering and Trading</title>
      <path
        d="M6 42 H28 L34 42 L42 12 L54 72 L62 42 H86"
        fill="none"
        stroke={fill}
        strokeWidth="4"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
      <text
        x="102"
        y="50"
        fill={fill}
        fontFamily="var(--font-instrument), Arial, Helvetica, sans-serif"
        fontSize="44"
        fontWeight="700"
        letterSpacing="-1.8"
      >
        ZBE
      </text>
      <text
        x="102"
        y="72"
        fill={fill}
        fontFamily="var(--font-instrument), Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.35"
      >
        POWER ENGINEERING
      </text>
      <text
        x="171"
        y="88"
        textAnchor="middle"
        fill={fill}
        fontFamily="var(--font-instrument), Arial, Helvetica, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="1.35"
      >
        AND TRADING
      </text>
    </svg>
  );
}
