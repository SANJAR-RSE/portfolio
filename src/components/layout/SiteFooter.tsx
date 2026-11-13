import { ArrowUp } from "lucide-react";
import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-4 px-4 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.role} · {site.location}
        </p>
        <div className="flex items-center gap-6">
          <p className="font-mono">Next.js · Tailwind CSS · Three.js</p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
