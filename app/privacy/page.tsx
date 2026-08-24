import type { Metadata } from "next";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <article className="site-grid max-w-3xl bg-white py-32">
      <h1 className="display">Privacy Policy</h1>
      <div className="mt-10 space-y-5 text-black/75 leading-relaxed">
        <p>
          {company.legalName} collects the name, email, phone, and project details you submit so we can quote and deliver work. We do not sell that information.
        </p>
        <p>
          Enquiries are received at {company.email}. You can ask us to delete your details by writing to the same address.
        </p>
      </div>
    </article>
  );
}
