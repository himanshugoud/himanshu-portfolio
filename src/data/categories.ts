import { Code2, LayoutGrid, Database, Lightbulb, PuzzleIcon } from "lucide-react";

export type Tone = "blue" | "orange" | "yellow" | "pink" | "green";

export type Category = {
  n: string;
  title: [string, string];
  tone: Tone;
  rotate: number;
  Icon: typeof Code2;
  bullets: string[];
};

export const categories: Category[] = [
  {
    n: "01",
    title: ["Full-Stack", "Development"],
    tone: "blue",
    rotate: -6,
    Icon: Code2,
    bullets: ["React & Node.js", "REST APIs", "Databases", "Deployment"],
  },
  {
    n: "02",
    title: ["Frontend", "Engineering"],
    tone: "orange",
    rotate: -3,
    Icon: LayoutGrid,
    bullets: ["React & Next.js", "Responsive UI", "State management", "Animation"],
  },
  {
    n: "03",
    title: ["Backend", "Systems"],
    tone: "yellow",
    rotate: 0,
    Icon: Database,
    bullets: ["Node & Express", "MongoDB", "Auth & security", "Server logic"],
  },
  {
    n: "04",
    title: ["Product", "Thinking"],
    tone: "pink",
    rotate: 3,
    Icon: Lightbulb,
    bullets: ["User flows", "MVP scoping", "Prioritization", "Trade-offs"],
  },
  {
    n: "05",
    title: ["Problem", "Solving"],
    tone: "green",
    rotate: 6,
    Icon: PuzzleIcon,
    bullets: ["Data structures", "Algorithms", "Debugging", "Edge cases"],
  },
];

export const toneClasses: Record<Tone, string> = {
  blue: "bg-accent text-accent-ink border-accent",
  orange: "bg-card-orange text-ink border-card-orange",
  yellow: "bg-gold text-ink border-gold",
  pink: "bg-card-pink text-ink border-card-pink",
  green: "bg-card-green text-ink border-card-green",
};
