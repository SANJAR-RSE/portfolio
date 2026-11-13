import type { SimpleIcon } from "simple-icons";

type BrandIconProps = {
  icon: SimpleIcon;
  size?: number;
  className?: string;
};

/** Renders a Simple Icons glyph in `currentColor`. Decorative by default. */
export default function BrandIcon({ icon, size = 20, className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d={icon.path} />
    </svg>
  );
}

/**
 * Brand colour that stays legible on the dark background: very dark brand
 * colours (Next.js, Express, GitHub…) fall back to the foreground colour.
 */
export function legibleBrandColor(hex: string) {
  const n = parseInt(hex, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.06 ? "#f5f5f7" : `#${hex}`;
}
