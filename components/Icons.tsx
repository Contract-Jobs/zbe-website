export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 13L13 3M13 3H5.5M13 3V10.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function MenuIcon() {
  return (
    <svg className="h-4 w-5" viewBox="0 0 20 12" fill="none" aria-hidden>
      <path d="M0 1h20M0 6h20M0 11h20" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span
      className="block font-medium leading-none"
      style={{
        color: light ? "#fefbf6" : "#111111",
        fontSize: "1.55rem",
        letterSpacing: "-0.055em",
      }}
    >
      ZBE
    </span>
  );
}

export function DiodeIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" fill="none" aria-hidden>
      <path d="M18 40h16M46 22l22 18-22 18V22Z" stroke="#ffec88" strokeWidth="2" />
      <path d="M46 22v36" stroke="#ffec88" strokeWidth="2" />
    </svg>
  );
}

export function ResistorIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" fill="none" aria-hidden>
      <path
        d="M8 40h14l6-12 8 24 8-24 8 24 8-24 6 12h14"
        stroke="#ffec88"
        strokeWidth="2"
      />
    </svg>
  );
}

export function CapacitorIcon() {
  return (
    <svg viewBox="0 0 80 80" className="h-16 w-16" fill="none" aria-hidden>
      <path d="M10 40h24M46 40h24M34 18v44M46 18v44" stroke="#ffec88" strokeWidth="2" />
    </svg>
  );
}

export function StepIcon({ kind }: { kind: "intake" | "design" | "ship" }) {
  if (kind === "intake") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  }
  if (kind === "design") {
    return (
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
        <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M16 5v4M16 23v4M5 16h4M23 16h4M8.5 8.5l2.8 2.8M20.7 20.7l2.8 2.8M23.5 8.5l-2.8 2.8M11.3 20.7l-2.8 2.8"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11 11l10 10M21 11L11 21" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
