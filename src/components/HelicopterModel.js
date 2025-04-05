import React from 'react';
import { useGLTF } from '@react-three/drei';

export function HelicopterModel() {
  const { scene } = useGLTF('/helicopter.glb');

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
      scale={[90, 90, 90]}
      rotation={[0, Math.PI * 0.4, 0]}  // Rotated 135 degrees to face front-right
    />
  );
}

// Preload the model
useGLTF.preload('/helicopter.glb');