import { selectedWork } from "@/lib/profile";

function ProjectPreview({ legal }: { legal: boolean }) {
  return (
    <div className={`project-preview ${legal ? "legal-preview" : "resume-preview"}`} aria-hidden="true">
      <div className="preview-toolbar"><span className="accent">●</span> {legal ? "Legal LLM" : "EzResume"} <span className="preview-caption">Interface concept</span></div>
      {legal ? <div className="legal-content"><h4>Ask a legal question.</h4><p>Start with the source.</p><div className="mock-search">Search Indian law <span>↗</span></div>{["Constitution", "Case law", "Legal context"].map((label, i) => <div className="source-row" key={label}><span className="accent">0{i + 1}</span>{label}<span>↗</span></div>)}</div>
        : <div className="resume-content"><div className="resume-sidebar">{["Profile", "Experience", "Education", "Projects", "Skills"].map((label, i) => <div key={label} className={i === 1 ? "selected" : ""}>{label}<span>↗</span></div>)}</div><div className="resume-paper"><h4>Your next chapter.</h4><p>A résumé that sounds like you.</p>{["EXPERIENCE", "PROJECTS", "EDUCATION"].map(label => <div className="resume-lines" key={label}><strong>{label}</strong><i /><i /><i /></div>)}</div></div>}
    </div>
  );
}

export function ProjectsPlaceholder() {
  return (
    <section id="projects" className="container-shell work-section">
      <div className="section-title"><div><p className="section-kicker">Selected work</p><h2>Things I’ve made<span className="accent">.</span></h2></div><a href="https://github.com/lakshyabhaintwal" className="editorial-link">GitHub ↗</a></div>
      <div className="projects-grid">
        {selectedWork.map((project, index) => (
          <article key={project.title} className={index < 2 ? "featured-project" : "small-project"}>
            {index < 2 && <ProjectPreview legal={index === 1} />}
            <div className="project-heading"><h3>{project.title}</h3>{project.github && <a href={project.github} aria-label={`View ${project.title} on GitHub`}>↗</a>}</div>
            <p>{index === 0 ? "A résumé builder that starts with your story." : index === 1 ? "Answers grounded in Indian legal sources." : project.description}</p>
            <p className="project-tech">{project.tech}</p>
            <details className="project-details"><summary>Behind the build <span>+</span></summary><ul>{project.points.map(point => <li key={point}>{point}</li>)}</ul><div className="project-impact">{project.impact.map(impact => <span key={impact}>{impact}</span>)}</div>{project.demo && <a href={project.demo} className="editorial-link">Live project ↗</a>}</details>
          </article>
        ))}
      </div>
    </section>
  );
}
