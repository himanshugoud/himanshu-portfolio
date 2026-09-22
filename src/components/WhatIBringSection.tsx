"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { categories, toneClasses, type Category } from "@/data/categories";
import RevealWords from "./RevealWords";

export default function WhatIBringSection() {
  return (
    <section id="services" className="bring-section">
      <div className="section-heading bring-heading">
        <span className="section-label">( WHAT I BRING / 01 )</span>
        <h2><RevealWords text="WHAT I BRING TO THE TABLE." accentWords={1} /></h2>
        <p>Five focus areas, and one stubborn habit of curiosity.</p>
      </div>
      <div className="card-row">
        {categories.map((card,i)=><RevealCard key={card.n} card={card} index={i}/>) }
      </div>
    </section>
  );
}

function RevealCard({card,index}:{card:Category,index:number}) {
  const ref=useRef<HTMLElement>(null);
  const {scrollYProgress}=useScroll({target:ref,offset:["start 0.9","start 0.55"]});
  const y=useTransform(scrollYProgress,[0,1],[32,0]);
  const r=useTransform(scrollYProgress,[0,1],[card.rotate,0]);
  const s=useTransform(scrollYProgress,[0,1],[.96,1]);
  return <motion.article ref={ref} style={{y,rotate:r,scale:s}} className={`bring-card ${toneClasses[card.tone]}`}>
    <card.Icon className="card-icon" strokeWidth={1.7}/>
    <div className="card-number">{card.n}</div>
    <h3>{card.title[0]}<br/>{card.title[1]}</h3>
    <ul>{card.bullets.map(b=><li key={b}>› {b}</li>)}</ul>
  </motion.article>;
}
