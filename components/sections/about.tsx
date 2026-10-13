import { AsciiPlayground } from "@/components/site/ascii-playground";

export function About() {
  return (
    <section id="about" className="container-shell personal-section">
      <div className="personal-copy">
        <p className="section-kicker">01 / A bit about me</p>
        <h2>Code.<br />Court.<br /><span className="accent">Cube.</span></h2>
        <p>I’m an electronics student at Manipal who keeps coming back to software. My work spans backend systems, computer vision, and language models.</p>
        <p className="text-muted">Away from the keyboard, there’s basketball and a Rubik’s cube. Different ways to stay curious, work through a challenge, and try again.</p>
        <a href="#experience" className="editorial-link">The story so far ↗</a>
      </div>
      <div className="personal-playground"><span className="playground-label">A SMALL WINDOW INTO MY WORLD</span><AsciiPlayground /><p>One more shot. One more solve.</p></div>
    </section>
  );
}
