"use client";

import { useEffect, useState } from "react";

const links = [{label:"About",href:"#about"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];

export function Navbar() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries.find(item => item.isIntersecting);
      if (entry) setActive("#" + entry.target.id);
    }, {rootMargin:"-15% 0px -60% 0px"});
    links.forEach(link => {const element = document.querySelector(link.href); if(element) observer.observe(element);});
    return () => observer.disconnect();
  },[]);
  return (
    <header className="floating-header">
      <nav className="floating-nav" aria-label="Main navigation">
        <a href="#home" className="nav-monogram" aria-label="Lakshya Bhaintwal home">lb<span>.</span></a>
        <div>{links.map(link => <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined}>{link.label}</a>)}</div>
        <a href="/lakshya-bhaintwal-resume.pdf" className="nav-resume" download>Résumé ↗</a>
      </nav>
    </header>
  );
}
