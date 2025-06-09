import React, { useCallback, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow'; // Changed from 'react-flow'
import { useHistory } from '@docusaurus/router';
import initialMindMapData from '@site/src/data/mindmap-data.json';
import dagre from '@dagrejs/dagre';

import 'reactflow/dist/style.css'; // Changed from 'react-flow/dist/style.css'

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

// Helper function to create a simple initial layout (optional, react-flow might auto-layout)
// This is a very basic distribution, more sophisticated layouting can be added later.
const getLayoutedElements = (nodes, edges, options = { direction: 'LR' }) => { // Changed default direction to LR
  if (!nodes || nodes.length === 0) {
    return { nodes: [], edges: [] };
  }

  // Adjust spacing based on direction for clarity
  let nodeSpacing, rankSpacing;
  if (options.direction === 'TB') {
    nodeSpacing = 100; // Horizontal separation for TB
    rankSpacing = 180; // Vertical separation for TB (increased slightly)
  } else { // LR or RL
    nodeSpacing = 70;  // Vertical separation for LR/RL (was 50, increased slightly)
    rankSpacing = 180; // Horizontal separation for LR/RL (was 150, increased slightly)
  }

  dagreGraph.setGraph({ 
    rankdir: options.direction,
    nodesep: nodeSpacing,
    ranksep: rankSpacing,
    align: undefined, // Explicitly set to default, can try 'UL', 'UR', 'DL', 'DR' later
    ranker: 'network-simplex' // Default, can try 'tight-tree' or 'longest-path' if issues persist
  });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    // console.log(`Dagre raw position for ${node.id} (direction: ${options.direction}):`, { x: nodeWithPosition.x, y: nodeWithPosition.y }); // Cleaned up
    // We are shifting the dagre node position (anchor=center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };
    // console.log('Node after Dagre layout (raw applied):', node.id, node.position); // Cleaned up
    return node;
  });

  // console.log('Layouted Elements:', { nodes: layoutedNodes, edges }); // Cleaned up
  return { nodes: layoutedNodes, edges };
};


export default function Home() {
  const history = useHistory();
  const [layoutedData, setLayoutedData] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    const allNodes = initialMindMapData.nodes;
    const allEdges = initialMindMapData.edges;

    const processedNodes = allNodes.map(node => ({
      ...node,
      id: String(node.id),
      type: node.type || 'default',
      data: { label: node.data?.label || node.id },
    }));

    const processedEdges = allEdges.map(edge => ({
      ...edge,
      id: `e-${String(edge.source)}-${String(edge.target)}-${Math.random().toString(36).substring(7)}`, // Ensure unique edge ID with a random suffix
      source: String(edge.source),
      target: String(edge.target),
      type: edge.type || 'smoothstep',
      animated: true,
    }));
    
    const { nodes: dagreLayoutedNodes, edges: dagreLayoutedEdges } = getLayoutedElements(processedNodes, processedEdges);
    // console.log('Data after Dagre layout:', { nodes: dagreLayoutedNodes, edges: dagreLayoutedEdges }); // Cleaned up
    setLayoutedData({nodes: dagreLayoutedNodes, edges: dagreLayoutedEdges});

  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  
  useEffect(() => {
    if (layoutedData.nodes.length > 0) {
      setNodes(layoutedData.nodes);
      setEdges(layoutedData.edges);
      // console.log('Final nodes and edges passed to ReactFlow component:', { nodes: layoutedData.nodes, edges: layoutedData.edges }); // Cleaned up
      // Check a sample node's position
      // if (layoutedData.nodes[0]) { // Cleaned up
      //  console.log('Sample node final position:', layoutedData.nodes[0].position);
      // }
    }
  }, [layoutedData, setNodes, setEdges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback(
    (event, node) => {
      // Navigate to the corresponding doc page
      history.push(`/docs/${node.id}`);
    },
    [history],
  );

  return (
    <Layout
      title="Mind Map Home"
      description="A dynamic mind map of notes from my Second Brain">
      <main style={{ height: 'calc(100vh - 60px)', width: '100%' }}> {/* Adjust height as needed (60px is typical navbar height) */}
        {nodes.length > 0 ? (
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            fitView
            attributionPosition="top-right"
          >
            <MiniMap nodeStrokeWidth={3} zoomable pannable />
            <Controls />
            <Background color="var(--retro-reactflow-bg)" gap={16} />
          </ReactFlow>
        ) : (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            Loading Mind Map...
          </div>
        )}
      </main>
    </Layout>
  );
}
