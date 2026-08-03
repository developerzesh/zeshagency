import { motion } from 'framer-motion';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function LineGrid({ className = '' }: { className?: string }) {
  const cols = 40;
  const rows = 30;
  const spacing = 48;

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="lineGridFade" x1="1" y1="0" x2="0" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.12" />
            <stop offset="50%" stopColor="white" stopOpacity="0.06" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="lineGridMask">
            <rect width="100%" height="100%" fill="url(#lineGridFade)" />
          </mask>
        </defs>
        <g mask="url(#lineGridMask)">
          {Array.from({ length: cols + 1 }).map((_, i) => (
            <motion.line
              key={`v-${i}`}
              x1={i * spacing}
              y1="0"
              x2={i * spacing}
              y2="100%"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-ink"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.4 + i * 0.02, ease: slowEase }}
            />
          ))}
          {Array.from({ length: rows + 1 }).map((_, i) => (
            <motion.line
              key={`h-${i}`}
              x1="0"
              y1={i * spacing}
              x2="100%"
              y2={i * spacing}
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-ink"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, delay: 0.6 + i * 0.02, ease: slowEase }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
