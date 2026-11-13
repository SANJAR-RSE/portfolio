"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

/**
 * Fade + rise when scrolled into view. The motion lives in CSS
 * (`[data-reveal]` in globals.css), so this is a single shared-style
 * IntersectionObserver per element and nothing animates in JS.
 * Without JS, or with reduced motion, content is simply visible.
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.dataset.visible = "true";
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? { "--reveal-delay": `${delay}ms` } as CSSProperties : undefined}
    >
      {children}
    </Tag>
  );
}
