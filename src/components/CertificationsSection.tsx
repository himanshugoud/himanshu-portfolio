"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    score: "82%",
    date: "May 2026",
    topic: "Cloud service models (IaaS, PaaS, SaaS), virtualization, multi-cloud deployment strategies",
    url: "https://drive.google.com/file/d/1-QCZu5jftUwa3eXb6vSCYJ6RzgqOrCSA/view?usp=drivesdk",
  },
  {
    title: "Introduction to Algorithms and Analysis",
    issuer: "NPTEL",
    score: "75%",
    date: "November 2025",
    topic: "Sorting algorithms, recursion, Big-O complexity analysis",
    url: "https://drive.google.com/file/d/1bqfN27nmWVjTGjmzEvLcizEEWHNN4guF/view?usp=drivesdk",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CertificationsSection() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="content-col border-t border-line py-20 md:py-32"
      id="certifications"
    >
      <motion.span
        variants={item}
        className="label-meta flex items-center gap-3 text-muted"
      >
        <span className="text-ink">06</span>
        <span className="h-px w-5 bg-muted" aria-hidden="true" />
        Certifications
      </motion.span>

      <motion.h2
        variants={item}
        className="mt-4 font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
      >
        Verified, not just claimed.
      </motion.h2>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {certifications.map((cert) => (
          <motion.a
            key={cert.title}
            variants={item}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div>
              <h3 className="font-display text-lg font-normal text-ink transition-colors group-hover:text-accent sm:text-xl">
                {cert.title} &#8599;
              </h3>
              <p className="mt-1 max-w-[52ch] text-sm text-muted">
                {cert.issuer} &middot; {cert.topic}
              </p>
            </div>
            <div className="label-meta shrink-0 text-muted">
              <span className="text-ink">{cert.score}</span> &middot; {cert.date}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
}
