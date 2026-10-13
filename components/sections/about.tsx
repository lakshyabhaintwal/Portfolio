import Image from "next/image";
import { profile } from "@/lib/profile";

export function About() {
  return (
    <section id="about" className="container-shell about-section">
      <figure>
        <p className="section-kicker">A bit about me</p>
        <Image src={profile.photoPath} alt="Lakshya Bhaintwal in a computer lab, giving two thumbs up" width={666} height={490} className="about-photo" sizes="(max-width: 760px) 100vw, 440px" />
        <figcaption>{profile.name} <span>Software engineer · India</span></figcaption>
      </figure>
      <div className="about-copy">
        <h2>Curious by default<span className="accent">.</span></h2>
        <p>I’m studying electronics at Manipal and building across software and machine learning. I care about how things work—and how to make them work better.</p>
        <p className="text-muted">My work spans backend services, computer vision, and language models. I enjoy the details that turn an idea into something reliable: clear architecture, faster inference, and code that’s easy to build on.</p>
        <a href={profile.github} className="editorial-link">More on GitHub ↗</a>
      </div>
    </section>
  );
}
