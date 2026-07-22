import { useState, useRef, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

// ── Geographic helpers ──────────────────────────────────────────────
function latLngToVec3(lat: number, lng: number, r: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -(r * Math.sin(phi) * Math.cos(theta)),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

function createArc(start: THREE.Vector3, end: THREE.Vector3, segments = 64): THREE.Vector3[] {
  const points: THREE.Vector3[] = [];
  const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
  const dist = start.distanceTo(end);
  mid.normalize().multiplyScalar(2.2 + dist * 0.15);
  const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
  for (let i = 0; i <= segments; i++) points.push(curve.getPoint(i / segments));
  return points;
}

// ── Data ───────────────────────────────────────────────────────────
const offices = [
  { city: 'New York', type: 'HQ', lat: 40.7128, lng: -74.006, team: '18 people' },
  { city: 'London', type: 'Studio', lat: 51.5074, lng: -0.1278, team: '12 people' },
  { city: 'Tokyo', type: 'Studio', lat: 35.6762, lng: 139.6503, team: '8 people' },
  { city: 'Dubai', type: 'Office', lat: 25.2048, lng: 55.2708, team: '6 people' },
];

const arcPairs: [number, number][] = [[0, 1], [1, 3], [3, 2], [2, 0]];

// ── Globe mesh ─────────────────────────────────────────────────────
function GlobeSphere() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.015; });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#0A0A0A" transparent opacity={0.018} roughness={0.9} />
    </mesh>
  );
}

// ── Grid lines (lat / lng) ────────────────────────────────────────
function GridLines() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.015; });

  const lines = useMemo(() => {
    const result: THREE.Vector3[][] = [];
    const R = 2.005;
    // Latitude lines every 30°
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lng = 0; lng <= 360; lng += 3) pts.push(latLngToVec3(lat, lng - 180, R));
      result.push(pts);
    }
    // Longitude lines every 30°
    for (let lng = -180; lng < 180; lng += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -90; lat <= 90; lat += 3) pts.push(latLngToVec3(lat, lng, R));
      result.push(pts);
    }
    return result;
  }, []);

  return (
    <group ref={ref}>
      {lines.map((pts, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        return <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#0A0A0A', transparent: true, opacity: 0.04 }))} />;
      })}
    </group>
  );
}

// ── Pulsing marker ────────────────────────────────────────────────
function Marker({ office, onHover }: { office: typeof offices[0]; onHover: (o: typeof offices[0] | null) => void }) {
  const pos = useMemo(() => latLngToVec3(office.lat, office.lng, 2.02), [office.lat, office.lng]);
  const ringRef = useRef<THREE.Mesh>(null);
  const dotRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ringRef.current) {
      const s = 1 + Math.sin(t * 1.8) * 0.25;
      ringRef.current.scale.set(s, s, s);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.35 - Math.sin(t * 1.8) * 0.15;
    }
    if (dotRef.current) {
      const s = hovered ? 1.8 : 1;
      dotRef.current.scale.lerp(new THREE.Vector3(s, s, s), 0.08);
    }
  });

  return (
    <group position={pos}>
      {/* Glow ring */}
      <mesh ref={ringRef}>
        <ringGeometry args={[0.04, 0.07, 32]} />
        <meshBasicMaterial color="#F4A536" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      {/* Solid dot */}
      <mesh
        ref={dotRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); onHover(office); document.body.style.cursor = 'none'; }}
        onPointerOut={() => { setHovered(false); onHover(null); }}
      >
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshBasicMaterial color="#F4A536" />
      </mesh>
      {/* Hover label */}
      {hovered && (
        <Html
          center
          distanceFactor={8}
          style={{ pointerEvents: 'none', whiteSpace: 'nowrap' }}
        >
          <div className="glass-submenu rounded-lg px-4 py-3 text-center" style={{ minWidth: '120px' }}>
            <p className="font-syne text-sm font-800 text-ink">{office.city}</p>
            <p className="font-lato text-[10px] tracking-[0.15em] uppercase text-signal mt-0.5">{office.type}</p>
            <p className="font-lato text-[10px] text-text-muted mt-1">{office.team}</p>
          </div>
        </Html>
      )}
    </group>
  );
}

// ── Arc connections ────────────────────────────────────────────────
function Arcs() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, dt) => { if (ref.current) ref.current.rotation.y += dt * 0.015; });

  const arcs = useMemo(() => {
    return arcPairs.map(([a, b]) => {
      const start = latLngToVec3(offices[a].lat, offices[a].lng, 2.01);
      const end = latLngToVec3(offices[b].lat, offices[b].lng, 2.01);
      return createArc(start, end);
    });
  }, []);

  return (
    <group ref={ref}>
      {arcs.map((pts, i) => {
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        return <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: '#F4A536', transparent: true, opacity: 0.12 }))} />;
      })}
    </group>
  );
}

// ── Controls wrapper ───────────────────────────────────────────────
function Controls() {
  const { gl } = useThree();
  return (
    <OrbitControls
      enableZoom={false}
      enablePan={false}
      autoRotate
      autoRotateSpeed={0.25}
      dampingFactor={0.04}
      enableDamping
      rotateSpeed={0.4}
      minPolarAngle={Math.PI * 0.2}
      maxPolarAngle={Math.PI * 0.8}
    />
  );
}

// ── Main export ────────────────────────────────────────────────────
export default function InteractiveGlobe() {
  const [hoveredOffice, setHoveredOffice] = useState<typeof offices[0] | null>(null);
  const handleHover = useCallback((o: typeof offices[0] | null) => setHoveredOffice(o), []);

  return (
    <div className="relative w-full" style={{ aspectRatio: '1/1', maxHeight: '700px' }}>
      <Canvas
        camera={{ position: [0, 1.5, 5.5], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <GlobeSphere />
        <GridLines />
        {offices.map((o) => <Marker key={o.city} office={o} onHover={handleHover} />)}
        <Arcs />
        <Controls />
      </Canvas>

      {/* Floating label below globe */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          {hoveredOffice ? (
            <>
              <p className="font-syne text-lg font-800 text-ink">{hoveredOffice.city}<span className="text-signal">.</span></p>
              <p className="font-lato text-[10px] tracking-[0.2em] uppercase text-text-muted mt-1">{hoveredOffice.type} · {hoveredOffice.team}</p>
            </>
          ) : (
            <p className="font-lato text-[10px] tracking-[0.25em] uppercase text-text-muted">Drag to explore</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
