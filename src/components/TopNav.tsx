import Link from "next/link";
import { site } from "@/lib/site";

export default function TopNav() {
  return (
    <header className="hidden md:block">
      <div className="content-col flex items-center justify-between py-6">
        <span className="label-meta text-ink">{site.name}</span>

        <nav className="flex items-center gap-8">
          {site.nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="label-meta group relative text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-200 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          data-cursor-hover
          className="label-meta inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-accent-ink transition-colors hover:bg-accent-dim"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
