import { skillGroups } from "@/lib/profile";

export function Skills() {
  return (
    <section id="skills" className="skill-ribbon" aria-label="Technical skills">
      <div className="container-shell">
        <p className="section-kicker">A few tools in my corner</p>
        <div className="skill-ribbon-items">{["Python", "C++", "PyTorch", "FastAPI", "TypeScript", "SQL", "FAISS"].map(skill => <span key={skill}>{skill}<i> / </i></span>)}</div>
        <details className="all-skills"><summary>Full toolkit +</summary><div>{skillGroups.map(group => <p key={group.title}><strong>{group.title}</strong> {group.skills.join(" · ")}</p>)}</div></details>
      </div>
    </section>
  );
}
