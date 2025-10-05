import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function Edge({ source, target, highlighted = false }) {
  const points = useMemo(() => {
    return [
      new THREE.Vector3(source.x, source.y, source.z),
      new THREE.Vector3(target.x, target.y, target.z),
    ];
  }, [source, target]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [points]);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial
        color={highlighted ? '#FFFFFF' : '#444444'}
        opacity={highlighted ? 0.6 : 0.2}
        transparent
        linewidth={highlighted ? 2 : 1}
      />
    </line>
  );
}
