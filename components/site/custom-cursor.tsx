"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const x = useSpring(cursorX, { stiffness: 420, damping: 34, mass: 0.35 });
  const y = useSpring(cursorY, { stiffness: 420, damping: 34, mass: 0.35 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    if (!finePointer) {
      return;
    }

    const move = (event: MouseEvent) => {
      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);
    };

    const enter = () => setIsHovering(true);
    const leave = () => setIsHovering(false);
    const selectors = "a, button, input, textarea, [data-cursor='hover']";

    window.addEventListener("mousemove", move);
    const interactive = Array.from(document.querySelectorAll(selectors));
    interactive.forEach((element) => {
      element.addEventListener("mouseenter", enter);
      element.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      interactive.forEach((element) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-4 w-4 rounded-full border border-white/70 mix-blend-difference md:block"
      animate={{ scale: isHovering ? 2.8 : 1, opacity: isHovering ? 0.85 : 1 }}
      transition={{ duration: 0.18 }}
      style={{ x, y }}
    />
  );
}
