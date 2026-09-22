"use client";

import { motion } from "framer-motion";

const chips=[
  "Mood Indigo · IIT Bombay",
  "Public Relations Representative",
  "6th / 530 participants",
  "74,090 points",
  "Soft Computing Research Society",
  "Technical workshops",
];

export default function BeyondCodeSection(){
  return <section className="off-clock content-col">
    <div className="off-title">off the<br/>clock</div>
    <div className="off-chips">{chips.map((x)=><motion.span key={x} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>{x}</motion.span>)}</div>
  </section>;
}
