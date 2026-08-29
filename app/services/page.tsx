import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
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

      {services.offerings.map((offering, index) => (
        <section
          key={offering.id}
          id={offering.id}
          className="border-t border-black/10"
        >
          <div className="site-grid grid gap-12 py-20 lg:grid-cols-[0.82fr_1.18fr]">
            <div>
              <p className="kicker" data-sa="block">
                0{index + 1}
              </p>
              <h2 className="display-md mt-4 max-w-md" data-sa="lines">
                {offering.title}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-black/75" data-sa="lines">
                {offering.intro}
              </p>
              {index === 0 ? (
                <Link href="/quote" className="quote-btn quote-btn-dark mt-10">
                  Start the quote
                  <ArrowIcon />
                </Link>
              ) : (
                <Link href="/quote" className="quote-link mt-10">
                  Start your quote
                  <ArrowIcon />
                </Link>
              )}
            </div>

            <div className="space-y-10" data-sa="children">
              {offering.groups.map((group) => (
                <div key={group.title}>
                  <p className="kicker">{group.title}</p>
                  <ul className="mt-4 grid border-t border-black/10 sm:grid-cols-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border-b border-black/10 py-3 pr-6 text-[1.05rem] leading-snug"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
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
