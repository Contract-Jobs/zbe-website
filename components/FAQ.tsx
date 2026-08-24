"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState(0);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);

  const toggle = (i: number) => {
    const next = open === i ? -1 : i;
    itemsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.to(el, {
        height: index === next ? "auto" : 0,
        duration: 0.45,
        ease: "power3.inOut",
        overflow: "hidden",
      });
    });
    setOpen(next);
  };

  return (
    <section className="bg-white pb-28">
      <div className="site-grid grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="kicker" data-sa="block">
            {faqs.label}
          </p>
          <h2 className="display-md mt-6 max-w-sm" data-sa="lines">
            {faqs.headline}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3">
            <div data-clippath-cover className="relative aspect-[4/5] overflow-hidden bg-grey-150">
              <Image
                src="/images/work/panel-3.jpg"
                alt="ZBE technician inspecting wiring inside an open control panel."
                fill
                sizes="(min-width: 1024px) 20vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-paper">
              <PanelMini />
            </div>
          </div>
        </div>

        <div className="border-t border-black/15">
          {faqs.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-black/15">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-5 text-left text-[1.15rem] tracking-tight"
                  aria-expanded={isOpen}
                  onClick={() => toggle(i)}
                >
                  {item.q}
                  <span className="text-xl leading-none">{isOpen ? "–" : "+"}</span>
                </button>
                <div
                  ref={(el) => {
                    itemsRef.current[i] = el;
                  }}
                  className="overflow-hidden"
                  style={{ height: i === 0 ? "auto" : 0 }}
                >
                  <p className="max-w-xl pb-6 text-[0.98rem] leading-relaxed text-black/70">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PanelMini() {
  return (
    <svg viewBox="0 0 200 250" className="h-full w-full" aria-hidden>
      <rect width="200" height="250" fill="var(--paper)" />
      <g fill="none" stroke="var(--ink)" strokeWidth="1.2">
        <rect x="40" y="50" width="40" height="70" />
        <rect x="92" y="78" width="70" height="22" />
        <path d="M60 120v40M60 160h70M130 100v60" />
        {Array.from({ length: 6 }).map((_, i) => (
          <rect key={i} x={48 + i * 18} y="178" width="12" height="28" />
        ))}
      </g>
    </svg>
  );
}
