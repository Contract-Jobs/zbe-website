import { trust } from "@/lib/content";
import { ClientMark } from "./ClientMark";

function Marks({ copy }: { copy: number }) {
  return (
    <>
      {trust.marks.map((mark) => (
        <span
          key={`${copy}-${mark.name}`}
          className="flex h-20 min-w-[13.5rem] items-center px-8"
        >
          <ClientMark mark={mark} />
        </span>
      ))}
    </>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="site-grid flex items-stretch">
        <p className="hidden max-w-[13rem] shrink-0 items-center border-r border-black/10 py-5 pr-8 text-sm font-medium leading-snug lg:flex" data-sa="block">
          {trust.label}
        </p>
        <div className="overflow-hidden py-2">
          <p className="px-1 pt-4 text-sm font-medium lg:hidden">{trust.label}</p>
          <div className="marquee">
            <Marks copy={0} />
            <Marks copy={1} />
            <Marks copy={2} />
            <Marks copy={3} />
          </div>
        </div>
      </div>
    </section>
  );
}
