"use client";

import { m } from 'framer-motion';

type Props = { children: React.ReactNode; className?: string; delay?: number; direction?: 'up' | 'down' | 'left' | 'right'; duration?: number };

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function RevealText({ children, className = '', direction = 'up', duration = 1.4 }: Props) {
  const offsets = { up: { y: 50 }, down: { y: -50 }, left: { x: 50 }, right: { x: -50 } };
  return (
    <m.div
      initial={{ opacity: 0, filter: 'blur(28px)', ...offsets[direction] }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration,
        ease: slowEase,
        opacity: { duration: duration * 0.65, ease: slowEase },
        filter: { duration: duration * 0.8, ease: slowEase },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
