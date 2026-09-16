import fs from "node:fs";
import path from "node:path";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function WorkSection() {
  return (
    <section id="work" className="content-col border-t border-line py-20 md:py-32">
      <span className="label-meta text-muted">
        ( Selected Work / 05 )
      </span>

      <h2 className="mt-4 font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
        Things I&rsquo;ve built end to end.
      </h2>

      <div className="mt-10 flex flex-col gap-10 md:mt-16 md:gap-16">
        {projects.map((project, i) => {
          const hasImage = fs.existsSync(
            path.join(process.cwd(), "public", project.image)
          );
          return (
            <ProjectCard
              key={project.title}
              project={project}
              tinted={i % 2 === 1}
              hasImage={hasImage}
            />
          );
        })}
      </div>
    </section>
  );
}
