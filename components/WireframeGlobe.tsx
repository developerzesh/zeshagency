"use client";

import dynamic from 'next/dynamic';

const WireframeGlobeCanvas = dynamic(() => import('./WireframeGlobeCanvas'), {
  ssr: false,
});

export default function WireframeGlobe() {
  return <WireframeGlobeCanvas />;
}
