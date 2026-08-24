"use client";

import Image from "next/image";
import { about } from "@/lib/content";
import { AboutSchematic } from "./AboutSchematic";
import { DrawLine } from "../DrawLine";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="site-grid pt-32 pb-16">
        <h1 className="display text-white" data-sa="lines">
          {about.heroTitle}
        </h1>
        <div className="mt-10 grid gap-10 pt-8 lg:grid-cols-[0.7fr_1.3fr]">
          <DrawLine light className="col-span-full" />
          <p className="kicker flex items-center gap-2 text-white" data-sa="block">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            About us
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-white/80" data-sa="lines">
            {about.intro}
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-[min(85rem,calc(100%-1.5rem))]">
        <div className="relative min-h-[28rem] overflow-hidden lg:min-h-[42rem]">
          <div className="absolute inset-0">
            <AboutSchematic />
          </div>
          <div
            data-clippath-cover
            className="absolute inset-[8%] overflow-hidden lg:inset-[12%_18%]"
          >
            <div data-sa="parallax" className="relative h-full min-h-[22rem] lg:min-h-[32rem]">
              <Image
                src="/images/work/hero.jpg"
                alt="ZBE technicians at work on an electrical panel."
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <p className="mt-6 hidden text-right text-sm text-white/55 lg:block" data-sa="block">
          Scroll down
        </p>
      </div>
    </section>
  );
}
