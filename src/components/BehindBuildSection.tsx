"use client";
import { motion } from "framer-motion";

const lessons=[
  {n:"01",title:"One bug I underestimated.",takeaway:"A five-minute fix took two days.",body:"A session-isolation bug in RaktSetu looked trivial until I traced it to how the client was caching auth state across tabs. Now I suspect the framework before I suspect my own logic — and usually end up checking both anyway."},
  {n:"02",title:"My biggest challenge.",takeaway:"Explaining a decision is harder than making it.",body:"I know why I structured an API a certain way. Saying that out loud in a review, clearly enough that it doesn't sound like an excuse, has taught me almost as much as writing the code did."},
  {n:"03",title:"One thing I'd do differently.",takeaway:"I'd write the tests before I trusted the demo.",body:"Early on, \u201cit works on my machine\u201d felt like enough. Now a feature isn't done until it's survived someone else actively trying to break it."},
  {n:"04",title:"What building has taught me.",takeaway:"Shipping beats perfecting.",body:"A project that's live and a little rough teaches you more than one that's polished and stuck on a branch. I'd rather ship something real, then iterate in public."},
];

export default function BehindBuildSection(){return <section className="lessons-wrap">
  <div className="lessons-panel content-col">
    <span className="section-label">( LESSONS / 06 )</span>
    <h2>BEHIND THE BUILD.</h2>
    <div className="lessons-list">
      {lessons.map((l,i)=>(
        <motion.div key={l.n} className="lesson-row" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.07}}>
          <span className="lesson-n">{l.n}</span>
          <span className="lesson-title">{l.title}</span>
          <span className="lesson-body"><b>{l.takeaway}</b>{l.body}</span>
        </motion.div>
      ))}
    </div>
    <div className="desk-block">
      <div className="desk-block-head">
        <span className="hand">and here's where I actually build.</span>
        <span className="section-label">MY SETUP, FOR REAL</span>
      </div>
      <div className="desk-frame">
        <div className="desk-placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="4" width="20" height="13" rx="1.5"/><path d="M8 21h8M12 17v4"/></svg>
          <p>Add a real desk photo at<br/><code>/public/images/personal/desk.jpg</code><br/>and swap the placeholder below for an &lt;Image/&gt;.</p>
        </div>
      </div>
    </div>
  </div>
</section>}
