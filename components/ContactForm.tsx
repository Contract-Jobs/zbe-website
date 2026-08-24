"use client";

import { useState } from "react";
import { company } from "@/lib/content";

type Props = {
  heading?: string;
  intent?: "contact" | "quote";
};

export function ContactForm({
  heading = "Tell us about your project and we'll connect you with an engineer.",
  intent = "contact",
}: Props) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  if (status === "sent") {
    return (
      <div className="border border-black/10 bg-paper p-8">
        <p className="text-2xl tracking-tight">Thank you. We’ll be in touch shortly.</p>
        <a href="/" className="quote-link mt-6 inline-flex">
          Back home
        </a>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const subject = intent === "quote" ? "Quote request" : "Project enquiry";
        const body = [...data.entries()]
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n");
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setStatus("sent");
      }}
    >
      <p className="max-w-md text-lg leading-relaxed text-black/75">{heading}</p>
      <label className="grid gap-2 text-sm font-medium">
        Name *
        <input required name="Name" className="field" />
      </label>
      <label className="grid gap-2 text-sm font-medium">
        Email *
        <input required type="email" name="Email" className="field" />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Company
          <input name="Company" className="field" />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Phone *
          <input required name="Phone" className="field" />
        </label>
      </div>
      {intent === "quote" ? (
        <label className="grid gap-2 text-sm font-medium">
          Scope
          <select name="Scope" className="field">
            <option>Electrical installation</option>
            <option>Control panels</option>
            <option>ICT infrastructure</option>
            <option>PCB design</option>
            <option>Prototyping</option>
            <option>Emergency / maintenance</option>
          </select>
        </label>
      ) : null}
      <label className="grid gap-2 text-sm font-medium">
        Your message *
        <textarea required name="Message" rows={6} className="field resize-y" />
      </label>
      <button type="submit" className="quote-btn quote-btn-dark w-fit">
        Submit
      </button>
    </form>
  );
}
