"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP);

const traces = [
  "M60 70h1480",
  "M60 70v760",
  "M1540 70v760",
  "M60 830h1480",
  "M220 70v110",
  "M420 70v70",
  "M640 70v150",
  "M880 70v90",
  "M1120 70v140",
  "M1340 70v80",
  "M220 180h200",
  "M640 220h240",
  "M1120 210h220",
  "M60 260h280",
  "M340 260v180",
  "M340 440h180",
  "M520 360v80",
  "M520 360h160",
  "M680 360v200",
  "M680 560h300",
  "M980 440v120",
  "M980 440h220",
  "M1200 280v160",
  "M1200 280h180",
  "M1380 280v200",
  "M1540 480h-160",
  "M60 620h200",
  "M260 520v100",
  "M260 520h200",
  "M880 180v120",
  "M760 300h120",
  "M420 140h140",
  "M1340 150h200",
];

const boxes: Array<[number, number, number, number, string]> = [
  [240, 200, 150, 90, "PLC"],
  [700, 240, 160, 80, "I/O"],
  [1180, 230, 170, 86, "DRIVES"],
  [360, 460, 140, 86, "MCB"],
  [1000, 470, 150, 80, "ICT"],
  [1280, 500, 140, 90, "DIN"],
];

const nodes: Array<[number, number]> = [
  [220, 180],
  [420, 140],
  [640, 220],
  [880, 180],
  [1120, 210],
  [1340, 150],
  [340, 260],
  [340, 440],
  [520, 360],
  [680, 360],
  [680, 560],
  [980, 440],
  [1200, 280],
  [1380, 280],
  [260, 520],
  [980, 560],
  [1540, 480],
];

export function AboutSchematic() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const svg = root.current;
      if (!svg) return;
      const paths = svg.querySelectorAll<SVGPathElement>(".trace");
      const dots = svg.querySelectorAll(".node");
      const frames = svg.querySelectorAll(".frame");
      const labels = svg.querySelectorAll(".cad-label");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      if (prefersReducedMotion()) {
        gsap.set([paths, dots, frames, labels], { opacity: 1, strokeDashoffset: 0 });
        return;
      }

      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.4 });

      tl.fromTo(
        frames,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, stagger: 0.12, ease: "power2.out" },
        0
      );

      tl.to(
        paths,
        {
          strokeDashoffset: 0,
          duration: 1.15,
          stagger: 0.08,
          ease: "power2.inOut",
        },
        0.15
      );

      tl.fromTo(
        dots,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
        },
        1.2
      );

      tl.fromTo(
        labels,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, stagger: 0.08 },
        1.6
      );

      tl.to(
        dots,
        {
          opacity: 0.25,
          duration: 0.9,
          yoyo: true,
          repeat: 5,
          stagger: { each: 0.08, repeat: 5, yoyo: true },
          ease: "sine.inOut",
        },
        2.2
      );

      tl.to(".scan", {
        x: 1480,
        duration: 3.2,
        ease: "none",
        repeat: 1,
        yoyo: true,
      }, 2.4);

      tl.to(paths, { opacity: 0.35, duration: 0.8 }, 9.4);
      tl.to(
        paths,
        { strokeDashoffset: (_i, target) => (target as SVGPathElement).getTotalLength(), duration: 0.9, ease: "power2.in" },
        10.2
      );
      tl.set(paths, { opacity: 1, strokeDashoffset: (_i, target) => (target as SVGPathElement).getTotalLength() });
      tl.set([dots, labels], { opacity: 0 });
    },
    { scope: root }
  );

  return (
    <svg
      ref={root}
      viewBox="0 0 1600 900"
      className="h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="1600" height="900" fill="var(--black)" />
      <g stroke="var(--white)" strokeOpacity="0.08" strokeWidth="1">
        {Array.from({ length: 21 }).map((_, i) => (
          <line key={`v${i}`} x1={40 + i * 76} y1="20" x2={40 + i * 76} y2="880" />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`h${i}`} x1="20" y1={40 + i * 72} x2="1580" y2={40 + i * 72} />
        ))}
      </g>

      <g className="frame" fill="none" stroke="var(--yellow)" strokeWidth="1.6">
        <rect x="90" y="110" width="620" height="310" rx="6" />
        <rect x="890" y="150" width="560" height="290" rx="6" />
      </g>

      <g fill="none" stroke="var(--yellow)" strokeWidth="1.35" strokeLinecap="square">
        {traces.map((d) => (
          <path key={d} className="trace" d={d} />
        ))}
      </g>

      {boxes.map(([x, y, w, h, label]) => (
        <g key={label} className="cad-label" opacity={0}>
          <rect x={x} y={y} width={w} height={h} fill="none" stroke="var(--yellow)" strokeWidth="1.2" />
          <text
            x={x + 14}
            y={y + 28}
            fill="var(--yellow)"
            fontSize="13"
            fontFamily="Arial, sans-serif"
          >
            {label}
          </text>
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={i}
              x={x + 14 + (i % 3) * 42}
              y={y + 42 + Math.floor(i / 3) * 18}
              width="28"
              height="12"
              fill="none"
              stroke="var(--yellow)"
              strokeOpacity="0.7"
            />
          ))}
        </g>
      ))}

      {nodes.map(([cx, cy], i) => (
        <circle
          key={`${cx}-${cy}-${i}`}
          className="node"
          cx={cx}
          cy={cy}
          r="4"
          fill="var(--yellow)"
          opacity={0}
        />
      ))}

      <text x="108" y="138" fill="var(--yellow)" fontSize="14" fontFamily="Arial, sans-serif" className="cad-label" opacity={0}>
        01
      </text>
      <text x="1420" y="178" fill="var(--yellow)" fontSize="14" fontFamily="Arial, sans-serif" className="cad-label" opacity={0}>
        02
      </text>
      <text x="108" y="780" fill="var(--yellow)" fontSize="14" fontFamily="Arial, sans-serif" className="cad-label" opacity={0}>
        03
      </text>
      <text x="1420" y="780" fill="var(--yellow)" fontSize="14" fontFamily="Arial, sans-serif" className="cad-label" opacity={0}>
        04
      </text>

      <rect className="scan" x="60" y="70" width="2" height="760" fill="var(--yellow)" opacity="0.35" />
    </svg>
  );
}
