"use client";

import dynamic from 'next/dynamic';

const MorphingShapeCanvas = dynamic(() => import('./MorphingShapeCanvas'), {
  ssr: false,
});

export default function MorphingShape() {
  return <MorphingShapeCanvas />;
}
