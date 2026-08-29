import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { featuredProjects, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  const featured = featuredProjects;
  const register = projects.items;

  return (
    <div className="bg-white pt-32">
      <section className="site-grid pb-20">
        <p className="kicker" data-sa="block">
          Projects
        </p>
        <h1 className="display mt-6 max-w-4xl" data-sa="lines">
          {projects.hero.title}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/75" data-sa="lines">
          {projects.hero.body}
        </p>
      </section>

      {featured.map((item) => (
        <section key={item.slug} id={item.slug} className="border-t border-black/10">
          <div className="site-grid grid gap-10 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative aspect-[4/3] overflow-hidden bg-ink lg:aspect-square">
              <div className="tech-grid absolute inset-0 opacity-70" />
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-paper" />
              )}
              <div className="absolute inset-8 border border-yellow/80" />
              <p className="absolute left-8 top-8 max-w-[14rem] bg-black px-2.5 py-1.5 text-2xl font-medium tracking-tight text-white">
                {item.title}
              </p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="kicker">{item.status}</p>
              <h2 className="mt-4 max-w-xl text-[1.85rem] leading-tight tracking-tight">
                {item.title}
              </h2>
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
              <p className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-black/75">
                {item.body}
              </p>
              <ul className="mt-6 max-w-lg border-t border-black/10">
                {item.scopes.map((scope) => (
                  <li key={scope} className="border-b border-black/10 py-2.5 text-[1.02rem]">
                    {scope}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-black/10 bg-paper">
        <div className="site-grid py-20">
          <h2 className="display-md max-w-3xl" data-sa="lines">
            The full register.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-black/70" data-sa="lines">
            Sixteen named jobs from the last six years — electrical, fire, data, and generators.
          </p>

          <ol className="mt-14 border-t border-black/15">
            {register.map((item, index) => (
              <li
                key={item.slug}
                id={item.featured ? undefined : item.slug}
                className="grid gap-3 border-b border-black/15 py-6 lg:grid-cols-[4rem_1.2fr_0.9fr_0.7fr]"
              >
                <p className="font-medium tabular-nums text-black/40">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  {item.featured ? (
                    <a href={`#${item.slug}`} className="text-xl font-medium tracking-tight hover:text-yellow">
                      {item.title}
                    </a>
                  ) : (
                    <p className="text-xl font-medium tracking-tight">{item.title}</p>
                  )}
                  <p className="mt-1 text-sm text-black/55">{item.client}</p>
                </div>
                <p className="text-black/70">{item.scopes.join(" · ")}</p>
                <p className="text-sm font-medium lg:text-right">
                  {item.industry}
                  <span className="text-black/40"> · {item.status}</span>
                </p>
              </li>
            ))}
          </ol>

          <Link href="/quote" className="quote-btn quote-btn-dark mt-12">
            Start the quote
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}
