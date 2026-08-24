import { CaseStudies } from "@/components/CaseStudies";
import { Difference } from "@/components/Difference";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { HowWeWork } from "@/components/HowWeWork";
import { Testimonial } from "@/components/Testimonial";
import { TrustBar } from "@/components/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Difference />
      <HowWeWork />
      <Testimonial />
      <CaseStudies />
      <FAQ />
    </>
  );
}
