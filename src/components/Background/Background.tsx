import {Canvas} from '@react-three/fiber';
import { OrthographicCamera } from '@react-three/drei';
import { Wave } from './Wave';

export default function Background() {
    return (
        <Canvas 
            className="fixed inset-0 -z-10 bg-red-500"
            orthographic
            dpr={[1,2]}
            gl={{alpha: true, antialias: true}}
        >
            <OrthographicCamera
                makeDefault
                position={[0, 0, 1]}
                zoom={1}
            />

            <Wave />

            
        </Canvas>
    )
}