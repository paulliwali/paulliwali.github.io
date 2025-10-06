import React, { useRef, useState, useMemo } from 'react';
import { Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const CATEGORY_COLORS = {
  daily: '#58A6FF',
  slipbox: '#3FB950',
  blog: '#D29922',
  roam: '#A371F7',
  default: '#F0F0F0',
};

export default function Node({ node, onClick, onHover }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Calculate node size based on connections (min 0.8, max 3.0)
  const size = useMemo(() => {
    const baseSize = 0.8;
    const scaleFactor = 0.08;
    return Math.min(baseSize + node.connections * scaleFactor, 3.0);
  }, [node.connections]);

  const color = CATEGORY_COLORS[node.category] || CATEGORY_COLORS.default;

  // Gentle pulsing animation for hovered nodes
  useFrame(() => {
    if (meshRef.current && hovered) {
      meshRef.current.scale.setScalar(Math.sin(Date.now() * 0.003) * 0.1 + 1.1);
    } else if (meshRef.current) {
      meshRef.current.scale.setScalar(1);
    }
  });

  return (
    <group position={[node.x, node.y, node.z]}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(node);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(node, true);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(node, false);
          document.body.style.cursor = 'default';
        }}
      >
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          roughness={0.5}
          metalness={0.3}
        />
      </mesh>

      {/* Label (only show on hover) */}
      {hovered && (
        <Html distanceFactor={0.5} position={[0, size + 1.5, 0]}>
          <div
            style={{
              background: color,
              color: '#000000',
              padding: '24px 48px',
              borderRadius: '16px',
              fontSize: '96px',
              fontWeight: '800',
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              border: `6px solid white`,
              boxShadow: '0 12px 32px rgba(255, 255, 255, 0.5)',
              letterSpacing: '2px',
            }}
          >
            {node.label}
          </div>
        </Html>
      )}
    </group>
  );
}
