"use client";

import dynamic from 'next/dynamic';

const FloatingGeometryCanvas = dynamic(() => import('./FloatingGeometryCanvas'), {
  ssr: false,
});

export default function FloatingGeometry() {
  return <FloatingGeometryCanvas />;
}
