"use client";

import { useTheme } from './ThemeContext';

export default function MorphingShape() {
  const { isDark } = useTheme();
  const color = isDark ? 'rgba(237,236,231,0.03)' : 'rgba(10,10,10,0.02)';
  const wireColor = isDark ? 'rgba(237,236,231,0.05)' : 'rgba(10,10,10,0.03)';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Outer torus-like ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full slow-spin"
        style={{
          border: `1px solid ${wireColor}`,
          animationDuration: '30s',
        }}
      />
      {/* Inner wireframe shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 slow-spin-reverse"
        style={{
          border: `1px solid ${wireColor}`,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          animationDuration: '25s',
        }}
      />
      {/* Center blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 float-y"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          borderRadius: '40% 60% 55% 45% / 55% 40% 60% 45%',
          animationDuration: '7s',
        }}
      />
    </div>
  );
}
