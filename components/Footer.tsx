import Link from "next/link";
import { company, footer, nav } from "@/lib/content";
import { Wordmark } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="site-grid py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          <div>
            <nav className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/80">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white/30">/</span>
              {nav.map((item, i) => (
                <span key={item.href} className="contents">
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                  {i < nav.length - 1 ? (
                    <span className="text-white/30">/</span>
                  ) : null}
                </span>
              ))}
            </nav>
            <div className="mt-8 space-y-1 text-sm text-white/70">
              <Link href="/legal" className="block hover:text-white">
                Terms and Conditions
              </Link>
              <Link href="/privacy" className="block hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div>
            <p className="kicker">Contact us</p>
            <div className="mt-4 space-y-2 text-lg leading-snug">
              <a href={`mailto:${company.email}`} className="block hover:text-yellow">
                {company.email}
              </a>
              <a
                href={company.mapsHref}
                className="block text-white/80 hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {company.addressLine1}
                <br />
                {company.addressLine2}
              </a>
              <a href={company.phoneHref} className="block hover:text-yellow">
                {company.phone}
              </a>
              <a href={company.mobileHref} className="block hover:text-yellow">
                {company.mobile}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <p className="text-sm text-white/55">
              Proudly designed and built in {footer.credit}
            </p>
            <Link href="/" aria-label="ZBE home">
              <span className="text-6xl font-medium tracking-[-0.07em] text-white">
                ZBE
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6 text-sm text-white/45">
          <p>
            © {new Date().getFullYear()} {company.legalName}. {footer.copyright}
          </p>
          <Wordmark light />
        </div>
      </div>
    </footer>
  );
}
