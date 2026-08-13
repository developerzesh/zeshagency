"use client";

import { useTheme } from './ThemeContext';

export default function WireframeGlobe() {
  const { isDark } = useTheme();
  const inkColor = isDark ? 'rgba(237,236,231,0.04)' : 'rgba(10,10,10,0.03)';
  const signalColor = '#F4A536';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Globe wireframe */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full slow-spin"
        style={{
          border: `1px solid ${inkColor}`,
          animationDuration: '40s',
        }}
      />
      {/* Inner sphere */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-68 h-68 rounded-full"
        style={{
          background: `radial-gradient(circle at 40% 40%, ${isDark ? 'rgba(10,10,10,0.3)' : 'rgba(246,245,240,0.3)'}, transparent 70%)`,
        }}
      />
      {/* Ring 1 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full slow-spin"
        style={{
          border: `1px solid ${signalColor}`,
          opacity: 0.2,
          animationDuration: '25s',
          transform: 'translate(-50%, -50%) rotateX(60deg)',
        }}
      />
      {/* Ring 2 */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full slow-spin-reverse"
        style={{
          border: `0.5px solid ${inkColor}`,
          opacity: 0.15,
          animationDuration: '35s',
          transform: 'translate(-50%, -50%) rotateX(75deg) rotateZ(20deg)',
        }}
      />
      {/* Dots on globe surface */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 130;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full float-y"
            style={{
              background: signalColor,
              boxShadow: `0 0 4px ${signalColor}`,
              top: `calc(50% + ${y}px)`,
              left: `calc(50% + ${x}px)`,
              animationDuration: `${5 + (i % 3)}s`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
}
