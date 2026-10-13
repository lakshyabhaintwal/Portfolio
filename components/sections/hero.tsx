import Link from "next/link";
import { profile } from "@/lib/profile";
import { AsciiPlayground } from "@/components/site/ascii-playground";

export function Hero() {
  return (
    <section id="home" className="container-shell portfolio-hero">
      <div>
        <p className="section-kicker">Software engineer · India</p>
        <h1>I build software<span className="accent">.</span><br /><span className="hero-secondary">And keep figuring<br />things out.</span></h1>
        <p className="hero-description">From backend systems to applied AI, I like turning difficult problems into software that works.</p>
        <div className="hero-actions">
          <Link href="#projects" className="primary-link">See my work ↘</Link>
          <a href={profile.resumePath} className="editorial-link" download>Résumé ↗</a>
        </div>
        <p className="hero-note">A little code. A little curiosity.</p>
      </div>
      <AsciiPlayground />
    </section>
  );
}
