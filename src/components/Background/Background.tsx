import {useRef} from "react";
import {useBackground} from "./hooks/useBackground"

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useBackground(canvasRef);

    return (
        <canvas 
            ref= {canvasRef}
            aria-hiddern="true"
            className = "fixed inset-0 -z-10"
        />
    );
}