import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { DrawLine } from "@/components/DrawLine";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <div className="bg-white pt-32">
      <section className="site-grid pb-20">
        <p className="kicker" data-sa="block">
          Services
        </p>
        <h1 className="display mt-6 max-w-4xl" data-sa="lines">
          {services.hero.title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/75" data-sa="lines">
          {services.hero.body}
        </p>
      </section>

      <section className="border-t border-black/10">
        <div className="site-grid grid gap-10 py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <h2 className="display-md max-w-md" data-sa="lines">
            {services.blocks[0]!.title}
          </h2>
          <div>
            <p className="max-w-lg text-lg leading-relaxed" data-sa="lines">
              {services.blocks[0]!.body}
            </p>
            <Link href="/quote" className="quote-btn quote-btn-dark mt-10">
              Start the quote
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {services.blocks.slice(1).map((block) => (
        <section key={block.title} className="border-t border-black/10">
          <div className="site-grid py-20">
            <h2 className="display-md max-w-3xl" data-sa="lines">
              {block.title}
            </h2>
            <div className="mt-8">
              <DrawLine />
            </div>
            <div className="mt-12 grid gap-px bg-black/10 lg:grid-cols-3" data-sa="children">
              {block.items?.map((item) => (
                <article key={item.title} className="bg-white p-8">
                  <h3 className="text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-black/70">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-black/10 bg-paper">
        <div className="site-grid py-20">
          <h2 className="display-md max-w-3xl" data-sa="lines">
            Serving all kinds of industries
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-sa="children">
            {services.industries.map((item) => (
              <article key={item.title} id={item.title.toLowerCase()} className="border-t border-black/15 pt-5">
                <h3 className="text-xl font-medium tracking-tight">{item.title}</h3>
                <p className="mt-3 text-black/70">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
