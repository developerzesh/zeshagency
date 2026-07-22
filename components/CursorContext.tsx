"use client";

import { createContext, useContext, useState, useCallback, useRef } from 'react';

type CursorState = 'default' | 'hover' | 'loading' | 'drag-h' | 'drag-v';

interface CursorContextValue {
  cursorState: CursorState;
  setCursorState: (state: CursorState) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const CursorContext = createContext<CursorContextValue>({
  cursorState: 'default',
  setCursorState: () => { },
  startLoading: () => { },
  stopLoading: () => { },
});

export function useCursor() { return useContext(CursorContext); }

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorState, setCursorState] = useState<CursorState>('default');
  const loadingTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const startLoading = useCallback(() => {
    setCursorState('loading');
    if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
    loadingTimeout.current = setTimeout(() => { setCursorState('default'); }, 3000);
  }, []);

  const stopLoading = useCallback(() => {
    if (loadingTimeout.current) clearTimeout(loadingTimeout.current);
    setCursorState('default');
  }, []);

  return (
    <CursorContext.Provider value={{ cursorState, setCursorState, startLoading, stopLoading }}>
      {children}
    </CursorContext.Provider>
  );
}
