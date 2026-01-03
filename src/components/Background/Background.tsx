import {Canvas} from '@react-three/fiber';
import { SphereLight } from './Lightsource';
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Waves } from './Wave';

export default function Background() {
    return (
        <Canvas 
            className="bg-slate-950"
            camera={{position:[0,0,10], fov:75}}
            
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={0.5} />

            <SphereLight />


            <Waves />

            <EffectComposer>
                <Bloom
                    intensity={0.9}
                    luminanceThreshold={0.2}  
                    luminanceSmoothing={0.5} 
                />
            </EffectComposer>
        </Canvas>
    )
}