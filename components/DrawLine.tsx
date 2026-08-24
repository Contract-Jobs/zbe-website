export function DrawLine({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      data-animate-line
      className={`h-px w-full ${light ? "bg-white/20" : "bg-black/20"} ${className}`}
    />
  );
}
