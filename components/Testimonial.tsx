import Image from "next/image";
import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <section className="bg-white py-6">
      <div className="relative">
        <div data-clippath-cover className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
          <div data-sa="parallax" className="absolute inset-0">
            <Image
              src={testimonial.image}
              alt={testimonial.imageAlt}
              fill
              className="object-cover scale-110"
              sizes="100vw"
            />
          </div>
        </div>
        <blockquote
          data-overlap="reveal"
          className="relative z-10 mx-auto -mt-28 w-[min(42rem,calc(100%-1.5rem))] bg-ink p-8 text-white lg:absolute lg:right-[max(1.5rem,calc((100%-85rem)/2))] lg:bottom-10 lg:mx-0 lg:mt-0 lg:w-[34rem] lg:p-10"
        >
          <p className="text-[1.45rem] font-medium leading-[1.3] tracking-[-0.02em]" data-sa="lines">
            “{testimonial.quote}”
          </p>
          <footer className="mt-8 text-sm text-white/70" data-sa="block">
            <div className="font-medium text-white">{testimonial.name}</div>
            <div>{testimonial.role}</div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
