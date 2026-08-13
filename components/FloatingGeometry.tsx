"use client";

import { useTheme } from './ThemeContext';

export default function FloatingGeometry() {
  const { isDark } = useTheme();
  const color = isDark ? 'rgba(237,236,231,0.04)' : 'rgba(10,10,10,0.03)';
  const wireColor = isDark ? 'rgba(237,236,231,0.06)' : 'rgba(10,10,10,0.04)';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sphere 1 */}
      <div
        className="absolute top-[15%] left-[20%] w-32 h-32 rounded-full float-y"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
          border: `1px solid ${wireColor}`,
          animationDuration: '6s',
        }}
      />
      {/* Sphere 2 */}
      <div
        className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full float-y"
        style={{
          background: `radial-gradient(circle at 70% 30%, ${color}, transparent 70%)`,
          border: `1px solid ${wireColor}`,
          animationDuration: '8s',
          animationDelay: '2s',
        }}
      />
      {/* Wire octahedron 1 */}
      <div
        className="absolute top-[40%] left-[50%] w-16 h-16 slow-spin"
        style={{
          border: `1px solid ${wireColor}`,
          transform: 'rotate(45deg)',
          animationDuration: '20s',
        }}
      />
      {/* Wire octahedron 2 */}
      <div
        className="absolute bottom-[35%] left-[30%] w-12 h-12 slow-spin-reverse"
        style={{
          border: `1px solid ${wireColor}`,
          transform: 'rotate(30deg)',
          animationDuration: '25s',
        }}
      />
    </div>
  );
}
