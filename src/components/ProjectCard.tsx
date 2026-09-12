"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProjectCard({
  project,
  reverse = false,
  hasImage = false,
}: {
  project: Project;
  reverse?: boolean;
  hasImage?: boolean;
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-10 py-16 first:pt-0 md:grid-cols-2 md:items-center md:gap-14 md:py-24"
    >
      {/* ---------- Content ---------- */}
      <div className={reverse ? "md:order-2" : ""}>
        <motion.span
          variants={item}
          className="label-meta flex items-center gap-3 text-muted"
        >
          <span className="text-ink">{project.n}</span>
          <span className="h-px w-5 bg-muted" aria-hidden="true" />
          {project.category}
        </motion.span>

        <motion.h3
          variants={item}
          className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
        >
          {project.title}
        </motion.h3>

        <motion.p variants={item} className="mt-4 max-w-[48ch] text-lg text-muted">
          {project.oneLiner}
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-col gap-5">
          <div>
            <span className="label-meta text-ink">Problem</span>
            <p className="mt-1.5 max-w-[52ch] text-muted">{project.problem}</p>
          </div>
          <div>
            <span className="label-meta text-ink">Solution</span>
            <p className="mt-1.5 max-w-[52ch] text-muted">{project.solution}</p>
          </div>
          <div>
            <span className="label-meta text-ink">My role</span>
            <p className="mt-1.5 max-w-[52ch] text-muted">{project.myRole}</p>
          </div>
        </motion.div>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="label-meta rounded-full border border-line px-3 py-1.5 text-ink"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-8 flex items-center gap-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            Live Site
            <span className="transition-transform duration-200 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              &#8599;
            </span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="label-meta text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </motion.div>
      </div>

      {/* ---------- Visual ---------- */}
      <motion.div
        variants={item}
        className={reverse ? "md:order-1" : ""}
      >
        <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-md)] border border-line bg-paper-dim">
          {hasImage ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 border-2 border-dashed border-line p-8 text-center">
              <span className="label-meta text-muted">Add screenshot</span>
              <p className="max-w-[24ch] text-sm text-muted">
                Drop an image at{" "}
                <code className="rounded bg-paper px-1 py-0.5 text-xs">
                  public{project.image}
                </code>
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
