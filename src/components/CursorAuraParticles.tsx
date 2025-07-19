// CursorAuraParticles.tsx
import React, { useEffect, useRef } from 'react';

const CursorAuraParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const particlesRef = useRef<any[]>([]);
  const fadeOutRef = useRef(false);
  const firstMoveRef = useRef(true);
  const PARTICLE_COUNT = 100;

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particlesRef.current.push({
          x: -1000,
          y: -1000,
          vx: Math.random() * 1 - 0.5,
          vy: Math.random() * 1 - 0.5,
          size: Math.random() * 0.8 + 0.2,
          life: Math.random() * 60 + 60,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      fadeOutRef.current = false;

      if (firstMoveRef.current) {
        createParticles();
        particlesRef.current.forEach((p) => (p.life = 0)); // force burst
        firstMoveRef.current = false;
      }
    };

    const handleMouseLeave = () => {
      fadeOutRef.current = true;
      setTimeout(() => {
        mouseRef.current = { x: -9999, y: -9999 };
        firstMoveRef.current = true;
      }, 300);
    };

    document.body.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      if (particles.length) {
        particles.forEach((p) => {
          p.life--;
          if (p.life <= 0 && !fadeOutRef.current) {
            p.x = mouse.x;
            p.y = mouse.y;
            p.vx = Math.random() * 1 - 0.5;
            p.vy = Math.random() * 1 - 0.5;
            p.life = Math.random() * 60 + 60;
          }

          p.x += p.vx;
          p.y += p.vy;

          ctx.beginPath();
          ctx.fillStyle = `rgba(99, 102, 241, ${fadeOutRef.current ? p.life / 60 : 1})`;
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-50 pointer-events-none"
    />
  );
};

export default CursorAuraParticles;
