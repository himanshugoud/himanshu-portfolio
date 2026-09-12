import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="content-col border-t border-line py-20 md:py-32">
      <span className="label-meta flex items-center gap-3 text-muted">
        <span className="text-ink">04</span>
        <span className="h-px w-5 bg-muted" aria-hidden="true" />
        Selected Work
      </span>

      <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
        Things I&rsquo;ve built end to end.
      </h2>

      <div className="mt-4 divide-y divide-line">
        {projects.map((project, i) => {
          const hasImage = fs.existsSync(
            path.join(process.cwd(), "public", project.image)
          );
          return (
            <ProjectCard
              key={project.title}
              project={project}
              reverse={i % 2 === 1}
              hasImage={hasImage}
            />
          );
        })}
      </div>
    </section>
  );
}
