"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

function Particles({ count = 800, mouse, color }: { count?: number; mouse: React.MutableRefObject<[number, number]>; color: string }) {
  const mesh = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, [count]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    mesh.current.rotation.x = time * 0.01;
    mesh.current.rotation.y = time * 0.015;
    mesh.current.rotation.x += mouse.current[1] * 0.00008;
    mesh.current.rotation.y += mouse.current[0] * 0.00008;
  });

  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial size={0.02} color={color} transparent opacity={0.1} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Lines({ mouse, color }: { mouse: React.MutableRefObject<[number, number]>; color: string }) {
  const group = useRef<THREE.Group>(null);
  const lineGeometries = useMemo(() => {
    const result: THREE.BufferGeometry[] = [];
    for (let i = 0; i < 4; i++) {
      const points: THREE.Vector3[] = [];
      const startX = (Math.random() - 0.5) * 12;
      const startY = (Math.random() - 0.5) * 12;
      const startZ = (Math.random() - 0.5) * 4;
      for (let j = 0; j < 12; j++) {
        points.push(new THREE.Vector3(startX + j * 0.6 + (Math.random() - 0.5) * 0.15, startY + Math.sin(j * 0.3) * 0.3, startZ + (Math.random() - 0.5) * 0.1));
      }
      result.push(new THREE.BufferGeometry().setFromPoints(points));
    }
    return result;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.008;
    group.current.rotation.y += mouse.current[0] * 0.00003;
  });

  const material = useMemo(() => new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.03 }), [color]);

  return (
    <group ref={group}>
      {lineGeometries.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, material)} />
      ))}
    </group>
  );
}

export default function ParticleCanvas() {
  const mouse = useRef<[number, number]>([0, 0]);
  const { isDark } = useTheme();
  const inkColor = isDark ? '#EDECE7' : '#0A0A0A';

  return (
    <div className="absolute inset-0 three-canvas" onMouseMove={(e) => { mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2]; }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true }} style={{ background: 'transparent' }}>
        <Particles count={600} mouse={mouse} color={inkColor} />
        <Lines mouse={mouse} color={inkColor} />
      </Canvas>
    </div>
  );
}
