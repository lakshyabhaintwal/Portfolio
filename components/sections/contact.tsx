import { contactItems, profile } from "@/lib/profile";

export function Contact() {
  return (
    <section id="contact" className="container-shell contact-section">
      <div><p className="section-kicker">Got something interesting in mind?</p><h2><a href={`mailto:${profile.email}`}>Let’s talk<span className="accent">. ↗</span></a></h2></div>
      <div className="contact-links">{contactItems.map(item => <a className="editorial-link" key={item.label} href={item.href}>{item.label} ↗</a>)}</div>
    </section>
  );
}
