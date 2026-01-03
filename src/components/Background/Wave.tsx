import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

export function Wave(){
    const materialRef = useRef<THREE.ShaderMaterial>(null) ;
    const {size} = useThree();

    useFrame(({clock}) => {
            if (materialRef.current) {
                materialRef.current.uniforms.time.value = clock.getElapsedTime();
            }
        });
    
        return (
            <mesh>
                <planeGeometry args={[2,2]} />
                <shaderMaterial
                    ref={materialRef}
                    transparent
                    uniforms={{
                        time: {value: 0},
                        resolution: {value: new THREE.Vector2(size.width, size.height)},
                    }}
                    vertexShader={`
                       varying vec2 vUv;
                          void main() {
                                vUv = uv;
                                gl_Position = vec4(position, 1.0);
                          }
                    `}
                    fragmentShader={`
                        precision highp float;

                        uniform float time;
                        varying vec2 vUv;

                        void main() {
                            float wave = sin((vUv.x + time * 0.5) * 10.0) * 0.1;
                            vec3 color = vec3(0.0, 0.5 + wave, 1.0);
                            gl_FragColor = vec4(color, 0.5);
                        }
                    `}  
                />
            </mesh>
        );
    }


