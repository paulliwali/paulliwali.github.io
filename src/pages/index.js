import React from 'react';
import Layout from '@theme/Layout';
import MindMap3D from '@site/src/components/MindMap3D';
import mindmapData from '@site/src/data/mindmap-data.json';

export default function Home() {
  return (
    <Layout
      title="3D Mind Map"
      description="An interactive 3D visualization of interconnected notes from my Second Brain">
      <MindMap3D data={mindmapData} />
    </Layout>
  );
}
