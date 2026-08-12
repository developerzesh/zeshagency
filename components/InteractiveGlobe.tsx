"use client";

import dynamic from 'next/dynamic';

const InteractiveGlobeCanvas = dynamic(() => import('./InteractiveGlobeCanvas'), {
  ssr: false,
});

export default function InteractiveGlobe() {
  return <InteractiveGlobeCanvas />;
}
