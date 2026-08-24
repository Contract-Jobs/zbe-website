"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set(root.current, { autoAlpha: 0 });
        setGone(true);
        return;
      }

      const layers = root.current?.querySelectorAll("[data-loader='layer']");
      if (!layers) return;

      gsap.to(layers, {
        yPercent: -101,
        duration: 1.8,
        stagger: { each: 0.15, from: "end" },
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: () => setGone(true),
      });
    },
    { scope: root }
  );

  if (gone) return null;

  return (
    <div
      ref={root}
      data-loader="wrapper"
      className="pointer-events-none fixed inset-0 z-[80] overflow-hidden"
      aria-hidden
    >
      <div data-loader="layer" className="absolute inset-0 bg-white" />
      <div data-loader="layer" className="absolute inset-0 bg-paper" />
      <div data-loader="layer" className="absolute inset-0 bg-yellow" />
      <div data-loader="layer" className="absolute inset-0 flex items-center justify-center bg-white">
        <div className="loader-grid relative h-28 w-28">
          <div className="absolute inset-3 border border-black/20" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 bg-yellow" />
        </div>
      </div>
    </div>
  );
}
