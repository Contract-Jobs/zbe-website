export function PanelCutaway() {
  return (
    <svg viewBox="0 0 720 520" className="h-full w-full" aria-hidden>
      <rect width="720" height="520" fill="#fffce0" />
      <g fill="none" stroke="#252324" strokeWidth="1.3">
        <rect x="90" y="70" width="520" height="380" />
        <rect x="118" y="96" width="180" height="140" />
        <text x="132" y="122" fill="#252324" stroke="none" fontSize="13" fontFamily="Arial">
          1  PLC
        </text>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            x={132 + (i % 4) * 38}
            y={140 + Math.floor(i / 4) * 36}
            width="28"
            height="22"
          />
        ))}
        <rect x="330" y="96" width="240" height="140" />
        <text x="344" y="122" fill="#252324" stroke="none" fontSize="13" fontFamily="Arial">
          2  BREAKERS
        </text>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={`b${i}`} x={348 + i * 34} y="146" width="24" height="64" />
        ))}
        <rect x="118" y="270" width="452" height="140" />
        <text x="132" y="296" fill="#252324" stroke="none" fontSize="13" fontFamily="Arial">
          3  TERMINALS
        </text>
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={`t${i}`} x={132 + i * 22} y="318" width="14" height="60" />
        ))}
        <path d="M208 236v34M450 236v34" />
      </g>
    </svg>
  );
}
