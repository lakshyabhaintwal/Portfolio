import Image from "next/image";
import { profile } from "@/lib/profile";

export function Hero() {
  return (
    <section id="home" className="intro-scene">
      <div className="container-shell intro-grid">
        <div className="intro-copy">
          <p className="section-kicker"><span className="accent">नमस्ते</span> / Hello, world.</p>
          <h1>I’m Lakshya<span className="accent">.</span><br /><span>Always curious.</span></h1>
          <p className="hero-description">I build software, explore applied AI, and enjoy figuring out how things work.</p>
          <div className="identity-code">
            <div className="code-title"><span><i /><i /><i /></span> a little about me.ts</div>
            <code><span className="code-muted">const</span> lakshya = {"{"}<br />
              &nbsp;&nbsp;focus: <span className="code-string">[&quot;systems&quot;, &quot;applied AI&quot;]</span>,<br />
              &nbsp;&nbsp;studying: <span className="code-string">&quot;Electronics @ Manipal&quot;</span>,<br />
              &nbsp;&nbsp;offScreen: <span className="code-string">[&quot;basketball&quot;, &quot;Rubik’s cube&quot;]</span><br />
              {"}"};</code>
          </div>
          <div className="hero-actions"><a href="#projects" className="primary-link">Explore my work ↘</a><a href={profile.resumePath} className="editorial-link" download>Résumé ↗</a></div>
        </div>
        <figure className="portrait-card">
          <div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><span>01 / LB</span></div>
          <Image src={profile.photoPath} alt="Lakshya Bhaintwal in a computer lab, giving two thumbs up" width={666} height={490} priority sizes="(max-width: 800px) 90vw, 540px" />
          <figcaption><strong>Lakshya Bhaintwal</strong><span>Software engineer · India</span></figcaption>
          <span className="portrait-note">Usually working on something.<br />Probably curious about something else.</span>
        </figure>
      </div>
      <a href="#about" className="intro-scroll">A little further down <span>↓</span></a>
    </section>
  );
}
