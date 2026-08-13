"use client";

import { useRef } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

type Props = { children: React.ReactNode; className?: string; onClick?: () => void; strength?: number };

export default function MagneticButton({ children, className = '', onClick, strength = 0.3 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 40, stiffness: 150, mass: 0.8 });
  const springY = useSpring(y, { damping: 40, stiffness: 150, mass: 0.8 });

  return (
    <m.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={(e) => { if (!ref.current) return; const rect = ref.current.getBoundingClientRect(); x.set((e.clientX - rect.left - rect.width / 2) * strength); y.set((e.clientY - rect.top - rect.height / 2) * strength); }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      onClick={onClick}
      className={`inline-block ${className}`}
    >
      {children}
    </m.div>
  );
}
