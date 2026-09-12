export const site = {
  name: "Himanshu Goud",
  role: "Full-Stack Developer",
  education: "B.Tech, Mathematics & Computing",
  location: "Gwalior, India",
  email: "himanshugoud638@gmail.com",
  phone: "+91 9575228807",
  links: {
    github: "https://github.com/himanshugoud",
    linkedin: "https://www.linkedin.com/in/himanshu-goud-hg27",
    resume: "/resume/Himanshu_Goud_Resume.pdf",
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
  ],
} as const;

export type Site = typeof site;
