export const DESKTOP_MQ = "(min-width: 992px)";

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function cssToken(name: string) {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}
