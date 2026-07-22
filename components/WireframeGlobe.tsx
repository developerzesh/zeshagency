import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useTheme } from './ThemeContext';

function Globe({ colors }: { colors: { ink: string; paper: string; signal: string } }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) { meshRef.current.rotation.y = t * 0.08; meshRef.current.rotation.x = Math.sin(t * 0.05) * 0.06; }
    if (ringRef.current) { ringRef.current.rotation.z = t * 0.04; ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.03) * 0.06; }
  });
  return (
    <group>
      <mesh ref={meshRef}><sphereGeometry args={[2.2, 32, 32]} /><meshStandardMaterial color={colors.ink} transparent opacity={0.025} wireframe /></mesh>
      <mesh><sphereGeometry args={[2.15, 64, 64]} /><meshStandardMaterial color={colors.paper} transparent opacity={0.25} /></mesh>
      <mesh ref={ringRef}><torusGeometry args={[2.8, 0.006, 16, 100]} /><meshStandardMaterial color={colors.signal} transparent opacity={0.3} /></mesh>
      <mesh rotation={[Math.PI / 2, 0.3, 0]}><torusGeometry args={[3.1, 0.004, 16, 100]} /><meshStandardMaterial color={colors.ink} transparent opacity={0.08} /></mesh>
      {Array.from({ length: 16 }).map((_, i) => {
        const phi = Math.acos(-1 + (2 * i) / 16);
        const theta = Math.sqrt(16 * Math.PI) * phi;
        return (
          <mesh key={i} position={[2.22 * Math.cos(theta) * Math.sin(phi), 2.22 * Math.sin(theta) * Math.sin(phi), 2.22 * Math.cos(phi)]}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial color={colors.signal} emissive={colors.signal} emissiveIntensity={1.2} />
          </mesh>
        );
      })}
    </group>
  );
}

export default function WireframeGlobe() {
  const { isDark } = useTheme();
  const colors = {
    ink: isDark ? '#EDECE7' : '#0A0A0A',
    paper: isDark ? '#0A0A0A' : '#F6F5F0',
    signal: '#F4A536',
  };

  return (
    <div className="absolute inset-0 three-canvas">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <ambientLight intensity={0.6} />
        <Globe colors={colors} />
      </Canvas>
    </div>
  );
}
