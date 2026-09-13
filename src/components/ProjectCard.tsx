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
  tinted = false,
  hasImage = false,
}: {
  project: Project;
  tinted?: boolean;
  hasImage?: boolean;
}) {
  return (
    <motion.article
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={`overflow-hidden rounded-[var(--radius-md)] border border-line ${
        tinted ? "bg-paper-dim" : "bg-paper"
      }`}
    >
      <div className="flex flex-col gap-6 p-6 sm:p-10 md:p-14">
        {/* ---------- Eyebrow row ---------- */}
        <motion.div
          variants={item}
          className="flex items-center justify-between"
        >
          <span className="label-meta flex items-center gap-3 text-muted">
            <span className="text-ink">{project.n}</span>
            <span className="h-px w-5 bg-muted" aria-hidden="true" />
            {project.category}
          </span>
          <div className="hidden items-center gap-5 sm:flex">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="label-meta text-ink underline decoration-line underline-offset-4 transition-colors hover:text-accent"
            >
              Live Site &#8599;
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
          </div>
        </motion.div>

        {/* ---------- Title + one-liner ---------- */}
        <div>
          <motion.h3
            variants={item}
            className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            {project.title}
          </motion.h3>
          <motion.p
            variants={item}
            className="mt-3 max-w-[60ch] text-lg text-muted"
          >
            {project.oneLiner}
          </motion.p>
        </div>

        {/* ---------- Large uninterrupted visual ---------- */}
        <motion.div
          variants={item}
          className="group relative aspect-[16/9] w-full overflow-hidden rounded-[var(--radius-sm)] border border-line"
        >
          {hasImage ? (
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 768px) 70vw, 90vw"
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
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
        </motion.div>

        {/* ---------- Problem / Solution / Role — compact 3-up ---------- */}
        <motion.div
          variants={item}
          className="grid gap-8 border-t border-line pt-8 sm:grid-cols-3"
        >
          <div>
            <span className="label-meta text-ink">Problem</span>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="label-meta text-ink">Solution</span>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.solution}
            </p>
          </div>
          <div>
            <span className="label-meta text-ink">My role</span>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {project.myRole}
            </p>
          </div>
        </motion.div>

        {/* ---------- Stack + mobile links ---------- */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6"
        >
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="label-meta rounded-full border border-line px-3 py-1.5 text-ink"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-5 sm:hidden">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label-meta text-ink underline decoration-line underline-offset-4"
            >
              Live Site
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label-meta text-ink underline decoration-line underline-offset-4"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
