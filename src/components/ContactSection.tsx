"use client";
import { site } from "@/lib/site";

export default function ContactSection(){return <section id="contact" className="contact-section">
  <div className="contact-panel content-col">
    <span className="section-label">( LET’S TALK / 07 )</span>
    <h2>TELL ME WHAT<br/>YOU’RE <span>BUILDING.</span></h2>
    <p className="hand">I’ll ask why.</p>
    <div className="contact-links">
      <a className="pill primary" href={`mailto:${site.email}`}>Email me ↗</a>
      <a className="pill secondary dark" href={site.links.resume} target="_blank" rel="noreferrer">Download Resume</a>
    </div>
    <div className="contact-caps">
      <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      <a href={site.links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
    </div>
    <div className="contact-bottom">
      <span>© {new Date().getFullYear()} {site.name} · built at my desk in Gwalior, mostly at night</span>
      <a href={`mailto:${site.email}`}>Say hi anytime →</a>
    </div>
  </div>
</section>}
