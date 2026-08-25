'use client';

import { useEffect } from 'react';

export default function ContentProtection() {
  useEffect(() => {
    // 1. Prevent Right-Click (Context Menu)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // 2. Prevent Copy, Cut, and Paste actions
    const handleCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // 3. Prevent DevTools shortcuts (F12, Ctrl+Shift+I, Ctrl+U)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrMeta = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();

      if (
        e.key === 'F12' ||
        (isCtrlOrMeta && key === 'u') ||
        (isCtrlOrMeta && e.shiftKey && key === 'i') ||
        (isCtrlOrMeta && e.shiftKey && key === 'j') ||
        (isCtrlOrMeta && (key === 'c' || key === 'v' || key === 'x' || key === 'a'))
      ) {
        e.preventDefault();
      }
    };

    // Attach listeners globally
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopyPaste);
    document.addEventListener('cut', handleCopyPaste);
    document.addEventListener('paste', handleCopyPaste);
    document.addEventListener('keydown', handleKeyDown);

    // Clean up listeners when component unmounts
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopyPaste);
      document.removeEventListener('cut', handleCopyPaste);
      document.removeEventListener('paste', handleCopyPaste);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
