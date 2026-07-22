import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

function Sphere({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (!mesh.current) return; mesh.current.rotation.x = state.clock.getElapsedTime() * 0.15; mesh.current.rotation.z = state.clock.getElapsedTime() * 0.1; });
  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh ref={mesh} position={position}><sphereGeometry args={[1, 48, 48]} /><meshStandardMaterial color={color} transparent opacity={0.03} roughness={0.1} metalness={0.1} /></mesh>
    </Float>
  );
}

function Wire({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<THREE.Mesh>(null);
  useFrame((state) => { if (!mesh.current) return; mesh.current.rotation.x = state.clock.getElapsedTime() * 0.2; mesh.current.rotation.y = state.clock.getElapsedTime() * 0.15; });
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={mesh} position={position}><octahedronGeometry args={[0.5]} /><meshStandardMaterial color={color} transparent opacity={0.04} wireframe /></mesh>
    </Float>
  );
}

export default function FloatingGeometry() {
  const { isDark } = useTheme();
  const inkColor = isDark ? '#EDECE7' : '#0A0A0A';

  return (
    <div className="absolute inset-0 three-canvas">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.8} />
        <Sphere position={[-2, 1, -2]} color={inkColor} />
        <Sphere position={[2.5, -1, -3]} color={inkColor} />
        <Wire position={[0, 0, 0]} color={inkColor} />
        <Wire position={[-1.5, -2, 1]} color={inkColor} />
      </Canvas>
    </div>
  );
}
