"use client";

import { m } from 'framer-motion';
import MagneticButton from './MagneticButton';

type Props = {
  label: string;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md';
  className?: string;
  animated?: boolean;
};

export default function CircleArrowButton({ label, onClick, href, size = 'md', className = '', animated = true }: Props) {
  const sizeClasses = size === 'sm'
    ? 'w-10 h-10'
    : 'w-12 h-12';

  const arrowSize = size === 'sm' ? 'text-xs' : 'text-sm';

  const content = (
    <span className={`group inline-flex items-center gap-3 bg-ink text-paper px-6 py-3 rounded-lg font-lato text-sm font-medium hover:bg-signal transition-colors duration-500 ${className}`}>
      <span className={`${sizeClasses} rounded-full bg-signal flex items-center justify-center group-hover:bg-white transition-colors duration-300`}>
        {animated ? (
          <m.span animate={{ x: [0, 3, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} className={`${arrowSize} text-ink group-hover:text-signal transition-colors duration-300 will-change-transform`}>→</m.span>
        ) : (
          <span className={`${arrowSize} text-ink group-hover:text-signal transition-colors duration-300`}>→</span>
        )}
      </span>
      <span className="font-lato text-sm font-medium text-paper">{label}</span>
    </span>
  );

  return (
    <MagneticButton strength={0.2}>
      {href ? (
        <a href={href}>{content}</a>
      ) : (
        <button onClick={onClick}>{content}</button>
      )}
    </MagneticButton>
  );
}
