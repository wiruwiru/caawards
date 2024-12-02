import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function PicanteModel() {
    const group = useRef();
    const { scene, animations } = useGLTF('/assets/modelos/picante.glb');

    useFrame(() => {
        if (group.current) {
            group.current.rotation.x += 0.005;
        }
    });

    return <primitive object={scene} ref={group} scale={[0.5, 0.5, 0.5]} />;
}