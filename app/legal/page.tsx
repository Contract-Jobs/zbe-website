import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

export default function LegalPage() {
  return (
    <article className="site-grid max-w-3xl bg-white py-32">
      <h1 className="display">Terms and Conditions</h1>
      <div className="mt-10 space-y-5 text-black/75 leading-relaxed">
        <p>
          Quotes from {company.legalName} are valid for the period stated on the proposal. Work begins after written acceptance and any mobilisation payment.
        </p>
        <p>
          Drawings and as-built documents issued after approval belong to the client. Site access, existing-services information, and timely decisions remain the client’s responsibility.
        </p>
      </div>
    </article>
  );
}
