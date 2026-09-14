import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="content-col border-t border-line py-10 md:py-14">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-lg font-normal text-ink">
            {site.name}
          </p>
          <p className="text-sm text-muted">{site.role}</p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="label-meta text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={site.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="label-meta text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="label-meta text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="label-meta text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            Resume
          </a>
        </nav>
      </div>

      <p className="mt-8 border-t border-line pt-6 text-xs text-muted">
        &copy; {year} {site.name}
      </p>
    </footer>
  );
}
