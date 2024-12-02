'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { PicanteModel } from './PicanteModel';

export function PicanteModelCanvas() {
    return (
        <div className="w-[300px] h-[300px] mx-auto">
            <Canvas
                camera={{
                    position: [1, 15, 0],
                    fov: 45,
                    near: 0.1,
                    far: 1000
                }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />
                <PicanteModel />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}