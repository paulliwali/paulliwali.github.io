import React, { Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useHistory } from '@docusaurus/router';
import Node from './Node';
import Edge from './Edge';
import { computeForceLayout } from './ForceLayout';

function Scene({ nodes, edges, onNodeClick, hoveredNode, setHoveredNode }) {
  // Create a map for quick node lookup
  const nodeMap = useMemo(() => {
    const map = {};
    nodes.forEach(node => {
      map[node.id] = node;
    });
    return map;
  }, [nodes]);

  // Track highlighted edges (connected to hovered node)
  const highlightedEdges = useMemo(() => {
    if (!hoveredNode) return new Set();
    const highlighted = new Set();
    edges.forEach((edge, idx) => {
      if (edge.source === hoveredNode.id || edge.target === hoveredNode.id) {
        highlighted.add(idx);
      }
    });
    return highlighted;
  }, [hoveredNode, edges]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      {/* Stars for space effect */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade />

      {/* Edges */}
      {edges.map((edge, idx) => {
        const sourceNode = nodeMap[edge.source];
        const targetNode = nodeMap[edge.target];
        if (!sourceNode || !targetNode) return null;

        return (
          <Edge
            key={idx}
            source={sourceNode}
            target={targetNode}
            highlighted={highlightedEdges.has(idx)}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <Node
          key={node.id}
          node={node}
          onClick={onNodeClick}
          onHover={(node, isHovering) => {
            setHoveredNode(isHovering ? node : null);
          }}
        />
      ))}

      {/* Camera Controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={10}
        maxDistance={200}
        autoRotate
        autoRotateSpeed={0.2}
      />
    </>
  );
}

export default function MindMap3D({ data }) {
  const history = useHistory();
  const [layoutedNodes, setLayoutedNodes] = useState([]);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    if (data && data.nodes && data.edges) {
      // Limit to top 300 most connected nodes for performance
      const sortedNodes = [...data.nodes].sort((a, b) => b.connections - a.connections);
      const topNodes = sortedNodes.slice(0, 300);
      const topNodeIds = new Set(topNodes.map(n => n.id));

      // Filter edges to only include those between top nodes
      const filteredEdges = data.edges.filter(
        edge => topNodeIds.has(edge.source) && topNodeIds.has(edge.target)
      );

      // Compute force-directed layout
      const nodesWithPositions = computeForceLayout(topNodes, filteredEdges, {
        strength: -80,
        distance: 30,
        iterations: 200,
      });

      setLayoutedNodes(nodesWithPositions);
    }
  }, [data]);

  const handleNodeClick = (node) => {
    // Navigate to the corresponding doc page
    history.push(`/docs/${node.id}`);
  };

  if (!layoutedNodes.length) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          background: 'var(--mindmap-bg)',
          color: 'var(--mindmap-node-default)',
        }}
      >
        Loading 3D Mind Map...
      </div>
    );
  }

  return (
    <div className="mindmap-3d-container">
      <Canvas
        camera={{ position: [0, 0, 80], fov: 60 }}
        gl={{ antialias: true, alpha: false }}
        style={{ background: '#0a0a0a' }}
      >
        <Suspense fallback={null}>
          <Scene
            nodes={layoutedNodes}
            edges={data.edges}
            onNodeClick={handleNodeClick}
            hoveredNode={hoveredNode}
            setHoveredNode={setHoveredNode}
          />
        </Suspense>
      </Canvas>

      {/* Legend */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '15px',
          borderRadius: '8px',
          color: 'white',
          fontSize: '12px',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>Categories</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#58A6FF', marginRight: '8px' }} />
          Daily Notes
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#3FB950', marginRight: '8px' }} />
          Slip-box
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#D29922', marginRight: '8px' }} />
          Blog
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#A371F7', marginRight: '8px' }} />
          Roam
        </div>
        <div style={{ marginTop: '10px', fontSize: '11px', opacity: 0.7 }}>
          Showing top 300 connected notes
        </div>
      </div>

      {/* Instructions */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(0, 0, 0, 0.7)',
          padding: '10px 20px',
          borderRadius: '20px',
          color: 'white',
          fontSize: '12px',
        }}
      >
        Drag to rotate • Scroll to zoom • Click node to open note
      </div>
    </div>
  );
}
