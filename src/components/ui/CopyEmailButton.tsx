"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked (insecure context, permissions); the mailto link still works.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong px-5 text-sm text-fg transition-colors duration-300 hover:border-accent/60 hover:bg-white/[0.03]"
    >
      {copied ? <Check size={16} className="text-accent-soft" /> : <Copy size={16} />}
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
