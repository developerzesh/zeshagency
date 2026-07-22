import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  image: string;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  caption?: string;
};

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ImagePreview({ image, children, className = '', size = 'md', caption }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0, above: true });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const dims = {
    sm: { w: 200, h: 150 },
    md: { w: 300, h: 220 },
    lg: { w: 400, h: 290 },
  };

  const updatePosition = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const d = dims[size];
    const x = rect.left + rect.width / 2 - d.w / 2;
    const yAbove = rect.top - d.h - 16;
    const yBelow = rect.bottom + 16;
    const above = yAbove > 16;
    setCoords({
      x: Math.max(12, Math.min(x, window.innerWidth - d.w - 12)),
      y: above ? yAbove : yBelow,
      above,
    });
  }, [size]);

  useEffect(() => {
    if (isVisible) {
      updatePosition();
      const onScroll = () => updatePosition();
      const onResize = () => updatePosition();
      window.addEventListener('scroll', onScroll, true);
      window.addEventListener('resize', onResize);
      return () => {
        window.removeEventListener('scroll', onScroll, true);
        window.removeEventListener('resize', onResize);
      };
    }
  }, [isVisible, updatePosition]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => { setIsVisible(true); requestAnimationFrame(updatePosition); }}
      onMouseLeave={() => setIsVisible(false)}
      className={`inline-block ${className}`}
    >
      {children}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, filter: 'blur(40px)', scale: 0.65 }}
            animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
            exit={{ opacity: 0, filter: 'blur(28px)', scale: 0.88 }}
            transition={{
              duration: 1.0,
              ease: slowEase,
              filter: { duration: 0.75, ease: slowEase },
              scale: { duration: 1.0, ease: slowEase },
            }}
            style={{
              position: 'fixed',
              left: coords.x,
              top: coords.y,
              zIndex: 9990,
              pointerEvents: 'none',
            }}
          >
            <div className="overflow-hidden rounded-2xl border border-border/30 shadow-[0_24px_60px_-12px_rgba(10,10,10,0.12)]">
              <motion.img
                src={image}
                alt=""
                draggable={false}
                initial={{ scale: 1.25, filter: 'blur(24px)', opacity: 0 }}
                animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
                transition={{
                  duration: 1.2,
                  ease: slowEase,
                  filter: { duration: 0.9, ease: slowEase },
                  opacity: { duration: 0.5, delay: 0.05, ease: slowEase },
                }}
                style={{ width: dims[size].w, height: dims[size].h, objectFit: 'cover', display: 'block' }}
              />
              {caption && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: slowEase }}
                  className="bg-paper/95 backdrop-blur-sm px-4 py-2.5 border-t border-border/20"
                >
                  <span className="font-lato text-[10px] tracking-[0.1em] uppercase text-text-muted">{caption}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
