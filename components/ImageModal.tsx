import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slowEase = [0.22, 1, 0.36, 1] as [number, number, number, number];

type Props = {
  images: string[];
  children: React.ReactNode;
  className?: string;
  captions?: string[];
};

export default function ImageModal({ images, children, className = '', captions }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div onClick={() => { setCurrentIndex(0); setIsOpen(true); }} className={`cursor-none ${className}`}>
        {children}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: slowEase }}
            className="fixed inset-0 z-[9990] bg-ink/80 backdrop-blur-2xl flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, filter: 'blur(30px)', scale: 0.88 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              exit={{ opacity: 0, filter: 'blur(24px)', scale: 0.94 }}
              transition={{ duration: 1.2, ease: slowEase }}
              className="relative max-w-5xl max-h-[85vh] mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={images[currentIndex]}
                alt=""
                className="max-w-full max-h-[80vh] object-contain rounded"
                draggable={false}
                initial={{ scale: 1.08, filter: 'blur(16px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1.4, ease: slowEase }}
              />
              {captions?.[currentIndex] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: slowEase }}
                  className="absolute bottom-0 left-0 right-0 bg-ink/40 backdrop-blur-xl rounded-b px-6 py-3"
                >
                  <span className="font-lato text-sm text-paper/80">{captions[currentIndex]}</span>
                </motion.div>
              )}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }} className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ${i === currentIndex ? 'bg-paper w-6' : 'bg-paper/30'}`} />
                  ))}
                </div>
              )}
              <button onClick={() => setIsOpen(false)} className="absolute -top-12 right-0 font-lato text-sm text-paper/50 hover:text-paper transition-colors duration-700">Close ✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
