"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function MotionPage({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const main = root.current;
    if (!main) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let dispose = () => {};
    function setup() {
      dispose();
      if (!main || reduced.matches) return;
      const animations: Animation[] = [];
      const targets = Array.from(main.querySelectorAll<HTMLElement>(".intro-copy > *, .portrait-card, .personal-copy > *, .personal-playground, .work-section .section-title, .story-project, .extra-project, .contact-section"));
      targets.forEach(el => { el.style.opacity = "0"; });
      const observer = new IntersectionObserver(entries => {
        entries.filter(entry => entry.isIntersecting).forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          const delay = el.parentElement?.classList.contains("intro-copy") ? Array.from(el.parentElement.children).indexOf(el) * 85 : index * 80;
          el.style.opacity = "1";
          const animation = el.animate([{ opacity: 0, translate: "0 32px" }, { opacity: 1, translate: "0 0" }], {duration: 800, delay, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards"});
          animations.push(animation);
          observer.unobserve(el);
        });
      }, {threshold: 0.08, rootMargin: "0px 0px -25px 0px"});
      targets.forEach(el => observer.observe(el));
      const portrait = main.querySelector<HTMLElement>(".portrait-card");
      let frame = 0;
      const updateScroll = () => {
        frame = 0;
        if (portrait && fine.matches) {
          const hero = main.querySelector<HTMLElement>(".intro-scene");
          const offset = Math.min(Math.max(-(hero?.getBoundingClientRect().top ?? 0), 0), 850);
          portrait.style.setProperty("--portrait-shift", `${offset * -0.065}px`);
        }
      };
      const onScroll = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
      window.addEventListener("scroll", onScroll, {passive:true});
      updateScroll();
      const tiltElements = Array.from(main.querySelectorAll<HTMLElement>(".portrait-card, .story-cover"));
      const move = (event: PointerEvent) => {
        if (!fine.matches || event.pointerType !== "mouse") return;
        const el = event.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--tilt-x", `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`);
        el.style.setProperty("--tilt-y", `${((event.clientX - rect.left) / rect.width - 0.5) * 7}deg`);
      };
      const leave = (event: PointerEvent) => {
        const el = event.currentTarget as HTMLElement;
        el.style.setProperty("--tilt-x", "0deg");
        el.style.setProperty("--tilt-y", "0deg");
      };
      tiltElements.forEach(el => {el.addEventListener("pointermove", move); el.addEventListener("pointerleave", leave);});
      dispose = () => {
        observer.disconnect();
        animations.forEach(animation => animation.cancel());
        targets.forEach(el => el.style.removeProperty("opacity"));
        window.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(frame);
        portrait?.style.removeProperty("--portrait-shift");
        tiltElements.forEach(el => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
          el.style.removeProperty("--tilt-x");
          el.style.removeProperty("--tilt-y");
        });
      };
    }
    setup();
    reduced.addEventListener("change", setup);
    return () => { dispose(); reduced.removeEventListener("change", setup); };
  }, []);
  return <main ref={root} className="motion-page">{children}</main>;
}
