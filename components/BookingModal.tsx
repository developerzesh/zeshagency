"use client";

import { useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function BookingModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-4xl h-[85vh] max-h-[750px] bg-paper dark:bg-surface border border-border/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border/60 bg-paper/90 dark:bg-surface/90 backdrop-blur-sm">
              <div>
                <h3 className="font-syne text-lg font-700 text-ink">Schedule a Free Consultation</h3>
                <p className="font-lato text-xs text-text-muted">Select a date and time that works best for your team</p>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-surface/80 dark:bg-paper/10 text-ink flex items-center justify-center hover:bg-signal hover:text-white transition-colors duration-300 font-bold text-sm"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Content - Google Calendar Iframe */}
            <div className="flex-1 w-full h-full bg-white">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1JQPC02FPca9xI9-igjpHIQnsebptjP1Gv47JTKLYnTAiNJ-_FaFsmnTBcgvnLwtla1BIXzQEx?gv=true"
                style={{ border: 0 }}
                className="w-full h-full"
                frameBorder="0"
                title="Google Calendar Appointment Scheduling"
              />
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
