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
  accent: string;
  accentInk: string;
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
    accent: "#c5283d",
    accentInk: "#f7f6f2",
  },
  {
    n: "02",
    category: "Frontend · Firebase",
    title: "SmartPark — Real-Time Parking Management",
    oneLiner:
      "A real-time parking system that syncs 300 slots across 3 floors instantly, with zero booking conflicts.",
    problem:
      "Tracking live parking availability across multiple floors is hard to get right, and a subtle session bug was letting one user's booking data leak into another account after logout and login.",
    solution:
      "Built a single-page booking flow with live slot selection, duration, and pricing calculation, backed by Firebase Realtime Database syncing 300 slots across 3 floors — stress-tested with 50 concurrent writes at 100% success and zero conflicts. Traced and fixed the critical session-isolation bug by re-architecting the app's state management.",
    stack: ["JavaScript", "Firebase", "HTML5", "CSS3"],
    myRole:
      "Owned the full build-to-deploy lifecycle independently — the booking UI, Firebase security rules, and production deployment on Firebase Hosting.",
    image: "/images/projects/smartpark.png",
    liveUrl: "https://smartpark-hg.web.app/",
    githubUrl: "https://github.com/himanshugoud/smartpark",
    accent: "#2854df",
    accentInk: "#f7f6f2",
  },
];
