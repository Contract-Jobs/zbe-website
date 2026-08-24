"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

export function SchematicGrid({ variant = 0 }: { variant?: number }) {
  const root = useRef<SVGSVGElement>(null);
  const offset = variant * 40;

  useGSAP(
    () => {
      const svg = root.current;
      if (!svg || prefersReducedMotion()) return;
      const paths = svg.querySelectorAll<SVGPathElement>(".g-trace");
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });
      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.8,
        stagger: 0.12,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.6,
      });
      gsap.to(".g-node", {
        opacity: 0.2,
        duration: 1.1,
        yoyo: true,
        repeat: -1,
        stagger: 0.15,
        ease: "sine.inOut",
      });
    },
    { scope: root }
  );

  return (
    <svg ref={root} viewBox="0 0 640 420" className="h-full w-full" aria-hidden>
      <rect width="640" height="420" fill="#1a1a1a" />
      <g stroke="#fefbf6" strokeOpacity="0.1" strokeWidth="1">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={20 + i * 54} y1="10" x2={20 + i * 54} y2="410" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="10" y1={20 + i * 50} x2="630" y2={20 + i * 50} />
        ))}
      </g>
      <g fill="none" stroke="#ffec88" strokeWidth="1.3">
        <path className="g-trace" d={`M40 ${80 + offset}h220v120h160`} />
        <path className="g-trace" d={`M560 ${60 + (offset % 30)}v180h-200`} />
        <path className="g-trace" d="M80 300h180v60h200" />
        <path className="g-trace" d="M320 40v90h180" />
        <rect className="g-trace" x="230" y="150" width="140" height="90" />
      </g>
      <circle className="g-node" cx="260" cy="80" r="4" fill="#ffec88" />
      <circle className="g-node" cx="500" cy="240" r="4" fill="#ffec88" />
      <circle className="g-node" cx="260" cy="300" r="4" fill="#ffec88" />
    </svg>
  );
}
