import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useCursor } from './CursorContext';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

function LoaderRing() {
  return (
    <div className="relative w-12 h-12">
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0">
        <svg viewBox="0 0 48 48" className="w-full h-full">
          <circle cx="24" cy="24" r="20" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="28 14 28 14" strokeLinecap="round" opacity="0.7" />
        </svg>
      </motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="absolute inset-[8px]">
        <svg viewBox="0 0 32 32" className="w-full h-full">
          <circle cx="16" cy="16" r="12" fill="none" stroke="white" strokeWidth="0.8" strokeDasharray="14 10 14 10" strokeLinecap="round" opacity="0.35" />
        </svg>
      </motion.div>
      <motion.div animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.1, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </motion.div>
    </div>
  );
}

/* Horizontal drag icon — two opposing arrows */
function DragHIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/80">
      <path d="M4 10H16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 7L4 10L7 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 7L16 10L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Vertical drag icon */
function DragVIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/80">
      <path d="M10 4V16" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M7 7L10 4L13 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 13L10 16L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CustomCursor() {
  const { cursorState, setCursorState } = useCursor();

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(cursorX, { damping: 20, stiffness: 400, mass: 0.3 });
  const ringY = useSpring(cursorY, { damping: 20, stiffness: 400, mass: 0.3 });
  const smoothDotX = useSpring(dotX, { damping: 25, stiffness: 600, mass: 0.15 });
  const smoothDotY = useSpring(dotY, { damping: 25, stiffness: 600, mass: 0.15 });

  const ringScale = useSpring(1, { damping: 30, stiffness: 200, mass: 0.6 });
  const dotScale = useSpring(1, { damping: 30, stiffness: 200, mass: 0.6 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY, dotX, dotY]);

  // Interactive element listeners
  useEffect(() => {
    const handleInteractiveEnter = () => setCursorState('hover');
    const handleInteractiveLeave = () => setCursorState('default');
    const addListeners = () => {
      document.querySelectorAll('a, button, input, textarea, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', handleInteractiveEnter);
        el.addEventListener('mouseleave', handleInteractiveLeave);
      });
    };
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [setCursorState]);

  // Scale ring based on state
  useEffect(() => {
    if (cursorState === 'loading') { ringScale.set(1); dotScale.set(0); return; }
    if (cursorState === 'hover') { ringScale.set(0.5); dotScale.set(2.5); return; }
    if (cursorState === 'drag-h' || cursorState === 'drag-v') { ringScale.set(1.8); dotScale.set(0); return; }
    ringScale.set(1);
    dotScale.set(1);
  }, [cursorState, ringScale, dotScale]);

  const isDragH = cursorState === 'drag-h';
  const isDragV = cursorState === 'drag-v';
  const isDrag = isDragH || isDragV;

  return (
    <>
      {/* Outer ring / contextual shape */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center"
        style={{ x: ringX, y: ringY, scale: ringScale }}
      >
        <AnimatePresence mode="wait">
          {cursorState === 'loading' ? (
            <motion.div
              key="loader"
              initial={{ opacity: 0, scale: 0.3, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.3, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: slowEase }}
            >
              <LoaderRing />
            </motion.div>
          ) : isDrag ? (
            <motion.div
              key="drag"
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.5, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: slowEase }}
              className="w-10 h-10 rounded-full border-[1.5px] border-white/80 flex items-center justify-center"
            >
              {isDragH ? <DragHIcon /> : <DragVIcon />}
            </motion.div>
          ) : (
            <motion.div
              key="ring"
              initial={{ opacity: 0, scale: 0.5, filter: 'blur(6px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.5, filter: 'blur(6px)' }}
              transition={{ duration: 0.6, ease: slowEase }}
              className="w-10 h-10 rounded-full border-[1.5px] border-white/80"
            />
          )}
        </AnimatePresence>
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{ x: smoothDotX, y: smoothDotY, scale: dotScale }}
      >
        <motion.div
          animate={{ opacity: cursorState === 'loading' || isDrag ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-[6px] h-[6px] rounded-full bg-white"
        />
      </motion.div>
    </>
  );
}
