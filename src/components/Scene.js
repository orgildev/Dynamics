import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
  Grid,
  Center
} from '@react-three/drei';
import { HelicopterModel } from './HelicopterModel';
import { DroneModel } from './DroneModel';
import styled from 'styled-components';

const SwitchButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="red" wireframe />
      <pointLight position={[10, 10, 10]} />
    </mesh>
  );
}

export function Scene({ showDrone, setShowDrone }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        shadows
        camera={{
          position: showDrone ? [250, 100, -150] : [200, 80, -100],
          fov: 45
        }}
        onCreated={({ gl }) => {
          console.log('Canvas initialized');
          gl.physicallyCorrectLights = true;
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.8} />
        <directionalLight
          position={[100, 100, -100]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <hemisphereLight intensity={0.5} groundColor="#000000" />
        
        {/* Environment and Model */}
        <Suspense fallback={<LoadingFallback />}>
          <Environment
            preset="sunset"
            background
            blur={0.7}
          />
          
          <Center position={[0, showDrone ? 30 : 0, 0]}>
            {showDrone ? <DroneModel /> : <HelicopterModel />}
          </Center>
        </Suspense>
        
        {/* Controls */}
        <OrbitControls
          makeDefault
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={0}  // Allow looking straight down
          maxPolarAngle={Math.PI}  // Allow looking straight up
          minDistance={50}
          maxDistance={300}
          target={[0, 0, 0]}
        />
      </Canvas>
      <SwitchButton onClick={() => setShowDrone(!showDrone)}>
        {showDrone ? 'Helicopter' : 'Drone'}
      </SwitchButton>
    </div>
  );
}