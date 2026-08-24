"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { about } from "@/lib/content";
import { prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const traces = [
  "M120 80h1470",
  "M120 80v1860",
  "M1590 80v1860",
  "M120 1940h1470",
  "M120 80v433",
  "M559 513h-439",
  "M559 513v479",
  "M120 992h439",
  "M339 992v241",
  "M120 1233h439",
  "M559 1233v479",
  "M120 1712h439",
  "M1039 753h440",
  "M1479 753v479",
  "M1039 1232h440",
  "M1259 513v240",
  "M1039 1473h440",
  "M1479 1473v479",
  "M1039 1952h440",
  "M559 753h480",
  "M1039 992h-480",
  "M559 1473h480",
];

export function ValuesDraw() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const svg = root.current?.querySelector("svg");
      if (!svg) return;
      const paths = svg.querySelectorAll<SVGPathElement>(".v-trace");
      const cards = root.current?.querySelectorAll(".value-card");
      const numbers = svg.querySelectorAll(".v-num");

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      });

      if (prefersReducedMotion()) {
        gsap.set(paths, { strokeDashoffset: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: "top 72%",
          end: "bottom 55%",
          scrub: 0.7,
        },
      });

      tl.to(paths, {
        strokeDashoffset: 0,
        stagger: 0.06,
        ease: "none",
      });

      if (cards) {
        tl.fromTo(
          cards,
          { borderColor: "rgba(83,83,83,1)", color: "rgba(254,251,246,0.4)" },
          {
            borderColor: "rgba(255,236,136,1)",
            color: "rgba(254,251,246,1)",
            stagger: 0.2,
            ease: "none",
          },
          0.15
        );
      }

      tl.fromTo(
        numbers,
        { fill: "#535353" },
        { fill: "#FFEC88", stagger: 0.2, ease: "none" },
        0.1
      );
    },
    { scope: root }
  );

  return (
    <section ref={root} data-overlap="scale" className="relative origin-bottom overflow-hidden bg-black text-white">
      <div className="site-grid py-20 lg:py-28">
        <p className="kicker text-white/70" data-sa="block">
          Our values
        </p>
        <h2 className="display-md mt-6 max-w-3xl text-white" data-sa="lines">
          How we show up on every job.
        </h2>
      </div>

        <div className="relative mx-auto w-[min(85rem,calc(100%-1.5rem))] pb-24">
        <svg
          viewBox="0 0 1711 1953"
          className="hidden w-full lg:block"
          aria-hidden
        >
          <rect width="1711" height="1953" fill="#1a1a1a" />
          <g fill="none" stroke="#535353" strokeWidth="2">
            <rect x="119.5" y="513.5" width="439" height="479" />
            <rect x="1039.5" y="753.5" width="439" height="479" />
            <rect x="119.5" y="1233.5" width="439" height="479" />
            <rect x="1039.5" y="1473.5" width="439" height="479" />
          </g>
          <g fill="none" stroke="#FFEC88" strokeWidth="2" strokeLinecap="square">
            {traces.map((d) => (
              <path key={d} className="v-trace" d={d} />
            ))}
          </g>
          <text className="v-num" x="140" y="500" fill="#535353" fontSize="28" fontFamily="Arial, sans-serif">
            01
          </text>
          <text className="v-num" x="1510" y="740" fill="#535353" fontSize="28" fontFamily="Arial, sans-serif">
            02
          </text>
          <text className="v-num" x="140" y="1220" fill="#535353" fontSize="28" fontFamily="Arial, sans-serif">
            03
          </text>
          <text className="v-num" x="1510" y="1460" fill="#535353" fontSize="28" fontFamily="Arial, sans-serif">
            04
          </text>
        </svg>

        <div className="grid gap-8 sm:grid-cols-2 lg:absolute lg:inset-0 lg:block">
          {about.values.map((value, index) => {
            const posClass = [
              "lg:top-[26.3%] lg:left-[7%]",
              "lg:top-[38.6%] lg:left-[60.7%]",
              "lg:top-[63.2%] lg:left-[7%]",
              "lg:top-[75.4%] lg:left-[60.7%]",
            ][index];
            return (
              <article
                key={value.title}
                className={`value-card border border-white/20 p-8 lg:absolute lg:h-[24.5%] lg:w-[25.7%] lg:border-transparent lg:p-10 ${posClass}`}
              >
                <p className="font-medium text-yellow">0{index + 1}</p>
                <h3 className="mt-4 text-2xl tracking-tight lg:text-3xl">{value.title}</h3>
                <p className="mt-3 max-w-sm text-white/70">{value.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
