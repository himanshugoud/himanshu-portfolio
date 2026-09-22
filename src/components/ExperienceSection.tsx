"use client";
import { motion } from "framer-motion";

const timeline=[
 {year:"'23",title:"Madhav Institute of Technology and Science",detail:"B.Tech, Mathematics & Computing · Gwalior, India",tag:"B.Tech",color:"#17389e"},
 {year:"'23",title:"Ebenezer Hr. Sec. School",detail:"Higher Secondary, CBSE · Gwalior, India",tag:"Higher Secondary",color:"#2854df"},
 {year:"'21",title:"Pragati Vidya Peeth Morar",detail:"High School, CBSE · Gwalior, India",tag:"High School",color:"#7593ee"},
];
export default function ExperienceSection(){return <section className="experience content-col">
 <div className="experience-left">
  <span className="section-label">( OVER THE YEARS / 03 )</span>
  <div className="experience-stats"><div><b className="stat-accent">02</b><span>Projects shipped</span></div><div><b>02</b><span>Certifications</span></div><div><b>'23</b><span>Building since</span></div></div>
  <h2>LEARNING, BUILDING,<br/><span>AND SHIPPING.</span></h2>
  <p>From academic foundations to full-stack products, I’ve kept adding new things to the stack and putting them to work.</p>
 </div>
 <div className="timeline"><div className="timeline-line"/>{timeline.map((e,i)=><motion.div key={e.title} className="timeline-item" initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><div className="timeline-year" style={{color:e.color}}>{e.year}</div><div className="timeline-dot" style={{borderColor:e.color}}/><div className="timeline-content"><div className="timeline-top"><h3>{e.title}</h3><span>{e.tag}</span></div><p>{e.detail}</p></div></motion.div>)}</div>
 </section>}
