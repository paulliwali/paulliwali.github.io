import { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  z: number;
  color?: string;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

function Node3D({ node, onClick }: { node: Node; onClick: (node: Node) => void }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const color = node.color || '#7b9e89';

  return (
    <group position={[node.x, node.y, node.z]}>
      <mesh
        ref={meshRef}
        onClick={() => onClick(node)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.3 : 1}
      >
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </mesh>
      {hovered && (
        <Text
          position={[0, 4, 0]}
          fontSize={2}
          color="#2d2d2d"
          anchorX="center"
          anchorY="middle"
        >
          {node.label}
        </Text>
      )}
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
      <lineBasicMaterial color="#d4d1c6" opacity={0.3} transparent />
    </line>
  );
}

export default function MindMap3D({ client: _ }: { client?: 'load' }) {
  const [graphData, setGraphData] = useState<GraphData | null>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  useEffect(() => {
    fetch('/mindmap-data.json')
      .then(res => res.json())
      .then(data => setGraphData(data))
      .catch(err => console.error('Failed to load mind map data:', err));
  }, []);

  if (!graphData) {
    return (
      <div style={{ width: '100%', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading mind map...</p>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '600px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #d4d1c6' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {graphData.links.map((link, i) => (
          <Link3D key={i} source={link.source} target={link.target} nodes={graphData.nodes} />
        ))}

        {graphData.nodes.map(node => (
          <Node3D key={node.id} node={node} onClick={setSelectedNode} />
        ))}

        <OrbitControls enableDamping dampingFactor={0.05} />
      </Canvas>

      {selectedNode && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          background: '#f5f5f0',
          padding: '16px',
          borderRadius: '4px',
          border: '1px solid #d4d1c6',
          maxWidth: '300px'
        }}>
          <h3 style={{ margin: '0 0 8px 0', fontFamily: 'Inter, sans-serif', fontSize: '1.1rem' }}>
            {selectedNode.label}
          </h3>
          <button
            onClick={() => setSelectedNode(null)}
            style={{
              marginTop: '8px',
              padding: '4px 12px',
              background: '#7b9e89',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
