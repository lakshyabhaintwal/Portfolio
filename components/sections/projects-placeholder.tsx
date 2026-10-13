"use client";

import { selectedWork } from "@/lib/profile";

const categories = ["FULL STACK / GENERATIVE AI", "LANGUAGE MODELS / RETRIEVAL", "COMPUTER VISION / EDGE"];
const titles = ["EzResume", "Legal LLM", "Edge vision"];
const descriptions = ["A résumé builder that starts with your story.", "Answers grounded in Indian legal sources.", "License plate recognition, built for the edge."];

export function ProjectsPlaceholder() {
  return (
    <section id="projects" className="container-shell work-section">
      <div className="section-title"><div><p className="section-kicker">02 / Selected projects</p><h2>Ideas into something real<span className="accent">.</span></h2></div><a href="https://github.com/lakshyabhaintwal" className="editorial-link">GitHub ↗</a></div>
      <div className="story-gallery">
        {selectedWork.map((project,index) => (
          <article key={project.title} className={index < 3 ? "story-project" : "extra-project"}>
            {index < 3 ? <a href={`#project-${index}`} className={`story-cover story-cover-${index}`} aria-label={`Explore ${project.title}`} onClick={() => {
              const details = document.getElementById(`project-${index}`);
              if (details instanceof HTMLDetailsElement) details.open = true;
            }}>
              <span className="story-image" aria-hidden="true" /><span className="story-shade" aria-hidden="true" />
              <span className="story-top"><small>{categories[index]}</small><strong>{titles[index]}</strong></span>
              <span className="story-bottom"><span>{descriptions[index]}</span><span className="story-arrow">↗</span></span>
            </a> : <div className="project-heading"><h3>{project.title}</h3>{project.github && <a href={project.github} aria-label={`View ${project.title} on GitHub`}>↗</a>}</div>}
            {index >= 3 && <p>{project.description}</p>}
            <p className="project-tech">{project.tech}</p>
            <details id={`project-${index}`} className="project-details"><summary>Behind the build <span>+</span></summary><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul><div className="project-impact">{project.impact.map(impact => <span key={impact}>{impact}</span>)}</div><div className="project-links">{project.github && <a href={project.github} className="editorial-link">Source code ↗</a>}{project.demo && <a href={project.demo} className="editorial-link">Live project ↗</a>}</div></details>
          </article>
        ))}
      </div>
    </section>
  );
}
