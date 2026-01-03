import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';


export function SphereLight() {
    const sphereRef = useRef<THREE.MeshBasicMaterial | null >( null);

    useFrame(({clock}) => {
        if (!sphereRef.current) return;
        const t= clock.getElapsedTime();
        sphereRef.current.opacity = 1 + Math.sin(t * 2) * 0.08;
    });

    return (
        <mesh position={[0, -32, -5]}  >
            <circleGeometry args={[25,32,0, Math.PI]}  />
            <meshStandardMaterial color="#1d293d" emissive="white" emissiveIntensity={7} transparent opacity={0.1} toneMapped={false} />
            
           
        </mesh>
    );
}