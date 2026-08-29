"use client";

import { about, trust } from "@/lib/content";
import { AboutHero } from "./AboutHero";
import { ValuesDraw } from "./ValuesDraw";
import { DrawLine } from "../DrawLine";

export function AboutView() {
  return (
    <div className="bg-black">
      <AboutHero />

      <section
        data-overlap="reveal"
        className="relative z-10 bg-yellow text-white"
      >
        <div className="site-grid grid gap-10 py-24 lg:grid-cols-2">
          <div>
            <p className="kicker" data-sa="block">
              {about.storyLabel}
            </p>
            <h2 className="mt-6 text-3xl leading-tight tracking-tight lg:text-5xl" data-sa="lines">
              {about.storyHeadline}
            </h2>
          </div>
          <p className="max-w-lg self-end text-lg leading-relaxed text-white/80" data-sa="lines">
            {about.storyBody}
          </p>
        </div>
        <div className="site-grid pb-10">
          <DrawLine />
        </div>
      </section>

      <ValuesDraw />

      <section className="border-t border-white/10 bg-black py-16">
        <div className="site-grid">
          <p className="kicker text-white/70" data-sa="block">
            {trust.label}
          </p>
          <div className="mt-8 overflow-hidden" data-sa="children">
            <div className="marquee">
              {[0, 1, 2].map((copy) =>
                trust.marks.map((name) => (
                  <span
                    key={`${copy}-${name}`}
                    className="flex h-14 min-w-[10rem] items-center px-8 text-lg text-white/80"
                  >
                    {name}
                  </span>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
