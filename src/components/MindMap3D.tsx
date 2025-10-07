import { useRef, useState, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  z: number;
  color?: string;
  size?: number;
  category?: string;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

function Node3D({ node, onHover }: { node: Node; onHover: (label: string | null) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const color = node.color || '#7b9e89';
  const size = node.size || 2;

  // Function to generate URL from node ID
  const getNodeUrl = (id: string): string => {
    // Check if it's a daily note
    if (id.startsWith('daily-notes/')) {
      return `/garden/${id}`;
    }
    // Check if it's in slip-box
    if (id.startsWith('slip-box/')) {
      return `/${id}`;
    }
    // Fallback
    return `/slip-box/${id}`;
  };

  const handleClick = () => {
    const url = getNodeUrl(node.id);
    window.location.href = url;
  };

  return (
    <group position={[node.x, node.y, node.z]}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          onHover(node.label);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          setHovered(false);
          onHover(null);
          document.body.style.cursor = 'default';
        }}
        onClick={handleClick}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[size, 8, 8]} />
        <meshBasicMaterial
          color={color}
          opacity={hovered ? 1 : 0.9}
          transparent
        />
      </mesh>
    </group>
  );
}

function Link3D({ source, target, nodes }: { source: string; target: string; nodes: Node[] }) {
  const sourceNode = nodes.find(n => n.id === source);
  const targetNode = nodes.find(n => n.id === target);

  if (!sourceNode || !targetNode) return null;

  const start = new THREE.Vector3(sourceNode.x, sourceNode.y, sourceNode.z);
  const end = new THREE.Vector3(targetNode.x, targetNode.y, targetNode.z);

  const points = [start, end];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={geometry}>
      <lineBasicMaterial color="#7b9e89" transparent opacity={0.25} />
    </line>
  );
}

export default function MindMap3D({ client: _ }: { client?: 'load' }) {
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  useEffect(() => {
    fetch('/mindmap-data.json')
      .then(res => res.json())
      .then(data => {
        // Category color mapping
        const categoryColors: Record<string, string> = {
          'reference-notes': '#7b9e89',     // sage
          'literature-notes': '#b8a9c9',    // lavender
          'permanent-notes': '#d4a574',     // terracotta
          'writing-bin': '#c9ada7',         // dusty rose
          'daily-notes': '#9eb3c2',         // steel blue
          'default': '#a8b5a0',             // neutral green
        };

        // Function to infer category from node ID based on path structure
        const inferCategory = (id: string): string => {
          // Check for path-based categories first (most reliable)
          if (id.includes('daily-notes/')) {
            return 'daily-notes';
          }
          if (id.includes('slip-box/reference-notes/')) {
            return 'reference-notes';
          }
          if (id.includes('slip-box/literature-notes/')) {
            return 'literature-notes';
          }
          if (id.includes('slip-box/permanent-notes/')) {
            return 'permanent-notes';
          }
          if (id.includes('slip-box/writing-bin/')) {
            return 'writing-bin';
          }

          // Fallback: Check for date patterns at start (loose daily notes)
          if (/^\d{4}-\d{2}-\d{2}/.test(id)) {
            return 'daily-notes';
          }

          return 'default';
        };

        // Transform data to add 3D coordinates if not present
        const transformedNodes = data.nodes.map((node: any, index: number) => {
          // Infer category if it's default or missing
          const nodeCategory = (node.category === 'default' || !node.category)
            ? inferCategory(node.id)
            : node.category;

          if (node.x !== undefined && node.y !== undefined && node.z !== undefined) {
            return {
              ...node,
              size: Math.max(1.5, Math.min(4, 1.5 + (node.connections || 0) * 0.3)),
              color: categoryColors[nodeCategory] || categoryColors['default'],
              category: nodeCategory,
            };
          }

          // Generate 3D coordinates with some randomness to avoid perfect sphere
          const phi = Math.acos(-1 + (2 * index) / data.nodes.length);
          const theta = Math.sqrt(data.nodes.length * Math.PI) * phi;
          const radiusBase = 50;
          const radiusVariation = (Math.random() - 0.5) * 15; // Add some variation
          const radius = radiusBase + radiusVariation;

          // Calculate node size based on connections (larger = more connected)
          const nodeSize = Math.max(1.5, Math.min(4, 1.5 + (node.connections || 0) * 0.3));

          return {
            id: node.id,
            label: node.label,
            x: radius * Math.cos(theta) * Math.sin(phi),
            y: radius * Math.sin(theta) * Math.sin(phi),
            z: radius * Math.cos(phi),
            size: nodeSize,
            color: categoryColors[nodeCategory] || categoryColors['default'],
            category: nodeCategory,
          };
        });

        setGraphData({
          nodes: transformedNodes,
          links: data.links || [],
        });
      })
      .catch(err => console.error('Failed to load mind map data:', err));
  }, []);

  if (!graphData) {
    return (
      <div style={{ width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading mind map...</p>
      </div>
    );
  }

  const categoryLabels: Record<string, string> = {
    'permanent-notes': 'Permanent Notes',
    'literature-notes': 'Literature Notes',
    'reference-notes': 'Reference Notes',
    'writing-bin': 'Writing Bin',
    'daily-notes': 'Daily Notes',
  };

  const categoryColors: Record<string, string> = {
    'permanent-notes': '#d4a574',
    'literature-notes': '#b8a9c9',
    'reference-notes': '#7b9e89',
    'writing-bin': '#c9ada7',
    'daily-notes': '#9eb3c2',
    'default': '#a8b5a0',
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Legend at top */}
      <div style={{
        marginBottom: '16px',
        padding: '12px',
        background: '#f5f5f0',
        borderRadius: '4px',
        border: '1px solid #d4d1c6'
      }}>
        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.9rem', fontWeight: 600, marginBottom: '8px' }}>
          Note Types
        </div>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: categoryColors[key]
              }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.85rem', color: '#666' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
        <div style={{
          marginTop: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.75rem',
          color: '#999',
          fontStyle: 'italic'
        }}>
          Node size indicates number of connections • Hover over nodes to see labels
        </div>
      </div>

      {/* Graph */}
      <div style={{ width: '100%', height: '600px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #d4d1c6', position: 'relative' }}>
        {/* Fixed label box */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          padding: '12px 16px',
          background: '#f5f5f0',
          borderRadius: '4px',
          border: '1px solid #d4d1c6',
          minWidth: '200px',
          maxWidth: '300px',
          zIndex: 10,
          pointerEvents: 'none',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <div style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.85rem',
            fontWeight: 600,
            color: '#2d2d2d',
            wordWrap: 'break-word',
          }}>
            {hoveredLabel || 'Hover over a node to see its label'}
          </div>
        </div>

        <Canvas camera={{ position: [0, 0, 100], fov: 75 }} gl={{ antialias: false }}>
          <ambientLight intensity={1} />

          {graphData.links.map((link, i) => (
            <Link3D key={i} source={link.source} target={link.target} nodes={graphData.nodes} />
          ))}

          {graphData.nodes.map(node => (
            <Node3D key={node.id} node={node} onHover={setHoveredLabel} />
          ))}

          <OrbitControls
            enableDamping={false}
            rotateSpeed={0.5}
            zoomSpeed={0.8}
          />
        </Canvas>
      </div>
    </div>
  );
}
