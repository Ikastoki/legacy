interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

const COLORS = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#03a9f4', '#009688', '#8bc34a', '#ffeb3b', '#ff9800', '#ff5722'];

export function fireConfetti(duration = 3000): void {
  const existing = document.getElementById('confettiCanvas');
  if (existing) existing.remove();

  const canvas = document.createElement('canvas');
  canvas.id = 'confettiCanvas';
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.body.appendChild(canvas);

  const particles: Particle[] = [];
  const particleCount = 150;
  const gravity = 0.15;
  const drift = 0.1;
  let startTime = performance.now();
  let animId = 0;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * -1,
      vx: (Math.random() - 0.5) * 4,
      vy: Math.random() * 3 + 2,
      w: Math.random() * 10 + 4,
      h: Math.random() * 6 + 3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 8,
      opacity: 1,
    });
  }

  function animate(): void {
    const elapsed = performance.now() - startTime;
    if (elapsed > duration) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.remove();
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const fadeStart = duration * 0.7;

    for (const p of particles) {
      p.vy += gravity;
      p.vx += (Math.random() - 0.5) * drift;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;

      if (elapsed > fadeStart) {
        p.opacity = Math.max(0, 1 - (elapsed - fadeStart) / (duration - fadeStart));
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }

    animId = requestAnimationFrame(animate);
  }

  animId = requestAnimationFrame(animate);

  const style = document.createElement('style');
  style.id = 'confettiStyle';
  style.textContent = `
    #confettiCanvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 9999;
    }
  `;
  document.head.appendChild(style);
}
