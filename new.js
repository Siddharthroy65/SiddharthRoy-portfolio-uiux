(() => {
  const root = document.getElementById('bga-10-root');
  const cv = document.getElementById('bga-10-canvas');
  if (!root || !cv) return;
  const ctx = cv.getContext('2d');
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LINK = 132;
  let w = 0, h = 0, dpr = 1, parts = [], raf = 0, live = false;
  const mouse = { x: -9999, y: -9999 };

  const size = () => {
    const r = root.getBoundingClientRect();
    w = r.width; h = r.height;
    dpr = Math.min(devicePixelRatio || 1, 2);
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(120, Math.max(28, Math.round(w * h / 13000)));
    parts = Array.from({ length: n }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .34, vy: (Math.random() - .5) * .34,
      r: Math.random() * 1.6 + .9
    }));
    const out = document.getElementById('bga-10-n');
    if (out) out.textContent = String(n);
  };

  const frame = () => {
    ctx.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = mouse.x - p.x, dy = mouse.y - p.y, d2 = dx * dx + dy * dy;
      if (d2 < 26000 && d2 > 1) { p.x += dx / d2 * 22; p.y += dy / d2 * 22; }
    }
    ctx.beginPath();
    for (let i = 0; i < parts.length; i++) {
      for (let j = i + 1; j < parts.length; j++) {
        const dx = parts[i].x - parts[j].x, dy = parts[i].y - parts[j].y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) {
          ctx.moveTo(parts[i].x, parts[i].y);
          ctx.lineTo(parts[j].x, parts[j].y);
        }
      }
    }
    ctx.strokeStyle = 'rgba(120,220,220,0.16)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = 'rgba(190,245,240,0.85)';
    for (const p of parts) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    if (live) raf = requestAnimationFrame(frame);
  };

  const start = () => { if (!live && !calm) { live = true; raf = requestAnimationFrame(frame); } };
  const stop = () => { live = false; cancelAnimationFrame(raf); };

  size();
  if (calm) { frame(); } else {
    new IntersectionObserver((es) => es.forEach(e => e.isIntersecting ? start() : stop()), { threshold: 0 }).observe(root);
  }

  let t;
  addEventListener('resize', () => { clearTimeout(t); t = setTimeout(() => { size(); if (calm) frame(); }, 160); });
  root.addEventListener('pointermove', (e) => {
    const r = root.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  }, { passive: true });
  root.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
})();