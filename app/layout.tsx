import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loader } from "@/components/Loader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { company } from "@/lib/content";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${company.legalName} | Electrical, ICT & Electronics — Addis Ababa`,
    template: `%s | ${company.legalName}`,
  },
  description:
    "ZBE Power Engineering designs and installs electrical systems, ICT infrastructure, and custom electronics in Addis Ababa.",
  icons: { icon: "/images/logo.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrument.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-black">
        <Loader />
        <SmoothScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
