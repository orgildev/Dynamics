import React from 'react';
import { useGLTF } from '@react-three/drei';

export function DroneModel() {
  const { scene } = useGLTF('/drone.glb');

  // Enable shadows
  scene.traverse((object) => {
    if (object.isMesh) {
      object.castShadow = true;
      object.receiveShadow = true;
    }
  });

  return (
    <primitive 
      object={scene} 
      position={[0, 0, 0]}
      scale={[1200, 1200, 1200]}
      rotation={[0, Math.PI * 0.45, 0]}
    />
  );
}

// Preload the model
useGLTF.preload('/drone.glb');