"use client";

import { useState } from "react";
import { skillGroups } from "@/lib/profile";

export function Skills() {
  const [paused, setPaused] = useState(false);
  return (
    <section id="skills" className="skill-ribbon" aria-label="Technical skills">
      <div className="container-shell">
        <p className="section-kicker">A few tools in my corner</p>
        <div className="skill-marquee" data-paused={paused}><div className="skill-track">{[0, 1].map(copy => <div className="skill-ribbon-items" key={copy} aria-hidden={copy === 1}>{["Python", "C++", "PyTorch", "FastAPI", "TypeScript", "SQL", "FAISS"].map(skill => <span key={skill}>{skill}<i> / </i></span>)}</div>)}</div></div>
        <button className="ribbon-toggle" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play ribbon ▷" : "Pause ribbon Ⅱ"}</button>
        <details className="all-skills"><summary>Full toolkit +</summary><div>{skillGroups.map(group => <p key={group.title}><strong>{group.title}</strong> {group.skills.join(" · ")}</p>)}</div></details>
      </div>
    </section>
  );
}
