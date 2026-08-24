import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Start your quote",
};

export default function QuotePage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="site-grid grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h1 className="display" data-sa="lines">
            Start your quote
          </h1>
          <p className="mt-8 max-w-sm text-lg leading-relaxed text-black/70" data-sa="lines">
            Send a scope, drawings, or a site brief. We typically come back with pricing and a practical plan within a day.
          </p>
        </div>
        <ContactForm
          intent="quote"
          heading="Use the form and we’ll reply from sales@zbepowereng.com."
        />
      </div>
    </div>
  );
}
