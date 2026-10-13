"use client";

import { useEffect, useRef, useState, type PointerEvent, type KeyboardEvent } from "react";

type Point = [number, number, number];
function rotate([x, y, z]: Point, angle: number, tilt: number): Point {
  const rx = x * Math.cos(angle) + z * Math.sin(angle);
  const rz = -x * Math.sin(angle) + z * Math.cos(angle);
  return [rx, y * Math.cos(tilt) - rz * Math.sin(tilt), y * Math.sin(tilt) + rz * Math.cos(tilt)];
}

export function AsciiPlayground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [feedback, setFeedback] = useState("Drag the cube. Tap the ball.");
  const controls = useRef({ yaw: 0, pitch: -0.42, height: 0, velocity: 0, spin: 0, bounces: 0, moves: 0, elapsed: 0 });
  const drag = useRef({ active: false, moved: false, x: 0, y: 0 });
  const refresh = useRef<() => void>(() => {});

  function turnCube(amount = Math.PI / 2) {
    controls.current.yaw += amount;
    controls.current.moves += 1;
    setFeedback(`Cube moved · ${controls.current.moves} ${controls.current.moves === 1 ? "turn" : "turns"}`);
    refresh.current();
  }
  function bounceBall() {
    controls.current.velocity = 520;
    controls.current.spin += 0.7;
    controls.current.bounces += 1;
    setFeedback(`Nice shot · ${controls.current.bounces} ${controls.current.bounces === 1 ? "bounce" : "bounces"}`);
    refresh.current();
  }
  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { active: true, moved: false, x: event.clientX, y: event.clientY };
  }
  function moveCube(event: PointerEvent<HTMLButtonElement>) {
    if (!drag.current.active) return;
    const dx = event.clientX - drag.current.x;
    const dy = event.clientY - drag.current.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) drag.current.moved = true;
    controls.current.yaw += dx * 0.016;
    controls.current.pitch = Math.max(-1.1, Math.min(1.1, controls.current.pitch + dy * 0.012));
    drag.current.x = event.clientX;
    drag.current.y = event.clientY;
    refresh.current();
  }
  function endDrag() {
    if (drag.current.active && drag.current.moved) {
      controls.current.moves += 1;
      setFeedback(`Your angle · ${controls.current.moves} cube moves`);
    }
    drag.current.active = false;
  }
  function cubeKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") turnCube(event.key === "ArrowLeft" ? -0.3 : 0.3);
    else {
      controls.current.pitch = Math.max(-1.1, Math.min(1.1, controls.current.pitch + (event.key === "ArrowUp" ? -0.2 : 0.2)));
      setFeedback("Cube tilted · use arrow keys to explore");
      refresh.current();
    }
  }

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
    let elapsed = controls.current.elapsed;
    let visible = true;
    let running = false;
    let previous = 0;

    function draw(time: number) {
      if (!ctx) return;
      ctx.clearRect(0, 0, 540, 450);
      ctx.font = '11px "Courier New", monospace';
      ctx.textAlign = "center";
      const angle = time * 0.22 + 0.55 + controls.current.yaw;
      const tilt = controls.current.pitch;
      const dots: { x: number; y: number; z: number; color: string; glyph: string }[] = [];
      const colors = ["#e79257", "#a6b993", "#e0d6b7", "#85a8be", "#cb866b", "#c2b877"];
      for (let face = 0; face < 6; face++) {
        const normal: Point = face === 0 ? [1, 0, 0] : face === 1 ? [-1, 0, 0] : face === 2 ? [0, 1, 0] : face === 3 ? [0, -1, 0] : face === 4 ? [0, 0, 1] : [0, 0, -1];
        if (rotate(normal, angle, tilt)[2] <= 0) continue;
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
            const [x, y, z] = rotate(p, angle, tilt);
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
      const activeBounce = controls.current.height > 0 || controls.current.velocity > 0;
      const bounce = activeBounce ? controls.current.height / 145 : Math.abs(Math.sin(time * 1.5));
      const centerY = 316 - (activeBounce ? controls.current.height : bounce * 32);
      const radius = 77;
      for (let y = -radius; y <= radius; y += 8) {
        for (let x = -radius; x <= radius; x += 6) {
          const nx = x / radius;
          const ny = y / radius;
          const distance = nx * nx + ny * ny;
          if (distance > 1) continue;
          const z = Math.sqrt(1 - distance);
          const spin = time * 0.45 + controls.current.spin;
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
      ctx.fillText("01 / drag to rotate", 177, 298);
      ctx.fillText("02 / tap to bounce", 410, 445);
    }

    function tick(now: number) {
      if (!running) return;
      const dt = previous ? Math.min((now - previous) / 1000, 0.04) : 0;
      previous = now;
      if (!paused && !drag.current.active) elapsed += dt;
      controls.current.elapsed = elapsed;
      const physics = controls.current;
      if (physics.height > 0 || physics.velocity > 0) {
        physics.velocity -= 1000 * dt;
        physics.height += physics.velocity * dt;
        physics.spin += dt * 2;
        if (physics.height < 0) {
          physics.height = 0;
          physics.velocity = Math.abs(physics.velocity) > 90 ? -physics.velocity * 0.6 : 0;
        }
      }
      if (now - last > 30) { draw(elapsed); last = now; }
      if (paused && physics.height === 0 && physics.velocity === 0) { running = false; draw(elapsed); return; }
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      const action = controls.current.height > 0 || controls.current.velocity > 0;
      const shouldRun = visible && !document.hidden && !media.matches && (!paused || action);
      if (running === shouldRun) return;
      running = shouldRun;
      cancelAnimationFrame(frame);
      previous = 0;
      if (running) frame = requestAnimationFrame(tick);
      else draw(elapsed);
    }
    refresh.current = () => {
      if (media.matches) { controls.current.velocity = 0; controls.current.height = 0; }
      draw(elapsed);
      sync();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    observer.observe(canvas);
    media.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    draw(elapsed);
    sync();
    return () => {
      running = false;
      refresh.current = () => {};
      cancelAnimationFrame(frame);
      observer.disconnect();
      media.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused]);

  return (
    <div className="ascii-playground">
      <div className="ascii-stage">
        <canvas ref={canvasRef} role="img" aria-label="Interactive ASCII Rubik’s cube and basketball">A Rubik’s cube and basketball drawn with text characters.</canvas>
        <button type="button" className="ascii-hit cube-hit" aria-label="Rotate cube: drag or use arrow keys" aria-describedby="ascii-help" onPointerDown={startDrag} onPointerMove={moveCube} onPointerUp={endDrag} onPointerCancel={endDrag} onLostPointerCapture={endDrag} onKeyDown={cubeKey} onClick={() => { if (!drag.current.moved) turnCube(); drag.current.moved = false; }} />
        <button type="button" className="ascii-hit ball-hit" aria-label="Bounce basketball" aria-describedby="ascii-help" onClick={bounceBall} />
      </div>
      <p id="ascii-help" className="ascii-help">Drag or use arrow keys on the cube · Tap the ball</p>
      <div className="ascii-controls">
        <button type="button" onClick={() => turnCube()}>Turn cube ↻</button>
        <button type="button" onClick={bounceBall}>Bounce ball ↑</button>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play autoplay ▷" : "Pause autoplay Ⅱ"}</button>
      </div>
      <p className="ascii-feedback" role="status">{feedback}</p>
    </div>
  );
}
