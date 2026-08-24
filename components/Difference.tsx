import Image from "next/image";
import Link from "next/link";
import { difference } from "@/lib/content";
import { ArrowIcon, CapacitorIcon, DiodeIcon, ResistorIcon } from "./Icons";

const icons = {
  diode: DiodeIcon,
  resistor: ResistorIcon,
  capacitor: CapacitorIcon,
};

export function Difference() {
  return (
    <section className="bg-white">
      <div className="site-grid grid gap-10 py-20 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="kicker mb-6">{difference.label}</p>
          <h2 className="display-md whitespace-pre-line">{difference.kicker}</h2>
          <p className="mt-6 max-w-md text-black/70">{difference.intro}</p>
        </div>
        <div className="flex gap-4">
          {difference.photos.map((photo) => (
            <div
              key={photo.src}
              className="relative h-56 w-36 overflow-hidden bg-grey-150 sm:h-72 sm:w-48"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {difference.cards.map((card) => {
        const Icon = icons[card.icon];
        return (
          <article key={card.title} className="sticky top-0 bg-ink text-white">
            <div className="site-grid grid min-h-[70vh] lg:grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col justify-between py-16 lg:py-20">
                <h3 className="display-md text-white">{card.title}</h3>
                <p className="kicker text-white/80">{card.subtitle}</p>
              </div>
              <div className="tech-grid relative hidden items-center justify-center lg:flex">
                <div className="flex h-48 w-64 items-center justify-center border border-dashed border-white/35">
                  <Icon />
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 bg-[#2b2929]">
              <div className="site-grid flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
                <p className="max-w-2xl text-[1.05rem] leading-relaxed text-white/85">
                  {card.body}
                </p>
                <Link href="/quote" className="quote-link text-white">
                  Start your quote
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
