"use client";

import Image from "next/image";
import { Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { motion } from "framer-motion";
import RevealWords from "./RevealWords";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-copy">
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.55,ease}} className="hero-eyebrow">
            <span /> FULL-STACK DEVELOPER
          </motion.div>
          <motion.h1 initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08,ease}}>
            <RevealWords text="HELLO, I’M" as="span" /><br />
            <span className="hero-name">HIMANSHU</span> GOUD
            <Sparkles className="hero-spark" aria-hidden="true" />
          </motion.h1>
          <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.18,ease}}>
            A full-stack developer building thoughtful digital products where engineering meets design.
          </motion.p>
          <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.55,delay:.25,ease}} className="hero-actions">
            <a href="#work" className="pill primary">View Work <span>↘</span></a>
            <a href={site.links.resume} target="_blank" rel="noreferrer" className="pill secondary">Download Resume</a>
          </motion.div>
        </div>

        <motion.div className="hero-art" initial={{opacity:0, y:18}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15,ease}}>
          <div className="hero-arch" aria-hidden="true" />
          <div className="hero-ring" aria-hidden="true" />
          <svg className="hero-badge" viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="badgePath" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" fill="none" />
            </defs>
            <circle cx="60" cy="60" r="52" fill="#17150f" />
            <circle cx="60" cy="60" r="46" fill="none" stroke="#f7f6f2" strokeWidth="1" strokeDasharray="2 5" />
            <text fill="#f7f6f2" fontFamily="var(--mono)" fontSize="12" letterSpacing="0.22em" style={{ textTransform: "uppercase" }}>
              <textPath href="#badgePath" startOffset="0%">open to work · say hi · open to work · say hi ·</textPath>
            </text>
          </svg>
          <div className="hero-sticker">That’s me!</div>
          <Image src="/images/profile/himanshu-cutout.png" alt="Himanshu Goud" fill priority sizes="360px" className="hero-photo" />
          <div className="hero-location">GWALIOR, INDIA</div>
        </motion.div>
      </div>
    </section>
  );
}
