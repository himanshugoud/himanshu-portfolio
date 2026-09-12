export type Project = {
  n: string;
  category: string;
  title: string;
  oneLiner: string;
  problem: string;
  solution: string;
  stack: string[];
  myRole: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    n: "01",
    category: "Full-Stack · MERN",
    title: "RaktSetu — Emergency Blood Donor Network",
    oneLiner:
      "Real-time geospatial matching that turns a blood emergency into a ranked, callable donor list in seconds.",
    problem:
      "Emergency blood requests were relying on slow, easy-to-miss email alerts — by the time someone saw one, the window to help had often passed.",
    solution:
      "Real-time MongoDB geospatial matching surfaces a ranked, callable donor list on-screen instantly, with automatic 4-tier radius escalation (10km → 100km) so low-donor-density areas still get matches. The real 90-day donation eligibility rule is encoded directly into the matching engine and verified with 17 automated tests.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    myRole:
      "Built the full stack solo — the matching engine, JWT auth with a token-based password reset flow and rate limiting, and deployment across a 3-service free-tier stack (Vercel, Render, Atlas) with zero committed secrets.",
    image: "/images/projects/raktsetu.png",
    liveUrl: "https://raktsetu-phi.vercel.app/",
    githubUrl: "https://github.com/himanshugoud/raktsetu",
  },
];
