"use client";

import { useEffect, useRef } from 'react';
import { useTheme } from './ThemeContext';

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      container.style.transform = `translate(${currentX}px, ${currentY}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const handleMouse = (e: MouseEvent) => {
      targetX = (e.clientX - window.innerWidth / 2) * 0.01;
      targetY = (e.clientY - window.innerHeight / 2) * 0.01;
    };

    rafId = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  const dotColor = isDark ? 'rgba(237,236,231,0.08)' : 'rgba(10,10,10,0.06)';
  const lineColor = isDark ? 'rgba(237,236,231,0.03)' : 'rgba(10,10,10,0.02)';

  const dotImage = [
    'radial-gradient(1px 1px at 10% 20%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 30% 60%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 50% 10%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 70% 40%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 90% 80%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 15% 75%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 45% 35%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 65% 90%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 85% 15%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 25% 45%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 55% 70%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 75% 25%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 5% 55%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 35% 85%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 95% 50%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 40% 5%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 60% 55%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 80% 70%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 20% 95%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 100% 30%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 0% 100%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 50% 50%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 33% 33%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 66% 66%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 12% 42%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 78% 12%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 42% 88%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 88% 38%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 22% 68%, ' + dotColor + ' 50%, transparent 100%)',
    'radial-gradient(1px 1px at 62% 22%, ' + dotColor + ' 50%, transparent 100%)',
  ].join(',\n          ');

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" ref={containerRef}>
      {/* Rotating dot field */}
      <div className="particle-field absolute inset-0" style={{
        backgroundImage: dotImage,
        backgroundSize: '100% 100%',
      } as React.CSSProperties} />

      {/* Subtle wavy lines via CSS */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" viewBox="0 0 1400 800" preserveAspectRatio="none">
        <path d="M 100 400 Q 300 350 500 400 T 900 400 T 1300 400" fill="none" stroke={isDark ? '#EDECE7' : '#0A0A0A'} strokeWidth="1" className="particle-line" />
        <path d="M 200 500 Q 400 450 600 500 T 1000 500 T 1400 500" fill="none" stroke={isDark ? '#EDECE7' : '#0A0A0A'} strokeWidth="0.8" className="particle-line" style={{ animationDelay: '2s' }} />
        <path d="M 50 300 Q 250 250 450 300 T 850 300 T 1250 300" fill="none" stroke={isDark ? '#EDECE7' : '#0A0A0A'} strokeWidth="0.6" className="particle-line" style={{ animationDelay: '4s' }} />
        <path d="M 150 600 Q 350 550 550 600 T 950 600 T 1350 600" fill="none" stroke={isDark ? '#EDECE7' : '#0A0A0A'} strokeWidth="0.5" className="particle-line" style={{ animationDelay: '6s' }} />
      </svg>
    </div>
  );
}
