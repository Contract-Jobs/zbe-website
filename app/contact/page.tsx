import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact us",
};

export default function ContactPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <div className="site-grid grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h1 className="display">Contact us</h1>
          <p className="mt-8 max-w-sm text-lg text-black/70">
            {company.addressLine1}
            <br />
            {company.addressLine2}
          </p>
          <div className="mt-8 space-y-2 text-lg">
            <a href={`mailto:${company.email}`} className="block hover:underline">
              {company.email}
            </a>
            <a href={company.phoneHref} className="block hover:underline">
              {company.phone}
            </a>
            <a href={company.mobileHref} className="block hover:underline">
              {company.mobile}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
