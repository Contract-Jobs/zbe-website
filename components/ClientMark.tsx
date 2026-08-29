import { trust } from "@/lib/content";

type Mark = (typeof trust.marks)[number];

export function ClientMark({
  mark,
  tone = "ink",
}: {
  mark: Mark;
  tone?: "ink" | "paper";
}) {
  const plate =
    tone === "paper"
      ? "border-white/25 text-white/90"
      : "border-black/20 text-black/80";
  const word = tone === "paper" ? "text-white/90" : "text-black/80";
  const line = tone === "paper" ? "text-white/45" : "text-black/45";

  return (
    <span className={`flex items-center gap-3 ${word}`} aria-label={mark.name}>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center border text-[0.8rem] font-semibold tracking-tight ${plate}`}
      >
        {mark.initials}
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.92rem] font-semibold tracking-[0.14em]">
          {mark.word}
        </span>
        {mark.line ? (
          <span className={`mt-1 text-[0.58rem] tracking-[0.22em] ${line}`}>
            {mark.line}
          </span>
        ) : null}
      </span>
    </span>
  );
}
