import Link from "next/link";
import { howWeWork } from "@/lib/content";
import { ArrowIcon, StepIcon } from "./Icons";
import { PanelCutaway } from "./PanelCutaway";

export function HowWeWork() {
  return (
    <section className="bg-white">
      <div className="site-grid grid border-x border-black/10 lg:grid-cols-[1fr_1.15fr]">
        <div className="flex flex-col justify-between border-b border-black/10 px-0 py-14 lg:border-b-0 lg:border-r lg:pr-12">
          <div>
            <p className="kicker flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-black" />
              {howWeWork.label}
            </p>
            <p className="mt-8 max-w-md text-[1.35rem] leading-snug tracking-tight">
              {howWeWork.body}
            </p>
          </div>
          <Link href="/quote" className="quote-btn quote-btn-dark mt-12 w-fit">
            Start your quote
            <ArrowIcon />
          </Link>
        </div>
        <div className="relative min-h-[340px] bg-paper">
          <PanelCutaway />
        </div>
      </div>

      <div className="site-grid grid gap-px bg-black/10 py-px lg:grid-cols-3">
        {howWeWork.steps.map((step) => (
          <article key={step.title} className="bg-white p-8 lg:min-h-[220px]">
            <div className="mb-10 flex justify-end text-black/70">
              <StepIcon kind={step.icon} />
            </div>
            <h3 className="text-[1.35rem] leading-tight tracking-tight">{step.title}</h3>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-black/70">
              {step.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
