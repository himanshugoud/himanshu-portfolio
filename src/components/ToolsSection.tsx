"use client";
import { motion } from "framer-motion";

const tools=[
  {name:'React.js',desc:'Daily driver',pct:95,color:'#2854df'},
  {name:'Node.js & Express',desc:'Core stack',pct:88,color:'#c5283d'},
  {name:'MongoDB',desc:'Core stack',pct:85,color:'#3f9142'},
  {name:'JavaScript / TypeScript',desc:'Core stack',pct:90,color:'#f56549'},
  {name:'Firebase',desc:'Comfortable',pct:75,color:'#ffc800'},
  {name:'Git & GitHub',desc:'Daily driver',pct:92,color:'#2854df'},
];

const aiTools=[
  {name:'Claude',desc:'Architecture & debugging'},
  {name:'Claude Code',desc:'Shipping & refactors'},
  {name:'ChatGPT',desc:'Rubber-duck & docs'},
  {name:'GitHub Copilot',desc:'Inline completion'},
];

export default function ToolsSection(){return <section className="tools-section content-col"><div className="tools-panel">
  <div className="tools-head"><span className="section-label">( TOOLKIT / 04 )</span><span className="hand">still adding to it ↘</span></div>
  <h2>THE TOOLS ON<br/>MY BENCH.</h2>
  <p className="tools-intro">AI stays in the loop, never at the wheel — it speeds up the typing, the decisions stay mine.</p>
  <div className="tool-grid">{tools.map((t,i)=>
    <motion.div key={t.name} className="tool-row" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}>
      <div className="tool-row-top"><strong>{t.name}</strong><span>{t.desc}</span></div>
      <div className="tool-bar-track"><motion.div className="tool-bar-fill" style={{background:t.color}} initial={{width:0}} whileInView={{width:`${t.pct}%`}} viewport={{once:true}} transition={{duration:.8,delay:i*.05+.1,ease:[0.22,1,0.36,1]}}/></div>
    </motion.div>
  )}</div>
  <div className="also"><span>ALSO</span>{['VS Code','Postman','Vite','Tailwind CSS','MongoDB Atlas'].map(x=><b key={x}>{x}</b>)}</div>
  <div className="ai-loop">
    <div className="ai-loop-head"><span className="ai-dot"/>AI in the workflow</div>
    <div className="ai-loop-grid">{aiTools.map(t=><div key={t.name} className="ai-loop-row"><strong>{t.name}</strong><span>{t.desc}</span></div>)}</div>
  </div>
</div></section>}
