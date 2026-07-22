import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

function Shape({ color }: { color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (!mesh.current) return; const t = state.clock.getElapsedTime(); mesh.current.rotation.x = t * 0.06; mesh.current.rotation.y = t * 0.08; });
  return (
    <Float speed={0.6} rotationIntensity={0.1} floatIntensity={0.3}>
      <mesh ref={mesh}><torusKnotGeometry args={[1.6, 0.4, 100, 24, 2, 3]} /><MeshDistortMaterial color={color} transparent opacity={0.025} distort={0.3} speed={1.5} roughness={0.2} metalness={0.3} /></mesh>
    </Float>
  );
}

function Inner({ color }: { color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (!mesh.current) return; const t = state.clock.getElapsedTime(); mesh.current.rotation.x = -t * 0.04; mesh.current.rotation.z = t * 0.07; });
  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={mesh}><icosahedronGeometry args={[1.1, 1]} /><meshStandardMaterial color={color} transparent opacity={0.025} wireframe /></mesh>
    </Float>
  );
}

export default function MorphingShape() {
  const { isDark } = useTheme();
  const inkColor = isDark ? '#EDECE7' : '#0A0A0A';

  return (
    <div className="absolute inset-0 three-canvas">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.7} />
        <Shape color={inkColor} />
        <Inner color={inkColor} />
      </Canvas>
    </div>
  );
}
