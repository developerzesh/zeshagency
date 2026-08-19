"use client";

import { useRef, useCallback } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

type Props = { children: React.ReactNode; className?: string; onClick?: () => void; strength?: number };

export default function MagneticButton({ children, className = '', onClick, strength = 0.15 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef({ left: 0, top: 0, width: 0, height: 0 });
  const x = useMotionValue(0); const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 50, stiffness: 180, mass: 0.8 });
  const springY = useSpring(y, { damping: 50, stiffness: 180, mass: 0.8 });

  const onMouseEnter = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rectRef.current = { left: rect.left, top: rect.top, width: rect.width, height: rect.height };
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const { left, top, width, height } = rectRef.current;
    x.set((e.clientX - left - width / 2) * strength);
    y.set((e.clientY - top - height / 2) * strength);
  }, [x, y, strength]);

  const onMouseLeave = useCallback(() => { x.set(0); y.set(0); }, [x, y]);

  return (
    <m.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </m.div>
  );
}
