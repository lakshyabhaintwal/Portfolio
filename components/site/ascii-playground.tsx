"use client";

import { useEffect, useRef, useState } from "react";

type Point = [number, number, number];
function rotate([x, y, z]: Point, angle: number): Point {
  const rx = x * Math.cos(angle) + z * Math.sin(angle);
  const rz = -x * Math.sin(angle) + z * Math.cos(angle);
  const tilt = -0.42;
  return [rx, y * Math.cos(tilt) - rz * Math.sin(tilt), y * Math.sin(tilt) + rz * Math.cos(tilt)];
}

export function AsciiPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = 540 * ratio;
    canvas.height = 450 * ratio;
    ctx.scale(ratio, ratio);
    let frame = 0;
    let last = -100;
    let elapsed = 0;
    let visible = true;
    let running = false;
    let previous = 0;

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, 540, 450);
      ctx.font = '11px "Courier New", monospace';
      ctx.textAlign = "center";
      const angle = time * 0.22 + 0.55;
      const dots: { x: number; y: number; z: number; color: string; glyph: string }[] = [];
      const colors = ["#e79257", "#a6b993", "#e0d6b7", "#85a8be", "#cb866b", "#c2b877"];
      for (let face = 0; face < 6; face++) {
        const normal: Point = face === 0 ? [1, 0, 0] : face === 1 ? [-1, 0, 0] : face === 2 ? [0, 1, 0] : face === 3 ? [0, -1, 0] : face === 4 ? [0, 0, 1] : [0, 0, -1];
        if (rotate(normal, angle)[2] <= 0) continue;
        for (let i = 0; i < 27; i++) {
          for (let j = 0; j < 27; j++) {
            if (i % 9 < 2 || j % 9 < 2) continue;
            const u = (i / 26 - 0.5) * 2;
            const v = (j / 26 - 0.5) * 2;
            let p: Point = face === 0 ? [1, u, v] : face === 1 ? [-1, u, v] : face === 2 ? [u, 1, v] : face === 3 ? [u, -1, v] : face === 4 ? [u, v, 1] : [u, v, -1];
            if (p[1] < -0.34) {
              const twist = Math.sin(time * 0.65) * 0.55;
              p = [p[0] * Math.cos(twist) + p[2] * Math.sin(twist), p[1], -p[0] * Math.sin(twist) + p[2] * Math.cos(twist)];
            }
            const [x, y, z] = rotate(p, angle);
            dots.push({ x: 177 + x * 73, y: 158 + y * 73, z, color: colors[(face + Math.floor(i / 9) + Math.floor(j / 9)) % colors.length], glyph: ":+*##"[(i + j * 3) % 5] });
          }
        }
      }
      dots.sort((a, b) => a.z - b.z);
      const cells = new Map<string, typeof dots[number]>();
      for (const dot of dots) cells.set(`${Math.round(dot.x / 6)},${Math.round(dot.y / 9)}`, dot);
      for (const dot of cells.values()) {
        ctx.globalAlpha = 0.5 + (dot.z + 1.8) / 7;
        ctx.fillStyle = dot.color;
        ctx.fillText(dot.glyph, Math.round(dot.x / 6) * 6, Math.round(dot.y / 9) * 9);
      }
      ctx.globalAlpha = 1;
      const bounce = Math.abs(Math.sin(time * 1.5));
      const centerY = 316 - bounce * 52;
      const radius = 77;
      for (let y = -radius; y <= radius; y += 8) {
        for (let x = -radius; x <= radius; x += 6) {
          const nx = x / radius;
          const ny = y / radius;
          const distance = nx * nx + ny * ny;
          if (distance > 1) continue;
          const z = Math.sqrt(1 - distance);
          const spin = time * 0.45;
          const seam = Math.abs(nx * Math.cos(spin) + z * Math.sin(spin)) < 0.065 || Math.abs(ny) < 0.05 || Math.abs(nx - 0.55 * Math.cos(ny * 2.5)) < 0.055 || Math.abs(nx + 0.55 * Math.cos(ny * 2.5)) < 0.055;
          ctx.fillStyle = seam ? "#685044" : "#efa064";
          ctx.globalAlpha = seam ? 0.65 : 0.4 + z * 0.6;
          ctx.fillText(seam ? ":" : ".:+*#"[Math.abs(Math.round(x + y)) % 5], 411 + x, centerY + y);
        }
      }
      ctx.globalAlpha = 0.35 - bounce * 0.15;
      ctx.fillStyle = "#c8b7a5";
      for (let x = -70; x < 70; x += 7) ctx.fillText("·", 411 + x * (1 - bounce * 0.25), 412 + Math.cos(x / 70 * Math.PI) * 3);
      ctx.globalAlpha = 1;
      ctx.font = '11px "Courier New", monospace';
      ctx.fillStyle = "#b5b7b7";
      ctx.fillText("01 / always another move", 177, 298);
      ctx.fillText("02 / off the keyboard", 410, 445);
    }

    function tick(now: number) {
      if (!running) return;
      if (previous) elapsed += Math.min(now - previous, 100);
      previous = now;
      if (now - last > 45) { draw(elapsed / 1000); last = now; }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      const shouldRun = visible && !document.hidden && !media.matches && !paused;
      if (running === shouldRun) return;
      running = shouldRun;
      cancelAnimationFrame(frame);
      previous = 0;
      if (running) frame = requestAnimationFrame(tick);
      else draw(elapsed / 1000);
    }
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(canvas);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    draw(0);
    sync();
    return () => {
      running = false;
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return (
    <div className="ascii-playground">
      <canvas ref={canvasRef} role="img" aria-label="A rotating ASCII Rubik’s cube and a bouncing ASCII basketball">A Rubik’s cube and basketball drawn with text characters.</canvas>
      <button type="button" className="motion-toggle" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play motion ↗" : "Pause motion Ⅱ"}</button>
    </div>
  );
}
