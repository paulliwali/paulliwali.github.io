import { forceSimulation, forceLink, forceManyBody, forceCenter } from 'd3-force-3d';

export function computeForceLayout(nodes, edges, options = {}) {
  const {
    strength = -100,
    distance = 50,
    iterations = 300
  } = options;

  // Create a copy of nodes with position data
  const graphNodes = nodes.map(node => ({
    ...node,
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    z: Math.random() * 100 - 50,
  }));

  // Create links for the force simulation
  const graphLinks = edges.map(edge => ({
    source: edge.source,
    target: edge.target,
  }));

  // Create force simulation
  const simulation = forceSimulation(graphNodes)
    .force('link', forceLink(graphLinks)
      .id(d => d.id)
      .distance(distance))
    .force('charge', forceManyBody().strength(strength))
    .force('center', forceCenter(0, 0, 0));

  // Run simulation synchronously
  for (let i = 0; i < iterations; i++) {
    simulation.tick();
  }

  return graphNodes;
}
