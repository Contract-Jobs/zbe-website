"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function HeroIllustration() {
  const root = useRef<SVGSVGElement>(null);

  useGSAP(
    () => {
      const switches = root.current?.querySelectorAll(".sw");
      if (!switches) return;
      gsap.fromTo(
        switches,
        { y: 0 },
        {
          y: (i) => (i % 2 === 0 ? 7 : -6),
          duration: 1.4,
          stagger: 0.18,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        }
      );
      gsap.fromTo(
        ".pulse",
        { opacity: 0.15 },
        { opacity: 0.7, duration: 1.6, yoyo: true, repeat: -1, ease: "sine.inOut" }
      );

      const traces = root.current?.querySelectorAll<SVGGeometryElement>(".rail");
      traces?.forEach((path) => {
        try {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        } catch {
          /* not a geometry node */
        }
      });
      if (traces?.length) {
        gsap.to(traces, {
          strokeDashoffset: 0,
          duration: 1.8,
          stagger: 0.05,
          ease: "power2.out",
        });
      }
    },
    { scope: root }
  );

  return (
    <svg
      ref={root}
      viewBox="0 0 980 520"
      className="h-full w-full"
      aria-hidden
    >
      <rect width="980" height="520" fill="var(--black)" />
      <g stroke="var(--white)" strokeOpacity="0.14" strokeWidth="1">
        {Array.from({ length: 18 }).map((_, i) => (
          <line key={`v${i}`} x1={40 + i * 52} y1="0" x2={40 + i * 52} y2="520" />
        ))}
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={20 + i * 52} x2="980" y2={20 + i * 52} />
        ))}
      </g>

      <g fill="none" stroke="var(--white)" strokeWidth="1.4">
        <rect className="rail" x="90" y="168" width="800" height="54" rx="2" />
        <rect x="90" y="168" width="800" height="10" fill="var(--raised)" stroke="none" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <g key={i} className="sw" style={{ transformOrigin: `${130 + i * 68}px 210px` }}>
            <rect className="rail" x={112 + i * 68} y="182" width="36" height="86" rx="2" />
            <rect x={118 + i * 68} y="190" width="24" height="38" fill="var(--yellow)" stroke="none" />
            <line x1={130 + i * 68} y1="268" x2={130 + i * 68} y2="318" />
          </g>
        ))}

        <rect x="140" y="330" width="220" height="110" />
        <text x="156" y="358" fill="var(--white)" stroke="none" fontSize="12" fontFamily="Arial">
          PLC
        </text>
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={`io${i}`} x={156 + (i % 4) * 48} y={372 + Math.floor(i / 4) * 28} width="36" height="18" />
        ))}

        <rect x="400" y="330" width="180" height="110" />
        <text x="416" y="358" fill="var(--white)" stroke="none" fontSize="12" fontFamily="Arial">
          I/O
        </text>
        {Array.from({ length: 6 }).map((_, i) => (
          <circle key={`t${i}`} className="pulse" cx={430 + (i % 3) * 44} cy={392 + Math.floor(i / 3) * 28} r="6" fill="var(--yellow)" stroke="none" />
        ))}

        <rect x="620" y="330" width="230" height="110" />
        <text x="636" y="358" fill="var(--white)" stroke="none" fontSize="12" fontFamily="Arial">
          DRIVES
        </text>
        <path d="M650 400h170" />
        <path d="M650 422h120" />
        <rect x="650" y="378" width="48" height="48" />
        <rect x="712" y="378" width="48" height="48" />
      </g>
    </svg>
  );
}
