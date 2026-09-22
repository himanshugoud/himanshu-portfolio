import Image from "next/image";
import { projects } from "@/data/projects";

export default function WorkSection(){return <section id="work" className="work-section content-col">
 <div className="section-rule"><span className="section-label">( SELECTED WORK / 05 )</span></div>
 <div className="work-intro"><h2>THINGS I’VE<br/><span>BUILT.</span></h2><p>Full-stack products built around real problems, from emergency donor matching to live parking availability.</p></div>
 <div className="work-list">{projects.map((p,i)=><article className="work-item" key={p.title}><div className="work-copy"><span className="section-label">{p.n} / {p.category}</span><h3>{p.title}</h3><p>{p.oneLiner}</p><div className="work-links"><a href={p.liveUrl} target="_blank" rel="noreferrer">Live project ↗</a><a href={p.githubUrl} target="_blank" rel="noreferrer">GitHub ↗</a></div></div><a className="work-image" href={p.liveUrl} target="_blank" rel="noreferrer" data-cursor-label="View live site" data-cursor-color={p.accent} data-cursor-ink={p.accentInk}> <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="(min-width: 900px) 55vw, 100vw" className="object-cover object-top"/></a></article>)}</div>
 </section>}
