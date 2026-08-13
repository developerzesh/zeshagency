"use client";

import { LazyMotion, domAnimation, m } from 'framer-motion';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];
type Props = { children: React.ReactNode };

export default function PageTransition({ children }: Props) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, filter: 'blur(40px)', scale: 0.97 }}
        animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
        exit={{ opacity: 0, filter: 'blur(20px)', scale: 0.98 }}
        transition={{ duration: 1.4, ease: slowEase }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
