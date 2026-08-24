"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [gone, setGone] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const hide = window.setTimeout(() => setHiding(true), 900);
    const remove = window.setTimeout(() => setGone(true), 1400);
    return () => {
      window.clearTimeout(hide);
      window.clearTimeout(remove);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-white transition-opacity duration-500"
      style={{ opacity: hiding ? 0 : 1, pointerEvents: hiding ? "none" : "auto" }}
      aria-hidden
    >
      <div className="loader-grid relative h-28 w-28">
        <div className="absolute inset-3 border border-black/20" />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-yellow" />
      </div>
    </div>
  );
}
