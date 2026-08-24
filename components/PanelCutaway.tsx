"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PanelCutaway() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = root.current;
      if (!svg || prefersReducedMotion()) return;
      const traces = svg.querySelectorAll<SVGGeometryElement>(".cut-trace");
      traces.forEach((path) => {
        try {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        } catch {
          /* ignore non-geometry */
        }
      });
      gsap.to(traces, {
        strokeDashoffset: 0,
        duration: 1.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: svg, start: "top 80%", once: true },
      });
    },
    { scope: root }
  );

  return (
    <svg ref={root} viewBox="0 0 720 520" className="h-full w-full" aria-hidden>
      <rect width="720" height="520" fill="var(--paper)" />
      <g fill="none" stroke="var(--ink)" strokeWidth="1.3">
        <rect className="cut-trace" x="90" y="70" width="520" height="380" />
        <rect className="cut-trace" x="118" y="96" width="180" height="140" />
        <text x="132" y="122" fill="var(--ink)" stroke="none" fontSize="13" fontFamily="Arial">
          1  PLC
        </text>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect
            key={i}
            className="cut-trace"
            x={132 + (i % 4) * 38}
            y={140 + Math.floor(i / 4) * 36}
            width="28"
            height="22"
          />
        ))}
        <rect className="cut-trace" x="330" y="96" width="240" height="140" />
        <text x="344" y="122" fill="var(--ink)" stroke="none" fontSize="13" fontFamily="Arial">
          2  BREAKERS
        </text>
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={`b${i}`} className="cut-trace" x={348 + i * 34} y="146" width="24" height="64" />
        ))}
        <rect className="cut-trace" x="118" y="270" width="452" height="140" />
        <text x="132" y="296" fill="var(--ink)" stroke="none" fontSize="13" fontFamily="Arial">
          3  TERMINALS
        </text>
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={`t${i}`} className="cut-trace" x={132 + i * 22} y="318" width="14" height="60" />
        ))}
        <path className="cut-trace" d="M208 236v34M450 236v34" />
      </g>
    </svg>
  );
}
