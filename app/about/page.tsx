import type { Metadata } from "next";
import Image from "next/image";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="site-grid pt-32 pb-16">
        <h1 className="display text-white">{about.heroTitle}</h1>
        <div className="mt-10 grid gap-10 border-t border-white/15 pt-8 lg:grid-cols-[0.7fr_1.3fr]">
          <p className="kicker flex items-center gap-2 text-white">
            <span className="inline-block h-2 w-2 rounded-full bg-white" />
            About us
          </p>
          <p className="max-w-xl text-lg leading-relaxed text-white/80">
            {about.intro}
          </p>
        </div>
      </section>

      <section className="relative">
        <div className="tech-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto w-[min(85rem,calc(100%-1.5rem))]">
          <div className="relative aspect-[16/8] overflow-hidden">
            <Image
              src="/images/work/hero.jpg"
              alt="ZBE technicians at work on an electrical panel."
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="site-grid grid gap-10 py-24 lg:grid-cols-2">
        <div>
          <p className="kicker text-white/70">{about.storyLabel}</p>
          <h2 className="mt-6 text-3xl leading-tight tracking-tight lg:text-4xl">
            {about.storyHeadline}
          </h2>
        </div>
        <p className="max-w-lg text-lg leading-relaxed text-white/75">
          {about.storyBody}
        </p>
      </section>

      <section className="border-t border-white/10">
        <div className="site-grid py-20">
          <h2 className="display-md max-w-3xl text-white">Our values</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {about.values.map((value) => (
              <article key={value.title} className="border-t border-white/15 pt-5">
                <h3 className="text-2xl tracking-tight">{value.title}</h3>
                <p className="mt-3 text-white/70">{value.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
