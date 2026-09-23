"use client";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import RevealWords from "./RevealWords";

export default function AboutSection(){
 return <section id="about" className="about-section content-col">
   <div className="section-rule"><span className="section-label">( ABOUT / 02 )</span></div>
   <div className="about-grid">
    <div>
      <h2><RevealWords text="I BUILD ACROSS PRODUCTS, SYSTEMS & REAL-WORLD PROBLEMS, THEN SHIP THEM." accentStart={3} accentEnd={8} /></h2>
    </div>
    <div className="about-copy">
      <span className="section-label">( IN SHORT )</span>
      <p className="about-lead">Hi, I’m Himanshu, and I tend to ask <b>“why?”</b> before I write the first line of code.</p>
      <p>I’m a B.Tech student in Mathematics &amp; Computing at Madhav Institute of Technology and Science, Gwalior. I like taking an idea from a blank file to something people can actually rely on — especially <span className="marker">the details that don’t show up in a demo</span>.</p>
      <p>Good software is mostly about noticing the details nobody asked you to fix.</p>
      <p className="hand">still turning ideas into working code.</p>
      <div className="about-tags"><span>{site.education}</span><span>{site.location}</span><span>Open to opportunities</span></div>
    </div>
   </div>
 </section>
}
