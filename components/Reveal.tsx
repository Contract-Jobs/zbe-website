import type { ElementType, ReactNode } from "react";

type Kind = "block" | "lines" | "children" | "parallax";

export function Reveal({
  as: Tag = "div",
  kind = "block",
  className,
  children,
}: {
  as?: ElementType;
  kind?: Kind;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag data-sa={kind} className={className}>
      {children}
    </Tag>
  );
}
