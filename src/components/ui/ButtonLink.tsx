import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
};

const base =
  "group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm sm:px-6 font-medium transition-[background-color,border-color,color,transform] duration-300 ease-out-expo active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-accent-soft",
  secondary: "border border-line-strong text-fg hover:border-accent/60 hover:bg-white/[0.03]",
  ghost: "text-muted hover:text-fg",
};

export default function ButtonLink({
  variant = "primary",
  external,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
