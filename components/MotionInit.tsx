"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { DESKTOP_MQ, prefersReducedMotion } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function MotionInit() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let cancelled = false;
    const splits: SplitText[] = [];
    let ctx: gsap.Context | undefined;
    const mm = gsap.matchMedia();

    const run = () => {
      if (cancelled) return;

      if (prefersReducedMotion()) {
        document.querySelectorAll<HTMLElement>("[data-sa]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        return;
      }

      ctx = gsap.context(() => {
        document.querySelectorAll<HTMLElement>('[data-sa="block"]').forEach((el) => {
          gsap.fromTo(
            el,
            { opacity: 0, y: "1rem" },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: { trigger: el, start: "top 97%", once: true },
            }
          );
        });

        document.querySelectorAll<HTMLElement>('[data-sa="lines"]').forEach((el) => {
          const split = new SplitText(el, { type: "lines", linesClass: "split-line" });
          splits.push(split);
          gsap.from(split.lines, {
            y: "1rem",
            opacity: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });

        document.querySelectorAll<HTMLElement>('[data-sa="children"]').forEach((el) => {
          gsap.from(el.children, {
            y: "1rem",
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "power1.out",
            scrollTrigger: { trigger: el, start: "top 92%", once: true },
          });
        });

        document.querySelectorAll<HTMLElement>('[data-sa="parallax"]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: "2rem" },
            {
              y: "-2rem",
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });

        document.querySelectorAll<HTMLElement>("[data-animate-line]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.4,
              ease: "power4.out",
              scrollTrigger: { trigger: el, start: "top 80%", once: true },
            }
          );
        });

        document.querySelectorAll<HTMLElement>("[data-footer-layer]").forEach((el) => {
          gsap.fromTo(
            el,
            { y: "40%" },
            {
              y: "0%",
              duration: 1.8,
              ease: "power4.out",
              scrollTrigger: {
                trigger: el.closest("footer") ?? el,
                start: "top 95%",
                once: true,
              },
            }
          );
        });

        mm.add(DESKTOP_MQ, () => {
          document.querySelectorAll<HTMLElement>("[data-clippath-cover]").forEach((el) => {
            gsap.fromTo(
              el,
              { clipPath: "inset(5%)" },
              {
                clipPath: "inset(0%)",
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "top top",
                  scrub: true,
                },
              }
            );
          });

          document.querySelectorAll<HTMLElement>('[data-overlap="reveal"]').forEach((el) => {
            gsap.fromTo(
              el,
              { y: "-8rem" },
              {
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "top 20%",
                  scrub: true,
                },
              }
            );
          });

          document.querySelectorAll<HTMLElement>('[data-overlap="scale"]').forEach((el) => {
            gsap.fromTo(
              el,
              { scale: 0.92 },
              {
                scale: 1,
                ease: "none",
                transformOrigin: "50% 100%",
                scrollTrigger: {
                  trigger: el,
                  start: "top bottom",
                  end: "top 40%",
                  scrub: true,
                },
              }
            );
          });
        });
      });

      ScrollTrigger.refresh();
    };

    void document.fonts.ready.then(run);

    return () => {
      cancelled = true;
      splits.forEach((split) => {
        try {
          split.revert();
        } catch {
          /* already reverted */
        }
      });
      ctx?.revert();
      mm.revert();
    };
  }, [pathname]);

  return null;
}
