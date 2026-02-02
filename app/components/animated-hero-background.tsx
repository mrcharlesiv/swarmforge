'use client';

import { useEffect, useRef } from 'react';

export function AnimatedHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let time = 0;
    let isActive = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const drawGradient = () => {
      if (!isActive) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Clear canvas
      ctx.fillStyle = '#0a0f1c';
      ctx.fillRect(0, 0, width, height);

      // Animate gradient positions
      time += 0.002;
      
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Blob 1 - Cyan (top-left area, moves in circle)
      const blob1X = width * (0.3 + Math.sin(time) * 0.1 + mx * 0.1);
      const blob1Y = height * (0.2 + Math.cos(time * 0.7) * 0.1 + my * 0.1);
      const gradient1 = ctx.createRadialGradient(
        blob1X, blob1Y, 0,
        blob1X, blob1Y, width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      gradient1.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)');
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // Blob 2 - Purple (top-right area)
      const blob2X = width * (0.7 + Math.cos(time * 0.8) * 0.08 - mx * 0.05);
      const blob2Y = height * (0.25 + Math.sin(time * 0.6) * 0.08 + my * 0.05);
      const gradient2 = ctx.createRadialGradient(
        blob2X, blob2Y, 0,
        blob2X, blob2Y, width * 0.35
      );
      gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.08)');
      gradient2.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Blob 3 - Subtle cyan (bottom area)
      const blob3X = width * (0.5 + Math.sin(time * 0.5) * 0.15);
      const blob3Y = height * (0.8 + Math.cos(time * 0.4) * 0.1);
      const gradient3 = ctx.createRadialGradient(
        blob3X, blob3Y, 0,
        blob3X, blob3Y, width * 0.5
      );
      gradient3.addColorStop(0, 'rgba(34, 211, 238, 0.04)');
      gradient3.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient3;
      ctx.fillRect(0, 0, width, height);

      animationRef.current = requestAnimationFrame(drawGradient);
    };

    const drawStaticGradient = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.fillStyle = '#0a0f1c';
      ctx.fillRect(0, 0, width, height);

      // Static cyan blob
      const gradient1 = ctx.createRadialGradient(
        width * 0.3, height * 0.2, 0,
        width * 0.3, height * 0.2, width * 0.4
      );
      gradient1.addColorStop(0, 'rgba(6, 182, 212, 0.12)');
      gradient1.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)');
      gradient1.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      // Static purple blob
      const gradient2 = ctx.createRadialGradient(
        width * 0.7, height * 0.25, 0,
        width * 0.7, height * 0.25, width * 0.35
      );
      gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.08)');
      gradient2.addColorStop(0.5, 'rgba(139, 92, 246, 0.03)');
      gradient2.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isActive = false;
        cancelAnimationFrame(animationRef.current);
      } else {
        isActive = true;
        drawGradient();
      }
    };

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (prefersReducedMotion) {
      drawStaticGradient();
    } else {
      drawGradient();
    }

    return () => {
      isActive = false;
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
