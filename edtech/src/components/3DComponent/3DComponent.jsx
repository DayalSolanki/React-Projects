import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

const ThreeDComponent = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <directionalLight position={[0, 0, 5]} />
      <Box args={[1, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Box>
    </Canvas>
  );
};

export default ThreeDComponent;
