"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.4, 0.8] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-5 z-40">
      <nav className="container-shell flex h-14 items-center justify-between border-b border-white/10 bg-ink/55 px-0 backdrop-blur-xl">
        <Link href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-xs font-black text-ink transition hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.24em] text-white/80 sm:block">{profile.name}</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-white/8 hover:text-white",
                  active === id && "text-white shadow-[inset_0_-1px_0_rgba(255,255,255,0.55)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="#contact"
          className="editorial-link text-xs font-semibold uppercase tracking-[0.24em] text-white"
        >
          Say hello ↗
        </Link>
      </nav>
      <div className="container-shell mt-3 overflow-x-auto lg:hidden">
        <div className="flex w-max min-w-full items-center gap-1 rounded-full border border-white/10 bg-ink/80 p-1 backdrop-blur-xl">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold text-muted transition",
                  active === id && "bg-white/[0.07] text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
