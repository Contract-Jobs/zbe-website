"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/content";
import { ArrowIcon, CloseIcon, MenuIcon, Wordmark } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const lightLogo = pathname === "/about";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="site-grid flex items-center justify-between py-4">
        <Link
          href="/"
          className="pointer-events-auto relative z-10"
          aria-label={`${company.legalName} home`}
        >
          <Wordmark light={lightLogo} />
        </Link>

        <div className="pointer-events-auto flex items-center gap-1.5">
          <nav
            className="nav-pill hidden lg:flex"
            aria-label="Primary"
            style={{
              boxShadow: scrolled ? "0 8px 24px rgba(0,0,0,0.18)" : undefined,
            }}
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={pathname === item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="flex h-[3.15rem] w-[3.15rem] items-center justify-center rounded-[0.35rem] bg-black text-white lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Link href="/quote" className="quote-btn">
            Start your quote
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {open ? (
        <div className="pointer-events-auto mx-3 rounded-md bg-black px-6 py-8 text-white lg:hidden">
          <nav className="flex flex-col gap-5 text-2xl font-medium tracking-tight">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
