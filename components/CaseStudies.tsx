"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { caseStudies } from "@/lib/content";
import { ArrowIcon } from "./Icons";

export function CaseStudies() {
  const [index, setIndex] = useState(0);
  const item = caseStudies.items[index]!;
  const last = caseStudies.items.length - 1;

  return (
    <section className="bg-white pb-24 pt-20">
      <div className="site-grid">
        <p className="kicker flex items-center gap-2" data-sa="block">
          <span className="inline-block h-2 w-2 rounded-full bg-black" />
          {caseStudies.label}
        </p>
        <h2 className="display-md mt-8 max-w-3xl" data-sa="lines">
          {caseStudies.headline}
        </h2>

        <div className="mt-14 grid gap-8 border-t border-black/15 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-clippath-cover className="relative aspect-square overflow-hidden bg-ink">
            <div className="tech-grid absolute inset-0 opacity-70" />
            <Image
              src={item.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover mix-blend-luminosity opacity-90"
            />
            <div className="absolute inset-8 border border-yellow/80" />
            <p className="absolute left-10 top-10 text-2xl font-medium tracking-tight text-white">
              {item.client}
            </p>
          </div>

          <div className="flex flex-col">
            <h3 className="max-w-xl text-[1.85rem] leading-tight tracking-tight">
              {item.title}
            </h3>
            <dl className="mt-8 grid max-w-sm grid-cols-2 gap-x-8 border-y border-black/10 py-4 text-sm">
              <div>
                <dt className="text-black/45">Client</dt>
                <dd className="mt-1 font-medium">{item.client}</dd>
              </div>
              <div>
                <dt className="text-black/45">Industry</dt>
                <dd className="mt-1 font-medium">{item.industry}</dd>
              </div>
            </dl>
            <p className="mt-8 max-w-lg text-[1.02rem] leading-relaxed text-black/75">
              {item.body}
            </p>
            <Link
              href={`/services#${item.industry.toLowerCase()}`}
              className="quote-link mt-8 w-fit"
            >
              Read more
              <ArrowIcon />
            </Link>

            <div className="mt-auto flex gap-2 pt-10">
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-black/15 bg-paper hover:bg-black hover:text-white"
                aria-label="Previous slide"
                onClick={() => setIndex((i) => (i === 0 ? last : i - 1))}
              >
                ←
              </button>
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center border border-black/15 bg-paper hover:bg-black hover:text-white"
                aria-label="Next slide"
                onClick={() => setIndex((i) => (i === last ? 0 : i + 1))}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
