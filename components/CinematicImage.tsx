"use client";

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Props = {
  src: string;
  alt?: string;
  className?: string;
  aspect?: '4/3' | '16/9' | '21/9' | '1/1' | '3/2';
  parallaxStrength?: number;
  revealDuration?: number;
  revealDelay?: number;
  hoverZoom?: number;
  rounded?: string;
  overlayStrength?: number;
};

export default function CinematicImage({
  src,
  alt = '',
  className = '',
  aspect = '4/3',
  parallaxStrength = 0.08,
  revealDuration = 1.8,
  revealDelay = 0,
  hoverZoom = 1.06,
  rounded = '',
  overlayStrength = 0.82,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax: image shifts vertically as you scroll through the container
  const imageY = useTransform(scrollYProgress, [0, 1], [`${parallaxStrength * 100}%`, `${-parallaxStrength * 100}%`]);

  // Cinematic overlay fade — tied to scroll position for smooth reveal
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.15, 0.35], [overlayStrength, overlayStrength * 0.3, 0]);

  const aspectClass = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    '21/9': 'aspect-[21/9]',
    '1/1': 'aspect-square',
    '3/2': 'aspect-[3/2]',
  }[aspect];

  return (
    <m.div
      ref={containerRef}
      className={`relative overflow-hidden bg-surface ${aspectClass} ${rounded} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: revealDuration * 0.5, delay: revealDelay, ease: slowEase }}
    >
      {/* Parallax image layer — oversized to allow vertical movement */}
      <m.div
        style={{ y: imageY }}
        className="absolute inset-[-18%]"
      >
        <m.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          draggable={false}
          initial={{ scale: 1.18, filter: 'blur(24px)', opacity: 0.6 }}
          whileInView={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{
            scale: { duration: revealDuration, delay: revealDelay + 0.2, ease: slowEase },
            filter: { duration: revealDuration * 0.8, delay: revealDelay + 0.1, ease: slowEase },
            opacity: { duration: revealDuration * 0.6, delay: revealDelay, ease: slowEase },
          }}
          whileHover={{
            scale: hoverZoom,
            transition: { duration: 1.8, ease: slowEase },
          }}
        />
      </m.div>

      {/* Cinematic reveal overlay — paper-colored, fades on scroll */}
      <m.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-paper pointer-events-none"
      />

      {/* Soft vignette for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(10,10,10,0.03) 100%)',
        }}
      />
    </m.div>
  );
}
