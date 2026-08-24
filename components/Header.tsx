"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, nav } from "@/lib/content";
import { ArrowIcon, CloseIcon, MenuIcon, Wordmark } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const onScroll = () => setCollapsed(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const showLinks = !collapsed;

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <div className="site-grid flex items-center justify-between py-4">
        <Link
          href="/"
          className="group pointer-events-auto relative z-10 flex h-[3.15rem] items-center rounded-none px-3.5 transition-colors duration-200 hover:bg-black"
          aria-label={`${company.legalName} home`}
        >
          <span className="mix-blend-difference text-white group-hover:mix-blend-normal">
            <Wordmark light />
          </span>
        </Link>

        <div className="pointer-events-auto flex items-center gap-1.5">
          {showLinks ? (
            <nav className="nav-pill hidden items-center lg:flex" aria-label="Primary">
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
          ) : null}

          <button
            type="button"
            className={`flex h-[3.15rem] w-[3.15rem] items-center justify-center rounded-none bg-black text-white ${
              showLinks ? "lg:hidden" : ""
            }`}
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
        <div className="pointer-events-auto mx-3 rounded-md bg-black px-6 py-8 text-white">
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
