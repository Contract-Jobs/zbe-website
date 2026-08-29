"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import Link from "next/link";
import { featuredProjects, hero } from "@/lib/content";
import { ArrowIcon } from "./Icons";

const sample =
  featuredProjects.find((item) => item.slug === "dashen-smart-banking") ??
  featuredProjects[0];

gsap.registerPlugin(useGSAP, SplitText);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const title = root.current?.querySelector(".hero-title");
      if (title && SplitText) {
        const split = new SplitText(title, { type: "chars,words" });
        gsap.from(split.chars, {
          yPercent: 110,
          opacity: 0,
          stagger: 0.028,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.35,
        });
      }
      gsap.from(".hero-copy, .hero-panel", {
        y: 24,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        delay: 0.55,
        ease: "power2.out",
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} className="bg-white pt-28">
      <div className="site-grid grid gap-10 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:pb-16">
        <h1 className="hero-title display overflow-hidden">{hero.headline}</h1>
        <p className="hero-copy max-w-md text-[1.15rem] leading-relaxed text-black/80 lg:justify-self-end" data-sa="lines">
          {hero.body}
        </p>
      </div>

      <div className="hero-panel overflow-hidden bg-black text-white">
        <div className="site-grid grid lg:grid-cols-[0.78fr_1.22fr]">
          <div className="flex flex-col justify-between border-white/10 py-10 lg:border-r lg:py-14 lg:pr-12">
            <h2 className="kicker max-w-[12rem] whitespace-pre-line text-white">
              {hero.panelTitle}
            </h2>
            <ul className="mt-16">
              {hero.panelItems.map((item) => (
                <li
                  key={item}
                  className="border-t border-white/15 py-4 text-[1.05rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[320px] lg:min-h-[520px]">
            {sample?.image ? (
              <Image
                src={sample.image}
                alt={sample.title}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-ink" />
            )}
            <div className="absolute inset-8 border border-yellow/80" />
            <p className="absolute left-8 top-8 max-w-[16rem] bg-black px-2.5 py-1.5 text-2xl font-medium tracking-tight text-white">
              {sample?.title}
            </p>
            <Link
              href={`/projects#${sample?.slug ?? "dashen-smart-banking"}`}
              className="quote-link absolute bottom-8 left-8 text-white"
            >
              See the project
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
